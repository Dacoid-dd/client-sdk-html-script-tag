(function(o){typeof define=="function"&&define.amd?define(o):o()})(function(){"use strict";const o=({account_id:i,asst_id:l,params:c={},width:r,height:d,env:a})=>{if(i&&l){const n=`${a==="production"?"https://dashboard.dacoidchat.com":a==="local"?"http://localhost:5173":"https://chatbot-frontend-i8ao.vercel.app"}/embed/${i}/${l}`,f=t=>Object.keys(t).map(p=>`${encodeURIComponent(p)}=${encodeURIComponent(t[p])}`).join("&");let s;if(Object.keys(c).length>0)s=`${n}?${f(c)}`;else{const t=window.location.search;s=t?`${n}${t}`:n}const e=document.createElement("iframe");e.src=s,e.style.zIndex="100",e.style.border="0",e.style.overflowY="auto",window.matchMedia("(min-width: 1024px)").matches?(e.style.position="fixed",e.style.bottom="10px",e.style.right="10px",e.style.width=r?`${r}`:"360px",e.style.height=d?`${d}`:"700px"):(e.style.position="fixed",e.style.top="0",e.style.left="0",e.style.width="100%",e.style.height="100%"),document.body.appendChild(e)}else return console.error("Account and Assistant id's are required."),null};window.dacoidSDK={init:o}});
