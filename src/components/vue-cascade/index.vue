<template>
  <div class="vueCascade">
    <div class="leftSelect">
      <span v-if="leftLabel" style="width: 80px;display: inline-block;font-size: 14px;text-align: right;padding: 0 12px 0 0;">{{leftLabel}}</span>
      <el-select value-key="key" @change="firstSelectChange" :value="firstSelectValue" placeholder="请选择" style="margin-right: 10px;">
        <el-option
          v-for="item in selectList"
          :key="item.key"
          :label="item.label"
          :value="item">
        </el-option>
      </el-select>
    </div>
    <span v-if="leftLabel" style="width: 80px;display: inline-block;font-size: 14px;text-align: right;padding: 0 12px 0 0;"></span>
    <template v-if="nextSelectType.toLocaleLowerCase() === 'input'">
      <el-input style="width: auto;" v-model="firstSelectValue.value" v-bind="firstSelectValue.subItem.attrs" v-on="firstSelectValue.subItem.events"></el-input>
    </template>
    <template v-else-if="nextSelectType.toLocaleLowerCase() === 'select'">
      <el-select v-model="firstSelectValue.value" v-bind="firstSelectValue.subItem.attrs" v-on="firstSelectValue.subItem.events">
        <el-option
          v-for="item in firstSelectValue.subItem.subOption"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </template>
    <template v-else-if="nextSelectType.toLocaleLowerCase() === 'daterange'">
      <el-date-picker
        v-bind="firstSelectValue.subItem.attrs"
        v-on="firstSelectValue.subItem.events"
        v-model="firstSelectValue.value"
        type="daterange">
      </el-date-picker>
    </template>
  </div>
</template>

<script>
export default {
  name: 'vueCascade',
  props: {
    selectList: {
      type: Array,
      required: true
    },
    leftLabel: {
      type: String,
      default: '筛选类型'
    }
  },
  data () {
    return {
      // 暂时不需要对第一个选择的value值进行操作
      firstSelectValue: this.selectList[0],
      nextSelectType: this.selectList[0].subItem.subType
    }
  },
  methods: {
    firstSelectChange (value) {
      this.firstSelectValue = value
      this.nextSelectType = value.subItem.subType
      this.$emit('clearAllValue')
    }
  }
}
</script>

<style scoped>
  .vueCascade{
    display: flex;
    align-items: center;
  }
  .vueCascade .leftSelect{
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
