(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{136:function(e,a,t){e.exports=t(276)},141:function(e,a,t){},276:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(26),l=t.n(i),m=(t(141),t(81)),o=t(82),c=t(86),s=t(83),d=t(87),h=t(291),u=t(281),E=t(290),g=t(282),p=t(288),f=t(286),y=t(287),v=t(24),b=t(285),w=t(289),I=t(127),S=t(283),C=t(284),z=function(){return"undefined"===typeof window?h.a.onlyTablet.minWidth:window.innerWidth},k=function(e){var a=e.mobile;return r.a.createElement(u.a,null,r.a.createElement(E.a,{as:"h2",content:"Hi I'm",inverted:!0,style:{fontSize:a?"0.5em":"1em",fontWeight:"normal",marginBottom:0,marginTop:a?"1.5em":"3em",marginLeft:a?"40.25em":"61.5em"}}),r.a.createElement(E.a,{as:"h1",content:"Joris van der Sluis",inverted:!0,style:{fontSize:a?"1em":"2em",fontWeight:"normal",marginTop:a?"0.1em":"0.3em",marginLeft:a?"40.25em":"30.5em"}}),r.a.createElement(E.a,{as:"h1",content:"Software Developer",inverted:!0,style:{fontSize:a?"0.25em":"0.75em",fontWeight:"normal",marginTop:"0.1em",marginLeft:a?"6.0em":"93.0em"}}))},W=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=Object(c.a)(this,(e=Object(s.a)(a)).call.apply(e,[this].concat(r)))).state={},t.hideFixedMenu=function(){return t.setState({fixed:!1})},t.showFixedMenu=function(){return t.setState({fixed:!0})},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.children,a=this.state.fixed;return r.a.createElement(h.a,{getWidth:z,minWidth:h.a.onlyTablet.minWidth},r.a.createElement(g.a,{once:!1,onBottomPassed:this.showFixedMenu,onBottomPassedReverse:this.hideFixedMenu},r.a.createElement(p.a,{inverted:!0,style:{minHeight:700,padding:"1em 0em"},vertical:!0},r.a.createElement(f.a,{fixed:a?"top":null,inverted:!a,pointing:!a,secondary:!a,size:"huge"},r.a.createElement(u.a,null,r.a.createElement(f.a.Item,{position:"right"},r.a.createElement(f.a.Item,{as:"a",active:!0},"Home"),r.a.createElement(f.a.Item,{as:"a"},"Work"),r.a.createElement(f.a.Item,{as:"a"},"Company"),r.a.createElement(f.a.Item,{as:"a"},"Careers")))),r.a.createElement(k,null))),e)}}]),a}(n.Component),x=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=Object(c.a)(this,(e=Object(s.a)(a)).call.apply(e,[this].concat(r)))).state={},t.handleSidebarHide=function(){return t.setState({sidebarOpened:!1})},t.handleToggle=function(){return t.setState({sidebarOpened:!0})},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.children,a=this.state.sidebarOpened;return r.a.createElement(h.a,{as:y.a.Pushable,getWidth:z,maxWidth:h.a.onlyMobile.maxWidth},r.a.createElement(y.a,{as:f.a,animation:"push",inverted:!0,onHide:this.handleSidebarHide,vertical:!0,visible:a},r.a.createElement(f.a.Item,{as:"a",active:!0},"Home"),r.a.createElement(f.a.Item,{as:"a"},"Work"),r.a.createElement(f.a.Item,{as:"a"},"Company"),r.a.createElement(f.a.Item,{as:"a"},"Careers"),r.a.createElement(f.a.Item,{as:"a"},"Log in"),r.a.createElement(f.a.Item,{as:"a"},"Sign Up")),r.a.createElement(y.a.Pusher,{dimmed:a},r.a.createElement(p.a,{inverted:!0,textAlign:"center",style:{minHeight:350,padding:"1em 0em"},vertical:!0},r.a.createElement(u.a,null,r.a.createElement(f.a,{inverted:!0,pointing:!0,secondary:!0,size:"large"},r.a.createElement(f.a.Item,{onClick:this.handleToggle},r.a.createElement(v.a,{name:"sidebar"})),r.a.createElement(f.a.Item,{position:"right"},r.a.createElement(b.a,{as:"a",inverted:!0},"Log in"),r.a.createElement(b.a,{as:"a",inverted:!0,style:{marginLeft:"0.5em"}},"Sign Up")))),r.a.createElement(k,{mobile:!0})),e))}}]),a}(n.Component),O=function(e){var a=e.children;return r.a.createElement("div",null,r.a.createElement(W,null,a),r.a.createElement(x,null,a))},T=function(){return r.a.createElement(O,null,r.a.createElement(p.a,{style:{padding:"8em 0em"},vertical:!0},r.a.createElement(w.a,{container:!0,stackable:!0,verticalAlign:"middle"},r.a.createElement(w.a.Row,null,r.a.createElement(w.a.Column,{width:8},r.a.createElement(E.a,{as:"h3",style:{fontSize:"2em"}},"We Help Companies and Companions"),r.a.createElement("p",{style:{fontSize:"1.33em"}},"We can give your company superpowers to do things that they never thought possible. Let us delight your customers and empower your needs... through pure data analytics."),r.a.createElement(E.a,{as:"h3",style:{fontSize:"2em"}},"We Make Bananas That Can Dance"),r.a.createElement("p",{style:{fontSize:"1.33em"}},"Yes that's right, you thought it was the stuff of dreams, but even bananas can be bioengineered.")),r.a.createElement(w.a.Column,{floated:"right",width:6},r.a.createElement(I.a,{bordered:!0,rounded:!0,size:"large",src:"/images/wireframe/white-image.png"}))),r.a.createElement(w.a.Row,null,r.a.createElement(w.a.Column,{textAlign:"center"},r.a.createElement(b.a,{size:"huge"},"Check Them Out"))))),r.a.createElement(p.a,{style:{padding:"0em"},vertical:!0},r.a.createElement(w.a,{celled:"internally",columns:"equal",stackable:!0},r.a.createElement(w.a.Row,{textAlign:"center"},r.a.createElement(w.a.Column,{style:{paddingBottom:"5em",paddingTop:"5em"}},r.a.createElement(E.a,{as:"h3",style:{fontSize:"2em"}},'"What a Company"'),r.a.createElement("p",{style:{fontSize:"1.33em"}},"That is what they all say about us")),r.a.createElement(w.a.Column,{style:{paddingBottom:"5em",paddingTop:"5em"}},r.a.createElement(E.a,{as:"h3",style:{fontSize:"2em"}},'"I shouldn\'t have gone with their competitor."'),r.a.createElement("p",{style:{fontSize:"1.33em"}},r.a.createElement(I.a,{avatar:!0,src:"/images/avatar/large/nan.jpg"}),r.a.createElement("b",null,"Nan")," Chief Fun Officer Acme Toys"))))),r.a.createElement(p.a,{style:{padding:"8em 0em"},vertical:!0},r.a.createElement(u.a,{text:!0},r.a.createElement(E.a,{as:"h3",style:{fontSize:"2em"}},"Breaking The Grid, Grabs Your Attention"),r.a.createElement("p",{style:{fontSize:"1.33em"}},"Instead of focusing on content creation and hard work, we have learned how to master the art of doing nothing by providing massive amounts of whitespace and generic content that can seem massive, monolithic and worth your attention."),r.a.createElement(b.a,{as:"a",size:"large"},"Read More"),r.a.createElement(S.a,{as:"h4",className:"header",horizontal:!0,style:{margin:"3em 0em",textTransform:"uppercase"}},r.a.createElement("a",{href:"#"},"Case Studies")),r.a.createElement(E.a,{as:"h3",style:{fontSize:"2em"}},"Did We Tell You About Our Bananas?"),r.a.createElement("p",{style:{fontSize:"1.33em"}},"Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but it's really true. It took years of gene splicing and combinatory DNA research, but our bananas can really dance."),r.a.createElement(b.a,{as:"a",size:"large"},"I'm Still Quite Interested"))),r.a.createElement(p.a,{inverted:!0,vertical:!0,style:{padding:"5em 0em"}},r.a.createElement(u.a,null,r.a.createElement(w.a,{divided:!0,inverted:!0,stackable:!0},r.a.createElement(w.a.Row,null,r.a.createElement(w.a.Column,{width:3},r.a.createElement(E.a,{inverted:!0,as:"h4",content:"About"}),r.a.createElement(C.a,{link:!0,inverted:!0},r.a.createElement(C.a.Item,{as:"a"},"Sitemap"),r.a.createElement(C.a.Item,{as:"a"},"Contact Us"),r.a.createElement(C.a.Item,{as:"a"},"Religious Ceremonies"),r.a.createElement(C.a.Item,{as:"a"},"Gazebo Plans"))),r.a.createElement(w.a.Column,{width:3},r.a.createElement(E.a,{inverted:!0,as:"h4",content:"Services"}),r.a.createElement(C.a,{link:!0,inverted:!0},r.a.createElement(C.a.Item,{as:"a"},"Banana Pre-Order"),r.a.createElement(C.a.Item,{as:"a"},"DNA FAQ"),r.a.createElement(C.a.Item,{as:"a"},"How To Access"),r.a.createElement(C.a.Item,{as:"a"},"Favorite X-Men"))),r.a.createElement(w.a.Column,{width:7},r.a.createElement(E.a,{as:"h4",inverted:!0},"Footer Header"),r.a.createElement("p",null,"Extra space for a call to action inside the footer that could help re-engage users.")))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(275);l.a.render(r.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[136,1,2]]]);
//# sourceMappingURL=main.4b307883.chunk.js.map