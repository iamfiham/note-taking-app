import{G as F,f as L,r as t,u as M,j as e,m as k,g as T,L as B}from"./index-CuQ-QxkF.js";import{M as P,a as g,b as D}from"./index-BW2kFKDN.js";function G(a){return F({tag:"svg",attr:{version:"1.1",x:"0px",y:"0px",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"path",attr:{fill:"#FFC107",d:`M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12\r
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24\r
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z`},child:[]},{tag:"path",attr:{fill:"#FF3D00",d:`M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657\r
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z`},child:[]},{tag:"path",attr:{fill:"#4CAF50",d:`M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36\r
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z`},child:[]},{tag:"path",attr:{fill:"#1976D2",d:`M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571\r
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z`},child:[]}]})(a)}function H(){const{signInWithGoogle:a,signInWithEmail:m}=L(),[h,n]=t.useState(!1),[i,r]=t.useState(""),[o,c]=t.useState(""),[x,d]=t.useState(!1),[f,u]=t.useState(!1),[j,p]=t.useState(!1),[v,l]=t.useState(!1),C=M(),b=()=>{a(l)},w=async()=>{let s=!0;if(i.trim()==""&&(u(!0),console.log("empty email field"),s=!1),o.trim()==""&&(d(!0),console.log("empty password field"),s=!1),s){p(!0),l(!0);let{result:S,errorCode:E}=await m(i.trim(),o.trim());l(!1),p(!1),S?(r(""),c(""),C("/")):(n(!0),console.log(E))}},N=s=>{d(!1),n(!1),c(s.target.value)},I=s=>{r(s.target.value),u(!1),n(!1)},O={visible:{opacity:1,willChange:"opacity"},hidden:{opacity:0,willChange:"opacity"},exit:{opacity:0,willChange:"opacity",transition:{duration:.1}}},y={ease:"easeInOut",duration:.3};return e.jsxs(k.div,{initial:"hidden",animate:"visible",exit:"exit",transition:y,variants:O,className:"sign-in-form",children:[v&&e.jsx("div",{className:"load-bar"}),e.jsx("h2",{children:"Log in to your Account"}),e.jsx("p",{className:"sub-head",children:"Wellcome back! Select method to log in"}),e.jsxs("div",{className:"google-button-div",children:[e.jsxs("button",{className:"google-button",onClick:b,children:[e.jsx(G,{})," Google"]}),e.jsxs("button",{className:"google-button",children:[e.jsx(T,{})," Facebook"]})]}),e.jsx("div",{className:"h-[1px] bg-neutral-200 relative mb-4",children:e.jsx("p",{className:" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-neutral-500  px-2 text-xs",children:"or continue with email"})}),e.jsxs("div",{className:"input",children:[e.jsx(P,{className:"icon"}),e.jsx("input",{type:"text",placeholder:"Email",value:i,onChange:s=>{I(s)}}),f&&e.jsx(g,{className:"error"})]}),e.jsxs("div",{className:"input",children:[e.jsx(D,{className:"icon"}),e.jsx("input",{type:"password",placeholder:"Password",value:o,onChange:s=>{N(s)}}),x&&e.jsx(g,{className:"error"})]}),e.jsx("p",{className:"forgot-password",children:"Forgot Password?"}),e.jsx("button",{className:"login-button",onClick:w,disabled:j,children:"Log in"}),e.jsxs("p",{className:"createAnAccount-text",children:["Don't have an account?",e.jsx(B,{to:"/sign-up",children:e.jsx("span",{children:" Create an account"})})]}),e.jsx("p",{className:`error-msg ${h&&"show"}`,children:"Invalid Email or Password"})]})}export{H as default};
