const d = ({
  account_id: s,
  asst_id: c,
  baseUrl: o,
  params: r = {}
}) => {
  if (s && c) {
    const l = (t) => Object.keys(t).map((i) => `${encodeURIComponent(i)}=${encodeURIComponent(t[i])}`).join("&");
    let n;
    if (Object.keys(r).length > 0)
      n = `${o}?${l(r)}`;
    else {
      const t = window.location.search;
      n = t ? `${o}${t}` : o;
    }
    const e = document.createElement("iframe");
    e.src = n, e.style.position = "fixed", e.style.bottom = "10px", e.style.right = "10px", e.style.height = "100%", e.style.maxHeight = "600px", e.style.overflowY = "auto", e.style.width = "700px", e.frameBorder = "0", document.body.appendChild(e);
  } else
    return console.error(
      "Account and Assistant id's are required."
    ), null;
};
window.vapiSDK = {
  init: d
};
