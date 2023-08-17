<template>
  <van-cell-group>
    <van-cell title="昵称" is-link to="/user/edit" :value="userInfor.username"/>
    <van-cell title="账号" is-link to="/user.edit" :value="userInfor.userAccount"/>
    <van-cell title="头像" is-link to="/user.edit">
      <img style="height: 48px" :src="userInfor.avatarUrl"/>
    </van-cell>
    <van-cell title="性别" is-link to="/user.edit" :value="userInfor.gender" @click="toEdit('gender', '性别' ,userInfor.gender)" />
    <van-cell title="电话" is-link to="/user.edit" :value="userInfor.phone"  @click="toEdit('phone', '电话' ,userInfor.phone)"/>
    <van-cell title="邮箱" is-link to="/user.edit" :value="userInfor.email"  @click="toEdit('email', '邮箱' ,userInfor.email)"/>
    <van-cell title="星球编号" :value="userInfor.planetCode"/>
    <van-cell title="注册时间" :value="userInfor.createTime.toDateString()"/>
  </van-cell-group>

</template>

<script setup lang="ts">
import {useRouter} from "vue-router";

const userInfor = {
  id: 1,
  username: 'leikooo',
  userAccount: 'lieeew',
  avatarUrl: 'https://636f-codenav-8grj8px727565176-1256524210.tcb.qcloud.la/img/logo.png',
  gender: '男',
  phone: '123344',
  email: '666@gmail.com',
  createTime: new Date(),
  planetCode: '12400',
}

const router = useRouter();

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