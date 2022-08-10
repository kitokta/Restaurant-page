let counter = 0;

export default class contato {
  static load(content) {
    const title = document.createElement("h1");
    title.innerHTML = "Entre em contato conosco!";
    title.setAttribute("id", "title");
    const box = document.createElement("div");
    box.classList.add("content");
    box.setAttribute("id", "box");
    box.appendChild(title);
    content.appendChild(box);
    contato.counter("add");
  }

  static remove(content) {
    const box = document.getElementById("box");
    content.removeChild(box);
    const contatoBtn = document.getElementById("contato");
    contatoBtn.classList.remove('selected');
    contato.counter("remove");
  }

  static counter(order) {
    if (order === "add") counter = 1;
    else if (order === "remove") counter = 0;
  }
}

export { counter };