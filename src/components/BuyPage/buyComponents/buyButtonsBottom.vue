<template>
  <button
    :class="[ css, stepsComplete? 'confirmation__button--complete' : '' ]"
    :disabled="stepsComplete"
    v-on:click="incrementStep()"
  >{{ currentMessage }}</button>
</template>

<script>
export default {
  name: 'buyButtonsBottom',
  props: {
    messages: Array,
    css: {
      type: String,
      default: 'confirmation__button',
    },
  },
  data() {
    return {
      defaultSteps: ['Click to confirm', 'Are you sure?', '✔'],
      currentStep: 0,
    }
  },
  computed: {
    messageList() {
      return this.messages ? this.messages : this.defaultSteps
    },
    currentMessage() {
      return this.messageList[this.currentStep]
    },
    lastMessageIndex() {
      return this.messageList.length - 1
    },
    stepsComplete() {
      return this.currentStep === this.lastMessageIndex
    },
  },
  methods: {
    incrementStep() {
      this.currentStep++
      if (this.stepsComplete) {
        this.$emit('send', 'confirmation-success')
      } else {
        this.$emit('confirmation-incremented')
      }
    },
    reset() {
      this.currentStep = 0
      this.$emit('confirmation-reset')
    },
  },
}
</script>

<style scoped>
.confirmation__button {
  background-image: linear-gradient(160deg, #ffeb05 0%, #ff7e05 100%);
  margin-bottom: 1rem;
  width: 518px;
  height: 40px;
  margin-top: 40px;
  font-weight: 400;
  display: block;
  font-size: 1rem;
  color: #000;
  padding: 0.5rem 1rem;
  outline: 0;
  cursor: pointer;
  border: none;
  text-transform: capitalize;
}

.confirmation__button:not(.confirmation__button--complete):hover {
  font-size: 1rem;
  padding: 0.5rem 1rem;
}

.confirmation__button.confirmation__button--complete {
  cursor: not-allowed;
  background-image: linear-gradient(160deg, #ffeb05 0%, #ff7e05 100%);
  width: 518px;
  font-size: 0.8rem;
  padding: 0.5rem 1rem;
  animation: icon-pop 0.3s linear 1;
}

@keyframes icon-pop {
  0% {
    font-size: 0.1em;
  }
  50% {
    font-size: 1.8em;
  }
}
</style>
