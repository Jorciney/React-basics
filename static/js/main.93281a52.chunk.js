(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(16)},16:function(e,t,a){"use strict";a.r(t);var r=a(3),n=a(4),i=a(8),l=a(5),s=a(9),c=a(0),o=a.n(c),u=a(6),d=a.n(u),m=a(7),v=(a(2),function(e){return o.a.createElement("header",{style:{background:"".concat(e.searchTerm?"#65D578":"#F78A1F")}},o.a.createElement("div",{className:"center"},o.a.createElement("div",{className:"flex"},o.a.createElement("div",null," JDC"),o.a.createElement("div",{className:"time"}," ",(new Date).toLocaleString(void 0,{hour:"2-digit",minute:"2-digit"}))),o.a.createElement("h2",null,"Welcome to JDC News"),o.a.createElement("input",{onChange:e.keywords})))}),f=function(e){var t=e.item;return o.a.createElement("div",{className:"center border-bottom"},o.a.createElement("h3",null,t.title),o.a.createElement("div",null,t.feed))},h=function(e){var t=e.news.map(function(e){return o.a.createElement("div",{key:e.id},o.a.createElement(f,{item:e}))});return o.a.createElement("div",null,t)},w=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(s)))).state={news:m,filteredNews:[],searchTerm:void 0},a.getKeyWord=function(e){var t=e.target.value,r=a.state.news.filter(function(e){return e.title.indexOf(t)>-1});return a.setState({filteredNews:r}),t},a}return Object(s.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){var e=this.state.filteredNews.length<=0?this.state.news:this.state.filteredNews;return o.a.createElement("div",{className:"lowText"},o.a.createElement(v,{searchTerm:this.state.searchTerm,keywords:this.getKeyWord}),o.a.createElement(h,{news:e}),o.a.createElement("div",null,this.state.searchTerm))}}]),t}(c.Component);d.a.render(o.a.createElement(w,null),document.querySelector("#root"))},2:function(e,t,a){},7:function(e){e.exports=[{id:1,title:"New ES6 pgrade available",feed:"Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet."},{id:2,title:"Creating a React native app",feed:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."},{id:3,title:"REACT developers wanted all over belgium",feed:"Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet."},{id:4,title:"Say what again. I dare you...",feed:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."}]}},[[10,1,2]]]);
//# sourceMappingURL=main.93281a52.chunk.js.map