const m = ({
  account_id: r,
  asst_id: s,
  params: l = {},
  width: c,
  height: d
}) => {
  if (r && s) {
    const o = `https://chatbot-frontend-dacoid.vercel.app/embed/${r}/${s}`, a = (t) => Object.keys(t).map((i) => `${encodeURIComponent(i)}=${encodeURIComponent(t[i])}`).join("&");
    let n;
    if (Object.keys(l).length > 0)
      n = `${o}?${a(l)}`;
    else {
      const t = window.location.search;
      n = t ? `${o}${t}` : o;
    }
    const e = document.createElement("iframe");
    e.src = n, e.style.position = "fixed", e.style.bottom = "10px", e.style.right = "10px", e.style.height = d || "100%", e.style.maxHeight = "600px", e.style.overflowY = "auto", e.style.width = c || "auto", e.style.zIndex = "100", e.frameBorder = "0", document.body.appendChild(e);
  } else
    return console.error(
      "Account and Assistant id's are required."
    ), null;
};
window.dacoidSDK = {
  init: m
};
