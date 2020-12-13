const searchForm = document.querySelector("#search_submit");
const inter = document.querySelector(".inter");
const header_el = document.querySelector(".header");
const mobile_menu = document.querySelector(".mobil-menu");
const nav = document.querySelector("nav");
const navbar_links_items = document.querySelectorAll(".navbar-links li a");
const main = document.querySelector("main");

let mobiel_menu_open = false;

let options = {
  root: null,
  threshold: 0,
  rootMargin: "80px",
};

flatpickr(".date_input", {
  enableTime: false,
  dateFormat: "l J-M-Y",
  plugins: [new rangePlugin({ input: "#secondRangeInput" })],
});
const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      header_el.classList.add("haeder-dark");
      return;
    }

    header_el.classList.remove("haeder-dark");
  });
}, options);

observer.observe(inter);

searchForm.addEventListener("click", (e) => {
  e.preventDefault();
});

//mobile menue
mobile_menu.addEventListener("click", () => {
  nav.classList.toggle("navbar-links__togle");
  mobile_menu.classList.toggle("open");
  mobiel_menu_open = !mobiel_menu_open;
});

main.addEventListener("click", () => {
  if (mobiel_menu_open) {
    nav.classList.toggle("navbar-links__togle");
    mobiel_menu_open = false;
  }
});

navbar_links_items.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.toggle("navbar-links__togle");
    mobile_menu.classList.toggle("open");
    mobiel_menu_open = false;
  });
});
