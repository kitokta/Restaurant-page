export default function hoverDropdown (dropElement, dropButton) {
    dropElement.addEventListener("mouseover", () => {
    dropButton.style.visibility = "visible";
    dropButton.style.pointerEvents = "auto";
    dropElement.addEventListener("mouseout", () => {
        dropButton.style.visibility = "hidden";
        dropButton.style.pointerEvents = "none";
      });
  });

};


