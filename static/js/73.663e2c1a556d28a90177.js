webpackJsonp([73],{uv1V:function(t,e){},xZFZ:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("Dd8w"),l=a.n(r),s=a("NYxO"),i=a("Z4dx"),o={name:"index",components:{CommunalPagination:function(){return a.e(121).then(a.bind(null,"jH2g"))}},created:function(){var t=this;Object(i.b)().then(function(e){t.initData=e.data})},data:function(){return{activeName:"1",initData:{},lifeTableApprove:{orgCode:"",status:""},statusList:[{statusCode:"1",statusName:"待申报"},{statusCode:"2",statusName:"待审批"},{statusCode:"3",statusName:"已审批"},{statusCode:"4",statusName:"待修改"},{statusCode:"5",statusName:"需要重新申报"}],columns:[{prop:"org",width:120,label:"机构",align:"center"},{prop:"planVersionNo",width:240,label:"方案版本号"},{prop:"targetPremium",label:"目标保费收入",width:140},{prop:"targetCostRate",label:"目标保单成本率",width:140},{prop:"targetChangeCostRate",label:"目标变动成本率",width:140},{prop:"targetPayRate",label:"目标保单赔付率",width:140},{prop:"targetFeeRate",label:"目标保单费用率",width:140},{prop:"targetExpPayRate",label:"目标理赔费用率",width:140},{prop:"lossBizRatio",label:"亏损业务占比",width:140},{prop:"lossBizPremium",label:"严重亏损业务保费规模",width:140},{prop:"declarer",width:150,label:"申报人",align:"center"},{prop:"createTime",width:200,label:"申报时间",align:"center"},{prop:"status",width:100,label:"申报状态",align:"center"},{prop:"latestApproval",width:120,label:"最新审批人",align:"center"}],data:[{org:"北京分公司",planVersionNo:"201801010011524",targetPremium:"450",targetCostRate:"95",targetChangeCostRate:"5",targetPayRate:"65",targetFeeRate:"15",targetExpPayRate:"65",lossBizRatio:"5",lossBizPremium:"45",declarer:"刘芳",createTime:"2018/07/01",status:"已审批",latestApproval:"张三"},{org:"天津分公司",planVersionNo:"201801010011524",targetPremium:"450",targetCostRate:"95",targetChangeCostRate:"5",targetPayRate:"65",targetFeeRate:"15",targetExpPayRate:"65",lossBizRatio:"5",lossBizPremium:"45",declarer:"张强",createTime:"2018/05/01",status:"待审批",latestApproval:"张三"},{org:"上海分公司",planVersionNo:"201801010011524",targetPremium:"450",targetCostRate:"95",targetChangeCostRate:"5",targetPayRate:"65",targetFeeRate:"15",targetExpPayRate:"65",lossBizRatio:"5",lossBizPremium:"45",declarer:"李菲",createTime:"2018/03/01",status:"待申报",latestApproval:"张三"},{org:"北京分公司",planVersionNo:"201801010011524",targetPremium:"450",targetCostRate:"95",targetChangeCostRate:"5",targetPayRate:"65",targetFeeRate:"15",targetExpPayRate:"65",lossBizRatio:"5",lossBizPremium:"45",declarer:"刘芳",createTime:"2017/07/01",status:"待修改",latestApproval:"张三"},{org:"天津分公司",planVersionNo:"201801010011524",targetPremium:"450",targetCostRate:"95",targetChangeCostRate:"5",targetPayRate:"65",targetFeeRate:"15",targetExpPayRate:"65",lossBizRatio:"5",lossBizPremium:"45",declarer:"张强",createTime:"2017/05/01",status:"需要重新申报",latestApproval:"张三"},{org:"上海分公司",planVersionNo:"201801010011524",targetPremium:"450",targetCostRate:"95",targetChangeCostRate:"5",targetPayRate:"65",targetFeeRate:"15",targetExpPayRate:"65",lossBizRatio:"5",lossBizPremium:"45",declarer:"李菲",createTime:"2017/03/01",status:"已审批",latestApproval:"张三"},{org:"北京分公司",planVersionNo:"201801010011524",targetPremium:"450",targetCostRate:"95",targetChangeCostRate:"5",targetPayRate:"65",targetFeeRate:"15",targetExpPayRate:"65",lossBizRatio:"5",lossBizPremium:"45",declarer:"刘芳",createTime:"2016/07/01",status:"待审批",latestApproval:"张三"},{org:"天津分公司",planVersionNo:"201801010011524",targetPremium:"450",targetCostRate:"95",targetChangeCostRate:"5",targetPayRate:"65",targetFeeRate:"15",targetExpPayRate:"65",lossBizRatio:"5",lossBizPremium:"45",declarer:"张强",createTime:"2016/05/01",status:"待申报",latestApproval:"张三"},{org:"上海分公司",planVersionNo:"201801010011524",targetPremium:"450",targetCostRate:"95",targetChangeCostRate:"5",targetPayRate:"65",targetFeeRate:"15",targetExpPayRate:"65",lossBizRatio:"5",lossBizPremium:"45",declarer:"李菲",createTime:"2016/03/01",status:"已审批",latestApproval:"张三"}],currentPage:1,pageSize:5}},computed:l()({currentData:function(){var t=[],e=(this.currentPage-1)*this.pageSize,a=this.currentPage*this.pageSize;a=a<=this.data.length?this.currentPage*this.pageSize:this.data.length;for(var r=e;r<a;++r)t.push(this.data[r]);return t}},Object(s.d)({tableHeader:function(t){return t.app.tableHeader}})),methods:{search:function(t,e){this.currentPage=t,this.pageSize=e,console.log(t)},approval:function(t){this.$router.push({path:"/admin/individual/approval/detail"})},detail:function(t){this.$router.push({path:"/admin/individual/query/detail"})},query:function(){this.currentPage=1}}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"form"},[a("el-form",{ref:"lifeTableForm",attrs:{"label-width":"100px",inline:!0,model:t.lifeTableApprove}},[a("el-form-item",{attrs:{label:"机构名称:",prop:"orgCode"}},[a("el-select",{attrs:{placeholder:"请选择机构"},model:{value:t.lifeTableApprove.orgCode,callback:function(e){t.$set(t.lifeTableApprove,"orgCode",e)},expression:"lifeTableApprove.orgCode"}},t._l(t.initData.companyList,function(e){return a("el-option",{key:e.code,attrs:{value:e.code,label:e.name}},[1===e.flag?a("span",[t._v(" ")]):2===e.flag?a("span",[t._v("   ")]):t._e(),t._v(" "),a("span",[t._v(t._s(e.name))])])}))],1),t._v(" "),a("el-form-item",{attrs:{label:"申报状态:",prop:"status"}},[a("el-select",{attrs:{placeholder:"全部"},model:{value:t.lifeTableApprove.status,callback:function(e){t.$set(t.lifeTableApprove,"status",e)},expression:"lifeTableApprove.status"}},t._l(t.statusList,function(t){return a("el-option",{key:t.statusCode,attrs:{label:t.statusName,value:t.statusCode}})}))],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.query}},[t._v("查询")])],1)],1)],1),t._v(" "),a("el-tabs",{attrs:{type:"border-card"},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"单车",name:"1"}},[a("div",{staticClass:"data"},[a("div",{staticClass:"table"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.currentData,stripe:"","header-cell-style":t.tableHeader}},[t._l(t.columns,function(e){return["status"!==e.prop?a("el-table-column",{key:e.prop,attrs:{"header-align":"center",prop:e.prop,"min-width":e.width,label:e.label,align:e.align}}):a("el-table-column",{key:e.prop,attrs:{"header-align":"center","min-width":e.width,label:e.label,align:e.align?e.align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return["已审批"===e.row.status?a("el-tag",{attrs:{type:"success"}},[t._v(t._s(e.row.status))]):"待审批"===e.row.status?a("el-tag",{attrs:{type:"warning"}},[t._v(t._s(e.row.status))]):a("el-tag",[t._v(t._s(e.row.status))])]}}])})]}),t._v(" "),a("el-table-column",{attrs:{"header-align":"center",align:"center",label:"操作","min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(e){return["待审批"===e.row.status?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.approval(e.row.version)}}},[t._v("审批")]):a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.detail(e.row)}}},[t._v("查看")])]}}])})],2)],1),t._v(" "),a("communal-pagination",{attrs:{currentPage:t.currentPage,pageSize:t.pageSize,total:t.data.length},on:{search:t.search}})],1)]),t._v(" "),a("el-tab-pane",{attrs:{label:"车队协议",name:"2"}},[a("div",{staticClass:"data"},[a("div",{staticClass:"table"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.currentData,stripe:"","header-cell-style":t.tableHeader}},[t._l(t.columns,function(e){return["status"!==e.prop?a("el-table-column",{key:e.prop,attrs:{"header-align":"center",prop:e.prop,"min-width":e.width,label:e.label,align:e.align}}):a("el-table-column",{key:e.prop,attrs:{"header-align":"center","min-width":e.width,label:e.label,align:e.align?e.align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return["已审批"===e.row.status?a("el-tag",{attrs:{type:"success"}},[t._v(t._s(e.row.status))]):"待审批"===e.row.status?a("el-tag",{attrs:{type:"warning"}},[t._v(t._s(e.row.status))]):a("el-tag",[t._v(t._s(e.row.status))])]}}])})]}),t._v(" "),a("el-table-column",{attrs:{"header-align":"center",align:"center",label:"操作","min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(e){return["待审批"===e.row.status?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.approval(e.row.version)}}},[t._v("审批")]):a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.detail(e.row)}}},[t._v("查看")])]}}])})],2)],1),t._v(" "),a("communal-pagination",{attrs:{currentPage:t.currentPage,pageSize:t.pageSize,total:t.data.length},on:{search:t.search}})],1)]),t._v(" "),a("el-tab-pane",{attrs:{label:"代理协议",name:"3"}},[a("div",{staticClass:"data"},[a("div",{staticClass:"table"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.currentData,stripe:"","header-cell-style":t.tableHeader}},[t._l(t.columns,function(e){return["status"!==e.prop?a("el-table-column",{key:e.prop,attrs:{"header-align":"center",prop:e.prop,"min-width":e.width,label:e.label,align:e.align}}):a("el-table-column",{key:e.prop,attrs:{"header-align":"center","min-width":e.width,label:e.label,align:e.align?e.align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return["已审批"===e.row.status?a("el-tag",{attrs:{type:"success"}},[t._v(t._s(e.row.status))]):"待审批"===e.row.status?a("el-tag",{attrs:{type:"warning"}},[t._v(t._s(e.row.status))]):a("el-tag",[t._v(t._s(e.row.status))])]}}])})]}),t._v(" "),a("el-table-column",{attrs:{"header-align":"center",align:"center",label:"操作","min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(e){return["待审批"===e.row.status?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.approval(e.row.version)}}},[t._v("审批")]):a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.detail(e.row)}}},[t._v("查看")])]}}])})],2)],1),t._v(" "),a("communal-pagination",{attrs:{currentPage:t.currentPage,pageSize:t.pageSize,total:t.data.length},on:{search:t.search}})],1)])],1)],1)},staticRenderFns:[]};var u=a("VU/8")(o,n,!1,function(t){a("uv1V")},"data-v-36e6827c",null);e.default=u.exports}});