"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[652],{277:function(n,e,t){t.d(e,{Hx:function(){return f},bI:function(){return s},eP:function(){return p},uV:function(){return l},wr:function(){return u}});var r=t(5861),a=t(7757),i=t.n(a),o=t(1243),c="71d3c9744b233f536e82db6c03830bc2";o.Z.defaults.baseURL="https://api.themoviedb.org/3";var u=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/trending/all/day?api_key=".concat(c,"&page=").concat(e));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(i().mark((function n(e,t){var r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=new URLSearchParams({api_key:c,language:"en-US",page:t,include_adult:!1,query:e}),n.next=3,o.Z.get("/search/movie?".concat(r));case 3:return a=n.sent,n.abrupt("return",a.data);case 5:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(e,"?api_key=").concat(c,"&language=en-US'"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(e,"/credits?api_key=").concat(c,"&language=en-US'"));case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=new URLSearchParams({api_key:c,language:"en-US",page:1}),n.next=3,o.Z.get("/movie/".concat(e,"/reviews?").concat(t));case 3:return r=n.sent,n.abrupt("return",r.data.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},9467:function(n,e,t){t.d(e,{Z:function(){return p}});var r,a,i=t(168),o=t(6444),c=o.ZP.div(r||(r=(0,i.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]))),u=o.ZP.p(a||(a=(0,i.Z)(["\n  font-size: 15px;\n  line-height: 1.2;\n  color: #000000;\n"]))),s=t(184),p=function(n){var e=n.title;return(0,s.jsx)(c,{children:(0,s.jsx)(u,{children:e})})}},5827:function(n,e,t){t.d(e,{Z:function(){return c}});var r,a=t(168),i=t(6444).ZP.button(r||(r=(0,a.Z)(["\n  display: block;\n  padding: 8px 16px;\n  margin: 20px auto;\n\n  color: black;\n  background-color: inherit;\n  font-weight: 500;\n  text-decoration: none;\n  cursor: pointer;\n\n  border-radius: 4px;\n  border: 1px solid black;\n  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n\n  :hover,\n  :focus {\n    color: white;\n    background-color: #121110;\n  }\n"]))),o=t(184),c=function(n){var e=n.onClick;return(0,o.jsx)(i,{type:"button",onClick:e,"aria-label":"Load More",children:"Load More..."})}},5865:function(n,e,t){t.d(e,{Z:function(){return Z}});var r,a,i,o,c,u=t(5984),s=t(7689),p=t(168),l=t(1087),f=t(6444),d=f.ZP.li(r||(r=(0,p.Z)(["\n  overflow: hidden;\n  border-radius: 10px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  :hover {\n    transform: scale(1.025);\n  }\n"]))),x=(0,f.ZP)(l.rU)(a||(a=(0,p.Z)(["\n  font-weight: 600;\n  font-size: 15px;\n  line-height: 1.2;\n  color: #000000;\n  text-decoration: none;\n"]))),h=f.ZP.img(i||(i=(0,p.Z)(["\n  width: 100%;\n  height: 480px;\n  object-fit: cover;\n\n"]))),g=f.ZP.p(o||(o=(0,p.Z)(["\n  padding: 5px 10px;\n  margin: 0;\n"]))),m=t(184),v=function(n){var e=n.id,t=n.title,r=n.name,a=n.image,i=(0,s.TH)(),o="/"===i.pathname?"movies":i.pathname;return(0,m.jsx)(d,{children:(0,m.jsxs)(x,{to:"".concat(o,"/").concat(e),state:{from:i},children:[(0,m.jsx)(h,{src:"https://image.tmdb.org/t/p/original"+a,alt:null!==t&&void 0!==t?t:r}),(0,m.jsx)(g,{children:null!==t&&void 0!==t?t:r})]})})},b=f.ZP.ul(c||(c=(0,p.Z)(["\n  display: grid;\n  max-width: calc(100vw - 30px);\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  grid-gap: 32px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 20px 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),Z=function(n){var e=n.movies;return(0,m.jsx)(b,{children:e.map((function(n){var e=n.id,t=n.title,r=n.name,a=n.poster_path;return(0,m.jsx)(v,{id:e,title:t,name:r,image:a},(0,u.x0)(6))}))})}},4814:function(n,e,t){t.d(e,{Z:function(){return c}});var r,a=t(168),i=t(6444).ZP.h1(r||(r=(0,a.Z)(["\n  font-size: 28px;\n  line-height: 1.16;\n  letter-spacing: 0.03em;\n  margin-bottom: 15px;\n  text-align: center;\n"]))),o=t(184),c=function(n){var e=n.title,t=n.children;return(0,o.jsxs)("section",{children:[e&&(0,o.jsx)(i,{children:e}),t]})}},7652:function(n,e,t){t.r(e),t.d(e,{default:function(){return S}});var r,a,i,o=t(3433),c=t(5861),u=t(9439),s=t(7757),p=t.n(s),l=t(277),f=t(9467),d=t(5827),x=t(5865),h=t(2791),g=t(3313),m=t(168),v=t(6444),b=v.ZP.form(r||(r=(0,m.Z)(["\n  display: flex;\n  justify-content: center;\n  padding: 15px 20px;\n"]))),Z=v.ZP.input(a||(a=(0,m.Z)(["\n  width: 480px;\n  height: 35px;\n  margin-right: 5px;\n\n  display: inline-block;\n  font: inherit;\n  border: 1px solid #121110;\n  outline: none;\n  padding: 8px 16px;\n  border-radius: 4px;\n"]))),w=v.ZP.button(i||(i=(0,m.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid #121110;\n  background-color: inherit;\n  font-weight: 500;\n  line-height: 1.15;\n\n  padding: 8px 16px;\n  border-radius: 4px;\n  cursor: pointer;\n  outline: none;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  :hover,\n  :focus {\n    background-color: #121110;\n    color: #fff;\n  }\n"]))),y=t(184),k=function(n){var e=n.onSubmit,t=(0,h.useState)(""),r=(0,u.Z)(t,2),a=r[0],i=r[1];return(0,y.jsxs)(b,{onSubmit:function(n){n.preventDefault();var t=a.trim();t?e(t):alert("The search field cannot be empty. Please, enter movie name")},children:[(0,y.jsx)(Z,{type:"search",name:"search",autoComplete:"off",placeholder:"Enter movie name",value:a,onChange:function(n){var e=n.target.value;i(e)}}),(0,y.jsx)(w,{type:"submit","aria-label":"Search",children:(0,y.jsx)(g.jRj,{})})]})},j=t(4814),P=t(1087),S=function(){var n=(0,h.useState)([]),e=(0,u.Z)(n,2),t=e[0],r=e[1],a=(0,h.useState)(1),i=(0,u.Z)(a,2),s=i[0],g=i[1],m=(0,h.useState)(1),v=(0,u.Z)(m,2),b=v[0],Z=v[1],w=(0,h.useState)(!1),S=(0,u.Z)(w,2),_=S[0],U=S[1],C=(0,P.lr)(),z=(0,u.Z)(C,2),L=z[0],R=z[1];(0,h.useEffect)((function(){U(!1);var n=L.get("query");if(n){var e=function(){var e=(0,c.Z)(p().mark((function e(){var t,a,i;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,l.bI)(n,s);case 3:t=e.sent,a=t.results,i=t.total_pages,0===a.length&&U(!0),r((function(n){return[].concat((0,o.Z)(n),(0,o.Z)(a))})),Z(i),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),U(!0),console.error(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();e()}else r([])}),[s,L]);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(k,{onSubmit:function(n){r([]),g(1),Z(1),R({query:n})}}),t.length>0&&(0,y.jsxs)(j.Z,{title:"List of movies by searchword: ",children:[(0,y.jsx)(x.Z,{movies:t}),s<b&&(0,y.jsx)(d.Z,{onClick:function(){return g((function(n){return n+1}))}})]}),_&&(0,y.jsx)(f.Z,{title:"Something went wrong :(. Please, tray again."})]})}}}]);
//# sourceMappingURL=652.cce54053.chunk.js.map