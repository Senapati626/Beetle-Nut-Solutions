(this.webpackJsonpbeetle_nut=this.webpackJsonpbeetle_nut||[]).push([[0],{123:function(e,t,n){},124:function(e,t,n){},125:function(e,t,n){},126:function(e,t,n){},131:function(e,t,n){"use strict";n.r(t);var s=n(2),a=n.n(s),c=n(63),r=n.n(c),i=(n(74),n(75),n(19)),l=n(3),o=n(15),d=n(16),j=n(18),h=n(17),b=n(8),u=n.n(b),p=(n(24),n.p+"static/media/simpson.6a7ace20.png"),m=n(1);function x(){return Object(m.jsxs)("div",{className:"bad_wrapper",children:[Object(m.jsxs)("div",{className:"bad_left",children:[Object(m.jsx)("h1",{children:"bad bad luck !"}),Object(m.jsx)("h2",{children:"no donut for you"})]}),Object(m.jsx)("div",{className:"bad_right",children:Object(m.jsx)("img",{src:p,alt:"",width:"250px",height:"250px"})})]})}var O=function(e){var t=e.users;return console.log(t),Object(m.jsx)("div",{className:"branches_container",children:0!==t.length?t.map((function(e,t){return Object(m.jsxs)("div",{className:"branch_card",children:[Object(m.jsx)("div",{className:"branch_card_dp",children:Object(m.jsx)("img",{src:"https://robohash.org/".concat(e.id,"?bgset=bg2"),alt:"dp",width:"180px",height:"180px"})}),Object(m.jsx)("div",{className:"branch_card_name",children:Object(m.jsx)("p",{children:e.Branch_Name})}),Object(m.jsxs)("div",{className:"branch_card_details",children:[Object(m.jsxs)("p",{children:[Object(m.jsx)("strong",{children:"Branch ID- "}),e.id]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("strong",{children:"Address- "}),e.Address]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("strong",{children:"Supervisor- "}),e.Branch_Incharge]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("strong",{children:"Contact - "}),e.Contact_Number]})]})]})})):Object(m.jsx)(x,{})})},g=n(23),v=n(22),f=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).onPinChange=function(t){e.setState({pin:t.target.value})},e.onNameChange=function(t){e.setState({name:t.target.value})},e.onEmailChange=function(t){e.setState({email:t.target.value})},e.onSubmit=function(){if(e.state.pin.length<6)alert("A Pin Code should be of six characters.");else if(e.state.email.includes("@")||e.state.email.includes("@")){var t=Object(v.io)("https://beetle-nuts-backend123.herokuapp.com");t.on("connection"),t.emit("alert",[e.state.name,e.state.email,e.state.pin]),u.a.post("https://beetle-nuts-backend123.herokuapp.com/shows",{pin:e.state.pin}).then((function(t){return e.setState({users:t.data})})).then(e.setState({route:"branches"})),u.a.post("https://beetle-nuts-backend123.herokuapp.com/insert",{pin:e.state.pin,name:e.state.name,email:e.state.email}).then((function(e){return console.log(e)}))}else alert("An email address must contain the characters @ and .")},e.onSwitch=function(){e.setState({route:"home"})},e.state={users:[],pin:"",name:"",email:"",route:""},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"client_wrapper",children:["branches"===this.state.route?Object(m.jsx)(O,{users:this.state.users,pin:this.state.pin}):Object(m.jsxs)("div",{className:"client_form",children:[Object(m.jsxs)("div",{className:"input_box",children:[Object(m.jsx)("input",{type:"text",required:"required",onChange:this.onNameChange,placeholder:"Enter Full Name"}),Object(m.jsx)("span",{children:"Enter your Name."})]}),Object(m.jsxs)("div",{className:"input_box",children:[Object(m.jsx)("input",{type:"email",required:"required",onChange:this.onEmailChange,placeholder:"Enter Contact Email"}),Object(m.jsx)("span",{children:"Enter valid contact Email ID."})]}),Object(m.jsxs)("div",{className:"input_box",children:[Object(m.jsx)("input",{type:"text",required:"required",onChange:this.onPinChange,maxLength:"6",minLength:"6",placeholder:"Enter PIN"}),Object(m.jsx)("span",{children:"Enter the PIN code of preferred location."})]}),Object(m.jsx)("div",{className:"input_box",style:{display:"flex",justifyContent:"center"},children:Object(m.jsx)("button",{type:"submit",onClick:this.onSubmit,className:"client_submit",children:"search beetlenut stores"})})]}),Object(m.jsx)("img",{src:"https://www.nicepng.com/png/detail/201-2018638_simpsons-donut-png.png",alt:"",className:"imgC",style:{top:"50%",left:"10%"}}),Object(m.jsx)("div",{className:"switch_container",children:"branches"===this.state.route?Object(m.jsx)("div",{children:Object(m.jsxs)("button",{onClick:this.onSwitch,className:"btn_switch",children:[Object(m.jsx)(g.b,{})," Search for a different Location"]})}):Object(m.jsx)("div",{})})]})}}]),n}(a.a.Component),_=n(64),N=(n(123),n(67)),w=n(65),k=n(66),y=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={notifications:[],user:[],count:"",notify:[],arr:[]},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=Object(v.io)("https://beetle-nuts-backend123.herokuapp.com");t.on("connection"),t.on("alert",(function(t){e.setState({notify:t})})),u.a.post("https://beetle-nuts-backend123.herokuapp.com/alerts",{username:this.props.username}).then((function(t){return e.setState({notifications:t.data})})),u.a.post("https://beetle-nuts-backend123.herokuapp.com/count",{username:this.props.username}).then((function(t){return e.setState({count:t.data[0].count})})),u.a.post("https://beetle-nuts-backend123.herokuapp.com/details",{username:this.props.username}).then((function(t){return e.setState({user:t.data[0]})}))}},{key:"componentDidUpdate",value:function(e,t){t.notify!==this.state.notify&&this.state.user.Pincode_covered.includes(this.state.notify[2])&&this.setState({arr:this.state.arr.concat([this.state.notify])})}},{key:"render",value:function(){var e=this.state,t=e.user,n=e.count,s=e.arr;return console.log(s),Object(m.jsxs)("div",{className:"alert_wrapper",children:[Object(m.jsx)("div",{className:"alert_count",children:Object(m.jsx)("p",{children:n+s.length})}),Object(m.jsxs)("div",{className:"alert_wrapper_left",children:[Object(m.jsx)("div",{className:"branch_img_holder",children:Object(m.jsx)("img",{src:"https://robohash.org/".concat(t.id,"?bgset=bg1"),alt:"dp"})}),Object(m.jsx)("div",{className:"branch_header_holder",children:Object(m.jsx)("h1",{children:t.Branch_Name})}),Object(m.jsxs)("div",{className:"branch_details_holder",children:[Object(m.jsxs)("p",{children:[Object(m.jsx)("strong",{children:"Branch ID- "}),t.id]}),Object(m.jsxs)("p",{children:[Object(m.jsx)(_.a,{})," ",t.Insitution_Name]}),Object(m.jsxs)("p",{children:[Object(m.jsx)(w.a,{})," ",t.Address]}),Object(m.jsxs)("p",{children:[Object(m.jsx)(k.a,{})," ",t.Branch_Incharge]}),Object(m.jsxs)("p",{children:[Object(m.jsx)(N.a,{})," ",t.Contact_Number]})]})]}),Object(m.jsx)("div",{className:"alert_wrapper_right",children:0!==this.state.notifications.length?Object(m.jsxs)("div",{className:"alerts",children:[Object(m.jsx)("div",{className:"alert_wrappers",children:s.length>0?s.reverse().map((function(e,t){return Object(m.jsxs)("div",{className:"alert_tab recent_alert",style:{background:"rgb(248, 166, 228)"},children:[Object(m.jsx)("div",{className:"alert_tab_text",children:Object(m.jsxs)("p",{children:[Object(m.jsx)("strong",{children:e[0].toUpperCase()})," was just looking for a beetle nut store within a location you deliver."]})}),Object(m.jsx)("div",{className:"alert_tab_cont",children:Object(m.jsxs)("p",{children:[Object(m.jsx)("strong",{children:"Email- "}),e[1]]})})]})})):Object(m.jsx)("div",{})}),Object(m.jsx)("div",{className:"alert_wrappers",children:this.state.notifications.map((function(e,t){return Object(m.jsxs)("div",{className:"alert_tab",children:[Object(m.jsx)("div",{className:"alert_tab_text",children:Object(m.jsxs)("p",{children:[Object(m.jsx)("strong",{children:e.client.toUpperCase()})," was looking for a beetle nut store in your location."]})}),Object(m.jsxs)("div",{className:"alert_tab_cont",children:[Object(m.jsxs)("p",{children:[Object(m.jsx)("strong",{children:"Email- "}),e.client_email]}),Object(m.jsx)("p",{children:e.date})]})]})}))})]}):Object(m.jsx)("div",{style:{textAlign:"center"},children:Object(m.jsx)("h1",{children:"No alerts to show."})})})]})}}]),n}(a.a.Component),C=(n(124),function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).onUsernameChange=function(t){e.setState({username:t.target.value})},e.onPasswordChange=function(t){e.setState({password:t.target.value})},e.onSignIn=function(){u.a.post("https://beetle-nuts-backend123.herokuapp.com/signin",{username:e.state.username,password:e.state.password}).then((function(t){return t.data.length?e.setState({route:"signedin"}):alert("Incorrect Credentials")}))},e.state={username:"",password:"",route:"signedout",alerts:[]},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){u.a.post("https://beetle-nuts-backend123.herokuapp.com/alerts",{username:this.state.username}).then((function(e){return console.log(e)}))}},{key:"render",value:function(){return Object(m.jsx)("div",{style:{width:"100%"},children:"signedin"===this.state.route?Object(m.jsx)("div",{children:Object(m.jsx)(y,{username:this.state.username})}):Object(m.jsxs)("div",{className:"branch_form_container",children:[Object(m.jsx)("div",{className:"branch_form_header",children:Object(m.jsx)("h1",{children:"Login for a Branch"})}),Object(m.jsxs)("div",{className:"branch_form",children:[Object(m.jsxs)("div",{className:"input_box",children:[Object(m.jsx)("input",{type:"text",required:"required",placeholder:"Username",onChange:this.onUsernameChange}),Object(m.jsx)("span",{children:"Enter Branch username."})]}),Object(m.jsxs)("div",{className:"input_box",children:[Object(m.jsx)("input",{type:"password",required:"required",placeholder:"Password",onChange:this.onPasswordChange}),Object(m.jsx)("span",{children:"Enter branch password."})]}),Object(m.jsx)("div",{className:"input_box",style:{display:"flex",justifyContent:"center"},children:Object(m.jsx)("button",{className:"branch_submit",onClick:this.onSignIn,children:"submit"})})]}),Object(m.jsx)("img",{src:"https://www.nicepng.com/png/detail/201-2018638_simpsons-donut-png.png",alt:"",className:"imgC",style:{top:"20px",right:"20px"}})]})})}}]),n}(a.a.Component)),S=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).onLoadChange=function(){e.setState({loaded:!e.state.loaded}),document.querySelector(".btn_load").style.display="none"},e.state={loaded:!1,notify:[],arr:[]},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=Object(v.io)("https://beetle-nuts-backend123.herokuapp.com");t.on("connection"),t.on("alert",(function(t){e.setState({notify:t})}))}},{key:"componentDidUpdate",value:function(e,t){t.notify!==this.state.notify&&(this.setState({arr:this.state.arr.concat([this.state.notify])}),console.log("ok"))}},{key:"render",value:function(){var e=this.state,t=e.arr,n=e.loaded;return console.log(t),Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"admin_header",children:Object(m.jsx)("h1",{children:"Welcome Back Admin! Here are all the alerts."})}),Object(m.jsx)("div",{className:"admin_alerts",children:t.length>0?t.reverse().map((function(e,t){return Object(m.jsxs)("div",{className:"alert_tab recent_alert",style:{background:"wheat"},children:[Object(m.jsx)("div",{className:"alert_tab_text",children:Object(m.jsxs)("p",{children:[Object(m.jsx)("strong",{children:e[0]})," was just looking for a beetle nut store under PIN - ",e[2]]})}),Object(m.jsx)("div",{className:"alert_tab_cont",children:Object(m.jsxs)("p",{children:[Object(m.jsx)("strong",{children:"Email- "}),e[1]]})})]})})):Object(m.jsx)("div",{})}),Object(m.jsx)("div",{className:"admin_alerts",children:n?this.props.records.map((function(e,t){return Object(m.jsxs)("div",{className:"alert_tab",children:[Object(m.jsx)("div",{className:"alert_tab_text",children:Object(m.jsxs)("p",{children:[Object(m.jsx)("strong",{children:e.client})," was looking for a beetle nut store under PIN - ",e.pin]})}),Object(m.jsxs)("div",{className:"alert_tab_cont",children:[Object(m.jsxs)("p",{children:[Object(m.jsx)("strong",{children:"Email- "}),e.client_email]}),Object(m.jsx)("p",{children:e.date})]})]})})):this.props.records.slice(0,9).map((function(e,t){return Object(m.jsxs)("div",{className:"alert_tab",children:[Object(m.jsx)("div",{className:"alert_tab_text",children:Object(m.jsxs)("p",{children:[Object(m.jsx)("strong",{children:e.client})," was looking for a beetle nut store under PIN - ",e.branch_pin]})}),Object(m.jsxs)("div",{className:"alert_tab_cont",children:[Object(m.jsxs)("p",{children:[Object(m.jsx)("strong",{children:"Email- "}),e.client_email]}),Object(m.jsx)("p",{children:e.date})]})]})}))}),Object(m.jsx)("div",{className:"btn_load_wrapper",children:Object(m.jsx)("button",{onClick:this.onLoadChange,className:"btn_load",children:"show all alerts"})})]})}}]),n}(a.a.Component),E=(n(125),function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).onChange=function(t){e.setState({password:t.target.value})},e.onPassSubmit=function(){u.a.get("https://beetle-nuts-backend123.herokuapp.com/admin").then((function(t){return e.setState({records:t.data})})),"admin"===e.state.password?e.setState({route:"signedin"}):alert("Incorrect password. Please Try again.")},e.state={password:"",route:"",records:[]},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(m.jsx)("div",{children:"signedin"===this.state.route?Object(m.jsx)(S,{records:this.state.records}):Object(m.jsxs)("div",{className:"admin_wrapper",children:[Object(m.jsx)("h1",{children:"Log In to Administrator Account."}),Object(m.jsxs)("div",{className:"admin_form",children:[Object(m.jsxs)("div",{className:"input_box",children:[Object(m.jsx)("input",{type:"password",placeholder:"Admin password",onChange:this.onChange}),Object(m.jsx)("span",{children:"Enter Admin Password"})]}),Object(m.jsx)("div",{className:"admin_submit",children:Object(m.jsx)("button",{className:"client_submit",style:{background:"blue"},onClick:this.onPassSubmit,children:"submit"})})]})]})})}}]),n}(a.a.Component));n(126);function P(){return Object(m.jsxs)("div",{className:"welcome",children:[Object(m.jsxs)("div",{className:"welcome_header",children:[Object(m.jsx)("h1",{children:"Beetle Nut Solutions"}),Object(m.jsx)("p",{children:"Your only friend for scavenging beetle nuts."})]}),Object(m.jsxs)("div",{className:"link_wrapper",children:[Object(m.jsxs)(i.b,{to:"/client",className:"links purple",children:[Object(m.jsx)(g.b,{}),Object(m.jsx)("p",{children:"Search for Beetlenuts"})]}),Object(m.jsxs)(i.b,{to:"/branch",className:"links green",children:[Object(m.jsx)(g.c,{}),Object(m.jsx)("p",{children:"Login for a Branch"})]}),Object(m.jsxs)(i.b,{to:"/admin",className:"links blue",children:[Object(m.jsx)(g.a,{}),Object(m.jsx)("p",{children:"Login as Administrator"})]})]}),Object(m.jsx)("div",{children:Object(m.jsx)("p",{style:{fontSize:"14px",color:"gray"},children:"Designed and Developed by Neellohit S."})}),Object(m.jsx)("img",{src:"https://i.pinimg.com/originals/1e/af/60/1eaf6010c2544841b63b9d34705827df.jpg",alt:"",className:"imgA"}),Object(m.jsxs)("div",{className:"imgB",children:[Object(m.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/6/65/2008-1226-Pasadena-003-CityHall.jpg",alt:""}),Object(m.jsx)("p",{children:"pasadena"})]}),Object(m.jsx)("img",{src:"https://www.nicepng.com/png/detail/201-2018638_simpsons-donut-png.png",alt:"",className:"imgC"})]})}var I=n(69);function B(){return Object(m.jsx)("div",{className:"navbar",children:Object(m.jsx)(i.b,{to:"/",exact:!0,children:Object(m.jsx)("p",{children:Object(m.jsx)(I.a,{})})})})}var A=function(){return Object(m.jsx)("div",{className:"app",children:Object(m.jsxs)(i.a,{children:[Object(m.jsx)(B,{}),Object(m.jsxs)(l.c,{children:[Object(m.jsx)(l.a,{path:"/",exact:!0,component:P}),Object(m.jsx)(l.a,{path:"/client",component:f}),Object(m.jsx)(l.a,{path:"/branch",component:C}),Object(m.jsx)(l.a,{path:"/admin",component:E})]})]})})},q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,132)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),s(e),a(e),c(e),r(e)}))};r.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(A,{})}),document.getElementById("root")),q()},24:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){}},[[131,1,2]]]);
//# sourceMappingURL=main.60db79e0.chunk.js.map