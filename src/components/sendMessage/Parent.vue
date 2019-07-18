<template>
  <div id="parent">
    parent组件
    <p v-text="resiveData"></p>
    <Child :my-count="count" @resiveMessage="showName"></Child> 
  </div>
</template>

<script>
import Child from './child'
export default {
  name: 'Parent',
  data () {
    return {
      count : 2,
      resiveData: ''
    }
  },
  components:{
    Child
  },
  methods:{
    showName(data){
      this.resiveData = data
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
#parent{
  background: #888;
}
</style>
