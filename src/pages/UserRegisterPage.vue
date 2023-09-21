<template>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
          clearable
          v-model="addUserData.userAccount"
          label="昵称"
          placeholder="昵称长度在2-6之间"
          :rules="[{ validator: validatorMessageFour }]"
      />
      <van-field
          clearable
          v-model="addUserData.phone"
          label="手机号"
          placeholder="手机号即为登录账号"
          :rules="[{ validator: validatorMessageOne }]"
      />
      <van-field
          clearable
          v-model="addUserData.userPassword"
          type="password"
          label="密码"
          placeholder="密码长度在8-16之间"
          :rules="[{ validator: validatorMessageTwo }]"
      />
      <van-field
          clearable
          v-model="addUserData.checkPassword"
          type="password"
          label="确认密码"
          placeholder="请保持输入一致"
          :rules="[{ validator: validatorMessageThree }]"
      />
      <van-field
          clearable
          v-model="addUserData.email"
          label="邮箱"
          placeholder="请输入合法邮箱"
          :rules="[{ validator: validatorMessageFive }]"
      />
      <van-field
          clearable
          v-model="addUserData.planetCode"
          label="星球编号"
          placeholder="请输入星球编号"
          :rules="[{ validator: validatorMessageSix }]"
      />
      <van-field clearable name="radio" label="性别">
        <template #input>
          <van-radio-group v-model="addUserData.gender" direction="horizontal">
            <van-radio name="0">男</van-radio>
            <van-radio name="1">女</van-radio>
          </van-radio-group>
        </template>
      </van-field>
    </van-cell-group>
    <div style="margin: 16px">
      <van-button round block type="primary" native-type="submit">
        确认注册
      </van-button>
    </div>
  </van-form>
</template>

<script setup lang="ts">
import myAxios from "../plugins/myAxios";
import {ref} from "vue";
import {useRouter} from "vue-router";
import {Toast} from "vant";

//表单校验
const special = /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/; //匹配特殊字符的正则表达式
const validatorMessageOne = (val: string) => {
  if (val.trim() == "") {
    return "手机号不能为空";
  }
  if (special.test(val)) {
    return "手机号不能包含特殊字符";
  }
  var check = /^1[3-9]\d{9}$/;
  if (!check.test(val)) {
    return "手机号格式错误";
  }
};
const validatorMessageTwo = (val: string) => {
  if (val.trim() == "") {
    return "密码不能为空";
  }
  if (val.length < 8 || val.length > 16) {
    return "密码长度必须在8-16位之间";
  }
  // if (!val.match(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/)) {
  //   return "密码必须只包含数字和字母";
  // }
  if (special.test(val)) {
    return "密码不能包含特殊字符";
  }
};
const validatorMessageThree = (val: string) => {
  if (val != addUserData.value.userPassword) {
    return "两次输入的密码不一致";
  }
};
const validatorMessageFour = (val: string) => {
  if (val.trim() == "") {
    return "昵称不能为空";
  }
  if (val.length < 1 || val.length > 6) {
    return "昵称长度必须在1-6位之间";
  }
  if (special.test(val)) {
    return "昵称不能包含特殊字符";
  }
};
const validatorMessageFive = (val: string) => {
  if (val.trim() == "") {
    return "邮箱不能为空";
  }
  const emailTest = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailTest.test(val)) {
    return "邮箱格式错误";
  }
};
const validatorMessageSix = (val: string) => {
  if (val.trim() == "") {
    return "星球编号不能为空";
  }

  if (val.length < 4|| val.length > 7) {
    return "星球编号错误";
  }
};

const initFormData = {
  phone: "",
  userPassword: "",
  checkPassword: "",
  userAccount: "",
  email: "",
  gender: 0,
  planetCode: "",
};
const addUserData = ref({...initFormData}); //用户注册表单
const router = useRouter();
const onSubmit = async () => {
  const postData = {
    ...addUserData.value,
    status: Number(addUserData.value.gender),
  };

  const res = await myAxios.post("/user/register", postData);
  if (res.code === 0 && res.data) {
    Toast.success("注册成功!");
    //发起登录请求，自动登录
    const login = await myAxios.post("/user/login", {

    });
    if (login.code === 50001 && login.data) {
      // window.location.href = "/";
      router.push({
        path: "/",
        replace: true,
      });
    } else {
      router.push({
        path: "/user/login",
      });
    }
  } else {
    Toast.fail("注册失败!");
  }
};
</script>

<style>


</style>