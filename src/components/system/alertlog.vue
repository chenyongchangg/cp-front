<template>
  <el-card class="box-card">
    <!--     面包屑-->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>首页</el-breadcrumb-item>
      <el-breadcrumb-item>系统管理</el-breadcrumb-item>
      <el-breadcrumb-item>报警日志</el-breadcrumb-item>
    </el-breadcrumb>
    <!--     search-->
    <el-row class="searchRow">
      <el-col>
        <el-input placeholder="input"  class="inputSearch">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
        <el-button type="success">add</el-button>
      </el-col>
    </el-row>

    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        type="index"
        label="#"
        width="60">
      </el-table-column>
      <el-table-column
        prop="createtime"
        label="时间"
      >
      </el-table-column>
      <el-table-column
        prop="comment"
        label="comment"
        width="180">
      </el-table-column>
      <el-table-column
        label="操作">
        <template slot-scope="scope">
          <el-button size="mini" plain type="primary" icon="el-icon-edit"
                     circle @click="EditUser(scope.row)"
          ></el-button>
          <el-button size="mini" plain type="danger" icon="el-icon-delete"
                     circle @click="DeleteUser(scope.row.id)"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
export default {
  name: 'alertlog',
  created () {
    this.getUserList()
  },
  methods: {
    async getUserList () {
      const res = await this.$http.post('alermlog/selectAll')
      console.log(res)
      this.tableData = res.data
    },
    EditUser (row) {

    },
    DeleteUser (row) {

    }
  },
  data: function () {
    return {
      tableData: []
    }
  }
}
</script>
<style scoped>
  .inputSearch{
    width: 400px;
  }
  .searchRow{
    margin-top: 20px;
  }
</style>
