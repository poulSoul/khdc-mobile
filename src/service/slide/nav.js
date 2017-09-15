const navData = [{
  url: '',
  text: '概要数据',
  children: [{
    url: 'erp_index',
    text: 'ERP官网数据日报'
  }, {
    url: 'dc_index',
    text: '官网数据日报'
  }]
}, {
  url: '',
  text: '数据趋势报表',
  children: [{
    url: 'erp_amount',
    text: 'ERP订单金额'
  }, {
    url: 'order_amount',
    text: '官网订单数量&金额'
  }, {
    url: 'order_num',
    text: '官网产品个数&流量'
  }]
}, {
  url: '',
  text: '详细数据',
  children: [{
    url: 'erp_order_amount',
    text: 'ERP各产品类型提交订单金额'
  }, {
    url: 'erp_order_num',
    text: 'ERP各产品类型提交订单数量'
  }, {
    url: 'pay_amount',
    text: '官网各产品类型支付金额'
  }, {
    url: 'pay_num',
    text: '官网各产品类型支付订单数量'
  }, {
    url: 'product_num',
    text: '官网各产品类型数量分布'
  }, {
    url: 'org_call',
    text: '400客服电话数据'
  }]
}, {
  url: '',
  text: '其他',
  children: [{
    url: 'new_feature',
    text: '数据中心功能介绍'
  }]
}]
export {
  navData
}
