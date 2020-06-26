<template>
  <el-card class="box-card">
    <!--     面包屑-->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>首页</el-breadcrumb-item>
      <el-breadcrumb-item>设备</el-breadcrumb-item>
      <el-breadcrumb-item>设备管理</el-breadcrumb-item>
    </el-breadcrumb>
    <!--     search-->
    <el-row class="searchRow">
      <el-col>
        <el-input placeholder="input"  class="inputSearch">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
        <el-button type="primary" @click="showAddEqData">add</el-button>
      </el-col>
    </el-row>
    <el-table
      :data="tableData"
      height="400"
    >
      <el-table-column
        type="index"
        label="序号"
      >
      </el-table-column>
      <el-table-column
        prop="equipment"
        label="设备"
     >
      </el-table-column>
      <el-table-column
        prop="pressure"
        label="压力"
       >
      </el-table-column>
      <el-table-column
        prop="inclination"
        label="倾斜度"
        >
      </el-table-column>
      <el-table-column
        prop="serviceman1"
        label="维护人1">
      </el-table-column>
      <el-table-column
        prop="serviceman2"
        label="维护人2">
      </el-table-column> <el-table-column
        prop="floemeter"
        label="用量">
      </el-table-column>
      <el-table-column
        prop="battery"
        label="电量">
      </el-table-column> <el-table-column
        prop="version"
        label="版本">
      </el-table-column>
      <el-table-column
        prop="devicetype"
        label="类型">
      </el-table-column>
      <el-table-column
        prop="nbiot_Gprs"
        label="坐标">
      </el-table-column>
      <el-table-column
        prop="positions"
        label="位置">
      </el-table-column> <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
      <el-table-column
        prop="comment"
        label="备注">
      </el-table-column> <el-table-column
        prop="temperature"
        label="温度">
      </el-table-column>
      <el-table-column
        prop="contain1"
        label="备用选型1">
      </el-table-column>
      <el-table-column
      prop="contain2"
      label="备用选型2">
    </el-table-column>
      <el-table-column
        prop="contain3"
        label="备用选型3">
      </el-table-column>
<!--      <el-table-column-->
<!--        label="操作">-->
<!--        <template slot-scope="scope">-->
<!--          <el-button size="mini" plain type="primary" icon="el-icon-edit"-->
<!--                     circle @click="EditUser(scope.row)"-->
<!--          ></el-button>-->
<!--          <el-button size="mini" plain type="danger" icon="el-icon-delete"-->
<!--                     circle @click="DeleteUser(scope.row.id)"-->
<!--          ></el-button>-->
<!--        </template>-->
<!--      </el-table-column>-->
    </el-table>
    <el-dialog title="添加设备" :visible.sync="dialogFormVisibleAdd">
      <el-form :model="form">
        <el-form-item label="ID(数字)" label-width="100px">
          <el-input v-model="form.id" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="devicename" label-width="100px">
          <el-input v-model="form.devicename" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="devicetype" label-width="100px" >
          <el-input v-model="form.devicetype" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="version" label-width="100px">
          <el-input v-model="form.version" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="address" label-width="100px">
          <el-input v-model="form.address" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="nbiot_Gprs" label-width="100px">
          <el-input v-model="form.nbiot_Gprs" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="positions" label-width="100px">
          <el-input v-model="form.positions" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="state" label-width="100px">
          <el-input v-model="form.state" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="serviceman1" label-width="100px">
          <el-input v-model="form.serviceman1" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="serviceman2" label-width="100px">
          <el-input v-model="form.serviceman2" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="comment" label-width="100px">
          <el-input v-model="form.comment" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisibleAdd = false">取 消</el-button>
        <el-button type="primary" @click="AddEq()">确 定</el-button>
      </div>
    </el-dialog>
  </el-card>
</template>
<script>
export default {
  name: 'equipment',
  created () {
    this.$http.post('information/selectAll').then(res => {
      this.tableData = res.data
      console.log(this.tableData)
    })
  },
  methods: {
    showAddEqData () {
      this.dialogFormVisibleAdd = !this.dialogFormVisibleAdd
    },
    async AddEq () {
      await this.$http.post('equipment/insertOne', this.form)
      this.dialogFormVisibleAdd = false
      // window.location.reload()
    }
  },
  data: function () {
    return {
      tableData: [],
      form: {},
      dialogFormVisibleAdd: false
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
