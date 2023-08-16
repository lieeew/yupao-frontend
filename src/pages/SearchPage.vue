<template>
  <form action="/">
    <van-search
        v-model="searchText"
        show-action
        placeholder="请输入想查询的标签: "
        @search="onSearch"
        @cancel="onCancel"
    />
  </form>
</template>

<!--setup vue3 新语法，可以不适用 export-->
<script lang="ts" setup>
import {ref} from 'vue';
import {Toast} from 'vant';

const searchText = ref('');
const onSearch = (val) => Toast(val);
const onCancel = () => Toast('Cancel');


</script>


<style scoped>

</style>