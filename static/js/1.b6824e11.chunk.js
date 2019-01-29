(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{276:function(e,t,a){},278:function(e,t,a){},280:function(e,t,a){},282:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=(a(276),a(87)),l=a.n(r),i=a(86),c=a.n(i),s=a(52),m=a(53),u=a(79),d=a(54),h=a(80),b=a(20),g=(a(278),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(u.a)(this,Object(d.a)(t).call(this))).showModal=function(t){e.setState({show:!0})},e.closeModal=function(t){e.setState({show:!1})},e.state={show:!1},e.escFunction=e.escFunction.bind(Object(b.a)(Object(b.a)(e))),e}return Object(h.a)(t,e),Object(m.a)(t,[{key:"escFunction",value:function(e){27===e.keyCode&&this.setState({show:!1})}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.escFunction,!1)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.escFunction,!1)}},{key:"render",value:function(){var e=this,t={maxWidth:206,textAlign:"center",textDecoration:"none",padding:2,margin:0,color:"black",border:"1px solid rgba(0,0,0,.125)",borderRadius:"0.25rem"},n={display:"flex",marginLeft:"auto",marginRight:"auto",maxWidth:200,maxHeight:"auto"},r={cursor:"pointer"};return o.a.createElement("div",null,o.a.createElement("div",{onClick:function(t){return e.showModal()},style:r},this.props.children),this.state.show?o.a.createElement("div",{style:{position:"fixed",top:0,bottom:0,left:0,right:0,backgroundColor:"rgba(0,0,0,0.3)",padding:50}},o.a.createElement("div",{className:"modalWindow",style:{fontFamily:"Comfortaa, sans-serif",backgroundColor:"#fff",textAlign:"justify",borderRadius:5,maxWidth:740,minHeight:200,maxHeight:600,overflowY:"auto",margin:"50px auto",padding:20}},o.a.createElement("div",{onClick:function(t){return e.closeModal()},className:"closeButton",style:r},o.a.createElement("strong",null,"X")," Close"),o.a.createElement("h2",null,"Zero To Mastery"),o.a.createElement("div",{className:"content"},o.a.createElement("em",null,'"The Complete Web Developer in 2019: Zero to Mastery"')," is a complete full-stack web development course, with the latest and most in-demand technologies, for anyone trying to learn web development in 2019.",o.a.createElement("br",null),o.a.createElement("br",null),"Learn to code with us, join the community and practice the skills you gained from the course, build up your portfolio by contributing to projects, and become a job ready web developer this year.",o.a.createElement("br",null),o.a.createElement("br",null),"Click any course to get started!",o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("div",{className:"courses",style:{display:"flex",flexWrap:"wrap",flexDirection:"row",justifyContent:"space-between",marginLeft:"auto",marginRight:"auto",padding:0}},o.a.createElement("a",{href:"https://www.udemy.com/the-complete-web-developer-zero-to-mastery/?couponCode=LEVELUPZTM",style:t},o.a.createElement("div",{className:"zeroToMastery"},o.a.createElement("img",{src:a(85),alt:"zerotomastery",style:n}),o.a.createElement("h5",null,"The Complete Web Developer in 2019: Zero to Mastery"),o.a.createElement("p",null,"Learn to code and become a web developer in 2018 with HTML5, CSS, Javascript, React, Node.js, Machine Learning & more!"))),o.a.createElement("a",{href:"https://www.udemy.com/the-complete-junior-to-senior-web-developer-roadmap/?couponCode=LEVELUPSN2019",style:t},o.a.createElement("div",{className:"juniorToSenior"},o.a.createElement("img",{src:a(83),alt:"juniortosenior",style:n}),o.a.createElement("h5",null,"The Complete Junior to Senior Web Developer Roadmap (2019)"),o.a.createElement("p",null,"This is the tutorial you've been looking for to no longer be a junior developer, level up your skills, and earn a higher salary. This extensive course doesn\u2019t just cover a small portion of the industry."))),o.a.createElement("a",{href:"https://www.udemy.com/master-the-coding-interview-data-structures-algorithms/?couponCode=LEVELUPZTM",style:t},o.a.createElement("div",{className:"codingInterview"},o.a.createElement("img",{src:a(84),alt:"masteringinterviews",style:n}),o.a.createElement("h5",null,"Master the Coding Interview: Data Structures + Algorithms"),o.a.createElement("p",null,"Using the strategies, lessons, and exercises in this course, you will learn how to land offers from great tech companies like Google, Microsoft, Facebook, Netflix, Amazon and more!"))))))):null)}}]),t}(n.Component)),p=(a(280),function(e){var t=e.body,a=e.title,n=e.button;return o.a.createElement("div",{className:"modal fade",id:"contribModal",tabIndex:"-1",role:"dialog","aria-labelledby":"contribModalLabel","aria-hidden":"true"},o.a.createElement("div",{className:"modal-dialog modal-lg",role:"document"},o.a.createElement("div",{className:"modal-content"},o.a.createElement("div",{className:"modal-header text-center"},o.a.createElement("h5",{className:"modal-title",id:"exampleModalLabel"},a),o.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},o.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),o.a.createElement("div",{className:"modal-body row"},t),o.a.createElement("div",{className:"modal-footer"},o.a.createElement("button",{type:"button",className:"button-primary","data-dismiss":"modal"},n)))))}),E=function(e){var t=e.data.map(function(e,t){return o.a.createElement("a",{key:t,className:"col-xs-12 col-sm-6 col-md-6 col-lg-4 text-center",href:e.html_url},o.a.createElement("div",{className:"contribCard"},o.a.createElement("img",{className:"d-none d-sm-block",src:e.avatar_url,alt:"".concat(e.login,"'s Avatar")}),o.a.createElement("h5",null,e.login),o.a.createElement("p",null,e.contributions," Contributions")))});return o.a.createElement(p,{body:t,title:"Project Contributors",button:"Close"})},f=o.a.memo(function(e){var t=e.contributors,a={MattCSmith:74,aneagoie:30,Dhaval1403:19,anantankur:11,The24thDS:-50},n=t.filter(function(e){return"allcontributors[bot]"!==e.login?(void 0!==a[e.login]&&(e.contributions+=a[e.login]),e):null});0===n.filter(function(e){return"Dhaval"===e.login}).length&&n.push({login:"Dhaval",avatar_url:"https://avatars0.githubusercontent.com/u/24822319?s=460&v=4",html_url:"https://github.com/Dhaval403",contributions:19});var r=n.sort(function(e,t){return t.contributions-e.contributions});return o.a.createElement("div",null,o.a.createElement("div",{className:"cFooterlink","data-toggle":"modal","data-target":"#contribModal"},"& ",r.length," Other Contributors"),o.a.createElement(E,{data:r}))});t.default=function(e){var t=e.contrib;return o.a.createElement("footer",null,o.a.createElement("img",{src:l.a,alt:"",style:{width:"100%"},className:"footer-wave"}),o.a.createElement("div",{className:"footer py-5"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-5 col-xs-12"},o.a.createElement("a",{className:"navbar-brand pb-3",href:"/#"},o.a.createElement("img",{src:c.a,alt:"logo",height:"50"})),o.a.createElement("p",{className:"text-muted text-left"},"Dedicated to monitoring the top 5 job demands in the 4 categories: Web, Mobile, Programming Languages and Backend"),o.a.createElement("div",{className:"socials text-white pt-2"},o.a.createElement("a",{href:"https://medium.com/zerotomastery",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("i",{className:"grow fab fa-medium"})),o.a.createElement("a",{href:"https://twitter.com/AndreiNeagoie",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("i",{className:"grow fab fa-twitter-square"})),o.a.createElement("a",{href:"https://github.com/zero-to-mastery",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("i",{className:"grow fab fa-github-square"})))),o.a.createElement("div",{className:"credits col-md-7 col-xs-6"},o.a.createElement("h5",{className:"pt-2"},"Brought to you by"),o.a.createElement("ul",null,o.a.createElement(g,null,o.a.createElement("li",{className:"grow"},"Zero To Mastery")),o.a.createElement("li",{className:"grow"},o.a.createElement(f,{contributors:t}))))))),o.a.createElement("div",{className:"copyright"},"\xa9 ",(new Date).getFullYear()," FullStack Trends. All Rights Reserved"))}}}]);
//# sourceMappingURL=1.b6824e11.chunk.js.map