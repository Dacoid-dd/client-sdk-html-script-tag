const y = ({
  account_id: r,
  asst_id: s,
  params: c = {},
  width: a,
  height: l,
  envUrl: d
}) => {
  if (r && s) {
    const o = `${d || "https://beta.dacoidchat.com"}/embed/${r}/${s}`, m = (t) => Object.keys(t).map((n) => `${encodeURIComponent(n)}=${encodeURIComponent(t[n])}`).join("&");
    let i;
    if (Object.keys(c).length > 0)
      i = `${o}?${m(c)}`;
    else {
      const t = window.location.search;
      i = t ? `${o}${t}` : o;
    }
    const e = document.createElement("iframe");
    e.src = i, e.style.zIndex = "1000000000", e.style.border = "0", e.style.overflowY = "auto";
    const p = window.matchMedia("(min-width: 1024px)").matches;
    e.style.position = "fixed", e.style.bottom = "10px", e.style.right = "10px", e.style.width = a ? `${a}` : "360px", e.style.height = l ? `${l}` : "700px", p || (e.style.position = "fixed", e.style.top = "0", e.style.left = "0", e.style.width = "100%", e.style.height = "100%"), document.body.appendChild(e), e.onload = () => {
      try {
        const t = e.contentWindow.document;
        if (console.log("Inserting script inside iframe:", t), t) {
          const n = t.createElement("script");
          n.type = "text/javascript", n.innerHTML = `
            console.log('Injected script running inside iframe');
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "qgj5g4g0d2");
          `, t.head.appendChild(n);
        }
      } catch (t) {
        console.error("Failed to inject script inside iframe:", t);
      }
    };
  } else
    return console.error("Account and Assistant id's are required."), null;
};
window.dacoidSDK = {
  init: y
};
