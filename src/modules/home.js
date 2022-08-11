let counter = 0;

export default class home {
  static load(content) {
    const title = document.createElement("h1");
    title.innerHTML = "Sua Doceria Coreana!";
    title.setAttribute("id", "title");
    const box = document.createElement("div");
    box.setAttribute("id", "box");
    box.appendChild(title);
    content.appendChild(box);
    //adding 1 to home counter
  home.counter("add");
  }

  static remove(content) {
    const box = document.getElementById("box");
    content.removeChild(box);
    const homeBtn = document.getElementById("home");
    homeBtn.classList.remove('selected');
    home.counter("remove");
  }

  static counter(order) {
    if (order === "add") counter = 1;
    else if (order === "remove") counter = 0;
  }
}

export {counter};