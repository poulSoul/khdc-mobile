/*
 * 假数据  mock http://mockjs.com/
 */
import Mock from 'mockjs'
import ajax from '../utils/fetch'

let Random = Mock.Random
let template = {
  'datas|7': [{
    'date': Random.date('yyyy-MM-dd'),
    'order_amount|100000-99999999': 100,
    'complete_pay_amount|100000-99999999': 100,
    'pay_amount|100000-99999999': 100,
    'pay_num|100-10000': 100,
    'order_num|100-10000': 100,
    'complete_pay_num|100-10000': 100
  }],
  'cols': [{
    'name': '日期',
    'col': 'date'
  }, {
    'name': '提交订单金额',
    'col': 'order_amount'
  }, {
    'name': '已支付订单金额',
    'col': 'complete_pay_amount'
  }],
  'page': null,
  'total': null
}
Mock.mock('http://g.cn/erp-order-aumont', template)

export const erpOrderAumont = () => ajax('http://g.cn/erp-order-aumont', {}, 'get', 'ajax')
