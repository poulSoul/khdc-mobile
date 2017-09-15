<style lang="less">
  .main{
    padding-top: 2.2rem;
  }
  .chart{
    height: 10rem;
    width: 100%;
  }
  .form-item{
    border-top:1px solid #ebebeb;
    padding:0.5rem 0;
    background: #fff;
    .form-mid{
      float: left;
      width: 4%;
      text-align: center;
      line-height: 1.5rem;
      color: #666;
    }
    .form-input-inline{
      float: left;
      width: 48%;
    }
    .khdc-input{
      display: block;
      width: 100%;
      height: 1.5rem;
      line-height: 1.5rem;
      padding: 0 1.5rem
    }
  }
</style>
<template>
  <div>
    <!-- header START -->
    <head-select v-on:showSlideMenu='showSlideMenu'></head-select>
    <!-- header END -->

    <!-- slidebar START -->
    <sidebar-menu :show="show" v-on:hideSlideMenu='hideSlideMenu'></sidebar-menu>
    <!-- slidebar END -->

    <!-- startDate START -->
    <mt-datetime-picker
        v-model="form.days.defaultStart"
        ref = 'startDatePicker'
        type="date"
        @confirm="handleStartDateConfirm"
        year-format="{value} 年"
        month-format="{value} 月"
        date-format="{value} 日"
        >
    </mt-datetime-picker>
    <!-- startDate END -->

    <!-- endDate START -->
    <mt-datetime-picker
        v-model="form.days.defaultEnd"
        ref = 'endDatePicker'
        type="date"
        @confirm="handleEndDateConfirm"
        year-format="{value} 年"
        month-format="{value} 月"
        date-format="{value} 日"
        >
    </mt-datetime-picker>
    <!-- endDate END -->

    <!-- weeks START -->
    <week-picker
      ref = "startWeek"
      v-bind:defaultDate = 'form.weeks.defaultStart'
      @confirm="handleStartWeekConfirm"
      ></week-picker>
    <week-picker
      ref = "endWeek"
      v-bind:defaultDate = 'form.weeks.defaultEnd'
      @confirm="handleEndWeekConfirm"
    ></week-picker>
    <!-- weeks END -->

    <!-- month START -->
    <month-picker
      ref = "startMonth"
      v-bind:defaultDate = 'form.months.defaultStart'
      @confirm="handleStartMonthConfirm"
      ></month-picker>
    <month-picker
      ref = "endMonth"
      v-bind:defaultDate = 'form.months.defaultEnd'
      @confirm="handleEndMonthConfirm"
    ></month-picker>
    <!-- month END -->

    <div class="main">
      <!-- tab-control START -->
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">按日</mt-tab-item>
        <mt-tab-item id="2">按周</mt-tab-item>
        <mt-tab-item id="3">按月</mt-tab-item>
      </mt-navbar>
      <!-- tab-control END -->

      <!-- tab-container START-->
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <slot>
            <div class="form-item clearfix">
              <div class="form-input-inline">
                <input type='datetime'
                  placeholder='开始时间'
                  class='khdc-input'
                  readonly
                  v-on:click="openStartDatePicker()"
                  v-model="form.days.beginDate"
                >
              </div>
              <div class="form-mid">-</div>
              <div class="form-input-inline">
                <input type="datetime"
                  placeholder="开始时间"
                  class="khdc-input"
                  readonly
                  v-on:click="openEndDatePicker()"
                  v-model="form.days.endDate"
                >
              </div>
            </div>
          </slot>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <slot>
            <div class="form-item clearfix">
              <div class="form-input-inline">
                <input type='datetime'
                  placeholder='开始时间'
                  class='khdc-input'
                  readonly
                  v-on:click="openStartWeekPicker()"
                  v-model="form.weeks.beginDate"
                >
              </div>
              <div class="form-mid">-</div>
              <div class="form-input-inline">
                <input type="datetime"
                  placeholder="开始时间"
                  class="khdc-input"
                  readonly
                  v-on:click="openEndWeekPicker()"
                  v-model="form.weeks.endDate"
                >
              </div>
            </div>
          </slot>
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
          <slot>
            <div class="form-item clearfix">
              <div class="form-input-inline">
                <input type='datetime'
                  placeholder='开始时间'
                  class='khdc-input'
                  readonly
                  v-on:click="openStartMonthPicker()"
                  v-model="form.months.beginDate"
                >
              </div>
              <div class="form-mid">-</div>
              <div class="form-input-inline">
                <input type="datetime"
                  placeholder="开始时间"
                  class="khdc-input"
                  readonly
                  v-on:click="openEndMonthPicker()"
                  v-model="form.months.endDate"
                >
              </div>
            </div>
          </slot>
        </mt-tab-container-item>
      </mt-tab-container>
      <!-- tab-container END -->

      <!-- chats START -->
      <div id="charts" class="chart">

      </div>
      <!-- charts END -->
    </div>
  </div>
</template>
<script>
  import headSelect from '../../components/head/head-select'
  import sidebarMenu from '../../components/slide/menu-nav'
  import { Navbar, TabItem, Field, DatetimePicker } from 'mint-ui'
  import { DateFormat } from '../../service/utils/DateFormat'
  import weekPicker from '../../components/date/week'
  import monthPicker from '../../components/date/month'
  import { getWeek } from '../../service/utils/getWeek'
  import {monthAgo} from '../../service/utils/monthAgo'
  import {erpOrderAumont} from '../../service/getData/mock'
  import chart from '../../service/charts/initcharts'
  let myChart = null
  let option = {
    title: {
      text: 'ERP订单数据'
    },
    tooltip: {
      show: false
    },
    legend: {
      data: ['销量']
    },
    xAxis: {
      data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    },
    yAxis: {},
    series: [{
      name: '销量',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
    }]
  }
  export default {
    data () {
      return {
        show: false,
        selected: '1',
        datevalue: new Date(),
        form: {
          days: {
            defaultStart: DateFormat('yyyy-MM-dd', (new Date().getTime() - (7 * 86400 * 1000))),
            defaultEnd: DateFormat('yyyy-MM-dd', new Date()),
            beginDate: DateFormat('yyyy-MM-dd', (new Date().getTime() - (7 * 86400 * 1000))),
            endDate: DateFormat('yyyy-MM-dd', new Date())
          },
          weeks: {
            defaultStart: new Date().getTime() - 6 * 86400 * 7 * 1000,
            defaultEnd: new Date().getTime(),
            beginDate: (function () {
              return ('第' + getWeek(new Date().getTime() - 6 * 86400 * 7 * 1000).count + '周')
            })(),
            endDate: (function () {
              return ('第' + getWeek(Date()).count + '周')
            })()
          },
          months: {
            defaultStart: monthAgo(-7)[2],
            defaultEnd: Date(),
            beginDate: (function () {
              let month = monthAgo(-7)
              return month[0] + '-' + month[1]
            })(),
            endDate: (function () {
              let month = monthAgo(0)
              return month[0] + '-' + month[1]
            })()
          }
        }
      }
    },
    components: {
      headSelect, sidebarMenu, Navbar, TabItem, Field, DatetimePicker, weekPicker, monthPicker
    },
    methods: {
      showSlideMenu () {
        this.show = true
      },
      hideSlideMenu () {
        this.show = false
      },

      openStartDatePicker () {
        this.$refs.startDatePicker.open()
      },
      openStartWeekPicker () {
        this.$refs.startWeek.open()
      },
      openStartMonthPicker () {
        this.$refs.startMonth.open()
      },

      openEndDatePicker () {
        this.$refs.endDatePicker.open()
      },
      openEndWeekPicker () {
        this.$refs.endWeek.open()
      },
      openEndMonthPicker () {
        this.$refs.endMonth.open()
      },

      handleStartDateConfirm (time) {
        this.form.days.beginDate = DateFormat('yyyy-MM-dd', time)
      },
      handleEndDateConfirm (time) {
        this.form.days.endDate = DateFormat('yyyy-MM-dd', time)
      },

      handleStartWeekConfirm (time) {
        time = time.split('-')
        this.form.weeks.beginDate = '第' + time[1] + '周'
      },
      handleEndWeekConfirm (time) {
        time = time.split('-')
        this.form.weeks.endDate = '第' + time[1] + '周'
      },

      handleStartMonthConfirm (time) {
        this.form.months.startDate = time
      },
      handleEndMonthConfirm (time) {
        this.form.months.endDate = time
      }
    },
    mounted () {
      myChart = chart('charts')
      myChart.showLoading()
      erpOrderAumont().then(function (json) {
        myChart.hideLoading()
        myChart.setOption(option)
      })
    }
  }

</script>
