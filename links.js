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
  },
  {
    title: "Avaliações do Google",
    sub: "Ver avaliações e comentários",
    url: "https://www.google.com.br/search?ibp=gwp;0,7&q=Dra.+Carolina+Calegari+-+Cirurgia+Bucomaxilofacial&ludocid=9079432214454943883&lsig=AB86z5U9knnAB1bVuK4ROpdxYHtO#lkt=LocalPoiReviews&lpg=cid:CgIgAQ%3D%3D"
  }
];

function render() {
  const wrap = document.getElementById("buttons");
  if (!wrap) return;

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
