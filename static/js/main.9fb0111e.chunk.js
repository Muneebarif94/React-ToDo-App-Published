(this["webpackJsonpto-do-app"]=this["webpackJsonpto-do-app"]||[]).push([[0],{16:function(e,t,a){e.exports=a(30)},21:function(e,t,a){},22:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},23:function(e,t,a){},24:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(3),o=a.n(s),r=(a(21),a(13)),c=a(7),l=a(8),u=a(14),m=a(9),d=a(2),h=a(15),p=(a(22),a(23),a(24),a(10)),f=a(11);var v=function(e){var t=e.items.map((function(t){return i.a.createElement("div",{className:"list",key:t.key},i.a.createElement("p",null,i.a.createElement("input",{type:"text",id:t.key,value:t.text,onChange:function(a){e.setUpdate(a.target.value,t.key)}}),i.a.createElement("span",null,i.a.createElement(p.a,{className:"faicons",onClick:function(){e.deleteItem(t.key)},icon:"trash"}))))}));return i.a.createElement("div",null,i.a.createElement(f.a,{duration:300,easing:"ease-in-out"},t))},k=a(4),y=a(12);k.b.add(y.a);var b=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={items:[],currentItem:{text:"",key:""}},a.addItem=a.addItem.bind(Object(d.a)(a)),a.handleInput=a.handleInput.bind(Object(d.a)(a)),a.deleteItem=a.deleteItem.bind(Object(d.a)(a)),a.setUpdate=a.setUpdate.bind(Object(d.a)(a)),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"addItem",value:function(e){e.preventDefault();var t=this.state.currentItem;if(""!==t.text){var a=[].concat(Object(r.a)(this.state.items),[t]);this.setState({items:a,currentItem:{text:"",key:""}})}}},{key:"handleInput",value:function(e){this.setState({currentItem:{text:e.target.value,key:Date.now()}})}},{key:"deleteItem",value:function(e){var t=this.state.items.filter((function(t){return t.key!==e}));this.setState({items:t})}},{key:"setUpdate",value:function(e,t){console.log("items:"+this.state.items);var a=this.state.items;a.map((function(a){a.key===t&&(console.log(a.key+"    "+t),a.text=e)})),this.setState({items:a})}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("header",null,i.a.createElement("form",{id:"to-do-form",onSubmit:this.addItem},i.a.createElement("input",{type:"text",placeholder:"Enter task",value:this.state.currentItem.text,onChange:this.handleInput}),i.a.createElement("button",{type:"submit"},"Add")),i.a.createElement("p",null,this.state.items.text),i.a.createElement(v,{items:this.state.items,deleteItem:this.deleteItem,setUpdate:this.setUpdate})))}}]),t}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.9fb0111e.chunk.js.map