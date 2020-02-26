<template>
  <div>
    <div class="checkout-container">
      <div class="checkout-details">
        <p>
          QTY
          <span class="total-qty">{{totalQty}}</span>
        </p>
        <p>
          Total
          <span class="total-price">{{totalPrice}}</span>
        </p>
      </div>
      <div class="checkout">
        <button class="checkout-btn">Checkout</button>
      </div>
    </div>
  </div>
</template>

<script>
import {EventBus } from './Eventbus.js'
export default {
//   props: {
//     totalQty: {
//       type: Number
//     },
//     totalPrice: {
//       type: Number
//     }
//   },
  data(){
      return {
          totalQty:0,
          totalPrice:0
      }
  },
  created: function() {
    // console.log(this.newName);
    EventBus.$on("inccountPassed", (count, price) => {
      this.totalQty += 1;
      this.totalPrice += 1 * price;
      // console.log(count * price, this.totalPrice);
    });
    EventBus.$on("deccountPassed", (count, price) => {
      console.log("a", count);
      if (count >= 0) {
        this.totalQty -= 1;
        this.totalPrice -= 1 * price;
      }
      // console.log(count * price, this.totalPrice);
    });
  }
};
</script>

<style scoped>
.checkout-container {
  margin-top: 10px;
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  background-color: #9f5ddd;
  padding: 25px 10px;
  position: fixed;
  bottom: 0px;
  left: 0px;
}

.checkout-container .checkout-details {
  font-size: 20px;
  font-weight: bold;
}

.checkout-btn {
  background-color: #223edb;
  padding: 8px 28px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
}

.checkout-modal {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  display: none;
}

.checkout-modal .modal-content {
  width: 600px;
  height: 80px;
  background-color: #fff;
  position: absolute;
  top: 5%;
  left: 30%;
  padding: 20px;
  display: none;
}

.checkout-modal .close {
  cursor: pointer;
  display: block;
  z-index: 2;
  position: absolute;
  top: 7%;
  right: 26%;
}
/*# sourceMappingURL=checkout.css.map */
</style>