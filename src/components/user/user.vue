<template>
  <el-card class="box-card">
<!--     面包屑-->
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>首页</el-breadcrumb-item>
        <el-breadcrumb-item>用户管理</el-breadcrumb-item>
        <el-breadcrumb-item>用户查询</el-breadcrumb-item>
      </el-breadcrumb>
    <!--     search-->
    <el-row class="searchRow">
      <el-col>
        <el-input placeholder="input" v-model="query" class="inputSearch">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
        <el-button type="primary" @click="showAddUserData">add</el-button>
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
        prop="username"
        label="username"
        width="180">
      </el-table-column>
      <el-table-column
        prop="usertype"
        label="usertype"
        width="180">
      </el-table-column>
      <el-table-column
        prop="comment"
        label="comment">
      </el-table-column>
      <el-table-column
        prop="phone"
        label="phone">
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

    <el-dialog title="添加操作员" :visible.sync="dialogFormVisibleAdd">
      <el-form :model="form">
        <el-form-item label="ID(数字)" label-width="100px">
          <el-input v-model="form.id" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="用户名" label-width="100px">
          <el-input v-model="form.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" label-width="100px" >
          <el-input v-model="form.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="电话" label-width="100px">
          <el-input v-model="form.phone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="备注" label-width="100px">
          <el-input v-model="form.comment" autocomplete="off"></el-input>
        </el-form-item>

        <el-select style="float: right; margin-bottom: 10px"  v-model="form.roles"  placeholder="请选择用户类型">
          <el-option
            v-for="item in form.options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisibleAdd = false">取 消</el-button>
        <el-button type="primary" @click="AddUser()">确 定</el-button>
      </div>
    </el-dialog>

  </el-card>
</template>

<script>
export default {
  name: 'user',
  created () {
    this.getUserList()
    this.$http.post('equipment/selectAll').then(res => {
      console.log(res.data)
    })
  },
  methods: {
    async getUserList () {
      // eslint-disable-next-line no-template-curly-in-string
      const res = await this.$http.post('users/select')
      console.log(res)
      this.tableData = res.data
    },
    async showAddUserData () {
      this.dialogFormVisibleAdd = true
    },
    async AddUser () {
      if (this.form.flag === '1') {
        await this.$http.post('users/insertOne', this.form)
        this.dialogFormVisibleAdd = false
        window.location.reload()
      } else {
        await this.$http.post('users/updateById', this.form)
        this.dialogFormVisibleAdd = false
        window.location.reload()
      }
      this.form.flag = '1'
    },
    async DeleteUser (userId) {
      await this.$http.post('users/deleteById', {id: userId})
      window.location.reload()
    },
    async EditUser (arow) {
      console.log(arow)
      this.form.id = arow.id
      this.dialogFormVisibleAdd = true
      this.form.flag = '2'
    }
  },
  data: function () {
    return {
      query: '',
      tableData: [],
      dialogFormVisibleAdd: false,
      form: {
        id: '',
        username: '',
        password: '',
        comment: '',
        usertype: '',
        phone: '',
        options: [{
          value: '选项1',
          label: 'admin'
        }, {
          value: '选项2',
          label: 'operator'
        }],
        roles: '',
        flag: '1'

      }
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
