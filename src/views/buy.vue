<template>
  <div>
    <cabecera></cabecera>
    <div class="container">
      <buyLetrasTop></buyLetrasTop>
      <span class="description">Complete all the fields with your credit card information</span>
      <div class="card">
        <div class="card__front card__part">
          <img
            class="card__front-square card__square"
            src="https://image.ibb.co/cZeFjx/little_square.png"
          />
          <img
            class="card__front-logo card__logo"
            src="https://www.fireeye.com/partners/strategic-technology-partners/visa-fireeye-cyber-watch-program/_jcr_content/content-par/grid_20_80_full/grid-20-left/image.img.png/1505254557388.png"
          />
          <p class="card_numer">{{number}}</p>
          <div class="card__space-75">
            <span class="card__label">Card holder</span>
            <p class="card__info">{{name}}</p>
          </div>
          <div class="card__space-25">
            <span class="card__label">Expires</span>
            <p class="card__info">{{expireDate}}</p>
          </div>
        </div>

        <div class="card__back card__part">
          <div class="card__black-line"></div>
          <div class="card__back-content">
            <div class="card__secret">
              <p class="card__secret--last" v-bind="cvc">{{cvc}}</p>
            </div>
            <img
              class="card__back-square card__square"
              src="https://image.ibb.co/cZeFjx/little_square.png"
            />
            <img
              class="card__back-logo card__logo"
              src="https://www.fireeye.com/partners/strategic-technology-partners/visa-fireeye-cyber-watch-program/_jcr_content/content-par/grid_20_80_full/grid-20-left/image.img.png/1505254557388.png"
            />
          </div>
        </div>
      </div>
      <div class="form">
        <form>
          <input v-model="number" placeholder="  Card number" type="tel" maxlength="16" size="16"/>
          <input v-model="name" placeholder="  Full name" type="text" maxlength="35" size="35"/>
          <input v-model="expireDate" placeholder="  MM/YY" type="text" maxlength="5" size="5"/>
          <input
            v-model="cvc"
            placeholder="  CVC"
            type="text"
            @click="toBackCard"
            @blur="toFrontCard"
            maxlength="3" size="3"
          />
        </form>
        <buyButtonsBottom @click.native="incrementStep"></buyButtonsBottom>
        <p>{{message}}</p>
      </div>
      <span></span>
    </div>
    <foot></foot>
  </div>
</template>

<script>
import cabecera from '../components/Header/header'
import foot from '../components/Footer/footer'
import buyLetrasTop from '../components/BuyPage/buyComponents/buyLetrasTop'
import buyButtonsBottom from '../components/BuyPage/buyComponents/buyButtonsBottom'
import { get } from 'http';
export default {
  components: { buyLetrasTop, buyButtonsBottom, cabecera, foot },
  data() {
    return {
      number: '',
      name: '',
      expireDate: '',
      cvc: '',
      message: '',
      book: '',
      user: '',
      step: 0,
    }
  },

  mounted() {
    this.book = localStorage.getItem('bookToBuy');
    this.user = localStorage.getItem('email');
    localStorage.removeItem('bookToBuy');
    console.log(this.book);
  },

  methods: {
    buy() {
      if (
        this.number != '' &&
        this.name != '' &&
        this.expireDate != '' &&
        this.cvc != ''
      ) {
        const data = { email: this.user, title: this.book }
        this.$http
          .post('/api/users/buybook', data)
          .then(response => {
            this.message = '¡Comprado con éxito!';
          })
      } else {
        this.message = '¡Asegúrate de que todos los datos están completos!'
      }
    },
    toBackCard() {
      const card = this.$el.querySelector('.card')
      card.classList.add('emulateHover')
    },
    toFrontCard() {
      const card = this.$el.querySelector('.card')
      card.classList.remove('emulateHover')
    },
    incrementStep() {
      if (this.step < 1) this.step++
      else this.buy()
    },
  },
}
</script>

<style scoped>
.description {
  margin-bottom: 50px;
}

.container {
  height: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

img {
  max-width: 50px;
  max-height: 50px;
}

span {
  font-size: 1rem;
  font-family: 'Raleway', sans-serif;
  color: #fb4;
}

.form {
  font-family: 'Raleway', sans-serif;
  height: 30px;
  outline: 0;
  padding: 0.5rem 1rem;
  background-color: transparent;
  text-align: center;
  margin-top: 5.5rem;
  margin-bottom: 1.5rem;
  width: 400px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

input:focus {
  outline: 1px solid white;
}

input {
  border: 1px solid #fb1;
  background-color: transparent;
  margin-top: 20px;
  font-family: 'Raleway', sans-serif;
  width: 518px;
  text-align: center;
  height: 48px;
}

input::placeholder {
  font-family: 'Raleway', sans-serif;
  color: #fb1;
}

* {
  color: #fb1;
  box-sizing: border-box;
  font-family: 'Raleway', sans-serif;
}

.card {
  width: 320px;
  height: 190px;
  perspective: 600px;
  margin-bottom: 100px;
}

.card__part {
  top: 0;
  position: absolute;
  z-index: 1000;
  left: 0;
  display: inline-block;
  width: 320px;
  height: 190px;
  background-image: url('https://image.ibb.co/bVnMrc/g3095.png'),
    linear-gradient(
      135deg,
      rgba(255, 234, 5, 1) 0%,
      rgba(235, 192, 0, 0.81) 31%,
      rgba(255, 187, 15, 0.72) 45%,
      rgba(235, 145, 0, 0.66) 54%,
      rgba(255, 34, 5, 0.56) 71%,
      rgba(255, 126, 5, 0.41) 94%,
      rgba(255, 126, 5, 0.38) 99%
    );
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 8px;
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.3s;
  transform-style: preserve-3d;
  backface-visibility: hidden;
}

.card__front {
  padding: 18px;
  transform: rotateY(0);
}

.card__back {
  padding: 18px 0;
  transform: rotateY(-180deg);
}

.card__black-line {
  margin-top: 5px;
  height: 38px;
  background-color: #303030;
}

.card__logo {
  height: 16px;
}

.card__front-logo {
  position: absolute;
  top: 18px;
  right: 18px;
}

.card__square {
  border-radius: 5px;
  height: 30px;
}

.card_numer {
  display: block;
  width: 100%;
  word-spacing: 4px;
  font-size: 20px;
  letter-spacing: 2px;
  color: #fff;
  text-align: center;
  margin-bottom: 20px;
  margin-top: 20px;
}

.card__space-75 {
  width: 75%;
  float: left;
}

.card__space-25 {
  width: 25%;
  float: left;
}

.card__label {
  font-size: 10px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.8);
  letter-spacing: 1px;
}

.card__info {
  margin-bottom: 0;
  margin-top: 5px;
  font-size: 16px;
  line-height: 18px;
  color: #fff;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.card__back-content {
  padding: 15px 15px 0;
}

.card__secret--last {
  color: #303030;
  text-align: right;
  margin: 0;
  font-size: 14px;
}

.card__secret {
  padding: 5px 12px;
  background-color: #fff;
  position: relative;
}

.card__secret::before {
  content: '';
  position: absolute;
  top: -3px;
  left: -3px;
  height: calc(100% + 6px);
  width: calc(100% - 42px);
  border-radius: 4px;
  background: repeating-linear-gradient(
    45deg,
    #ededed,
    #ededed 5px,
    #f9f9f9 5px,
    #f9f9f9 10px
  );
}

.card__back-logo {
  position: absolute;
  bottom: 15px;
  right: 15px;
}

.card__back-square {
  position: absolute;
  bottom: 15px;
  left: 15px;
}

.card:hover .card__front,
.emulateHover .card__front {
  transform: rotateY(180deg);
}

.card:hover .card__back,
.emulateHover .card__back {
  transform: rotateY(0deg);
}
</style>
