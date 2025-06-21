const $ = ({
  account_id: r,
  asst_id: a,
  params: p = {},
  width: n,
  height: s,
  envUrl: i
}) => {
  if (r && a) {
    let o;
    i ? o = `${i}/embed/${r}/${a}` : o = `${window.location.origin}/embed/${r}/${a}`;
    const w = (t) => Object.keys(t).map((y) => `${encodeURIComponent(y)}=${encodeURIComponent(t[y])}`).join("&"), d = i && window.location.origin !== i, c = {
      ...p,
      isExternalEmbed: d ? "true" : "false"
    };
    let l;
    if (Object.keys(c).length > 0)
      l = `${o}?${w(c)}`;
    else {
      const t = window.location.search;
      l = t ? `${o}${t}` : o;
    }
    console.log("Loading iframe from:", l), console.log("Is external embed:", d);
    const e = document.createElement("iframe");
    e.src = l, e.style.zIndex = "1000000000", e.style.border = "0", e.style.overflowY = "auto", window.matchMedia("(min-width: 1024px)").matches, e.style.position = "fixed", e.style.bottom = "10px", e.style.right = "10px", e.style.width = n ? `${n}` : "360px", e.style.height = s ? `${s}` : "700px";
    const m = () => {
      window.innerWidth < 1024 ? (e.style.top = "0", e.style.left = "0", e.style.width = "100%", e.style.height = "100%") : (e.style.width = n ? `${n}` : "360px", e.style.height = s ? `${s}` : "700px");
    };
    m(), window.addEventListener("resize", m), document.body.appendChild(e);
  } else
    return console.error("Account and Assistant id's are required."), null;
};
window.dacoidSDK = {
  init: $
};
