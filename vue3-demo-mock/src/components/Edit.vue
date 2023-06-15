<script setup>
// TODO: 编辑
import { ref, reactive } from 'vue'
import axios from 'axios';

// 响应式数据
const form = reactive({
  name: '',
  place: '',
  id: ''
});
// 弹框开关
const dialogVisible = ref(false)
// 控制显示
const open = ({name, place, id}) => {
  dialogVisible.value = true;
  form.name = name;
  form.place = place;
  form.id = id;
}

// 定义修改方法
const sureUpdate = async () => {
  await axios.patch(`/edit/${form.id}`, {
    name: form.name,
    place: form.place,
  })
  emit('onUpdate');
}

defineExpose({
  open
})

const emit = defineEmits(['onUpdate'])

</script>

<template>
  <el-dialog v-model="dialogVisible" title="编辑" width="400px">
    <el-form label-width="50px">
      <el-form-item label="姓名">
        <el-input placeholder="请输入姓名" v-model="form.name"/>
      </el-form-item>
      <el-form-item label="籍贯">
        <el-input placeholder="请输入籍贯" v-model="form.place"/>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogVisible = false, sureUpdate()">确认</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style scoped>
.el-input {
  width: 290px;
}
</style>
