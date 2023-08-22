<template>
  <van-card avatar :row="3"  v-for="user in userList"
      :title="`${user.username} (${user.planetCode})`"
      :desc="user.profile"
      :thumb="user.avatarUrl"
  >
    <template #tags>
      <van-tag plain type="danger" v-for="tage in user.tags" style="margin-right: 8px; margin-top: 8px ">
        {{ tage }}
      </van-tag>
    </template>
    <template #footer>
      <van-button size="mini">联系我</van-button>
    </template>
  </van-card>
  <van-empty v-if="!userList || userList.length < 1" description="搜索结果为空" />
</template>

<script setup lang="ts">
import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";
import qs from 'qs';
import myAxios from "../plugins/myAxios.ts";

const route = useRoute();
const {tags} = route.query;
const userList = ref([]);
onMounted(async () => {
  const userListDate = await myAxios.get('/user/search/tags', {
    params: {
      tagNameList: tags,
    },
    // qd 里是请求转化的库
    paramsSerializer: params => {
      return qs.stringify(params, {indices: false})
    }
  })
      .then(function (response) {
        console.log('user/search/tags success hahah', response);
        // console.log(response.data.data)
        return response.data.data;
      })
      .catch(function (error) {
        console.log('user/search/tags error', error);
      });
  if (userListDate) {
    userListDate.forEach(user => {
      if (user.tags) {
        user.tags = JSON.parse(user.tags)
      }
    })
    userList.value = userListDate;
  }
})
// const mockUser = {
//   id: 12345,
//   username: '鱼皮',
//   userAccount: '12314',
//   profile: '一名精神小伙，目前还有头发，谢谢大家，阿爸爸阿爸爸阿巴阿巴阿巴',
//   avatarUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
//   gender: 0,
//   phone: '13113113111',
//   email: '592342843721987@xzcxzczxcz.com',
//   userRole: 0,
//   planetCode: '1234',
//   tags: ['java', 'emo', '打工中', 'emo', '打工中'],
//   createTime: new Date(),
// }

</script>

<style scoped>


</style>