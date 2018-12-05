webpackJsonp([78],{cuiM:function(e,a,r){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var l={name:"ChartMonthanalysis",components:{BaseTable:function(){return r.e(117).then(r.bind(null,"ss0d"))}},data:function(){return{activeName:"1",param:{org:"10000",carType:"b",insurceType:""},orgList:[{code:"01000",name:"北京分公司"},{code:"27000",name:"山西省分公司"},{code:"02000",name:"山东省分公司"},{code:"03000",name:"江苏省分公司"},{code:"04000",name:"黑龙江省分公司"},{code:"05000",name:"重庆市分公司"},{code:"06000",name:"河南省分公司"},{code:"07000",name:"上海市分公司"},{code:"08000",name:"广东省分公司"},{code:"09000",name:"深圳市分公司"},{code:"10000",name:"天津市分公司"},{code:"11000",name:"青岛分公司"},{code:"12000",name:"辽宁省分公司"},{code:"13000",name:"河北省分公司"},{code:"14000",name:"海南省分公司"},{code:"15000",name:"广西分公司"},{code:"16000",name:"湖南省分公司"},{code:"17000",name:"浙江省分公司"},{code:"18000",name:"贵州省分公司"},{code:"19000",name:"四川省分公司"},{code:"20000",name:"青海省分公司"},{code:"21000",name:"云南省分公司"},{code:"22000",name:"陕西省分公司"},{code:"23000",name:"湖北省分公司"},{code:"24000",name:"吉林省分公司"},{code:"25000",name:"新疆分公司"},{code:"26000",name:"宁波市分公司"},{code:"28000",name:"大连市分公司"},{code:"29000",name:"甘肃省分公司"},{code:"30000",name:"安徽省分公司"},{code:"31000",name:"江西省分公司"},{code:"32000",name:"福建省分公司"},{code:"33000",name:"内蒙古分公司"},{code:"34000",name:"厦门市分公司"},{code:"35000",name:"宁夏自治区分公司"},{code:"36000",name:"西藏自治区分公司"}],carTypeList:[{code:"a",name:"细分市场"},{code:"b",name:"家庭自用"},{code:"c",name:"非营业客车"},{code:"d",name:"非营业货车"},{code:"e",name:"营业客车"},{code:"f",name:"普通营业货车"},{code:"g",name:"三大货"},{code:"h",name:"特种车"},{code:"i",name:"营业货运"},{code:"j",name:"其他"}],insurceTypeList:[{code:"1",name:"车险整体"},{code:"2",name:"商业险"},{code:"3",name:"交强险"}],customerTypeList:[{code:"1",name:"新续转"},{code:"2",name:"新报"},{code:"3",name:"续保"},{code:"4",name:"转保"}],columns1:[{prop:"carType",label:"车型",width:"120"},{prop:"tr",label:"业务发展",align:"center",children:[{prop:"expOperation",width:120,label:"保单件数",align:"center"},{prop:"realOperation",width:120,label:"同比",align:"center"},{prop:"disOperation",width:120,label:"件均保费（元）",align:"center"},{prop:"a",width:120,label:"同比",align:"center"},{prop:"b",width:120,label:"保费收入（元）",align:"center"},{prop:"c",width:120,label:"同比",align:"center"},{prop:"f",width:120,label:"签单保费（元）",align:"center"},{prop:"d",width:120,label:"同比",align:"center"}]},{prop:"trwt",width:120,label:"承保条件",align:"center",children:[{prop:"ss",width:120,label:"业务占比",align:"center"},{prop:"ssss",width:120,label:"同比",align:"center"},{prop:"dasf",width:120,label:"新保占比",align:"center"},{prop:"fdafda",width:120,label:"同比",align:"center"}]},{prop:"rew4",width:120,label:"业务质量",align:"center",children:[{prop:"gf",width:120,label:"手续费",align:"center"},{prop:"da",width:120,label:"同比",align:"center"},{prop:"dfsaf",width:120,label:"签单折扣",align:"center"},{prop:"fag",width:120,label:"同比",align:"center"}]},{prop:"r42425",width:120,label:"业务质量",align:"center",children:[{prop:"das",width:120,label:"日历年赔付率",align:"center"},{prop:"fdas",width:120,label:"同比",align:"center"},{prop:"fdac",width:120,label:"17保单赔付率（进展至201806）",align:"center"},{prop:"fdad",width:120,label:"18年保单赔付率（进展至201806）",align:"center"},{prop:"zcxvc",width:120,label:"同比",align:"center"},{prop:"xds",width:120,label:"满期出险率",align:"center"},{prop:"gfdsg",width:120,label:"同比",align:"center"},{prop:"jf",width:120,label:"案均赔款（已决+未决）",align:"center"},{prop:"mvb",width:120,label:"同比",align:"center"},{prop:"jhf",width:120,label:"已决案均",align:"center"},{prop:"nv",width:120,label:"同比",align:"center"},{prop:"jhfn",width:120,label:"未决案均",align:"center"},{prop:"uf",width:120,label:"同比",align:"center"}]}],data1:[],columns2:[{prop:"org",label:"机构",width:"120"},{prop:"tr",label:"业务发展",align:"center",children:[{prop:"expOperation",width:120,label:"保单件数",align:"center"},{prop:"realOperation",width:120,label:"同比",align:"center"},{prop:"disOperation",width:120,label:"件均保费（元）",align:"center"},{prop:"a",width:120,label:"同比",align:"center"},{prop:"b",width:120,label:"保费收入（元）",align:"center"},{prop:"c",width:120,label:"同比",align:"center"},{prop:"f",width:120,label:"签单保费（元）",align:"center"},{prop:"d",width:120,label:"同比",align:"center"}]},{prop:"trwt",width:120,label:"承保条件",align:"center",children:[{prop:"ss",width:120,label:"业务占比",align:"center"},{prop:"ssss",width:120,label:"同比",align:"center"},{prop:"dasf",width:120,label:"新保占比",align:"center"},{prop:"fdafda",width:120,label:"同比",align:"center"}]},{prop:"rew4",width:120,label:"业务质量",align:"center",children:[{prop:"gf",width:120,label:"手续费",align:"center"},{prop:"da",width:120,label:"同比",align:"center"},{prop:"dfsaf",width:120,label:"签单折扣",align:"center"},{prop:"fag",width:120,label:"同比",align:"center"}]},{prop:"r42425",width:120,label:"业务质量",align:"center",children:[{prop:"das",width:120,label:"日历年赔付率",align:"center"},{prop:"fdas",width:120,label:"同比",align:"center"},{prop:"fdac",width:120,label:"17保单赔付率（进展至201806）",align:"center"},{prop:"fdad",width:120,label:"18年保单赔付率（进展至201806）",align:"center"},{prop:"zcxvc",width:120,label:"同比",align:"center"},{prop:"xds",width:120,label:"满期出险率",align:"center"},{prop:"gfdsg",width:120,label:"同比",align:"center"},{prop:"jf",width:120,label:"案均赔款（已决+未决）",align:"center"},{prop:"mvb",width:120,label:"同比",align:"center"},{prop:"jhf",width:120,label:"已决案均",align:"center"},{prop:"nv",width:120,label:"同比",align:"center"},{prop:"jhfn",width:120,label:"未决案均",align:"center"},{prop:"uf",width:120,label:"同比",align:"center"}]}],data2:[]}},methods:{query:function(){"1"===this.activeName?this.data1=[{carType:"细分市场"},{carType:"家庭自用"},{carType:"非营业客车"},{carType:"非营业货车"},{carType:"营业客车"},{carType:"普通营业货车"},{carType:"三大货"},{carType:"特种车"},{carType:"营业货运"},{carType:"其他"}]:"2"===this.activeName&&(this.data2=[{org:"北京分公司"},{org:"山西省分公司"},{org:"山东省分公司"},{org:"江苏省分公司"},{org:"黑龙江省分公司"},{org:"重庆市分公司"},{org:"河南省分公司"},{org:"上海市分公司"},{org:"广东省分公司"},{org:"深圳市分公司"},{org:"天津市分公司"},{org:"青岛分公司"},{org:"辽宁省分公司"},{org:"河北省分公司"},{org:"海南省分公司"},{org:"广西分公司"},{org:"湖南省分公司"},{org:"浙江省分公司"},{org:"贵州省分公司"},{org:"四川省分公司"},{org:"青海省分公司"},{org:"云南省分公司"},{org:"陕西省分公司"},{org:"湖北省分公司"},{org:"吉林省分公司"},{org:"新疆分公司"},{org:"宁波市分公司"},{org:"大连市分公司"},{org:"甘肃省分公司"},{org:"安徽省分公司"},{org:"江西省分公司"},{org:"福建省分公司"},{org:"内蒙古分公司"},{org:"厦门市分公司"},{org:"宁夏自治区分公司"},{org:"西藏自治区分公司"}])}}},t={render:function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("div",{staticClass:"container"},[r("div",{staticClass:"form"},[r("el-form",{ref:"",attrs:{"label-width":"120px",inline:!0,model:e.param}},[r("el-form-item",{directives:[{name:"show",rawName:"v-show",value:"1"===e.activeName,expression:"activeName==='1'"}],attrs:{label:"机构:",prop:"org"}},[r("el-select",{attrs:{placeholder:"请选择机构",size:"medium"},model:{value:e.param.org,callback:function(a){e.$set(e.param,"org",a)},expression:"param.org"}},e._l(e.orgList,function(e){return r("el-option",{key:e.code,attrs:{value:e.code,label:e.name}})}))],1),e._v(" "),r("el-form-item",{directives:[{name:"show",rawName:"v-show",value:"2"===e.activeName,expression:"activeName==='2'"}],attrs:{label:"车种:",prop:"carType"}},[r("el-select",{attrs:{size:"medium"},model:{value:e.param.carType,callback:function(a){e.$set(e.param,"carType",a)},expression:"param.carType"}},e._l(e.carTypeList,function(e){return r("el-option",{key:e.code,attrs:{value:e.code,label:e.name}})}))],1),e._v(" "),r("el-form-item",{attrs:{label:"险种:",prop:"insurceType"}},[r("el-select",{attrs:{size:"medium"},model:{value:e.param.insurceType,callback:function(a){e.$set(e.param,"insurceType",a)},expression:"param.insurceType"}},e._l(e.insurceTypeList,function(e){return r("el-option",{key:e.code,attrs:{value:e.code,label:e.name}})}))],1),e._v(" "),r("el-form-item",{attrs:{label:"新续转:",prop:"customerType"}},[r("el-select",{attrs:{size:"medium"},model:{value:e.param.customerType,callback:function(a){e.$set(e.param,"customerType",a)},expression:"param.customerType"}},e._l(e.customerTypeList,function(e){return r("el-option",{key:e.code,attrs:{value:e.code,label:e.name}})}))],1),e._v(" "),r("el-button",{attrs:{plain:"",size:"small",type:"primary"},on:{click:e.query}},[e._v("查询")])],1)],1),e._v(" "),r("el-tabs",{attrs:{type:"border-card"},model:{value:e.activeName,callback:function(a){e.activeName=a},expression:"activeName"}},[r("el-tab-pane",{attrs:{label:"分机构",name:"1"}},[r("div",{staticClass:"data"},[r("div",{staticClass:"table"},[r("base-table",{attrs:{columns:e.columns1,data:e.data1,rowKey:"id"}})],1)])]),e._v(" "),r("el-tab-pane",{attrs:{label:"分车种",name:"2"}},[r("div",{staticClass:"data"},[r("div",{staticClass:"table"},[r("base-table",{attrs:{columns:e.columns2,data:e.data2,rowKey:"id"}})],1)])])],1)],1)},staticRenderFns:[]};var n=r("VU/8")(l,t,!1,function(e){r("ualh")},"data-v-31b22306",null);a.default=n.exports},ualh:function(e,a){}});