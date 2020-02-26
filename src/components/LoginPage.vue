<template>
    <div>
        <div class="lgin">
            <h2 >Login</h2>{{input1}}
            <input type="text" v-model="input1" class="input" placeholder="Enter UserName" /><br>
            <br>
            <input type="text" v-model="input2" class="input" placeholder="Enter PassWord" /><br>
            <button class="loginbtn" @click="goToCartPage()" >Submit</button>
        </div>
        <div>
            <input type="text" class="input input1" placeholder="OR" /><br>
        </div><br>
        <button class="routerbtn">
        <router-link to='RegisterPage' class="routerLink" >Register</router-link>
        </button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            input1:'',
            input2:''
        }
    },
    mounted(){
        this.goToCartPage;
    },
    methods:{
        goToCartPage(){
            if(this.input1 == "abc" && this.input2 == 123){
                this.$router.push('/Products');
            }else{
                alert("UserName or PassWord in incorrect");
            }
        }
    }
    
}
</script>
<style  scoped>
.input{
  border-radius: 25px;
  border: 2px solid #73AD21;
  padding: 20px;
  width: 200px;
  height: 5px;
}
.input1{
background-color: white;
width: 20px;
margin-top:25px;

}
.login{
    text-align: left;
    margin-left: 20%;
    color:black;
    height: 5px;
}
.routerbtn{
    border-radius: 25px;
    border: 2px solid #73AD21;
    padding: 15px;
    width: 210px;
    background-color: white;
}
.loginbtn{
    margin-left: 157px;
    margin-top:35px;
     border-radius: 25px;
     border: 2px solid #73AD21;
     width: 100px;
     height: 50px;
}
.routerLink{
  text-decoration: none;

}
</style>