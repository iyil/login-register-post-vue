<template>
  <div>
    parent组件
    <Child>
      <template v-slot:header>
        <p>header部分</p>
      </template>
      <p>主要内容</p>
      <template v-slot:footer>
        <p>footer部分</p>
      </template>
    </Child>
  </div>
</template>

<script>
import Child from './Child'
export default {
  name: 'Parent',
  data () {
    return {
    }
  },
  components: {
    Child
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
</style>
