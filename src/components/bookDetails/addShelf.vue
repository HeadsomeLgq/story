<template>
    <div class="addshelf">
      <div class="bg">
        <span class="text">{{add}}</span>
      </div>
    </div>
</template>

<script>
    export default {
      name:'addShelf',
      data() {
          return{
              add:"添加书架成功"
          }
      }
    }
</script>
<style scoped>
  .addshelf{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(7, 17, 27, 0.8);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    z-index: 100
  }
  .bg {
    width: 100px;
    height: 50px;
    margin: 200px auto;
    text-align: center;
    border-radius: 4px;
    background: darkseagreen;
  }
  .addshelf .bg .text{
    color: #fff;
    font-size: 15px;
    line-height: 50px;
  }

</style>
