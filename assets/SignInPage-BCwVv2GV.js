import{G as n,e as m,r as a,j as t,f as I,D as L,L as O}from"./index-CWdyjndk.js";function S(e){return n({tag:"svg",attr:{version:"1.1",x:"0px",y:"0px",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"path",attr:{fill:"#FFC107",d:`M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12\r
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24\r
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z`},child:[]},{tag:"path",attr:{fill:"#FF3D00",d:`M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657\r
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z`},child:[]},{tag:"path",attr:{fill:"#4CAF50",d:`M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36\r
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z`},child:[]},{tag:"path",attr:{fill:"#1976D2",d:`M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571\r
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z`},child:[]}]})(e)}function H(e){return n({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9V6zM18 20H6V10h12v10z"},child:[]}]})(e)}function g(e){return n({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"},child:[]}]})(e)}function k(e){return n({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"},child:[]}]})(e)}function B(){const{isLoginErrorOpen:e,setIsLoginErrorOpen:l,signInWithGoogle:p,signInWithEmail:x}=m(),[o,d]=a.useState(""),[i,h]=a.useState(""),[f,r]=a.useState(!1),[v,c]=a.useState(!1),[j,b]=a.useState(!1),[w,u]=a.useState(!1),C=()=>{p(u)},N=()=>{if(o.trim()==""&&i.trim()==""){c(!0),r(!0),console.log("email and password fields empty");return}if(o.trim()==""){c(!0),console.log("empty email field");return}if(i.trim()==""){r(!0),console.log("empty password field");return}x(o,i,d,h,b,u)},z=s=>{r(!1),l(!1),h(s.target.value)},M=s=>{d(s.target.value),c(!1),l(!1)};return t.jsxs("div",{className:"sign-in-form",children:[w&&t.jsx("div",{className:"load-bar"}),t.jsx("h2",{children:"Log in to your Account"}),t.jsx("p",{className:"sub-head",children:"Wellcome back! Select method to log in"}),t.jsxs("div",{className:"google-button-div",children:[t.jsxs("button",{className:"google-button",onClick:C,children:[t.jsx(S,{})," Google"]}),t.jsxs("button",{className:"google-button",children:[t.jsx(I,{})," Facebook"]})]}),t.jsx("div",{className:"h-[1px] bg-neutral-200 relative mb-4",children:t.jsx("p",{className:" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-neutral-500  px-2 text-xs",children:"or continue with email"})}),t.jsxs("div",{className:"input",children:[t.jsx(H,{className:"icon"}),t.jsx("input",{type:"text",placeholder:"Email",value:o,onChange:s=>{M(s)}}),v&&t.jsx(g,{className:"error"})]}),t.jsxs("div",{className:"input",children:[t.jsx(k,{className:"icon"}),t.jsx("input",{type:"password",placeholder:"Password",value:i,onChange:s=>{z(s)}}),f&&t.jsx(g,{className:"error"})]}),t.jsx("p",{className:"forgot-password",children:"Forgot Password?"}),t.jsx("button",{className:"login-button",onClick:N,disabled:j,children:"Log in"}),t.jsxs("p",{className:"createAnAccount-text",children:["Don't have an account? ",t.jsx("span",{children:" Create an account"})]}),t.jsx("p",{className:`error-msg ${e&&"show"}`,children:"Invalid Email or Password"})]})}function E(e){return n({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"},child:[]}]})(e)}function y(){const{isLogIn:e}=a.useContext(L),{logOut:l}=m();return t.jsxs("div",{className:"sign-in-page relative",children:[t.jsx(O,{to:"/",children:t.jsxs("button",{className:"absolute -top-12 left-0 font-medium text-base/none p-1 pl-1 pr-2 rounded-full  hover:bg-neutral-50 flex items-center gap-1",children:[t.jsx(E,{}),"back"]})}),e?t.jsxs("div",{className:"flex flex-col items-center ",children:[t.jsx("h2",{className:" text-neutral-900 mb-4 text-2xl font-semibold",children:"You Already log in"}),t.jsx("button",{className:"login-button bg-blue-500 px-4 py-2 rounded-md text-white font-medium text-sm",onClick:l,children:"Log out"})]}):t.jsx(B,{})]})}export{y as default};