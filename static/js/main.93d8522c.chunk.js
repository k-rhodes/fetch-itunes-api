(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(t,e,a){},17:function(t,e,a){},19:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),c=a(3),i=a.n(c),o=(a(15),a(4)),u=a(5),s=a(7),l=a(6),h=a(8),m=a(1),p=(a(17),function(t){function e(t){var a;return Object(o.a)(this,e),(a=Object(s.a)(this,Object(l.a)(e).call(this,t))).state={artistData:{},currentSearchQuery:""},a.getSearchInput=a.getSearchInput.bind(Object(m.a)(Object(m.a)(a))),a.setSearchOutput=a.setSearchOutput.bind(Object(m.a)(Object(m.a)(a))),a}return Object(h.a)(e,t),Object(u.a)(e,[{key:"getSearchInput",value:function(t){var e=encodeURI(t.target.value);this.state.currentSearchQuery=e}},{key:"setSearchOutput",value:function(t){var e=this;t.preventDefault(),fetch("https://cors.io/?https://itunes.apple.com/search?term=".concat(this.state.currentSearchQuery,"&limit=50")).then(function(t){t.json().then(function(t){e.setState({artistData:t.results})})})}},{key:"render",value:function(){var t=[];return this.state.artistData.length>=1&&this.state.artistData.forEach(function(e){t.push(r.a.createElement("a",{href:e.trackViewUrl,className:"anc"},r.a.createElement("li",{key:e.trackId},e.trackName," By: ",e.artistName)))}),r.a.createElement("div",{className:"react-wrapper"},r.a.createElement("header",null,r.a.createElement("h1",null,"Search iTunes for your favorite artist"),r.a.createElement("form",null,r.a.createElement("input",{type:"text",onChange:this.getSearchInput}),r.a.createElement("button",{onClick:this.setSearchOutput},"Search"))),r.a.createElement("ul",null,t))}}]),e}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},9:function(t,e,a){t.exports=a(19)}},[[9,2,1]]]);
//# sourceMappingURL=main.93d8522c.chunk.js.map