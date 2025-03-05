const p = ({
  account_id: i,
  asst_id: r,
  params: d = {},
  width: n,
  height: o,
  envUrl: y
}) => {
  if (i && r) {
    const s = `${y || "https://beta.dacoidchat.com"}/embed/${i}/${r}`, m = (t) => Object.keys(t).map((a) => `${encodeURIComponent(a)}=${encodeURIComponent(t[a])}`).join("&");
    let l;
    if (Object.keys(d).length > 0)
      l = `${s}?${m(d)}`;
    else {
      const t = window.location.search;
      l = t ? `${s}${t}` : s;
    }
    const e = document.createElement("iframe");
    e.src = l, e.style.zIndex = "1000000000", e.style.border = "0", e.style.overflowY = "auto", window.matchMedia("(min-width: 1024px)").matches, e.style.position = "fixed", e.style.bottom = "10px", e.style.right = "10px", e.style.width = n ? `${n}` : "360px", e.style.height = o ? `${o}` : "700px";
    const c = () => {
      window.innerWidth < 1024 ? (e.style.top = "0", e.style.left = "0", e.style.width = "100%", e.style.height = "100%") : (e.style.width = n ? `${n}` : "360px", e.style.height = o ? `${o}` : "700px");
    };
    c(), window.addEventListener("resize", c), document.body.appendChild(e);
  } else
    return console.error("Account and Assistant id's are required."), null;
};
window.dacoidSDK = {
  init: p
};
