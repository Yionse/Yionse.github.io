<script setup>
import { reactive, onMounted, ref } from 'vue'
import Edit from './components/Edit.vue'
import axios from 'axios';

// TODO: 列表渲染
let list = ref([]);
const getList = async () => {
  const data = await axios.get('/list');
  list.value = data.data
}

// TODO: 删除功能
const del = async (id) => {
  await axios.delete(`/del/${id}`);
  getList();
}
// TODO: 编辑功能

// 定义ref，标识子组件
let refSon = ref(null);

// 定义修改函数
const update = (row)=> {
  refSon.value.open(row);
}

onMounted(() => getList()); //  调用函数，获取列表

</script>

<template>
  <div class="app">
    <el-table :data="list">
      <el-table-column label="ID" prop="id"></el-table-column>
      <el-table-column label="姓名" prop="name" width="150"></el-table-column>
      <el-table-column label="籍贯" prop="place"></el-table-column>
      <el-table-column label="操作" width="150">
        <template #default="{row}">
          <el-button type="primary" link @click="update(row)">编辑</el-button>
          <el-button type="danger" link @click="del(row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
  <Edit ref="refSon" @onUpdate="getList" />
</template>

<style scoped>
.app {
  width: 980px;
  margin: 100px auto 0;
}
</style>
