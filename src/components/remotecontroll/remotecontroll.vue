<template>
<div>
  <el-breadcrumb separator-class="el-icon-arrow-right" style="margin-bottom: 10px">
    <el-breadcrumb-item>首页</el-breadcrumb-item>
    <el-breadcrumb-item>远程控制</el-breadcrumb-item>
    <el-breadcrumb-item>命令下发</el-breadcrumb-item>
  </el-breadcrumb>
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      prop="id"
      label="id"
      width="180">
    </el-table-column>
    <el-table-column
      prop="equipment_id"
      label="equipment_id"
      width="180">
    </el-table-column>
    <el-table-column
      prop="state_information"
      label="state_information">
    </el-table-column>
  </el-table>
</div>
</template>

<script>
export default {
  name: 'remotecontroll',
  created () {
    this.$http.get('information/getAll').then(res => {
      this.tableData = res.data
      console.log(this.tableData)
    })
  },
  data () {
    return {
      tableData: []
    }
  }
}
</script>
