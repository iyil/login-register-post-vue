<template>
  <div id="home">
    <ul class="nav">
      <li>
        <router-link :to="{name: 'sendMessage'}">父子传参demo</router-link>
      </li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <div class="content">
      <router-view></router-view>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
#home{
  width: 800px;
  height: 600px;
  margin: 100px auto 0;
  .nav{
    float: left;
    list-style: none;
    li{
      cursor: pointer;
      a{
        text-decoration: none;
        color: #000;
        background: #ccc;
      }
    }
  }
  .content{
    float: right;
    width: 500px;
    height: 500px;
    border: 1px solid #ccc;
  }
}

</style>
