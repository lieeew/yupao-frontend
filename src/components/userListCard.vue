<template>
  <van-card avatar :row="3"  v-for="user in props.userList"
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
</template>

<script setup lang="ts">
import {UserType} from "../models/user";
interface userCardList {
  userList: UserType[];
}

const props = defineProps<userCardList>();

</script>

<style scoped>

</style>