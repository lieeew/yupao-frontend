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
import {useRoute} from "vue-router";
import {ref} from "vue";

const route = useRoute();
console.log(route.query);
const editUser = ref({
  editKey: route.query.editKey,
  editValue: route.query.editValue,
  editName: route.query.editName,
})

const onSubmit = async () => {
   //todo 向后端返回 editName、currentValue、editKey
};

</script>

<style scoped>

</style>