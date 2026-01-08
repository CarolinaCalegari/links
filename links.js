const PHONE_DISPLAY = "(41) 99748-9119";
const PHONE_WA = "5541997489119"; // 55 + DDD + número

const LINKS = [
  {
    title: "WhatsApp",
    sub: PHONE_DISPLAY,
    url: `https://wa.me/${PHONE_WA}?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta.`,
    primary: true
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
    a.className = `btn ${item.primary ? "btn--primary" : ""}`;
    a.href = item.url;
    a.target = "_blank";
    a.rel = "noopener";

    a.innerHTML = `
      <div class="btn__title">${item.title}</div>
      <div class="btn__sub">${item.sub}</div>
    `;

    wrap.appendChild(a);
  });

  const top = document.getElementById("topWhatsapp");
  if (top) top.href = LINKS[0].url;
}

document.addEventListener("DOMContentLoaded", render);
