webpackJsonp([123],{fWNb:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={name:"RecommendStep",props:{disabled:{type:Boolean,default:!1},step:{type:Number,default:0},steps:{type:Array,required:!0},maxStep:{type:String,default:"1"}},methods:{skipStep:function(t){var e=this.steps.find(function(e){return e.id===t});this.disabled?("1"===t&&this.maxStep<="3"||"2"===t&&this.maxStep<="3"||"3"===t&&this.maxStep<="3"||this.maxStep>3)&&this.$router.push(e.path):this.$router.push(e.path)}},watch:{step:function(t){console.log(t),this.$emit("stepId",t)}}},n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-steps",{staticStyle:{width:"90%",margin:"0 auto"},attrs:{"align-center":"",active:t.step}},t._l(t.steps,function(e){return i("el-step",{key:e.id,class:{abcabc:t.maxStep==e.id},attrs:{icon:e.icon,title:e.title},nativeOn:{click:function(i){t.skipStep(e.id)}}})}))},staticRenderFns:[]};var a=i("VU/8")(s,n,!1,function(t){i("n9WE")},"data-v-3260afbe",null);e.default=a.exports},n9WE:function(t,e){}});