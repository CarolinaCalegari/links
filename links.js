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
    url: "https://www.google.com.br/search?newwindow=1&sca_esv=8f86c1cd49cc125e&sxsrf=ANbL-n5veRiEC98uORZFrTzLgfJOXAmVrg:1767911604813&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOUPqruAmKMD_6LGJQRu25_0q0HIk139rmGRivvnWt1vHX_DpfvPIthia08qpfkA2PQ-kaG5kpw8CX3cvIxYyrdUFAinTjBUEKWz0GWl1-SU1B7BUtVIWYQHxIWotjTNujd1vh9zz0JZ71usDU-2FJWV7Asoc&q=Dra.+Carolina+Calegari+-+Cirurgia+Bucomaxilofacial+Coment%C3%A1rios&sa=X&ved=2ahUKEwjW1cv5__yRAxWgrJUCHZgDImkQ0bkNegQIIxAE&cshid=1767911748315659&biw=2048&bih=962&dpr=2&aic=0"
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
