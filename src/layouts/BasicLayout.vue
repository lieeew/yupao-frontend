<template>
  <van-nav-bar
      title="Title"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
  >
    <template #right>
      <van-icon name="search"/>
    </template>
  </van-nav-bar>
  <!--  <div>-->
  <!--    <template v-if="active === 'index'">-->
  <!--      <Index/>-->
  <!--    </template>-->
  <!--    <template v-else-if="active === 'team'">-->
  <!--      <Team/>-->
  <!--    </template>-->
  <!--  </div>-->
<!--  中间的内容-->
  <div>
    <router-view/>
  </div>
  <van-tabbar route >
    <van-tabbar-item to="/" icon="home-o" name="index">主页</van-tabbar-item>
    <van-tabbar-item to="/team" icon="search" name="team">队伍</van-tabbar-item>
    <van-tabbar-item to='/user' icon="friends-o" name="user">个人</van-tabbar-item>
  </van-tabbar>
</template>


<script setup lang="ts">
import {useRouter} from "vue-router";

const router = useRouter();
const onClickLeft = () => {
  router.back();
}
const onClickRight = () => {
  router.push({ path: '/search' })
}

</script>

<style scoped>

</style>