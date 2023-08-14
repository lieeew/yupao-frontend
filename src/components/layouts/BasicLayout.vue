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
  <div>
    <template v-if="active === 'index'">
      <Index/>
    </template>
    <template v-else-if="active === 'team'">
      <Team/>
    </template>
  </div>
  <van-tabbar v-model="active" @change="onChange">
    <van-tabbar-item icon="home-o" name="index">主页</van-tabbar-item>
    <van-tabbar-item icon="search" name="team">队伍</van-tabbar-item>
    <van-tabbar-item icon="friends-o" name="user">个人</van-tabbar-item>
  </van-tabbar>
</template>


<script setup lang="ts">
import {ref} from 'vue';
import Index from "../../pages/Index.vue";
import Team from "../../pages/Team.vue";
import {Toast} from "vant";

const onClickLeft = () => alert('left');
const onClickRight = () => alert('right');

const active = ref('index');
const onChange = (index) => Toast(`Tab ${active}`);

</script>

<style scoped>

</style>