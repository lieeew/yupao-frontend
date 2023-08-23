<template>
  <van-form @submit="onSubmit">
    <van-field
        v-model="editUser.editValue"
        :name="editUser.editKey"
        :label="editUser.editName"
        :placeholder="`请输入${editUser.editName}`"
    />
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>
    </div>
  </van-form>
</template>

<script setup lang="ts">
import {useRoute, useRouter} from "vue-router";
import {ref} from "vue";
import myAxios from "../plugins/myAxios.ts";
import {getCurrentUser} from "../services/user.ts";

const route = useRoute();
const router = useRouter();
// console.log(route.query);
const editUser = ref({
  editKey: route.query.editKey,
  editValue: route.query.editValue,
  editName: route.query.editName,
})

const onSubmit = async () => {
  const user = await getCurrentUser();
  // todo 向后端返回 editName、currentValue、editKey
  const res = await myAxios.post('/user/update', {
    'id': user.id,
    [editUser.value.editKey as string]: editUser.value.editValue,
  })
  console.log(res, '登录页面返回')
  if (res.code === 0 && res.date > 0) {
    router.back();
  } else {
    alert('修改失败')
  }
};

</script>

<style scoped>

</style>