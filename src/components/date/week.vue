<style lang="less">
  .khdc-week-mobile{
    width: 100%;
  }
  .toolbar-action{
    display:block;
    float: left;
    width: 5rem;
    text-align: center;
    line-height: 40px;
    font-size: 16px;
    color: #999;
  }
  .toolbar-submit{
    float: right;
    color: #00c088;
  }
  .picker-toolbar{
    border-bottom: 1px solid #e5e5e5;
  }
</style>
<template>
  <mt-popup
    v-model="visible"
    position="bottom"
    class="khdc-week-mobile"
  >
    <mt-picker
      :slots="slots"
      @change="onValuesChange"
      show-toolbar
    >
    <span class="toolbar-action toolbar-cancel" @click="visible = false;$emit('cancel')">取消</span>
    <span class="toolbar-action toolbar-submit" @click="confirm">确定</span>
    </mt-picker>
  </mt-popup>
</template>
<script>
  import {Picker, Popup} from 'mint-ui'
  import { getWeek } from '../../service/utils/getWeek'
  let years = [2015, 2016, 2017, 2018, 2019, 2020]
  let weeks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52]

  export default {
    props: [
      'defaultDate'
    ],
    data () {
      return {
        visible: false,
        currentVlaue: '',
        slots: [
          {
            flex: 1,
            values: years,
            className: 'slot1',
            textAlign: 'center'
          }, {
            divider: true,
            content: '-',
            className: 'slot2'
          }, {
            flex: 1,
            values: weeks,
            className: 'slot3',
            textAlign: 'center'
          }
        ]
      }
    },
    mounted () {
      let that = this
      this.slots[0].defaultIndex = (function () {
        let year = new Date(that.defaultDate).getFullYear()
        let index = years.indexOf(year)

        return (index !== -1 ? index : 1)
      })()
      this.slots[2].defaultIndex = (function () {
        let week = getWeek(that.defaultDate)
        return (week.count - 1)
      })()
    },
    components: {
      Picker, Popup
    },
    methods: {
      open () {
        this.visible = true
      },
      close () {
        this.visible = false
      },
      confirm () {
        this.visible = false
        this.$emit('confirm', this.currentVlaue)
      },
      onValuesChange (picker, values) {
        this.currentVlaue = values.join('-')
      }
    }
  }
</script>
