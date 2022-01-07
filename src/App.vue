<template>
  <div id="app">
    <vue-cascade :select-list="selectList" @clearAllValue="clearAllValue" left-label="筛选类型"></vue-cascade>
  </div>
</template>

<script>
import vueCascade from './components/vue-cascade/index.vue'
export default {
  name: 'App',
  components: {
    vueCascade
  },
  data() {
    return {
      selectList: [
        {
          key: 'uploadUser',
          value: '',
          label: '账号',
          subItem: {
            subType: 'input',
            events: {
              input: this.nameChange ? this.nameChange : ()=>{}
            },
            attrs: {
              placeholder: '请输入账号'
            }
          }
        },
        {
          key: 'uploadTime',
          value: null,
          label: '时间',
          subItem: {
            subType: 'daterange',
            events: {
              change: this.daterangeChange ? this.daterangeChange : ()=>{}
            },
            attrs: {
              'start-placeholder': '开始日期',
              'end-placeholder': '结束日期',
              'range-separator': '至',
              format: 'yyyy-MM-dd',
              'value-format': 'yyyy-MM-dd'
            }
          }
        },
        {
          key: 'fileOrigin',
          value: null,
          label: '来源渠道',
          subItem: {
            subType: 'select',
            events: {
              change: this.selectChange ? this.selectChange : ()=>{}
            },
            subOption: [
              {
                value: '摄像机',
                label: '摄像机'
              },
              {
                value: 'APP',
                label: 'APP'
              },
              {
                value: '视频会议',
                label: '视频会议'
              },
              {
                value: '本地上传',
                label: '本地上传'
              }
            ]
          }
        }
      ]
    }
  },
  methods: {
    clearAllValue () {
      for (let i = 0; i < this.selectList.length; i++) {
        if (typeof this.selectList[i].value === 'string') {
          this.selectList[i].value = ''
        } else if (typeof this.selectList[i].value === 'object') {
          this.selectList[i].value = null
        } else if (typeof this.selectList[i].value === 'number') {
          this.selectList[i].value = null
        }
      }
      // console.log(this.selectList)
    }
  }
}
</script>
