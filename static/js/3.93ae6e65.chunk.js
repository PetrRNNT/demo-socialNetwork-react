(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{291:function(t,e,a){"use strict";function n(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)){var a=[],n=!0,s=!1,r=void 0;try{for(var o,u=t[Symbol.iterator]();!(n=(o=u.next()).done)&&(a.push(o.value),!e||a.length!==e);n=!0);}catch(c){s=!0,r=c}finally{try{n||null==u.return||u.return()}finally{if(s)throw r}}return a}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}a.d(e,"a",(function(){return n}))},296:function(t,e,a){t.exports={descriptionBlock:"ProfileInfo_descriptionBlock__FjNSO",profileImage:"ProfileInfo_profileImage__3i469"}},297:function(t,e,a){t.exports={postsBlock:"MyPosts_postsBlock__26ChK",posts:"MyPosts_posts__nWs8O",addPostButton:"MyPosts_addPostButton__1Vk6A"}},298:function(t,e,a){t.exports={item:"Post_item__2Qbym"}},299:function(t,e,a){"use strict";a.r(e);var n=a(38),s=a(39),r=a(41),o=a(40),u=a(42),c=a(0),i=a.n(c),l=a(296),p=a.n(l),m=a(66),f=a(291),d=function(t){var e=Object(c.useState)(!1),a=Object(f.a)(e,2),n=a[0],s=a[1],r=Object(c.useState)(t.status),o=Object(f.a)(r,2),u=o[0],l=o[1];Object(c.useEffect)((function(){l(t.status)}),[t.status]);return i.a.createElement("div",null,!n&&i.a.createElement("div",null,i.a.createElement("span",{onDoubleClick:function(){s(!0)}},t.status||"######")),n&&i.a.createElement("div",null,i.a.createElement("input",{autoFocus:!0,onBlur:function(){s(!1),t.updateStatus(u)},onChange:function(t){l(t.currentTarget.value)},value:u})))},h=function(t){var e=t.profile,a=t.status,n=t.updateStatus;return e?i.a.createElement("div",null,i.a.createElement("div",{className:p.a.descriptionBlock},i.a.createElement("img",{src:e.photos.large}),i.a.createElement(d,{status:a,updateStatus:n}))):i.a.createElement(m.a,null)},b=a(92),E=a(297),v=a.n(E),g=a(298),P=a.n(g),y=function(t){return i.a.createElement("div",{className:P.a.item},i.a.createElement("img",{src:"https://clck.ru/McDxM"}),t.message,i.a.createElement("div",null,i.a.createElement("span",null,"Like")," ",t.likecounts))},j=a(86),O=a(125),S=a(44),k=a(25),_=Object(S.a)(10),w=function(t){return i.a.createElement("form",{onSubmit:t.handleSubmit},i.a.createElement("div",null,i.a.createElement(j.a,{name:"newPostText",component:k.b,validate:[S.c,_,S.b],placeholder:"Post message"})),i.a.createElement("div",null,i.a.createElement("button",{className:v.a.addPostButton},"Add post")))};w=Object(O.a)({form:"ProfileAddNewPostForm"})(w);var B=function(t){var e=t.posts.map((function(t){return i.a.createElement(y,{message:t.message,likecounts:t.likecounts,key:t.message})}));i.a.createRef();return i.a.createElement("div",{className:v.a.postsBlock},i.a.createElement("h3",null,"My post"),i.a.createElement(w,{onSubmit:function(e){t.addPost(e.newPostText)}}),i.a.createElement("div",{className:v.a.posts},e))},x=a(13),I=Object(x.b)((function(t){return{posts:t.profilePage.posts,newPostText:t.profilePage.newPostText}}),(function(t){return{addPost:function(e){t(Object(b.a)(e))}}}))(B),A=function(t){return i.a.createElement("div",null,i.a.createElement(h,{profile:t.profile,status:t.status,updateStatus:t.updateStatus}),i.a.createElement(I,null))},M=a(26),N=a(8),T=(a(116),function(t){function e(){return Object(n.a)(this,e),Object(r.a)(this,Object(o.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId;t||(t=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(t),this.props.getStatus(t)}},{key:"render",value:function(){return i.a.createElement(A,Object.assign({},this.props,{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),e}(i.a.Component));e.default=Object(N.d)(Object(x.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.userId,isAuth:t.auth.isAuth}}),{getUserProfile:b.d,getStatus:b.c,updateStatus:b.e}),M.f)(T)}}]);
//# sourceMappingURL=3.93ae6e65.chunk.js.map