<template>
   <div class="pank">
     <div class="mybook">
     <mu-appbar class="bookbar" style="width: 100%;"  z-depth="0">
       <mu-icon @click="goBack" class="l_logo" slot="left" value="keyboard_backspace" color="lightseagreen"></mu-icon>
       <h2 class="mylist">排行</h2>
       <mu-icon class="r_logo" slot="right" value="home" color="lightseagreen"></mu-icon>
     </mu-appbar>
       <mu-list textline="two-line">
         <mu-list-item avatar button :ripple="false">
           <mu-list-item-action>
             <mu-avatar>
               <img src="../../assets/images/avatar1.jpg">
             </mu-avatar>
           </mu-list-item-action>
           <mu-list-item-content @click="showDview">
             <mu-list-item-title>精品畅销榜</mu-list-item-title>
             <mu-list-item-sub-title>全站最畅销，内容丰富超有料</mu-list-item-sub-title>
           </mu-list-item-content>
         </mu-list-item>
         <Split></Split>
         <mu-list-item avatar button :ripple="false">
           <mu-list-item-action>
             <mu-avatar>
               <img src="../../assets/images/avatar2.jpg">
             </mu-avatar>
           </mu-list-item-action>
           <mu-list-item-content>
             <mu-list-item-title>狂热点击榜</mu-list-item-title>
             <mu-list-item-sub-title>最最受小伙伴钟爱的就在这里了</mu-list-item-sub-title>
           </mu-list-item-content>
         </mu-list-item>
         <Split></Split>
         <mu-list-item avatar button :ripple="false">
           <mu-list-item-action>
             <mu-avatar>
               <img src="../../assets/images/avatar3.jpg">
             </mu-avatar>
           </mu-list-item-action>
           <mu-list-item-content>
             <mu-list-item-title>新书潜力榜</mu-list-item-title>
             <mu-list-item-sub-title>你要的这里都有哦</mu-list-item-sub-title>
           </mu-list-item-content>
         </mu-list-item>
         <Split></Split>
         <mu-list-item avatar button :ripple="false">
           <mu-list-item-action>
             <mu-avatar>
               <img src="../../assets/images/avatar4.jpg">
             </mu-avatar>
           </mu-list-item-action>
           <mu-list-item-content>
             <mu-list-item-title>大神力作榜</mu-list-item-title>
             <mu-list-item-sub-title>最爽热文这边看</mu-list-item-sub-title>
           </mu-list-item-content>
         </mu-list-item>
         <Split></Split>
         <mu-list-item avatar button :ripple="false">
           <mu-list-item-action>
             <mu-avatar>
               <img src="../../assets/images/avatar5.jpg">
             </mu-avatar>
           </mu-list-item-action>
           <mu-list-item-content>
             <mu-list-item-title>经典完结榜</mu-list-item-title>
             <mu-list-item-sub-title>红文热文，本本超神</mu-list-item-sub-title>
           </mu-list-item-content>
         </mu-list-item>
         <Split></Split>
       </mu-list>
   </div>
   </div>
</template>

<script>
  import Split from '../widget/Split'
  import {mapActions} from 'vuex' // 引入辅助函数
    export default {
        name: 'Pank',
      components: {
            Split
      },
      methods: {
        ...mapActions([ 'showDview']),
        goBack() {     // 返回按钮
          this.$router.go(-1)
          console.log(12)
        },
      }
    }

</script>

<style scoped>
   .pank {
     position: fixed;
     width: 100%;
     height: 100%;
     top: 0;
     left: 0;
     z-index: 300;
     background: #ffffff;
   }
   .bookbar {
     width: 100%;
     height: 45px;
     background: #fff;
     border-bottom: 1px solid rgba(7, 17, 27, 0.1);
     text-align: center;
   }
   .l_logo {
     width: 54px;
     height: 44px;
     line-height: 44px;
   }
   .r_logo {
     width: 52px;
     height: 44px;
     line-height: 44px;
   }
   .mylist {
     font-size: 16px;
   }
  .plist {
    width: 375px;
    height: 92px;
  }
  .info {
    width: 355px;
    height: 50px;
    margin-top: 10px;
  }
  .plist h3{
    width: 335px;
    height: 15px;
    font-size: 16px;
    margin-left: 40px;
  }
  .plist p {
    width: 335px;
    height: 15px;
    margin-left: 40px;
    margin-top: 10px;
  }
</style>
