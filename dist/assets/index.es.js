const p = ({
  account_id: s,
  asst_id: i,
  params: l = {},
  width: r,
  height: c,
  envUrl: a
}) => {
  if (s && i) {
    const o = `${a || "https://beta.dacoidchat.com"}/embed/${s}/${i}`, m = (t) => Object.keys(t).map((d) => `${encodeURIComponent(d)}=${encodeURIComponent(t[d])}`).join("&");
    let n;
    if (Object.keys(l).length > 0)
      n = `${o}?${m(l)}`;
    else {
      const t = window.location.search;
      n = t ? `${o}${t}` : o;
    }
    const e = document.createElement("iframe");
    e.src = n, e.style.zIndex = "100", e.style.border = "0", e.style.overflowY = "auto";
    const y = window.matchMedia("(min-width: 1024px)").matches;
    e.style.position = "fixed", e.style.bottom = "10px", e.style.right = "10px", e.style.width = r ? `${r}` : "360px", e.style.height = c ? `${c}` : "700px", y || (e.style.position = "fixed", e.style.top = "0", e.style.left = "0", e.style.width = "100%", e.style.height = "100%"), document.body.appendChild(e);
  } else
    return console.error("Account and Assistant id's are required."), null;
};
window.dacoidSDK = {
  init: p
};
