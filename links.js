const LINKS = [
  {
    title: "WhatsApp",
    sub: "(41) 99748-9119",
    url: "https://wa.me/5541997489119"
  },
  {
    title: "Instagram",
    sub: "www.instagram.com/dracarolcalegari",
    url: "https://www.instagram.com/dracarolcalegari"
  },
  {
    title: "Site",
    sub: "www.carolinacalegari.com.br",
    url: "https://www.carolinacalegari.com.br"
  }
];

function render() {
  const wrap = document.getElementById("buttons");
  wrap.innerHTML = "";

  LINKS.forEach(item => {
    const a = document.createElement("a");
    a.className = "btn";
    a.href = item.url;
    a.target = "_blank";
    a.rel = "noopener";

    a.innerHTML = `
      <div class="btn__title">${item.title}</div>
      <div class="btn__sub">${item.sub}</div>
    `;

    wrap.appendChild(a);
  });
}

document.addEventListener("DOMContentLoaded", render);
