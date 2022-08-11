let counter = 0;

export default class menu {
  static load(content) {
    const title = document.createElement("h1");
    title.innerHTML = "Aqui você pode visualizar nosso Menu!";
    title.setAttribute("id", "title");
    const box = document.createElement("div");
    box.setAttribute("id", "box");
    box.appendChild(title);
    content.appendChild(box);
    //adding 1 to menu counter
  menu.counter("add");
  }

  static remove(content) {
    const box = document.getElementById("box");
    content.removeChild(box);
    const menuBtn = document.getElementById("menu");
    menuBtn.classList.remove('selected');
    menu.counter("remove");
  }

  static counter(order) {
    if (order === "add") counter = 1;
    else if (order === "remove") counter = 0;
  }
}

export {counter};