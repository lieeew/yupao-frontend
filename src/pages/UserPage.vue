<template>
  <template v-if="user">
    <van-cell-group>
      <van-cell title="昵称" is-link to="/user/edit" :value="user.username" @click="toEdit('username', '昵称' ,user.username)"/>
      <van-cell title="账号" is-link to="/user/edit" :value="user.userAccount" @click="toEdit('userAccount', '账号' ,user.userAccount)"/>
      <van-cell title="头像" is-link to="/user/edit">
        <img style="height: 48px" :src="user.avatarUrl"/>
      </van-cell>
      <van-cell title="性别" is-link to="/user/edit" :value="user.gender" @click="toEdit('gender', '性别' ,user.gender)" />
      <van-cell title="电话" is-link to="/user/edit" :value="user.phone"  @click="toEdit('phone', '电话' ,user.phone)"/>
      <van-cell title="邮箱" is-link to="/user/edit" :value="user.email"  @click="toEdit('email', '邮箱' ,user.email)"/>
      <van-cell title="星球编号" :value="user.planetCode"/>
      <van-cell title="注册时间" :value="user.createTime"/>
    </van-cell-group>
  </template>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";
import {onMounted, ref} from "vue";
import {getCurrentUser} from "../services/user.ts";

// const userInfor = {
//   id: 1,
//   username: 'leikooo',
//   userAccount: 'lieeew',
//   avatarUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
//   gender: '男',
//   phone: '123344',
//   email: '666@gmail.com',
//   createTime: new Date(),
//   planetCode: '12400',
// }

const router = useRouter();
const user = ref();
onMounted(async () => {
  const res = await getCurrentUser();
  // console.log(res, '返回の值是什么')
  user.value = res;

})

// 定义一个跳转方法
const toEdit = (editKey: string, editName: string,  editValue: string) => {
  router.push({
    path: '/user/edit',
    params: {
      a: 1,
    },
    query: {
      editKey,
      editName,
      editValue,
    }
  })
}

</script>

<style scoped>

</style>