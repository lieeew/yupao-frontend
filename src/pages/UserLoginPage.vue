<template>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
          v-model="username"
          name="用户名"
          label="用户名"
          placeholder="请输入用户名"
          :rules="[{ required: true, message: 'Username is required' }]"
      />
      <van-field
          v-model="password"
          type="password"
          name="密码"
          label="密码"
          placeholder="请输入密码"
          :rules="[{ required: true, message: 'Password is required' }]"
      />
    </van-cell-group>
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>
    </div>
  </van-form>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {useRoute} from "vue-router";
import myAxios from "../plugins/myAxios.ts";


const route = useRoute();
// 用户名 + 密码
// v-model 是双向绑定
const username = ref('');
const password = ref('');
const onSubmit = async () => {
  const res = await myAxios.post('/user/login',{
    "userAccount": username.value,
    "userPassword": password.value,
  })

  if (res.code === 0 && res.data) {
    alert('登录成功');
    // 跳转到之前的页面
    window.location.href = route.query?.redirect as string ?? '/';
  } else {
    alert('登录失败');
  }
};
</script>

<style scoped>


</style>