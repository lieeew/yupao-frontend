<template>
  <van-card
      :title="`${mockUser.username} (${mockUser.planetCode})`"
      :desc="mockUser.profile"
      :thumb="mockUser.avatarUrl"
  >
    <template #tags>
      <van-tag plain type="danger" v-for="tage in mockUser.tags" style="margin-right: 8px; margin-top: 8px ">
        {{ tage }}
      </van-tag>
    </template>
    <template #footer>
      <van-button size="mini">联系我</van-button>
    </template>
  </van-card>
</template>

<script setup>
import { useRoute } from "vue-router";
import { onMounted } from "vue";
import myAxios from "../plugins/myAxios.js";
const route = useRoute();

const { tags } = route.query;

onMounted(() => {
  myAxios.post('/user/search/tags', {
    param: {
      tagNameList: tags,
    }
  })
      .then(function (response) {
        console.log('user/search/tags success', response);
      })
      .catch(function (error) {
        console.log('user/search/tags error', error);
      });
})
const mockUser = {
  id: 12345,
  username: '鱼皮',
  userAccount: '12314',
  profile: '一名精神小伙，目前还有头发，谢谢大家，阿爸爸阿爸爸阿巴阿巴阿巴',
  avatarUrl: 'https://636f-codenav-8grj8px727565176-1256524210.tcb.qcloud.la/img/logo.png',
  gender: 0,
  phone: '13113113111',
  email: '592342843721987@xzcxzczxcz.com',
  userRole: 0,
  planetCode: '1234',
  tags: ['java', 'emo', '打工中', 'emo', '打工中'],
  createTime: new Date(),
}

</script>

<style scoped>


</style>