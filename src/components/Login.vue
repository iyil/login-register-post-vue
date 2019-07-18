<template>
  <div id="loginBox">
   <p>账号:<input type="text" v-model="username"></p>
   <p>密码:<input type="password" v-model="password"></p>
   <button @click="login()">登录</button>
   <router-link to='Register'>注册</router-link>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      this.$axios.post('http://localhost:8086/login',{username:this.username,password:this.password})
      .then((response)=>{
        if(response.success){
          sessionStorage.setItem('loginInfo',this.username + '&&' + this.password);
          this.$router.push({ name: 'Home'})
        }
        else if(!response.success&&response.status == 1){
          alert(response.msg)
        }
        else if(!response.success&&response.status == 2){
          alert(response.msg)
        }
      }).catch((response)=>{
          console.log(response);
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
#loginBox{
  width: 340px;
  height: 340px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  background-color: #ccc;
}
#loginBox input{
  padding-left: 6px;
  border: 1px solid #888;
  height: 24px;
}
</style>
