webpackJsonp([76],{TgJo:function(t,i){},ydWB:function(t,i,p){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e={name:"BudgetNewbudger",components:{BaseTable:function(){return p.e(117).then(p.bind(null,"ss0d"))}},data:function(){return{data:[],columns:[{prop:"org",label:"渠道",width:"120"},{prop:"a",label:"标准保费",width:"150",isEdit:!0,type:"input"},{prop:"aa",label:"含NCD的保费",width:"150",isEdit:!0,type:"input"},{prop:"b",label:"含NCD、自主核保系数、自主渠道系数的保费",width:"150",isEdit:!0,type:"input"},{prop:"c",label:"NCD平均值",width:"150",isEdit:!0,type:"input"},{prop:"d",label:"自主核保系数平均值",width:"150",isEdit:!0,type:"input"},{prop:"e",label:"自主核保系数最低值",width:"180",isEdit:!0,type:"input"},{prop:"f",label:"自主核保系数最高值",width:"180",isEdit:!0,type:"input"},{prop:"g",label:"自主渠道系数平均值",width:"150",isEdit:!0,type:"input"},{prop:"h",label:"自主渠道系数最低值",width:"150",isEdit:!0,type:"input"},{prop:"i",label:"自主渠道系数最高值",width:"150",isEdit:!0,type:"input"},{prop:"j",label:"自主渠道系数平均值",width:"150",isEdit:!0,type:"input"},{prop:"k",label:"自主折扣系数最低值",width:"150",isEdit:!0,type:"input"},{prop:"l",label:"自主折扣系数最高值",width:"150",isEdit:!0,type:"input"},{prop:"m",label:"自主折扣系数平均值",width:"150",isEdit:!0,type:"input"},{prop:"n",label:"假设仍沿用行业旧基准费率的平均自主核保系数",width:"150",isEdit:!0,type:"input"},{prop:"o",label:"假设仍沿用行业旧基准费率的平均自主核保系数",width:"150",isEdit:!0,type:"input"},{prop:"p",label:"假设仍沿用行业旧基准费率的平均自主渠道系数",width:"150",isEdit:!0,type:"input"},{prop:"q",label:"假设仍沿用行业旧基准费率的平均自主折扣系数",width:"150",isEdit:!0,type:"input"},{prop:"r",label:"标准保费的保单年赔付率",width:"150",isEdit:!0,type:"input"},{prop:"s",label:"含NCD的保单年赔付率",width:"150",isEdit:!0,type:"input"},{prop:"t",label:"含NCD、自主核保系数的保单年赔付率",width:"150",isEdit:!0,type:"input"},{prop:"u",label:"含NCD、自主核保系数、自主渠道系数的保单年赔付率",width:"150",isEdit:!0,type:"input"},{prop:"v",label:"保单年费用率",width:"150",isEdit:!0,type:"input"},{prop:"w",label:"保单年单笔业务中介机构手续费率或个人代理人费用率最高值",width:"150",isEdit:!0,type:"input"},{prop:"x",label:"保单年中介机构手续费率或个人代理人费用率平均值",width:"150",isEdit:!0,type:"input"},{prop:"y",label:"保单年成本率",width:"150",isEdit:!0,type:"input"}],data21:[],columns21:[{prop:"carType",label:"车种",width:"120"},{prop:"a",label:"标准保费",width:"150",isEdit:!0,type:"input"},{prop:"b",label:"含NCD、自主核保系数、自主渠道系数的保费",width:"150",isEdit:!0,type:"input"},{prop:"c",label:"含NCD的保费",width:"150",isEdit:!0,type:"input"},{prop:"d",label:"自主核保系数平均值",width:"150",isEdit:!0,type:"input"},{prop:"e",label:"自主核保系数最低值",width:"180",isEdit:!0,type:"input"},{prop:"f",label:"自主核保系数最高值",width:"180",isEdit:!0,type:"input"},{prop:"g",label:"自主渠道系数平均值",width:"150",isEdit:!0,type:"input"},{prop:"h",label:"自主渠道系数最低值",width:"150",isEdit:!0,type:"input"},{prop:"i",label:"自主渠道系数最高值",width:"150",isEdit:!0,type:"input"},{prop:"j",label:"自主渠道系数平均值",width:"150",isEdit:!0,type:"input"},{prop:"k",label:"自主折扣系数最低值",width:"150",isEdit:!0,type:"input"},{prop:"l",label:"自主折扣系数最高值",width:"150",isEdit:!0,type:"input"},{prop:"m",label:"自主折扣系数平均值",width:"150",isEdit:!0,type:"input"},{prop:"n",label:"假设仍沿用行业旧基准费率的平均自主核保系数",width:"150",isEdit:!0,type:"input"},{prop:"o",label:"假设仍沿用行业旧基准费率的平均自主核保系数",width:"150",isEdit:!0,type:"input"},{prop:"p",label:"假设仍沿用行业旧基准费率的平均自主渠道系数",width:"150",isEdit:!0,type:"input"},{prop:"q",label:"假设仍沿用行业旧基准费率的平均自主折扣系数",width:"150",isEdit:!0,type:"input"},{prop:"r",label:"标准保费的保单年赔付率",width:"150",isEdit:!0,type:"input"},{prop:"s",label:"含NCD的保单年赔付率",width:"150",isEdit:!0,type:"input"},{prop:"t",label:"含NCD、自主核保系数的保单年赔付率",width:"150",isEdit:!0,type:"input"},{prop:"u",label:"含NCD、自主核保系数、自主渠道系数的保单年赔付率",width:"150",isEdit:!0,type:"input"},{prop:"v",label:"保单年费用率",width:"150",isEdit:!0,type:"input"},{prop:"w",label:"保单年单笔业务中介机构手续费率最高值",width:"150",isEdit:!0,type:"input"},{prop:"x",label:"保单年中介机构手续费率平均值",width:"150",isEdit:!0,type:"input"},{prop:"xy",label:"保单年单笔业务个人代理人费用率最高值",width:"150",isEdit:!0,type:"input"},{prop:"xx",label:"保单年个人代理人费用率平均值",width:"150",isEdit:!0,type:"input"},{prop:"y",label:"保单年成本率",width:"150",isEdit:!0,type:"input"}]}},methods:{query:function(){this.data=[{org:"传统直销"},{org:"新渠道直销"},{org:"电话、网络直销"},{org:"个人代理"},{org:"兼业代理"},{org:"专业代理"},{org:"经纪业务"}],this.data21=[{carType:"家庭自用车"},{carType:"营业客车"},{carType:"非营业客车"},{carType:"营业货车"},{carType:"非营业货车"},{carType:"其他"}]}}},l={render:function(){var t=this,i=t.$createElement,p=t._self._c||i;return p("div",{staticClass:"container"},[p("div",[p("el-button",{attrs:{plain:"",size:"small",type:"primary"},on:{click:t.query}},[t._v("导入")]),t._v(" "),p("el-button",{attrs:{plain:"",size:"small",type:"primary"}},[t._v("编辑")]),t._v(" "),p("el-button",{attrs:{plain:"",size:"small",type:"primary"}},[t._v("保存")])],1),t._v(" "),t._m(0),t._v(" "),p("div",{staticClass:"data table"},[p("el-tabs",{attrs:{type:"border-card"}},[p("el-tab-pane",{attrs:{label:"分渠道"}},[p("base-table",{attrs:{columns:t.columns,data:t.data,rowKey:"id",showSummary:!0}})],1),t._v(" "),p("el-tab-pane",{attrs:{label:"分车种"}},[p("base-table",{attrs:{columns:t.columns21,data:t.data21,rowKey:"id",showSummary:!0}})],1)],1)],1)])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",[i("br")])}]};var d=p("VU/8")(e,l,!1,function(t){p("TgJo")},"data-v-35361520",null);i.default=d.exports}});