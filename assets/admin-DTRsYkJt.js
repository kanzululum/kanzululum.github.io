import{j as t,O as C,r as a,b as r,a as i,C as F,v as b,D as N,h as k,E as D,A as $,F as M,k as L,G as P,H as G,I as W,y as R,J as U,x as q,K as A,M as H,N as B,n as T,Q as O,z,u as I,c as J,d as K,e as Q,R as u}from"./reachHideWarning-DB-uB9Mf.js";import{c as E,M as V,a as w,F as m,b as X,v as h,L as l,d as Y,e as Z,f as _,g as tt,h as et,i as ot,s as st,j as nt,w as ct,k as at,l as rt,m as it}from"./ui-BKhGYI0n.js";import{m as lt}from"./mountApp-ReonOiJe.js";const mt=({})=>t.jsx(t.Fragment,{children:t.jsx(C,{})}),ht=({children:o})=>t.jsx(mt,{}),ut=({})=>t.jsx(ht,{}),dt=({})=>t.jsx(ut,{}),f=({})=>t.jsx(t.Fragment,{children:"Dashboard"}),xt=E(),j=new V(xt,w),y=({formData:o})=>{const[n,e]=a.useState({...j.defaultData}),c=d=>{},s=d=>{const{formData:x}=d;console.log(x)},v=d=>{console.log(d)};return a.useEffect(()=>{(async()=>{await E().init();const g=await j.get();console.log(g),e(g)})()},[e]),t.jsx("div",{className:"twx-p-4",children:t.jsx(m,{formData:n,schema:w,uiSchema:X,validator:h,onChange:c,onSubmit:s,onError:v,children:t.jsx("div",{children:t.jsx("button",{className:"btn btn-sm btn-primary",type:"submit",children:"Simpan"})})})})},gt=({})=>{const o=r(),n=i(c=>c),{company:e}=n;return F.actions,console.log(e),a.useEffect(()=>{o(b())},[o]),t.jsxs(t.Fragment,{children:[e.fetchStatus=="loading"&&t.jsx(l,{}),e.fetchStatus=="success"&&t.jsx(y,{formData:e.data}),t.jsx("div",{})]})},ft=({})=>t.jsx(t.Fragment,{children:"Docs"}),jt=({formData:o})=>{const n=s=>{console.log(s)},e=s=>{console.log(s)},c=s=>{console.log(s)};return a.useEffect(()=>{},[]),t.jsx("div",{className:"twx-border-solid twx-border twx-p-4",children:t.jsx(m,{formData:o,schema:Y,uiSchema:Z,validator:h,onChange:n,onSubmit:e,onError:c})})},pt=({})=>{const o=r(),n=i(c=>c),{berita:e}=n;return N.actions,console.log(e),a.useEffect(()=>{o(k())},[o]),t.jsxs(t.Fragment,{children:[t.jsx("h4",{children:"Edit Berita"}),e.fetchStatus=="loading"&&t.jsx(l,{}),e.fetchStatus=="success"&&t.jsx(jt,{formData:e.data}),t.jsx("div",{})]})},St=({})=>{const o=r(),n=i(c=>c),{company:e}=n;return F.actions,console.log(e),a.useEffect(()=>{o(b())},[o]),t.jsxs(t.Fragment,{children:[t.jsx("h4",{children:"Edit Company"}),e.fetchStatus=="loading"&&t.jsx(l,{}),e.fetchStatus=="success"&&t.jsx(y,{formData:e.data}),t.jsx("div",{})]})},Ft=({formData:o})=>{const n=s=>{console.log(s)},e=s=>{console.log(s)},c=s=>{console.log(s)};return a.useEffect(()=>{},[]),t.jsx("div",{className:"twx-border-solid twx-border twx-p-4",children:t.jsx(m,{formData:o,schema:_,uiSchema:tt,validator:h,onChange:n,onSubmit:e,onError:c})})},bt=({})=>{const o=r(),n=i(c=>c),{contactPerson:e}=n;return D.actions,console.log(e),a.useEffect(()=>{o($())},[o]),t.jsxs(t.Fragment,{children:[t.jsx("h4",{children:"Edit ContactPerson"}),e.fetchStatus=="loading"&&t.jsx(l,{}),e.fetchStatus=="success"&&t.jsx(Ft,{formData:e.data}),t.jsx("div",{})]})},Et=({formData:o})=>{const n=s=>{console.log(s)},e=s=>{console.log(s)},c=s=>{console.log(s)};return a.useEffect(()=>{},[]),t.jsx("div",{className:"twx-border-solid twx-border twx-p-4",children:t.jsx(m,{formData:o,schema:et,uiSchema:ot,validator:h,onChange:n,onSubmit:e,onError:c})})},wt=({})=>{const o=r(),n=i(c=>c),{galery:e}=n;return M.actions,console.log(e),a.useEffect(()=>{o(L())},[o]),t.jsxs(t.Fragment,{children:[t.jsx("h4",{children:"Edit Galery"}),e.fetchStatus=="loading"&&t.jsx(l,{}),e.fetchStatus=="success"&&t.jsx(Et,{formData:e.data}),t.jsx("div",{})]})},yt="search Form",vt="Form untuk data search",Ct="object",Nt=["action"],kt={action:{title:"search",type:"string"}},Dt={title:yt,description:vt,type:Ct,required:Nt,properties:kt},$t={"ui:description":"Action","ui:autofocus":!0},Mt={action:$t},Lt=({formData:o})=>{const n=s=>{console.log(s)},e=s=>{console.log(s)},c=s=>{console.log(s)};return a.useEffect(()=>{},[]),t.jsx("div",{className:"twx-border-solid twx-border twx-p-4",children:t.jsx(m,{formData:o,schema:Dt,uiSchema:Mt,validator:h,onChange:n,onSubmit:e,onError:c})})},Pt=({})=>{const o=r(),n=i(c=>c),{search:e}=n;return P.actions,console.log(e),a.useEffect(()=>{o(G())},[o]),t.jsxs(t.Fragment,{children:[t.jsx("h4",{children:"Edit Search"}),e.fetchStatus=="loading"&&t.jsx(l,{}),e.fetchStatus=="success"&&t.jsx(Lt,{formData:e.data}),t.jsx("div",{})]})},Gt=({formData:o})=>{const n=s=>{console.log(s)},e=s=>{console.log(s)},c=s=>{console.log(s)};return a.useEffect(()=>{},[]),t.jsx("div",{className:"twx-border-solid twx-border twx-p-4",children:t.jsx(m,{formData:o,schema:st,uiSchema:nt,validator:h,onChange:n,onSubmit:e,onError:c})})},Wt=({})=>{const o=r(),n=i(c=>c),{socialNetworkLink:e}=n;return W.actions,console.log(e),a.useEffect(()=>{o(R())},[o]),t.jsxs(t.Fragment,{children:[t.jsx("h4",{children:"Edit SocialNetworkLink"}),e.fetchStatus=="loading"&&t.jsx(l,{}),e.fetchStatus=="success"&&t.jsx(Gt,{formData:e.data}),t.jsx("div",{})]})},Rt="webNavigation Form",Ut="Form untuk data webNavigation",qt="object",At=["title","path"],Ht={title:{title:"webNavigation",type:"string"},path:{title:"webNavigation",type:"string"}},Bt={title:Rt,description:Ut,type:qt,required:At,properties:Ht},Tt={"ui:description":"Title","ui:autofocus":!0},Ot={"ui:description":"Path"},zt={title:Tt,path:Ot},It=({formData:o})=>{const n=s=>{console.log(s)},e=s=>{console.log(s)},c=s=>{console.log(s)};return a.useEffect(()=>{},[]),t.jsx("div",{className:"twx-border-solid twx-border twx-p-4",children:t.jsx(m,{formData:o,schema:Bt,uiSchema:zt,validator:h,onChange:n,onSubmit:e,onError:c})})},Jt=({})=>{const o=r(),n=i(c=>c),{webNavigation:e}=n;return U.actions,console.log(e),a.useEffect(()=>{o(q())},[o]),t.jsxs(t.Fragment,{children:[t.jsx("h4",{children:"Edit WebNavigation"}),e?t.jsxs(t.Fragment,{children:[e.fetchStatus=="loading"&&t.jsx(l,{}),e.fetchStatus=="success"&&t.jsx(It,{formData:e.data})]}):null,t.jsx("div",{})]})},Kt="homepage Form",Qt="Form untuk data homepage",Vt="object",Xt=["title","meta"],Yt={title:{title:"homepage",type:"string"},meta:{title:"homepage",type:"string"}},Zt={title:Kt,description:Qt,type:Vt,required:Xt,properties:Yt},_t={"ui:description":"Title","ui:autofocus":!0},te={"ui:description":"Meta"},ee={title:_t,meta:te},oe=({formData:o})=>{const n=s=>{console.log(s)},e=s=>{console.log(s)},c=s=>{console.log(s)};return a.useEffect(()=>{},[]),t.jsx("div",{className:"twx-border-solid twx-border twx-p-4",children:t.jsx(m,{formData:o,schema:Zt,uiSchema:ee,validator:h,onChange:n,onSubmit:e,onError:c})})},se=({})=>{const o=r(),n=i(c=>c),{homepage:e}=n;return A.actions,console.log(e),a.useEffect(()=>{o(H())},[o]),t.jsxs(t.Fragment,{children:[t.jsx("h4",{children:"Edit Homepage"}),e.fetchStatus=="loading"&&t.jsx(l,{}),e.fetchStatus=="success"&&t.jsx(oe,{formData:e.data}),t.jsx("div",{})]})},ne=({formData:o})=>{const n=s=>{console.log(s)},e=s=>{console.log(s)},c=s=>{console.log(s)};return a.useEffect(()=>{},[]),t.jsx("div",{className:"twx-border-solid twx-border twx-p-4",children:t.jsx(m,{formData:o,schema:ct,uiSchema:at,validator:h,onChange:n,onSubmit:e,onError:c})})},ce=({})=>{const o=r(),n=i(c=>c),{welcomeMessage:e}=n;return B.actions,console.log(e),a.useEffect(()=>{o(T())},[o]),t.jsxs(t.Fragment,{children:[t.jsx("h4",{children:"Edit WelcomeMessage"}),e.fetchStatus=="loading"&&t.jsx(l,{}),e.fetchStatus=="success"&&t.jsx(ne,{formData:e.data}),t.jsx("div",{})]})},ae=({formData:o})=>{const n=s=>{console.log(s)},e=s=>{console.log(s)},c=s=>{console.log(s)};return a.useEffect(()=>{},[]),t.jsx("div",{className:"twx-border-solid twx-border twx-p-4",children:t.jsx(m,{formData:o,schema:rt,uiSchema:it,validator:h,onChange:n,onSubmit:e,onError:c})})},re=({})=>{const o=r(),n=i(c=>c),{footer:e}=n;return O.actions,console.log(e),a.useEffect(()=>{o(z())},[o]),t.jsxs(t.Fragment,{children:[t.jsx("h4",{children:"Edit Footer"}),e.fetchStatus=="loading"&&t.jsx(l,{}),e.fetchStatus=="success"&&t.jsx(ae,{formData:e.data}),t.jsx("div",{})]})};async function p({params:o}){const{module:n,fk:e,pk:c,pageNumber:s}=o;return{module:n,pageNumber:s,pk:c,fk:e}}const S=({})=>{const{module:o,fk:n,pk:e,pageNumber:c}=I();return console.log(o,n,c,e),o=="company"?t.jsx(St,{}):o=="berita"?t.jsx(pt,{}):o=="contact-person"?t.jsx(bt,{}):o=="galery"?t.jsx(wt,{}):o=="search"?t.jsx(Pt,{}):o=="social-network-link"?t.jsx(Wt,{}):o=="web-navigation"?t.jsx(Jt,{}):o=="homepage"?t.jsx(se,{}):o=="welcome-message"?t.jsx(ce,{}):o=="footer"?t.jsx(re,{}):t.jsxs(t.Fragment,{children:["Content ",o,"/",n,"/",e,"/",c]})};function ie(){const o=J(K(t.jsxs(u,{path:"/",element:t.jsx(dt,{}),children:[t.jsx(u,{index:!0,element:t.jsx(f,{})}),t.jsx(u,{path:"/contents",element:t.jsx(S,{}),loader:p}),t.jsx(u,{path:"/contents/:module",element:t.jsx(S,{}),loader:p}),t.jsx(u,{path:"/dashboard",element:t.jsx(f,{})}),t.jsx(u,{path:"/company",element:t.jsx(gt,{})}),t.jsx(u,{path:"/docs",element:t.jsx(ft,{})})]})));return t.jsx(Q,{router:o})}lt(t.jsx(ie,{}));
