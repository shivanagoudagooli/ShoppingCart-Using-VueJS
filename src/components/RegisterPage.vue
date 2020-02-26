<template>
    <div>
        <h1>Registration Form</h1>
        <div class="container">
            <div>Name <div><input style="top:4%"></div></div>
            <div>Age<div><input style="top:18%"></div></div>
            <div>City<div><input style="top:33%"></div></div>
            <div>Mobil Number<div><input style="top:47%"></div></div>
            <div>Gender<div><input style="top:61%"></div></div>
            <div>UserName<div><input style="top:75%"></div></div>
            <div>PassWord<div><input style="top:90%"></div></div>
        </div>
        <button class="btn">Save</button>
    </div>
</template>
<style scoped>
.container{
    display: flex;
    flex-direction:column;
    position: absolute;
    margin-left: 25%;
    flex-wrap:wrap;
    justify-content: center;  
}
.container > div {
  background-color: #f1f1f1;
  margin:10px;
  padding: 10px;
  width:500px;
}

input{
    margin-left: 31%;
    position: absolute;
    width:320px;
    height:20px;
}
.btn{
    border-radius: 12px;
     border: 2px solid white;
    width:150px;
    height:50px;
    position: absolute;
    bottom: 20%;
    left:50%;
}
</style>