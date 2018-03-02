
//DROPBOX

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

//TABS

class TabsItem {
  constructor(element) {
    this.element = element;
    // attach dom element to object. Example in Tabs class
  }

  select() {
    // should use classList
    this.element.classList.add('Tabs__item-selected');
  }

  deselect() {
    this.element.classList.remove('Tabs__item-selected');
    // should use classList
  }
}

class TabsLink {
  constructor(element, parent) {
    this.element = element;// attach dom element to object
    this.tabs = parent;// attach parent to object
    this.tabsItem = parent.getTab(this.element.dataset.tab);// assign this to the associated tab using the parent's "getTab" method by passing it the correct data
    // reassign this.tabsItem to be a new
    this.tabsItem = new TabsItem(this.tabsItem);
    // instance of TabsItem, passing it this.tabsItem
    this.element.addEventListener('click', () => {
      this.tabs.updateActive(this);
      this.select();
    });
  };

  select() {
    // select this link
    this.element.classList.add('Tabs__link-selected');
    // select the associated tab
    this.tabsItem.select();
  }

  deselect() {
    this.element.classList.remove('Tabs__link-selected');
    // deselect this link
    this.tabsItem.deselect();
    // deselect the associated tab
  }
}

class Tabs {
  constructor(element) {
    this.element = element;// attaches the dom node to the object as "this.element"
    this.links = element.querySelectorAll(".Tabs__link");
    this.links = Array.from(this.links).map((link) => {
      return new TabsLink(link, this);
    });
    this.activeLink = this.links[0];
    this.init();
  }

  init() {
    // select the first link and tab upon ititialization
    this.activeLink.select();
  }

  updateActive(newActive) {
    this.activeLink.deselect();
    this.activeLink = newActive;
    // deselect the old active link
    // assign the new active link

  }

  getTab(data) {
    // use the tab item classname and the data attribute to select the proper tab
    return this.element.querySelector(`.Tabs__item[data-tab="${data}"]`);
  }

}

let tabs = document.querySelectorAll(".Tabs");
tabs = Array.from(tabs).map(tabs => new Tabs(tabs));