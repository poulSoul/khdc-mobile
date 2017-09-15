<style lang="less">
  .khdc-month-mobile{
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
    class="khdc-month-mobile"
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
  let years = [2015, 2016, 2017, 2018, 2019, 2020]
  let months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  export default {
    props: [
      'defaultDate'
    ],
    data () {
      return {
        visible: false,
        currentValue: '',
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
            values: months,
            className: 'slot3',
            textAlign: 'center'
          }
        ]
      }
    },
    components: {
      Picker, Popup
    },
    mounted () {
      let that = this
      let date = new Date(that.defaultDate)
      let year = date.getFullYear()
      let month = date.getMonth() + 1
      this.slots[0].defaultIndex = years.indexOf(year)
      this.slots[2].defaultIndex = months.indexOf(month)
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
        this.$emit('confirm', this.currentValue)
      },
      onValuesChange (picker, values) {
        this.currentValue = values.join('-')
      }
    }
  }
</script>
