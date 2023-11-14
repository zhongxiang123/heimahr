<template>
  <div class="container">
    <div class="app-container">
      <!-- 组织架构123
      展示树形结构 -->
      <el-tree default-expand-all :data="depts" :props="defaultProps" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Department',
  data() {
    return {
      depts: [{
        name: '传智教育',
        children: [
          { name: '总裁办' },
          { name: '行政部' },
          { name: '财务部' }
        ]
      }],
      defaultProps: {
        children: 'children',
        label: 'name'
      }
    }
  }
}
</script>

<style scoped>
.app-container{
  padding: 30px 140px;
  font-size: 14px;
}

</style>
