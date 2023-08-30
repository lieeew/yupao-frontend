<template>
<!--  复用组件-->
  <UserListCard :user-list="userList" />
  <van-empty v-if="!userList || userList.length < 1" description="NULL" />
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import myAxios from "../plugins/myAxios.ts";
import UserListCard from "../components/userListCard.vue";
const userList = ref([]);
onMounted(async () => {
  const userListDate = await myAxios.get('/user/recommend', {
    params: {
      pageSize: 20,
      pageNum: 1,
    },
  })
      .then(function (response) {
        console.log('/user/recommend success', response);
        // console.log(response.data.data)
        return response?.data?.records;
      })
      .catch(function (error) {
        console.log('/user/recommend error', error);
      });
  if (userListDate) {
    userListDate.forEach(user => {
      if (user.tags) {
        user.tags = JSON.parse(user.tags)
      }
    })
    userList.value = userListDate;
    console.log('userList ', userList)
  }
})
</script>

<style scoped>


</style>