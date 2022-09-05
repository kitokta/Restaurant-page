// Requires the HTML parent dropElement and the dropButton list

export default function hoverDropdown(dropElement, dropButton) {
 //Checking if dropbutton has the lenght attribute, so its a HTML element or a nodelist.
  if (!!dropButton.length) {
    for (let i = 0; i < dropButton.length; i++) {
      dropElement.addEventListener("mouseover", () => {
        dropButton[i].style.visibility = "visible";
        dropButton[i].style.pointerEvents = "auto";
        dropElement.addEventListener("mouseout", () => {
          dropButton[i].style.visibility = "hidden";
          dropButton[i].style.pointerEvents = "none";
        });
      });
    }
  } else {
    dropElement.addEventListener("mouseover", () => {
      dropButton.style.visibility = "visible";
      dropButton.style.pointerEvents = "auto";
      dropElement.addEventListener("mouseout", () => {
        dropButton.style.visibility = "hidden";
        dropButton.style.pointerEvents = "none";
      });
    });
  }
}
