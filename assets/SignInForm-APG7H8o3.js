import{G as E,e as F,r as a,u as L,j as s,f as M,L as k}from"./index-BboWbuyv.js";import{M as y,a as g,b as T}from"./index-C71Bx_wz.js";function B(t){return E({tag:"svg",attr:{version:"1.1",x:"0px",y:"0px",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"path",attr:{fill:"#FFC107",d:`M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12\r
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24\r
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z`},child:[]},{tag:"path",attr:{fill:"#FF3D00",d:`M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657\r
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z`},child:[]},{tag:"path",attr:{fill:"#4CAF50",d:`M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36\r
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z`},child:[]},{tag:"path",attr:{fill:"#1976D2",d:`M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571\r
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z`},child:[]}]})(t)}function G(){const{signInWithGoogle:t,signInWithEmail:m}=F(),[h,l]=a.useState(!1),[o,r]=a.useState(""),[n,c]=a.useState(""),[x,d]=a.useState(!1),[f,u]=a.useState(!1),[j,p]=a.useState(!1),[b,i]=a.useState(!1),v=L(),C=()=>{t(i)},N=async()=>{let e=!0;if(o.trim()==""&&(u(!0),console.log("empty email field"),e=!1),n.trim()==""&&(d(!0),console.log("empty password field"),e=!1),e){p(!0),i(!0);let{result:O,errorCode:S}=await m(o.trim(),n.trim());i(!1),p(!1),O?(r(""),c(""),v("/")):(l(!0),console.log(S))}},w=e=>{d(!1),l(!1),c(e.target.value)},I=e=>{r(e.target.value),u(!1),l(!1)};return s.jsxs("div",{className:"sign-in-form",children:[b&&s.jsx("div",{className:"load-bar"}),s.jsx("h2",{children:"Log in to your Account"}),s.jsx("p",{className:"sub-head",children:"Wellcome back! Select method to log in"}),s.jsxs("div",{className:"google-button-div",children:[s.jsxs("button",{className:"google-button",onClick:C,children:[s.jsx(B,{})," Google"]}),s.jsxs("button",{className:"google-button",children:[s.jsx(M,{})," Facebook"]})]}),s.jsx("div",{className:"h-[1px] bg-neutral-200 relative mb-4",children:s.jsx("p",{className:" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-neutral-500  px-2 text-xs",children:"or continue with email"})}),s.jsxs("div",{className:"input",children:[s.jsx(y,{className:"icon"}),s.jsx("input",{type:"text",placeholder:"Email",value:o,onChange:e=>{I(e)}}),f&&s.jsx(g,{className:"error"})]}),s.jsxs("div",{className:"input",children:[s.jsx(T,{className:"icon"}),s.jsx("input",{type:"password",placeholder:"Password",value:n,onChange:e=>{w(e)}}),x&&s.jsx(g,{className:"error"})]}),s.jsx("p",{className:"forgot-password",children:"Forgot Password?"}),s.jsx("button",{className:"login-button",onClick:N,disabled:j,children:"Log in"}),s.jsxs("p",{className:"createAnAccount-text",children:["Don't have an account?",s.jsx(k,{to:"/sign-up",children:s.jsx("span",{children:" Create an account"})})]}),s.jsx("p",{className:`error-msg ${h&&"show"}`,children:"Invalid Email or Password"})]})}export{G as default};