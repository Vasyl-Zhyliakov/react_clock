(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,c){},14:function(t,e,c){"use strict";c.r(e);var n=c(3),a=c.n(n),o=c(4),s=c(5),i=c(7),l=c(6),r=c(1),d=c.n(r),m=(c(12),c(0));function u(){var t=Date.now().toString().slice(-4);return"Clock-".concat(t)}var h=function(t){Object(i.a)(c,t);var e=Object(l.a)(c);function c(){var t;Object(o.a)(this,c);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).state={today:new Date,clockName:"Clock-0",hasClock:!0},t.timerId=0,t.timerTwo=0,t}return Object(s.a)(c,[{key:"componentDidMount",value:function(){var t=this;this.timerId=window.setInterval((function(){t.setState({clockName:u()})}),3300),this.timerTwo=window.setInterval((function(){t.state.hasClock&&(t.setState({today:new Date}),console.info(t.state.today.toUTCString().slice(-12,-4)))}),1e3),document.addEventListener("contextmenu",(function(e){e.preventDefault(),t.setState({hasClock:!1})})),document.addEventListener("click",(function(){t.setState({hasClock:!0})}))}},{key:"componentDidUpdate",value:function(t){t.clockName!==this.state.clockName&&console.debug("Renamed from ".concat(t.clockName," to ").concat(this.state.clockName))}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.timerId),window.clearInterval(this.timerTwo)}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"React clock"}),this.state.hasClock&&Object(m.jsxs)("div",{className:"Clock",children:[Object(m.jsx)("strong",{className:"Clock__name",children:this.state.clockName})," time is ",Object(m.jsx)("span",{className:"Clock__time",children:this.state.today.toUTCString().slice(-12,-4)})]})]})}}]),c}(d.a.Component);a.a.render(Object(m.jsx)(h,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.d671c501.chunk.js.map