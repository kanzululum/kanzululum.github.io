import{j as s,O as W,r as o,u as q}from"./reachHideWarning-DB-uB9Mf.js";import{C as H,U as J}from"./user-r5jkv86q.js";import{B as G,g as Q}from"./getBlocksReadingTime-CWduqKt-.js";import{S as V,F as X,M as Z,T as ss,W as es,c as ts}from"./createDateFromSqlDateTime-D5DpWKye.js";import{h as as}from"./moment-C3kViVxY.js";const $s=async({params:e})=>{const{pageNumber:t,id:l,slug:n,kategori:d}=e;return{id:l,slug:n,pageNumber:t,kategori:d}},Fs=({})=>s.jsx(H,{children:s.jsx(W,{})}),ls="cls-0 container",cs="cls-1 grid md:grid-cols-12 grid-cols-1 gap-6",L="cls-2 lg:col-span-8 md:col-span-6",C="cls-3 relative overflow-hidden rounded-md shadow dark:shadow-gray-800",E="cls-4 p-6",ns="cls-8 p-6 rounded-md shadow dark:shadow-gray-800 mt-8",rs="cls-9 text-lg font-semibold",is="cls-10 mt-8",os="cls-11 grid lg:grid-cols-12 lg:gap-6",T="cls-12 lg:col-span-6 mb-5",B="cls-13 text-left",P="cls-14 font-semibold",K="cls-15 mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0",ds="cls-16 grid grid-cols-1",ms="cls-17 mb-5",xs="cls-18 mt-3 w-full py-2 px-3 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0 h-28",hs="cls-19 py-2 px-5 inline-block tracking-wide align-middle duration-500 text-base text-center bg-red-500 text-white rounded-md w-full",M="cls-20 lg:col-span-4 md:col-span-6",gs="cls-21 sticky top-20",js="cls-22 text-lg font-medium bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md p-2 text-center",R="cls-23 text-center mt-8",U="cls-24 h-20 w-20 mx-auto rounded-full shadow mb-4",I="cls-25 text-lg font-medium hover:text-red-500 transition-all duration-500 ease-in-out h5",Y="cls-26 text-lg font-medium bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md p-2 text-center mt-8",_="cls-27 list-none text-center mt-8 space-x-0.5",r="cls-29 size-8 inline-flex items-center justify-center tracking-wide align-middle text-base border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-red-500 hover:text-white hover:bg-red-500",p="cls-30 size-4",c="twx-shadow twx-bg-slate-300 twx-opacity-80 twx-shadow twx-rounded-md",v=r,z=({})=>s.jsxs("div",{className:`${ns} hidden`,children:[s.jsx("h5",{className:rs,children:" Tinggalkan Komentar: "}),s.jsxs("form",{className:is,children:[s.jsxs("div",{className:os,children:[s.jsx("div",{className:T,children:s.jsxs("div",{className:B,children:[s.jsx("label",{htmlFor:"name",className:P,children:"Nama:"}),s.jsx("input",{name:"name",id:"name",type:"text",placeholder:"Name :",className:K})]})}),s.jsx("div",{className:T,children:s.jsxs("div",{className:B,children:[s.jsx("label",{htmlFor:"email",className:P,children:"Email:"}),s.jsx("input",{name:"email",id:"email",type:"email",placeholder:"Email :",className:K})]})})]}),s.jsx("div",{className:ds,children:s.jsx("div",{className:ms,children:s.jsxs("div",{className:B,children:[s.jsx("label",{htmlFor:"comments",className:P,children:"Komentar:"}),s.jsx("textarea",{name:"comments",id:"comments",placeholder:"Message :",className:xs})]})})}),s.jsx("button",{type:"submit",id:"submit",name:"send",className:hs,children:"Kirim"})]})]}),A=({produk:e,loading:t})=>s.jsx("div",{className:`${gs} `,children:t?s.jsxs("div",{className:" twx-animate-pulse ",children:[s.jsx("h5",{className:` ${c} twx-h-6`,children:"  "}),s.jsxs("div",{className:R,children:[s.jsx("div",{className:`${U} ${c} !twx-mb-8`}),s.jsx("div",{className:`${I} ${c} twx-h-6`})]}),s.jsx("h5",{className:`${Y} ${c} twx-h-8`,children:"  "}),s.jsxs("ul",{className:_,children:[s.jsx("li",{className:`${r} ${c}`,children:" "}),s.jsx("li",{className:`${r} ${c}`}),s.jsx("li",{className:`${r} ${c}`,children:" "}),s.jsx("li",{className:`${r} ${c}`,children:" "}),s.jsx("li",{className:`${r} ${c}`,children:" "}),s.jsx("li",{className:`${r} ${c}`,children:" "}),s.jsx("li",{className:`${r} ${c}`})]})]}):s.jsxs(s.Fragment,{children:[s.jsx("h5",{className:js,children:" Kategori "}),s.jsxs("div",{className:R,children:[s.jsx(J,{className:U}),s.jsx("a",{href:`/produk/#/kategori/${e.kategori}`,className:I,children:e.kategori})]}),s.jsxs("h5",{className:`${Y} twx-flex twx-items-center twx-justify-center`,children:[" ",s.jsx(V,{className:`${p} twx-mr-2`})," Bagikan "]}),s.jsxs("ul",{className:_,children:[s.jsxs("li",{className:r,children:[" ",s.jsxs("a",{target:"_blank",href:`https://www.facebook.com/sharer.php?u=${e.shareLink}`,className:v,children:[" ",s.jsx(X,{className:p})," "]})," "]}),s.jsxs("li",{className:r,children:[" ",s.jsxs("a",{target:"_blank",href:`mailto://?subject=${encodeURIComponent(e.title)}&amp;body=${encodeURIComponent(e.title)}%20${e.shareLink}`,className:v,children:[" ",s.jsx(Z,{className:p})," "]})," "]}),s.jsxs("li",{className:r,children:[" ",s.jsxs("a",{target:"_blank",href:`http://www.twitter.com/share?url=${e.shareLink}`,className:v,children:[" ",s.jsx(ss,{className:p})," "]})," "]}),s.jsxs("li",{className:r,children:[" ",s.jsxs("a",{target:"_blank",href:`https://wa.me/?text=${e.shareLink}`,className:v,children:[" ",s.jsx(es,{className:p})," "]})," "]})]})]})}),us=({produk:e,loading:t,metaMode:l})=>s.jsx(s.Fragment,{children:s.jsx("div",{className:ls,children:s.jsx("div",{className:cs,children:t?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:`${L}  twx-animate-pulse`,children:[s.jsxs("div",{className:C,children:[s.jsx("div",{className:`twx-w-full twx-h-[300px] ${c}`}),s.jsx("div",{className:E,children:[...Array(10)].fill(1).map((n,d)=>s.jsx("p",{className:`twx-p-2 twx-my-2 ${c} twx-h-2`,children:" "},d))})]}),s.jsx(z,{})]}),s.jsx("div",{className:M,children:s.jsx(A,{produk:e,loading:t})})]}):e&&s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:L,children:[s.jsxs("div",{className:C,children:[s.jsx("img",{className:"twx-w-full",src:`/assets/images/produk/covers/${e.cover}`,alt:e.title}),s.jsx("div",{className:E,children:s.jsx(G,{data:e.content})})]}),s.jsx(z,{})]}),s.jsx("div",{className:M,children:s.jsx(A,{produk:e,metaMode:l})})]})})})}),Ns=({className:e,produk:t,loading:l,metaMode:n})=>s.jsx(s.Fragment,{children:s.jsx(us,{produk:t,loading:l,metaMode:n})}),ps=({breadcrumbs:e,banner:t,produk:l})=>{const[n,d]=o.useState({});o.useEffect(()=>{t.image&&d(k=>({backgroundImage:`url('${t.image}')`}))},[t,d]);const x="cls-0 relative table w-full items-center py-36  bg-top bg-no-repeat bg-cover",b="cls-1 absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/80 to-slate-900",y="cls-2 container relative",$="cls-3 grid grid-cols-1 pb-8 text-center mt-10",w="cls-4 text-4xl leading-normal tracking-wider font-semibold text-white",f="cls-5 list-none mt-6",h="cls-6 inline-block text-white/50 mx-5",g="cls-7 text-white block",j="cls-8 block",u="cls-9 absolute text-center z-10 bottom-5 start-0 end-0 mx-3",F="cls-10 tracking-[0.5px] mb-0 inline-block",S="cls-11 inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white",a="cls-12 inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180",m="cls-13 mdi mdi-chevron-right",D="cls-14 inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white",i=e.length-1;return l?s.jsxs(s.Fragment,{children:[s.jsxs("section",{className:x,style:n,children:[s.jsx("div",{className:b,children:" "}),s.jsxs("div",{className:y,children:[s.jsxs("div",{className:$,children:[s.jsxs("h3",{className:w,children:[" ",t.title," "]}),s.jsxs("ul",{className:f,children:[s.jsxs("li",{className:h,children:["   ",s.jsx("span",{className:g,children:" Kategori : "}),"   ",s.jsxs("span",{className:j,children:[" ",l.kategori," "]})," "]}),s.jsxs("li",{className:h,children:["   ",s.jsx("span",{className:g,children:" Tanggal : "}),"   ",s.jsxs("span",{className:j,children:[" ",l.tanggal," "]})," "]}),s.jsxs("li",{className:h,children:["   ",s.jsx("span",{className:g,children:" Waktu : "}),"   ",s.jsxs("span",{className:j,children:[" ",l.readingTime," Menit Baca "]})," "]})]})]})," "]})," ",s.jsx("div",{className:u,children:s.jsx("ul",{className:F,children:e.map((k,N)=>{const O=N===i?{"aria-current":"page"}:{};return s.jsxs(s.Fragment,{children:[o.createElement("li",{...O,className:N===i?D:S,key:N},N<i?s.jsxs("a",{href:k.path,children:[" ",k.title," "]}):k.title),N<i?s.jsxs("li",{className:a,children:[" ",s.jsx("i",{className:m,children:" "})," "]}):null]})})})})]})," "]}):null},bs=({model:e,loadingModel:t,reload:l,metaMode:n})=>{const{id:d}=q(),[x,b]=o.useState(d),[y,$]=o.useState({title:"",image:null}),[w,f]=o.useState(null),[h,g]=o.useState([]),[j,u]=o.useState(t),F=async()=>{if(!x)return;u(!0);const a=await e.get(x);try{a.content=JSON.parse(a.content)}catch{a.content=[]}a.readingTime=Q(a.content),a.tanggal=as(ts(a.dateCreated)).format("DD/MM/YYYY");const m=`${document.location.href}`;a.shareLink=encodeURIComponent(m),f(i=>({...i,...a}));const D=[{title:"Home",path:"/"},{title:"Produk",path:"/produk"},{title:a.title,path:`#/baca/${a.slug}`}];g(i=>[...D]),$(i=>({...i,title:a.title,image:`/assets/images/produk/covers/${a.cover}`})),u(!1)},S=()=>{const m=document.querySelector("meta[name=id]").getAttribute("content");m&&b(m)};return o.useEffect(()=>{e.ready&&F()},[x,f,l,u]),o.useEffect(()=>{n&&S()},[n,b]),s.jsxs(s.Fragment,{children:[s.jsx(ps,{banner:y,breadcrumbs:h,produk:w}),s.jsx("section",{className:"relative md:py-24 py-16 overflow-hidden",children:s.jsx(Ns,{metaMode:n,className:"mt-12",produk:w,loading:j})})]})},Ss=({model:e,reload:t,loadingModel:l,metaMode:n})=>s.jsx(bs,{metaMode:n,loadingModel:l,reload:t,model:e});export{Fs as B,Ss as P,$s as l};
