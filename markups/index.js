class Dropdown {
  constructor(element) {
    this.element = element;
    this.element.addEventListener("click", () => {
      topDropdownList.classList.toggle("selected");
    });
  }
}


let topDropdown = document.getElementsByClassName("Dropdown--btn");
console.log(topDropdown);
topDropdown = new Dropdown(topDropdown[0]);

let topDropdownList = document.getElementsByClassName("Dropdown--list")[0];
console.log(topDropdownList);
