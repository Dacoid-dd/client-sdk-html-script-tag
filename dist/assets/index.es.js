const $ = ({
  account_id: l,
  asst_id: r,
  params: d = {},
  width: o,
  height: s,
  envUrl: c
}) => {
  if (l && r) {
    let n;
    c ? n = `${c}/embed/${l}/${r}` : n = `${window.location.origin}/embed/${l}/${r}`;
    const y = (t) => Object.keys(t).map((m) => `${encodeURIComponent(m)}=${encodeURIComponent(t[m])}`).join("&");
    let i;
    if (Object.keys(d).length > 0)
      i = `${n}?${y(d)}`;
    else {
      const t = window.location.search;
      i = t ? `${n}${t}` : n;
    }
    console.log("Loading iframe from:", i);
    const e = document.createElement("iframe");
    e.src = i, e.style.zIndex = "1000000000", e.style.border = "0", e.style.overflowY = "auto", window.matchMedia("(min-width: 1024px)").matches, e.style.position = "fixed", e.style.bottom = "10px", e.style.right = "10px", e.style.width = o ? `${o}` : "360px", e.style.height = s ? `${s}` : "700px";
    const a = () => {
      window.innerWidth < 1024 ? (e.style.top = "0", e.style.left = "0", e.style.width = "100%", e.style.height = "100%") : (e.style.width = o ? `${o}` : "360px", e.style.height = s ? `${s}` : "700px");
    };
    a(), window.addEventListener("resize", a), document.body.appendChild(e);
  } else
    return console.error("Account and Assistant id's are required."), null;
};
window.dacoidSDK = {
  init: $
};
