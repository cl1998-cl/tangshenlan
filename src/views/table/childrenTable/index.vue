<template>
  <div class="content">
      <el-table
          :data="tableData"
          border
          header-row-class-name="table_head"
          height="275"
          highlight-current-row
          size="mini"
          style="width:100%"
      >
          <el-table-column label="国家" >
              <el-table-column label="" min-width="110" prop="occupation"></el-table-column>
              <el-table-column label="性别" min-width="90" prop="sex"></el-table-column>
              <el-table-column label="技能数量" min-width="90" prop="skillNum"></el-table-column>
          </el-table-column>

      </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: []
    }
  },
  methods: {

  },
};
</script>

<style>
</style>
