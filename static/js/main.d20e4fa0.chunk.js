(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(1),o=n.n(r),c=n(6),s=n.n(c),i=(n(15),n(9)),u=n(2),l=n.p+"static/media/header__logo.a307e1c4.svg";var p=function(){return Object(a.jsx)("header",{className:"header",children:Object(a.jsx)("img",{className:"header__logo",src:l,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f"})})},d=n.p+"static/media/profile__editButton.a1892ea7.svg",m=n.p+"static/media/profile__avatarButton.a086f758.svg",j=n.p+"static/media/card__deleteButtonImage.a274c87c.svg",_=o.a.createContext();var f=function(e){var t=e.onCardClick,n=e.onCardLike,r=e.onCardDelete,c=e.card,s=c.name,i=void 0===s?"":s,u=c.link,l=void 0===u?"":u,p=c.likes,d=void 0===p?[]:p,m=o.a.useContext(_),f=c.owner._id===m._id,h="card__deleteButton".concat(f?"":" card__deleteButton_hidden"),b=d.some((function(e){return e._id===m._id})),O="card__likeButton".concat(b?" card__likeButton_active":"");return Object(a.jsxs)("li",{className:"card",children:[Object(a.jsx)("button",{className:h,onClick:function(){return r(c)},children:Object(a.jsx)("img",{className:"card__deleteButtonImage",src:j,alt:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})}),Object(a.jsx)("div",{className:"card__imageContainer",style:{backgroundImage:"url('".concat(l,"')")},onClick:function(){return t(c)}}),Object(a.jsx)("p",{className:"card__title",children:i}),Object(a.jsx)("button",{className:O,onClick:function(){return n(c)}}),Object(a.jsx)("p",{className:"card__likeCounter",children:d.length})]})};var h=function(e){var t=e.onEditAvatar,n=e.onEditProfile,r=e.onAddPlace,c=e.cards,s=e.onCardClick,i=e.onCardLike,u=e.onCardDelete,l=o.a.useContext(_),p=l.name,j=l.about,h=l.avatar;return Object(a.jsxs)("main",{className:"content",children:[Object(a.jsxs)("section",{className:"profile",children:[Object(a.jsx)("div",{className:"profile__avatar",style:{backgroundImage:"url('".concat(h,"')")}}),Object(a.jsx)("button",{className:"profile__avatarButton",onClick:t,children:Object(a.jsx)("img",{src:m,alt:"\u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c"})}),Object(a.jsx)("h1",{className:"profile__name",children:p}),Object(a.jsx)("p",{className:"profile__about",children:j}),Object(a.jsx)("button",{className:"profile__openPopupButton",onClick:n,children:Object(a.jsx)("img",{className:"profile__openPopupButtonImage",src:d,alt:"\u041e\u0442\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"})}),Object(a.jsx)("button",{className:"profile__addButton",onClick:r,children:"+"})]}),Object(a.jsx)("ul",{className:"cards",children:c.map((function(e){return Object(a.jsx)(f,{card:e,onCardClick:s,onCardLike:i,onCardDelete:u},e._id)}))})]})};var b=function(){return Object(a.jsx)("footer",{className:"footer",children:Object(a.jsx)("p",{className:"footer__copyright",children:"\xa9 2020 Mesto Russia"})})},O=n.p+"static/media/popup__closeButtonImage.153147d3.svg";var x=function(e){var t=e.buttonTitle,n=e.onClose,r=e.children,o=e.name,c=e.title,s=e.isOpen,i=e.onSubmit;return Object(a.jsxs)("div",{className:"popup popup_type_".concat(o).concat(s?" popup_opened":""),children:[Object(a.jsx)("button",{className:"popup__closeButton",onClick:n,children:Object(a.jsx)("img",{className:"popup__closeButtonImage",src:O,alt:"\u0437\u0430\u043a\u0440\u044b\u0442\u044c"})}),Object(a.jsx)("form",{className:"popup__form",onSubmit:i,children:Object(a.jsxs)("fieldset",{className:"popup__formFieldSet",name:o,children:[Object(a.jsx)("legend",{className:"popup__formTitle",children:c}),r,Object(a.jsx)("input",{type:"submit",title:t,value:t,className:"popup__formSubmitButton"})]})})]})};var v=function(e){var t=e.isOpen,n=e.onClose,r=e.onUpdateUser,c=o.a.useContext(_),s=o.a.useState(""),i=Object(u.a)(s,2),l=i[0],p=i[1],d=o.a.useState(""),m=Object(u.a)(d,2),j=m[0],f=m[1];return o.a.useEffect((function(){p(c.name),f(c.about)}),[c]),Object(a.jsxs)(x,{name:"editProfile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u041f\u0440\u043e\u0444\u0438\u043b\u044c",buttonTitle:"C\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),r({name:l,about:j})},children:[Object(a.jsxs)("label",{className:"popup__formField",children:[Object(a.jsx)("input",{type:"text",minLength:"2",maxLength:"40",required:!0,title:"\u0418\u043c\u044f",placeholder:"\u0418\u043c\u044f",id:"profileNameInput",className:"popup__formInputText popup__formInputText_firstInput",value:l,onChange:function(e){return function(e){return p(e.target.value)}(e)}}),Object(a.jsx)("span",{className:"popup__formInputError",id:"profileNameInputError"})]}),Object(a.jsxs)("label",{className:"popup__formField",children:[Object(a.jsx)("input",{type:"text",minLength:"2",maxLength:"200",required:!0,title:"\u041e \u0441\u0435\u0431\u0435",placeholder:"\u041e \u0441\u0435\u0431\u0435",id:"profileAboutInput",className:"popup__formInputText popup__formInputText_secondInput",value:j,onChange:function(e){return function(e){return f(e.target.value)}(e)}}),Object(a.jsx)("span",{className:"popup__formInputError",id:"profileAboutInputError"})]})]})};var g=function(e){var t=e.isOpen,n=e.onClose,r=e.onUpdateAvatar,c=o.a.useState(""),s=Object(u.a)(c,2),i=s[0],l=s[1];return o.a.useEffect((function(){l("")}),[n]),Object(a.jsx)(x,{name:"editAvatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0410\u0432\u0430\u0442\u0430\u0440",buttonTitle:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),r({avatar:i})},children:Object(a.jsxs)("label",{className:"popup__formField",children:[Object(a.jsx)("input",{type:"url",required:!0,title:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",id:"avatarUrlInput",className:"popup__formInputText",value:i,onChange:function(e){return function(e){return l(e.target.value)}(e)}}),Object(a.jsx)("span",{className:"popup__formInputError",id:"avatarUrlInputError"})]})})};var C=function(e){var t=e.isOpen,n=e.onClose,r=e.onAddPlace,c=o.a.useState(""),s=Object(u.a)(c,2),i=s[0],l=s[1],p=o.a.useState(""),d=Object(u.a)(p,2),m=d[0],j=d[1];return o.a.useEffect((function(){l(""),j("")}),[n]),Object(a.jsxs)(x,{name:"addCard",title:"\u041d\u043e\u0432\u043e\u0435 \u041c\u0435\u0441\u0442\u043e",buttonTitle:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),r({name:i,link:m})},children:[Object(a.jsxs)("label",{className:"popup__formField",children:[Object(a.jsx)("input",{type:"text",minLength:"1",maxLength:"30",required:!0,title:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",id:"placeNameInput",className:"popup__formInputText popup__formInputText_firstInput",value:i,onChange:function(e){return function(e){return l(e.target.value)}(e)}}),Object(a.jsx)("span",{className:"popup__formInputError",id:"placeNameInputError"})]}),Object(a.jsxs)("label",{className:"popup__formField",children:[Object(a.jsx)("input",{type:"url",required:!0,title:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",id:"placeUrlInput",className:"popup__formInputText popup__formInputText_secondInput",value:m,onChange:function(e){return function(e){return j(e.target.value)}(e)}}),Object(a.jsx)("span",{className:"popup__formInputError",id:"placeUrlInputError"})]})]})};var N=function(e){var t=e.card,n=(t=void 0===t?{link:"",name:""}:t).link,r=t.name,o=e.onClose;return Object(a.jsxs)("div",{className:"popup popup_type_image".concat(n&&r?" popup_opened":""),children:[Object(a.jsx)("button",{className:"popup__closeButton",onClick:o,children:Object(a.jsx)("img",{className:"popup__closeButtonImage",src:O,alt:"\u0437\u0430\u043a\u0440\u044b\u0442\u044c"})}),Object(a.jsxs)("figure",{className:"popup__lightBoxContainer",children:[Object(a.jsx)("img",{className:"popup__lightBoxImage",src:"".concat(n),alt:r}),Object(a.jsx)("figcaption",{className:"popup__lightBoxFigcaption",children:r})]})]})},I=n(7),k=n(8),E=new(function(){function e(t){var n=t.baseUrl,a=t.headers;Object(I.a)(this,e),this._baseUrl=n,this._headers=a}return Object(k.a)(e,[{key:"_getResponseData",value:function(e,t){return fetch("".concat(this._baseUrl).concat(e),t).then((function(e){return e.ok?e.json():Promise.reject(new Error("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status)))}))}},{key:"getInitialCards",value:function(){return this._getResponseData("/cards",{headers:this._headers})}},{key:"getUserInfo",value:function(){return this._getResponseData("/users/me/",{headers:this._headers})}},{key:"patchUserInfo",value:function(e){return this._getResponseData("/users/me/",{headers:this._headers,method:"PATCH",body:JSON.stringify(e)})}},{key:"patchUserAvatar",value:function(e){return this._getResponseData("/users/me/avatar",{headers:this._headers,method:"PATCH",body:JSON.stringify(e)})}},{key:"postNewCard",value:function(e){return this._getResponseData("/cards",{headers:this._headers,method:"POST",body:JSON.stringify(e)})}},{key:"deleteCard",value:function(e){return this._getResponseData("/cards/".concat(e),{method:"DELETE",headers:this._headers})}},{key:"like",value:function(e,t){var n;return n=t?"DELETE":"PUT",this._getResponseData("/cards/likes/".concat(e),{headers:this._headers,method:n})}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-16",headers:{authorization:"9f008da4-23f8-43a7-a6e3-8665fc1f4b68","Content-Type":"application/json"}});var y=function(){var e=o.a.useState({name:"",about:"",avatar:"",_id:""}),t=Object(u.a)(e,2),n=t[0],r=t[1],c=o.a.useState([]),s=Object(u.a)(c,2),l=s[0],d=s[1];o.a.useEffect((function(){Promise.all([E.getUserInfo(),E.getInitialCards()]).then((function(e){var t=Object(u.a)(e,2),n=t[0],a=t[1];r(n),d(a)})).catch((function(e){return new Error("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e))}))}),[]);var m=o.a.useState(!1),j=Object(u.a)(m,2),f=j[0],O=j[1],x=o.a.useState(!1),I=Object(u.a)(x,2),k=I[0],y=I[1],S=o.a.useState(!1),B=Object(u.a)(S,2),T=B[0],U=B[1],D=o.a.useState(void 0),P=Object(u.a)(D,2),A=P[0],L=P[1];function w(){y(!1),U(!1),O(!1),L(void 0)}return Object(a.jsx)(_.Provider,{value:n,children:Object(a.jsxs)("div",{className:"page",children:[Object(a.jsx)(p,{}),Object(a.jsx)(h,{onAddPlace:function(){y(!0)},onEditProfile:function(){O(!0)},onEditAvatar:function(){U(!0)},onCardClick:function(e){L(e)},onCardLike:function(e){var t=e.likes.some((function(e){return e._id===n._id}));E.like(e._id,t).then((function(t){var n=l.map((function(n){return n._id===e._id?t:n}));d(n)})).catch((function(e){return new Error("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e))}))},onCardDelete:function(e){E.deleteCard(e._id).then((function(){var t=l.filter((function(t){return t._id!==e._id}));d(t)})).catch((function(e){return new Error("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e))}))},cards:l,setCards:d}),Object(a.jsx)(b,{}),Object(a.jsx)(v,{isOpen:f,onClose:w,onUpdateUser:function(e){E.patchUserInfo(e).then((function(e){r(e),w()})).catch((function(e){return new Error("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e))}))}}),Object(a.jsx)(g,{isOpen:T,onClose:w,onUpdateAvatar:function(e){E.patchUserAvatar(e).then((function(e){r(e),w()})).catch((function(e){return new Error("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e))}))}}),Object(a.jsx)(C,{isOpen:k,onClose:w,onAddPlace:function(e){E.postNewCard(e).then((function(e){d([e].concat(Object(i.a)(l))),w()})).catch((function(e){return new Error("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e))}))}}),Object(a.jsx)(N,{card:A,onClose:w})]})})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),o(e),c(e)}))};s.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(y,{})}),document.getElementById("root")),S()}},[[16,1,2]]]);
//# sourceMappingURL=main.d20e4fa0.chunk.js.map