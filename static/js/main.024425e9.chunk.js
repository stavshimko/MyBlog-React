(this.webpackJsonpuntitled=this.webpackJsonpuntitled||[]).push([[0],{23:function(e,t,a){e.exports=a.p+"static/media/emptyImg.98288858.png"},26:function(e,t,a){e.exports=a(46)},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(17),i=a.n(o),c=a(10),r=a(18),s=a(19),u=a(25),m=a(24),d=a(7),p=a(2);a(31),a(32),a(33),a(34),a(35),a(36),a(37),a(38);var h=function(e){return l.a.createElement("div",null,l.a.createElement("header",{className:"toolbar"},l.a.createElement("ul",{className:"left-items"},l.a.createElement("li",null,l.a.createElement(d.b,{to:"/",className:"link"},"Home")),l.a.createElement("li",null,l.a.createElement(d.b,{to:"/newPost",className:"link"},"New Post")),l.a.createElement("li",null,l.a.createElement(d.b,{to:"/about",className:"link"},"About Me")),l.a.createElement("li",null,l.a.createElement(d.b,{to:"/contact",className:"link"},"Contact Me"))),l.a.createElement("div",null,!e.user&&l.a.createElement(d.b,{className:"right-item",to:"/login",onClick:e.onLoginClick},"Login"))))},g=a(21),E=a(22);var f=function(e){return console.log("run About Me"),l.a.createElement("div",{className:"about-me"},l.a.createElement("h2",null,"AboutMe"),l.a.createElement("p",null,"My Instagram"),l.a.createElement("a",Object(c.a)({className:"instagram",href:"https://www.instagram.com/stavshimko"},"className","instagram social"),l.a.createElement(g.a,{icon:E.a,size:"2x",color:"black"})))};var b=function(){return console.log("run Contact Me"),l.a.createElement("div",{className:"contact-me"},l.a.createElement("h2",null,"ContactMe"),l.a.createElement("p",null,"Contact me"))};function v(e){return l.a.createElement(d.b,{to:function(t){return"/post/".concat(e.id)},onClick:e.click,id:e.id},l.a.createElement("article",{className:"post",id:e.id},l.a.createElement("img",{className:"cross",src:e.image,id:e.id,alt:"img"}),l.a.createElement("h4",{className:"header-top",id:e.id},e.title),l.a.createElement("p",{id:e.id},e.content),l.a.createElement("div",{className:"left-bottom",id:e.id},"Published ",e.published," by ",e.author)))}var k=function(e){return e.posts.map((function(t,a){return l.a.createElement(v,{key:a,title:t.title,content:t.content,published:t.published,author:t.author,id:t.id,image:t.img,click:e.click})}))};var N=function(e){return l.a.createElement("section",{className:"page-left"},l.a.createElement("h1",null,"This is my blog"),l.a.createElement(k,{posts:e.post,click:e.click}))};var C=function(){return l.a.createElement("aside",{className:"page-right"},l.a.createElement("ul",{className:"latest"},l.a.createElement("h1",null,"Latest"),l.a.createElement("li",null,l.a.createElement("h4",null,"Blog post #1 ",l.a.createElement("a",{href:""},"go to page"))),l.a.createElement("li",null,l.a.createElement("h4",null,"Blog post #2 ",l.a.createElement("a",{href:""},"go to page"))),l.a.createElement("li",null,l.a.createElement("h4",null,"Blog post #3 ",l.a.createElement("a",{href:""},"go to page")))),l.a.createElement("hr",{className:"horizontal-line"}),l.a.createElement("ul",{className:"popular"},l.a.createElement("h1",null,"Popular"),l.a.createElement("li",null,l.a.createElement("h4",null,"Blog post #3 ",l.a.createElement("a",{href:""},"go to page"))),l.a.createElement("li",null,l.a.createElement("h4",null,"Blog post #1 ",l.a.createElement("a",{href:""},"go to page"))),l.a.createElement("li",null,l.a.createElement("h4",null,"Blog post #2 ",l.a.createElement("a",{href:""},"go to page")))))};var P=function(e){return console.log("run Home page"),l.a.createElement("div",null,l.a.createElement(N,{post:e.posts,click:e.click}),l.a.createElement(C,{latest:e.latest,popular:e.popular}))};var y=function(e){return console.log("run PostPage Page"),l.a.createElement("div",{className:"post-page"},l.a.createElement("h2",null,e.post.title),l.a.createElement("p",null,e.post.content))};var S=function(e){return l.a.createElement("form",{className:"new-post"},l.a.createElement("h2",null,"Create New Post"),l.a.createElement("input",{id:"title",type:"text",name:"title",placeholder:"Post title goes here...",onChange:e.handleChange}),l.a.createElement("textarea",{id:"content",type:"text",name:"content",placeholder:"Post content goes here...",onChange:e.handleChange}),l.a.createElement("button",{id:"save",type:"submit",onClick:e.handleSavePost},"Save post"))},q=a(23),x=[{id:1,title:"Blog post #1",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",img:a.n(q).a,published:"3 days ago",author:"Stav Shimko"},{id:2,title:"Blog post #2",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",img:"",published:"2 days ago",author:"Stav Shimko"},{id:3,title:"Blog post #3",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",img:"",published:"1 days ago",author:"Stav Shimko"}],B=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).onLoginButtonClick=function(){console.log("Click login"),n.setState({user:"Stav"})},n.handleChange=function(e){n.setState(Object(c.a)({},e.target.name,e.target.value))},n.handleSavePost=function(e){e.preventDefault();var t=n.state,a=t.title,l=t.content;a&&l?(n.handleAddPost(a,l),alert("PostPage saved successfully")):alert("Title and Content are required")},n.handleAddPost=function(e,t){var a=x.length+1;x.push({id:a,title:e,content:t,img:"",published:"X days ago",author:"Stav Shimko"}),console.log("post saved")},n.postById=function(e,t){return e.find((function(e){return e.id==t}))},n.click=function(e){n.setState({idPost:e.target.attributes.getNamedItem("id").value}),console.log("Click post")},n.state={user:null,title:null,content:null,image:null,idPost:null},n}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(d.a,null,l.a.createElement(h,{user:this.state.user,onLoginClick:this.onLoginButtonClick}),l.a.createElement(p.d,null,l.a.createElement(p.a,{exact:!0,from:"/",to:"/home"}),l.a.createElement(p.b,{path:"/about"},l.a.createElement(f,null)),l.a.createElement(p.b,{path:"/contact"},l.a.createElement(b,null)),l.a.createElement(p.b,{path:"/post/:postId"},l.a.createElement(y,{post:this.postById(x,this.state.idPost)})),l.a.createElement(p.b,{path:"/newPost"},l.a.createElement(S,{handleSavePost:this.handleSavePost,handleChange:this.handleChange})),l.a.createElement(p.b,{path:"/home"},l.a.createElement(P,{posts:x,latest:this.state.latest,popular:this.state.popular,click:this.click})))))}}]),a}(l.a.Component);i.a.render(l.a.createElement(B,null),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.024425e9.chunk.js.map