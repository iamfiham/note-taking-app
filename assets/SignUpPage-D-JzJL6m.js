import{r as a,D as l,h as r,j as e,L as i,I as c}from"./index-NIjlE3bY.js";function x({children:s}){const{isLogIn:t}=a.useContext(l),{logOut:n}=r(),o=t?"/":"/home";return e.jsxs("div",{className:"sign-in-page relative grid place-items-center",children:[e.jsx(i,{to:o,children:e.jsxs("button",{className:"absolute -top-12 left-0 flex items-center gap-1 rounded-full p-1 pl-1 pr-2 text-base/none font-medium text-neutral-500 hover:bg-neutral-50",children:[e.jsx(c,{className:"fill-neutral-500"}),"back"]})}),t?e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx("h2",{className:"mb-4 text-2xl font-semibold text-neutral-900",children:"You Already log in"}),e.jsx("button",{className:"login-button rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white",onClick:n,children:"Log out"})]}):s]})}export{x as default};
