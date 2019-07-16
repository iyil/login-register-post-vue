<template>
  <div id="registerBox">
   <p>账号:<input type="text" v-model="username"></p>
   <p>密码:<input type="password" v-model="password"></p>
   <p>确认密码:<input type="password" v-model="confirmPassword"></p>
   <button @click="register()">注册</button>
   <router-link to='Login'>已注册,登录</router-link>
  </div>
</template>

<script>
export default {
  name: 'registerBox',
  data () {
    return {
      username: '',
      password: '',
      confirmPassword: ''
    }
  },
  methods: {
    register () {
      console.log('点击注册');
      this.$axios.post('http://localhost:8086/register',{username:this.username,password:this.password})
      .then((response)=>{
          if(response.success){
            alert('注册成功');
            this.$router.push({ name: 'Login'})
          }else{
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
#registerBox{
  width: 400px;
  height: 400px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  background-color: #ccc;
}
</style>
