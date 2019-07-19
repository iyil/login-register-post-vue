<template>
  <div id="child">
    child组件
    <p>接收到来自父组件的props: {{myCount}}</p>
    <p v-text="newCount"></p>
    <button @click="updateCount()">更新props转化为的newCount</button>
    <button @click="sendMessage()">子给父发送消息并传递数据</button>
  </div>
</template>

<script>
export default {
  name: 'Child',
  data () {
    return {
      newCount: this.myCount
    }
  },
  props: ['myCount'],
  methods: {
    updateCount () {
      this.newCount++
    },
    sendMessage () {
      this.$emit('resiveMessage', 'liyi')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
#child{
  background: #ccc
}
</style>
