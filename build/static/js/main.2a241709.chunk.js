(this["webpackJsonpnavbar-dropdown-v1"]=this["webpackJsonpnavbar-dropdown-v1"]||[]).push([[0],[,,,,,,,,,function(e,a,t){},,,,,,,,,function(e,a,t){e.exports=t(35)},,,,,function(e,a,t){},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(15),r=t.n(l),m=t(12),o=(t(23),t(3)),i=["btn--primary","btn--outline","btn--test"],s=["btn--medium","btn--large"],u=function(e){var a=e.children,t=e.type,n=e.onClick,l=e.buttonStyle,r=e.buttonSize,m=i.includes(l)?l:i[0],u=s.includes(r)?r:s[0];return c.a.createElement(o.b,{to:{pathname:"https://github.com/DeonFranklin"},className:"btn-mobile"},c.a.createElement("button",{className:"btn ".concat(m," ").concat(u),onClick:n,type:t},a))};t(29);var d=function(){var e=Object(n.useState)(!1),a=Object(m.a)(e,2),t=a[0],l=a[1],r=Object(n.useState)(!0),i=Object(m.a)(r,2),s=(i[0],i[1]),u=function(){return l(!1)},d=function(){window.innerWidth<=960?s(!1):s(!0)};return Object(n.useEffect)((function(){d()}),[]),window.addEventListener("resize",d),c.a.createElement(c.a.Fragment,null,c.a.createElement("nav",{className:"navbar"},c.a.createElement("div",{className:"navbar-container"},c.a.createElement(o.b,{to:"/",className:"navbar-logo",onClick:u},"Deon D. Franklin"),c.a.createElement("div",{className:"menu-icon",onClick:function(){return l(!t)}},c.a.createElement("i",{className:t?"fas fa-times":"fas fa-bars"})),c.a.createElement("ul",{className:t?"nav-menu active":"nav-menu"},c.a.createElement("li",{className:"nav-item"},c.a.createElement(o.b,{to:"/",className:"nav-links",onClick:u},"Home")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(o.b,{to:"/aboutme",className:"nav-links",onClick:u},"About Me")),c.a.createElement("li",null,c.a.createElement(o.b,{to:"/connect",className:"nav-links",onClick:u},"Connect")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(o.b,{to:{pathname:"https://github.com/DeonFranklin"},target:"Github",className:"nav-links",onClick:u},"Projects"))))))};t(9),t(30);var p=function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("li",{className:"cards__item"},c.a.createElement(o.b,{className:"cards__item__link",to:e.path},c.a.createElement("figure",{className:"cards__item__pic-wrap","data-category":e.label},c.a.createElement("img",{className:"cards__item__img",alt:"Links",src:e.src})),c.a.createElement("div",{className:"cards__item__info"},c.a.createElement("h5",{className:"cards__item__text"},e.text)))))};var E=function(){return c.a.createElement("div",{className:"cards"},c.a.createElement("h1",null,"More about me"),c.a.createElement("div",{className:"cards__container"},c.a.createElement("div",{className:"cards__wrapper"},c.a.createElement("ul",{className:"cards__items"},c.a.createElement("video",{src:"https://res.cloudinary.com/dankl8in/video/upload/v1644352250/video-1_xdvmaw.webm",autoPlay:!0,loop:!0,muted:!0}),c.a.createElement(p,{img:!0,src:"https://res.cloudinary.com/dankl8in/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_black,b_rgb:262c35/v1645472895/Prof_pic_vvb5v5.png",text:"Learn More About Me",path:"/AboutMe"}),c.a.createElement(p,{src:"https://res.cloudinary.com/dankl8in/image/upload/v1644352086/github_tdtotg.jpg",text:"Check out some of my work",Link:!0,to:{pathname:"https://github.com/DeonFranklin"}})),c.a.createElement("ul",{className:"cards__items"},c.a.createElement(p,{img:!0,src:"https://res.cloudinary.com/dankl8in/image/upload/v1644352085/connectionmap_q0ft3i.webp",text:"Let's Connect and Exchange Ideas",path:"/connect"})))))};t(31);var b=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"hero-container"},c.a.createElement("video",{src:"https://res.cloudinary.com/dankl8in/video/upload/v1644352250/video-1_xdvmaw.webm"}),c.a.createElement("h1",null,"WELCOME ",c.a.createElement("br",null),"TO",c.a.createElement("br",null),"MY",c.a.createElement("br",null),"PORTFOLIO!"),c.a.createElement("p",null,"dream and design with me"),c.a.createElement("div",{className:"hero-btns"},c.a.createElement(u,{className:"btns",buttonStyle:"btn--primary",buttonSize:"btn--large",Link:!0,to:{pathname:"https://github.com/DeonFranklin"},target:"Github"},"see my work"))))};t(32);var h=function(){return c.a.createElement("div",{className:"footer-container"},c.a.createElement("section",{className:"footer-subscription"},c.a.createElement("p",{className:"footer-subscription-heading"},"Please don't hesitate to reach out."),c.a.createElement("p",{className:"footer-subscription-text"}),c.a.createElement("div",{className:"input-areas"},c.a.createElement("form",null,c.a.createElement("input",{className:"footer-input",name:"email",type:"email",placeholder:"Your Email"}),c.a.createElement(u,{buttonStyle:"btn--outline"},"Reach Out")))),c.a.createElement("section",{className:"social-media"},c.a.createElement("div",{className:"social-media-wrap"},c.a.createElement("div",{className:"footer-logo"},c.a.createElement(o.b,{to:"/",className:"social-logo"})),c.a.createElement("small",{className:"website-rights"},"DeontheDev \xa9 2022"))))};var v=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(b,null),c.a.createElement(E,null),c.a.createElement(h,null))},g=t(1);t(33);function f(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("br",null),c.a.createElement("h1",{className:"aboutme"},"About Me"),c.a.createElement("br",null),c.a.createElement("p",null,"My name is Deon Franklin. I currently live in San Diego. I am a U.S. Navy Veteran and Full-Stack Software Developer. I like to create, design and bring ideas to life. My goal as a developer is to learn new concepts, practice those concepts to get a better understanding and teach those concepts to others as a means of solidifying my understanding."))}function k(){return c.a.createElement("h1",{className:"Projects"},"Projects")}t(34);function _(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",{className:"connect"},"Want to connect with me?"),c.a.createElement("div",{className:"social__wrapper"},c.a.createElement(p,{img:!0,src:"https://res.cloudinary.com/dankl8in/image/upload/v1645473334/c54dun8kektznrlav9lf.png",text:"Resume",Link:!0,to:{pathname:"https://resume.io/r/o1LkuT187"}}),c.a.createElement(p,{img:!0,src:"https://res.cloudinary.com/dankl8in/image/upload/v1645473980/du5gih3rlkat2wu5g5ch.png",Link:!0,to:{pathname:"https://github.com/DeonFranklin"}}),c.a.createElement(p,{img:!0,src:"https://res.cloudinary.com/dankl8in/image/upload/v1645471118/linkedin_ox4tok.png",Link:!0,to:{pathname:"https://www.linkedin.com/in/deondfranklin/"}}),c.a.createElement(p,{img:!0,src:"https://res.cloudinary.com/dankl8in/image/upload/v1645471097/g_ss4k6f.png",a:!0,href:"mailto:deonthedev@gmail.com"})))}var N=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(o.a,null,c.a.createElement(d,null),c.a.createElement(g.c,null,c.a.createElement(g.a,{path:"/",exact:!0,component:v}),c.a.createElement(g.a,{path:"/aboutme",component:f}),c.a.createElement(g.a,{path:"/Projects",component:k}),c.a.createElement(g.a,{path:"/connect",component:_}))))};r.a.render(c.a.createElement(N,null),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.2a241709.chunk.js.map