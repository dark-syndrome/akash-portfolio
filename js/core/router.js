export function initRouter() {
  document.body.addEventListener("click", e => {
    const link = e.target.closest("a[data-link]");
    if (!link) return;

    e.preventDefault();
    navigate(link.getAttribute("href"));
  });
}

async function navigate(url) {
  const res = await fetch(url);
  const html = await res.text();

  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  const newContent = doc.querySelector("main");
  const currentMain = document.querySelector("main");

  if (newContent && currentMain) {
    currentMain.innerHTML = newContent.innerHTML;
    window.scrollTo(0, 0);
  }
}
