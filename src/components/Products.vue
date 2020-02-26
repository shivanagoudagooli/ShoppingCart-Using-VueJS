<template>
<div>
    <div class="product" v-for="(product,index) in products" :key="index">
        <img src="../assets/skc.jpg" class="product-image" />
        <p class="offer-text">{{product.OfferText}}</p>
        <div class="product-text-container">
      <h3 class="brand-name">{{product.BrandName}}</h3>
      <p class="product-name">{{product.ProductName}}</p>
      <p class="quantity">{{product.Quantity}} l</p>
      <p class="mrp">MRP {{product.MRP}}</p>
      <p class="price">
        <b>Rs {{product.Price}}</b>
      </p>
      <div>
        <button class="cart-btn" @click="incCartClicked(product.Price)">Add to cart</button>
        <button class="add-btn" @click="incCartClicked(product.Price)">+</button>
        <span>{{count}}</span>
        <button class="sub-btn" @click="decCartClicked(product.Price)">
          <b>-</b>
        </button>
      </div>
    </div>
    </div>
   
    
</div>
</template>
<script>
import ProductsDetails from '../assets/ProductDetails.json'
// import Checkout from './Checkout.vue'
import { EventBus } from './Eventbus.js'
export default {
     data() {
    return {
      products: [],
      cartCount: 0,
      cartTotal: 0,
      priceTotal: 0,
      count:0
    };
  },
    // components:{
    //     Checkout
    // },
    created(){
        this.products = ProductsDetails;
    },
    methods: {
    incCartClicked(index, price) {
      this.count += 1;
      // console.log(price * this.count);
      EventBus.$emit("inccountPassed", this.count, price);
    },
    decCartClicked(index, price) {
      if (this.count > 0) {
        // console.log(this.count);
        this.count -= 1;
        EventBus.$emit("deccountPassed", this.count, price);
      }
    }
  }
}
</script>
<style  scoped>
.product {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.product .product-image {
  width: 220px;
  height: 230px;
  margin-right: 50px;
}

.product .offer-text {
  text-align: center;
  font-weight: bold;
  padding: 10px;
}

.product .product-text-container {
  padding: 30px;
  line-height: 32px;
}

.product .cart-btn {
  background-color: #16ac16;
  padding: 12px 32px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
  margin-right: 35px;
}

.product .add-btn,
.product .sub-btn {
  width: 35px;
  height: 35px;
  background-color: #16ac16;
  padding: 8px 12px;
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
  border: none;
  font-size: 18px;
  font-weight: 500;
}

.product .cart-quantity {
  margin: 0 20px;
}
</style>