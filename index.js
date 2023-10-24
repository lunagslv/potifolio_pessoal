// Função 'defaultPage é chamada quando a
// janela carrega
window.onload = defaultPage();

// Dado um caminho, coloca o conteúdo dentro
// do elemento 'main-content'
async function navigate(pageName) {
  const url = `./pages/${pageName}.html`;
  const file = await fetch(url);
  const fileText = await file.text();

  document.getElementById("main-content").innerHTML = fileText;

  const allHyperlinks = document.getElementsByName("navigation-hyperlink");
  allHyperlinks.forEach((hl) => hl.classList.remove("current-page-link"));
  const aTag = document.getElementById(pageName);
  console.log(aTag);
  aTag.classList.add("current-page-link");
}

// Essa função carrega a página principal
async function defaultPage() {
  navigate("about");
}
