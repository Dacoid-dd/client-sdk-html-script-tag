const m = ({
  account_id: s,
  asst_id: l,
  params: r = {},
  width: i,
  height: c,
  env: d
}) => {
  if (s && l) {
    const o = `${d === "production" ? "https://dashboard.dacoidchat.com" : d === "local" ? "http://localhost:5173" : "https://chatbot-frontend-i8ao.vercel.app"}/embed/${s}/${l}`, p = (t) => Object.keys(t).map((a) => `${encodeURIComponent(a)}=${encodeURIComponent(t[a])}`).join("&");
    let n;
    if (Object.keys(r).length > 0)
      n = `${o}?${p(r)}`;
    else {
      const t = window.location.search;
      n = t ? `${o}${t}` : o;
    }
    const e = document.createElement("iframe");
    e.src = n, e.style.zIndex = "100", e.style.border = "0", e.style.overflowY = "auto";
    const h = window.matchMedia("(min-width: 1024px)").matches;
    e.style.position = "fixed", e.style.bottom = "10px", e.style.right = "10px", e.style.width = i ? `${i}` : "360px", e.style.height = c ? `${c}` : "700px", h || (e.style.position = "fixed", e.style.top = "0", e.style.left = "0", e.style.width = "100%", e.style.height = "100%"), document.body.appendChild(e);
  } else
    return console.error("Account and Assistant id's are required."), null;
};
window.dacoidSDK = {
  init: m
};
