import{r,D as o,h as l,j as e,L as i,I as c}from"./index-D_BoBWCj.js";function u({children:s}){const{isLogIn:t}=r.useContext(o),{logOut:a}=l(),n=t?"/":"/home";return e.jsxs("div",{className:"sign-in-page relative grid place-items-center",children:[e.jsx(i,{to:n,className:"justify-self-start",children:e.jsxs("button",{className:"group mb-8 flex items-center gap-1 text-base/none font-medium text-neutral-500",children:[e.jsx(c,{className:"fill-neutral-400"}),e.jsx("span",{className:"border-0 border-b border-solid border-transparent leading-tight transition-all group-hover:border-neutral-400",children:"back"})]})}),t?e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx("h2",{className:"mb-4 text-2xl font-semibold text-neutral-900",children:"You Already log in"}),e.jsx("button",{className:"login-button rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white",onClick:a,children:"Log out"})]}):s]})}export{u as default};
