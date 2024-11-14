const d = ({
  account_id: r,
  asst_id: s,
  params: i = {}
}) => {
  if (r && s) {
    const o = `https://chatbot-frontend-dacoid.vercel.app/embed/${r}/${s}`, c = (t) => Object.keys(t).map((l) => `${encodeURIComponent(l)}=${encodeURIComponent(t[l])}`).join("&");
    let n;
    if (Object.keys(i).length > 0)
      n = `${o}?${c(i)}`;
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
window.dacoidSDK = {
  init: d
};
