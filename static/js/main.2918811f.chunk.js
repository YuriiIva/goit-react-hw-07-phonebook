(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),i=c(3),r=c.n(i),o=(c(13),c(4)),s=c(5),d=c(6),l=c(8),b=c(7),j=c(0),u=function(e){var t=e.title,c=e.children;return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:t}),c]})},h=function(e){var t=e.options,c=e.onLeaveFeedback;return Object(j.jsx)(u,{title:"Please leave feedback",children:Object.keys(t).map((function(e){return Object(j.jsx)("button",{onClick:function(){return c(e)},type:"button",style:{textTransform:"capitalize"},children:e},e)}))})},O=function(e){var t=e.good,c=e.neutral,n=e.bad,a=e.total,i=e.positivePercentage;return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"Statistics"}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsxs)("p",{children:["Good: ",t]})}),Object(j.jsx)("li",{children:Object(j.jsxs)("p",{children:["Neutral: ",c]})}),Object(j.jsx)("li",{children:Object(j.jsxs)("p",{children:["Bad: ",n]})}),Object(j.jsx)("li",{children:Object(j.jsxs)("p",{children:["Total: ",a]})}),Object(j.jsx)("li",{children:Object(j.jsxs)("p",{children:["Positive feetback: ",i,"%"]})})]})]})},x=function(e){Object(l.a)(c,e);var t=Object(b.a)(c);function c(){var e;Object(s.a)(this,c);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.onLeaveFeedback=function(t){e.setState((function(e){return Object(o.a)({},t,e[t]+1)}))},e.countTotalFeedback=function(){return e.state.bad+e.state.neutral+e.state.good},e.countPositiveFeedbackPercentage=function(){return e.countTotalFeedback()&&Math.round(e.state.good/e.countTotalFeedback()*100)},e}return Object(d.a)(c,[{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(h,{options:this.state,onLeaveFeedback:this.onLeaveFeedback}),Object(j.jsx)(O,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})]})}}]),c}(n.Component),v=x;r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(v,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.2918811f.chunk.js.map