(this["webpackJsonpprima-prova-react"]=this["webpackJsonpprima-prova-react"]||[]).push([[0],{20:function(t,e,n){},24:function(t,e,n){"use strict";n.r(e);var a=n(2),i=n.n(a),c=n(11),s=n(9),r=n(4),o=n(6),l=n(1),d=n(7),u=n(5),h=(n(20),n(8)),b=n.n(h),j=n(0),p=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){var t;return Object(r.a)(this,n),(t=e.call(this)).incrementaPunti=t.incrementaPunti.bind(Object(l.a)(t)),t.decrementaPunti=t.decrementaPunti.bind(Object(l.a)(t)),t}return Object(o.a)(n,[{key:"incrementaPunti",value:function(){var t=this.props,e=t.points;(0,t.onChange)(t.index,e+1)}},{key:"decrementaPunti",value:function(){var t=this.props,e=t.points;(0,t.onChange)(t.index,e-1)}},{key:"render",value:function(){var t=this.props,e=t.points,n=t.index,a=this.incrementaPunti,i=this.decrementaPunti;return Object(j.jsxs)("div",{className:"flipInX",children:[Object(j.jsx)("img",{src:".//developerJS.png",style:{width:"30%",verticalAlign:"middle"},alt:"PLAYER"}),Object(j.jsxs)("span",{children:["Player ",n+1," has:",e," Credits \xa0",Object(j.jsx)("button",{onClick:a,children:"+"}),Object(j.jsx)("button",{onClick:i,children:"-"})]})]})}}]),n}(i.a.Component);p.proptypes={points:b.a.number.isRequired,index:b.a.number.isRequired,onChange:b.a.func.isRequired};var O=p,m=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){var t;return Object(r.a)(this,n),(t=e.call(this)).state={total:10,points:[0]},t.onChange=t.onChange.bind(Object(l.a)(t)),t.onClickAddPlayer=t.onClickAddPlayer.bind(Object(l.a)(t)),t.onClickReset=t.onClickReset.bind(Object(l.a)(t)),t}return Object(o.a)(n,[{key:"onChange",value:function(t,e){var n=this.state,a=n.total,i=n.points,c=e>i[t]?a-1:a+1;if(e>=0&&c>=0){var r=Object(s.a)(i);r[t]=e,this.setState({points:r,total:c})}}},{key:"onClickAddPlayer",value:function(){var t=this.state.points,e=[].concat(Object(s.a)(t),[0]);this.setState({points:e})}},{key:"onClickReset",value:function(){this.setState({total:10,points:[0]})}},{key:"render",value:function(){var t=this,e=this.state,n=e.total,a=e.points,i=(this.onChange,a.length);return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("img",{className:"react",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnseKFid_MZaaEBMLLGN7TjXBvCkEj-7KM_g&usqp=CAU",alt:"React"}),Object(j.jsx)("h2",{children:"Score Board"}),Object(j.jsxs)("h3",{children:["CREDITS AVAILABLE:",n]}),a.map((function(e,n){return Object(j.jsx)(O,{index:n,points:e,onChange:t.onChange})})),Object(j.jsxs)("h3",{children:["lunghezza array:",i]}),Object(j.jsxs)("button",{onClick:this.onClickAddPlayer,className:"buttonNormal",children:["ADD Player"," "]}),Object(j.jsx)("button",{onClick:this.onClickReset,className:"buttonNormal",children:"Reset Players"})]})}}]),n}(i.a.Component),v=document.getElementById("root");Object(c.createRoot)(v).render(Object(j.jsx)(a.StrictMode,{children:Object(j.jsx)(m,{})}))}},[[24,1,2]]]);
//# sourceMappingURL=main.c06e2f7f.chunk.js.map