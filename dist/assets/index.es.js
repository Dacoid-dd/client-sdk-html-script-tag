const h = ({
  account_id: n,
  asst_id: l,
  params: i = {},
  width: r,
  height: c,
  env: a
}) => {
  if (n && l) {
    const o = `${a === "production" ? "https://dashboard.dacoidchat.com" : a === "local" ? "http://localhost:5173" : "https://chatbot-frontend-i8ao.vercel.app"}/embed/${n}/${l}`, p = (t) => Object.keys(t).map((d) => `${encodeURIComponent(d)}=${encodeURIComponent(t[d])}`).join("&");
    let s;
    if (Object.keys(i).length > 0)
      s = `${o}?${p(i)}`;
    else {
      const t = window.location.search;
      s = t ? `${o}${t}` : o;
    }
    const e = document.createElement("iframe");
    e.src = s, e.style.zIndex = "100", e.style.border = "0", e.style.overflowY = "auto", window.matchMedia("(min-width: 1024px)").matches ? (e.style.position = "fixed", e.style.bottom = "10px", e.style.right = "10px", e.style.width = r ? `${r}` : "360px", e.style.height = c ? `${c}` : "700px") : (e.style.position = "fixed", e.style.top = "0", e.style.left = "0", e.style.width = "100%", e.style.height = "100%"), document.body.appendChild(e);
  } else
    return console.error("Account and Assistant id's are required."), null;
};
window.dacoidSDK = {
  init: h
};
