(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d228c74"],{db44:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("page-view",{attrs:{affix:"",title:t.postToStage.title?t.postToStage.title:"新文章"}},[a("template",{slot:"extra"},[a("a-space",[a("ReactiveButton",{attrs:{type:"danger",loading:t.draftSaving,errored:t.draftSavederrored,text:"保存草稿",loadedText:"保存成功",erroredText:"保存失败"},on:{click:function(e){return t.handleSaveDraft(!1)},callback:function(e){t.draftSavederrored=!1}}}),a("a-button",{attrs:{loading:t.previewSaving},on:{click:t.handlePreview}},[t._v("预览")]),a("a-button",{attrs:{type:"primary"},on:{click:function(e){t.postSettingVisible=!0}}},[t._v("发布")]),a("a-button",{attrs:{type:"dashed"},on:{click:function(e){t.attachmentDrawerVisible=!0}}},[t._v("附件库")])],1)],1),a("a-row",{attrs:{gutter:12}},[a("a-col",{attrs:{span:24}},[a("div",{staticClass:"mb-4"},[a("a-input",{staticStyle:{width:"85%","margin-right":"15px"},attrs:{size:"large",placeholder:"请输入文章地址"},model:{value:t.linkurl,callback:function(e){t.linkurl=e},expression:"linkurl"}}),a("a-button",{attrs:{type:"primary"},on:{click:t.transformUrl}},[t._v("👉一键转换")])],1),a("div",{staticClass:"mb-4"},[a("a-input",{attrs:{size:"large",placeholder:"请输入文章标题"},model:{value:t.postToStage.title,callback:function(e){t.$set(t.postToStage,"title",e)},expression:"postToStage.title"}})],1),a("div",{attrs:{id:"editor"}},[a("MarkdownEditor",{attrs:{originalContent:t.postToStage.originalContent},on:{onSaveDraft:function(e){return t.handleSaveDraft(!0)},onContentChange:t.onContentChange}})],1)])],1),a("PostSettingDrawer",{attrs:{post:t.postToStage,tagIds:t.selectedTagIds,categoryIds:t.selectedCategoryIds,metas:t.selectedMetas,visible:t.postSettingVisible},on:{close:function(e){t.postSettingVisible=!1},onRefreshPost:t.onRefreshPostFromSetting,onRefreshTagIds:t.onRefreshTagIdsFromSetting,onRefreshCategoryIds:t.onRefreshCategoryIdsFromSetting,onRefreshPostMetas:t.onRefreshPostMetasFromSetting,onSaved:t.handleRestoreSavedStatus}}),a("AttachmentDrawer",{model:{value:t.attachmentDrawerVisible,callback:function(e){t.attachmentDrawerVisible=e},expression:"attachmentDrawerVisible"}})],2)},o=[],i=a("1a86"),s=a("9158"),r=a("86db"),d=a("ed4e"),l=a("cd9f"),c=a("680a"),g=a("caf6"),u={mixins:[i["a"],i["b"]],components:{PostSettingDrawer:r["a"],AttachmentDrawer:d["a"],MarkdownEditor:l["a"],PageView:c["c"]},data:function(){return{attachmentDrawerVisible:!1,postSettingVisible:!1,postToStage:{},selectedTagIds:[],selectedCategoryIds:[],selectedMetas:[],contentChanges:0,draftSaving:!1,previewSaving:!1,draftSavederrored:!1,linkurl:"",title:"",originalContent:""}},beforeRouteEnter:function(t,e,a){var n=t.query.postId;a((function(t){n&&g["a"].get(n).then((function(e){var a=e.data.data;t.postToStage=a,t.selectedTagIds=a.tagIds,t.selectedCategoryIds=a.categoryIds,t.selectedMetas=a.metas}))}))},destroyed:function(){this.postSettingVisible&&(this.postSettingVisible=!1),this.attachmentDrawerVisible&&(this.attachmentDrawerVisible=!1),window.onbeforeunload&&(window.onbeforeunload=null)},beforeRouteLeave:function(t,e,a){var n=this.$createElement;this.postSettingVisible&&(this.postSettingVisible=!1),this.attachmentDrawerVisible&&(this.attachmentDrawerVisible=!1),this.contentChanges<=1?a():this.$confirm({title:"当前页面数据未保存，确定要离开吗？",content:function(){return n("div",{style:"color:red;"},["如果离开当面页面，你的数据很可能会丢失！"])},onOk:function(){a()},onCancel:function(){a(!1)}})},mounted:function(){window.onbeforeunload=function(t){return t=t||window.event,t&&(t.returnValue="当前页面数据未保存，确定要离开吗？"),"当前页面数据未保存，确定要离开吗？"}},methods:{transformUrl:function(){var t=this;g["a"].transformUrl(this.linkurl).then((function(e){t.$set(t.postToStage,"title",e.data.data.title),t.postToStage.originalContent=e.data.data.html}))},handleSaveDraft:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.$log.debug("Draft only: "+e),this.postToStage.status="DRAFT",this.postToStage.title||(this.postToStage.title=Object(s["a"])(new Date,"YYYY-MM-DD-HH-mm-ss")),this.draftSaving=!0,this.postToStage.id?e?g["a"].updateDraft(this.postToStage.id,this.postToStage.originalContent).then((function(){t.handleRestoreSavedStatus()})).catch((function(){t.draftSavederrored=!0})).finally((function(){setTimeout((function(){t.draftSaving=!1}),400)})):g["a"].update(this.postToStage.id,this.postToStage,!1).then((function(e){t.postToStage=e.data.data,t.handleRestoreSavedStatus()})).catch((function(){t.draftSavederrored=!0})).finally((function(){setTimeout((function(){t.draftSaving=!1}),400)})):g["a"].create(this.postToStage,!1).then((function(e){t.postToStage=e.data.data,t.handleRestoreSavedStatus()})).catch((function(){t.draftSavederrored=!0})).finally((function(){setTimeout((function(){t.draftSaving=!1}),400)}))},handlePreview:function(){var t=this;this.postToStage.status="DRAFT",this.postToStage.title||(this.postToStage.title=Object(s["a"])(new Date,"YYYY-MM-DD-HH-mm-ss")),this.previewSaving=!0,this.postToStage.id?g["a"].update(this.postToStage.id,this.postToStage,!1).then((function(e){t.$log.debug("Updated post",e.data.data),g["a"].preview(t.postToStage.id).then((function(e){window.open(e.data,"_blank"),t.handleRestoreSavedStatus()})).finally((function(){setTimeout((function(){t.previewSaving=!1}),400)}))})):g["a"].create(this.postToStage,!1).then((function(e){t.$log.debug("Created post",e.data.data),t.postToStage=e.data.data,g["a"].preview(t.postToStage.id).then((function(e){window.open(e.data,"_blank"),t.handleRestoreSavedStatus()})).finally((function(){setTimeout((function(){t.previewSaving=!1}),400)}))}))},handleRestoreSavedStatus:function(){this.contentChanges=0},onContentChange:function(t){this.contentChanges++,this.postToStage.originalContent=t},onRefreshPostFromSetting:function(t){this.postToStage=t},onRefreshTagIdsFromSetting:function(t){this.selectedTagIds=t},onRefreshCategoryIdsFromSetting:function(t){this.selectedCategoryIds=t},onRefreshPostMetasFromSetting:function(t){this.selectedMetas=t}}},h=u,f=a("2877"),S=Object(f["a"])(h,n,o,!1,null,null,null);e["default"]=S.exports}}]);