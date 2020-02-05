(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{1:function(t,e,n){t.exports={form:"ContactForm_form__30sDI",input:"ContactForm_input__21VKQ",button:"ContactForm_button__15jbv"}},14:function(t,e,n){t.exports=n(22)},22:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(11),o=n.n(r),i=n(13),l=n(2),u=n(3),s=n(7),m=n(5),h=n(6),b=n(12),f=n(4),p=n(1),v=n.n(p),g=function(t){function e(){var t,n;Object(l.a)(this,e);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(s.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(c)))).state={name:"",number:""},n.handleChange=function(t){var e=t.target,a=e.name,c=e.value;n.setState(Object(b.a)({},a,c))},n.onSubmit=function(t){var e=n.state,a=e.name,c=e.number;t.preventDefault(),n.props.onSubmit(a,c),n.setState({name:"",number:""})},n.handleChange=n.handleChange.bind(Object(f.a)(n)),n}return Object(h.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return c.a.createElement("form",{id:"form",className:v.a.form,onSubmit:this.onSubmit},c.a.createElement("label",null," Name",c.a.createElement("input",{type:"text",name:"name",value:e,className:v.a.input,onChange:this.handleChange,required:!0})),c.a.createElement("label",null," Number",c.a.createElement("input",{type:"tel",name:"number",value:n,className:v.a.input,onChange:this.handleChange,required:!0})),c.a.createElement("button",{form:"form",type:"submit",className:v.a.button},"Add contact"))}}]),e}(a.Component),d=n(8),C=n.n(d);function E(t){var e=t.contacts,n=t.onRemove;return c.a.createElement("ul",{className:C.a.contactList},e.map((function(t){return c.a.createElement("li",{className:C.a.listItem,key:t.id},t.name," : ",t.number,c.a.createElement("button",{type:"button",className:C.a.button,onClick:function(){return n(t.id)}},"Delete"))})))}var _=n(9),S=n.n(_);function y(t){var e=t.value,n=t.onChangeFilter;return c.a.createElement("div",{className:S.a.container},c.a.createElement("label",{htmlFor:"filter"},"Find contacts by name"),c.a.createElement("input",{id:"filter",type:"text",name:"filter",value:e,className:S.a.input,onChange:function(t){return n(t.target.value)}}))}var F=n(19),O=function(t){function e(){var t,n;Object(l.a)(this,e);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(s.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(c)))).state={contacts:[],filter:""},n.onSubmit=function(t,e){n.state.contacts.find((function(t){return t.number===e}))?alert("".concat(t," is already in contacts!")):n.setState((function(n){var a=n.contacts;return{contacts:[].concat(Object(i.a)(a),[{name:t,number:e,id:F()}])}}))},n.changeFilter=function(t){n.setState({filter:t})},n.getVisibleContacts=function(){var t=n.state,e=t.contacts,a=t.filter;return e.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},n.removeContact=function(t){n.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},n}return Object(h.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts");t&&this.setState({contacts:JSON.parse(t)})}},{key:"componentDidUpdate",value:function(t,e){e.contacts!==this.state.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts)),console.log(localStorage)}},{key:"render",value:function(){var t,e=this.state,n=e.contacts,a=e.filter,r=this.getVisibleContacts();return r.length>0?t=c.a.createElement(c.a.Fragment,null,c.a.createElement(y,{value:a,onChangeFilter:this.changeFilter}),c.a.createElement(E,{contacts:r,onRemove:this.removeContact})):0===r.length&&n.length>0&&(t=c.a.createElement(c.a.Fragment,null,c.a.createElement(y,{value:a,onChangeFilter:this.changeFilter}))),c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"Phonebook"),c.a.createElement(g,{onSubmit:this.onSubmit}),c.a.createElement("h2",null,"Contacts"),t)}}]),e}(a.Component);o.a.render(c.a.createElement(O,null),document.getElementById("root"))},8:function(t,e,n){t.exports={contactList:"ContactList_contactList__3TRpB",listItem:"ContactList_listItem__1RO4v",button:"ContactList_button__3oS7q"}},9:function(t,e,n){t.exports={container:"Filter_container__VE-pk",input:"Filter_input__QAhIr"}}},[[14,1,2]]]);
//# sourceMappingURL=main.2a639275.chunk.js.map