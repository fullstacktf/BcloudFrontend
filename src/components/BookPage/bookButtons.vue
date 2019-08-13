<template>
  <button
    :class="[ css, stepsComplete? 'confirmation__button--complete' : '' ]"
    v-on:click="incrementStep()"
    @click="buy"
  >{{ currentMessage }}</button>
</template>

<script>
import { setTimeout } from 'timers'
export default {
  name: 'bookButtons',
  props: {
    messages: {
      type: Array,
      default: "Click Here"
    },
    css: {
      type: String,
      default: 'confirmation__button',
    },
  },
  data() {
    return {
      defaultSteps: ['Click Here to Buy', '✔'],
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
    buy() {
      setTimeout(() => {
        this.$router.push('/buy/');
      }, 750)
    },
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
  width: 400px;
  margin-top: 20px;
  height: 40px;
  outline: 0;
  padding: 0.5rem 1rem;
  background-image: linear-gradient(160deg, #ffeb05 0%, #ff7e05 100%);
  font-weight: 400;
  display: block;
  font-size: 1rem;
  color: black;
  cursor: pointer;
  text-transform: capitalize;
}

.confirmation__button:not(.confirmation__button--complete):hover {
  font-size: 1rem;
  padding: 0.5rem 1rem;
  outline: 0;
}

.confirmation__button.confirmation__button--complete {
  color: black;
  cursor: not-allowed;
  background-image: linear-gradient(160deg, #ffeb05 0%, #ff7e05 100%);
  width: 400px;
  margin-top: 20px;
  outline: 0;
  height: 40px;
  font-weight: 400;
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
