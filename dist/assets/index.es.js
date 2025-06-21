const w = ({
  account_id: r,
  asst_id: i,
  params: y = {},
  width: o,
  height: s,
  envUrl: a
}) => {
  if (r && i) {
    let n;
    a ? n = `${a}/embed/${r}/${i}` : n = `${window.location.origin}/embed/${r}/${i}`;
    const p = (t) => Object.keys(t).map((m) => `${encodeURIComponent(m)}=${encodeURIComponent(t[m])}`).join("&"), $ = !0, d = {
      ...y,
      isExternalEmbed: "true"
    };
    let l;
    if (Object.keys(d).length > 0)
      l = `${n}?${p(d)}`;
    else {
      const t = window.location.search;
      l = t ? `${n}${t}` : n;
    }
    console.log("Loading iframe from:", l), console.log("Is external embed:", $);
    const e = document.createElement("iframe");
    e.src = l, e.style.zIndex = "1000000000", e.style.border = "0", e.style.overflowY = "auto", window.matchMedia("(min-width: 1024px)").matches, e.style.position = "fixed", e.style.bottom = "10px", e.style.right = "10px", e.style.width = o ? `${o}` : "360px", e.style.height = s ? `${s}` : "700px";
    const c = () => {
      window.innerWidth < 1024 ? (e.style.top = "0", e.style.left = "0", e.style.width = "100%", e.style.height = "100%") : (e.style.width = o ? `${o}` : "360px", e.style.height = s ? `${s}` : "700px");
    };
    c(), window.addEventListener("resize", c), document.body.appendChild(e);
  } else
    return console.error("Account and Assistant id's are required."), null;
};
window.dacoidSDK = {
  init: w
};
