const themeSlider = document.getElementById("theme-slider");
const indicator = document.querySelector(".toggle-indicator");
const pricingSliderBtns = document.querySelectorAll(".toggle-option");
const planPriceStarter = document.querySelector(".planPrice-starter");
const planPricePro = document.querySelector(".planPrice-pro");
const planPriceBusiness = document.querySelector(".planPrice-business");
const planPrices = document.querySelectorAll(".planPriceTime");
const waBtn = document.querySelector(".contactOnWhatsappButton");
const messageArea = document.querySelector(".contactFormTextarea");
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".navLinks");
const cornerBtns = document.querySelector(".cornerBtns");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
  cornerBtns.classList.toggle("active");
});

themeSlider.addEventListener("click", function () {
  const root = document.documentElement;
  if (root.dataset.theme === "light") {
    root.dataset.theme = "dark";
    console.log("Dark theme activated");
  } else {
    root.dataset.theme = "light";
    console.log("Light theme activated");
  }
});

function animatePriceChange(priceEl, newValue) {
  priceEl.classList.add("is-changing");

  setTimeout(() => {
    priceEl.textContent = `$${newValue}`;
    priceEl.classList.remove("is-changing");
  }, 400);
}

pricingSliderBtns.forEach((button, index) => {
  button.addEventListener("click", (e) => {
    pricingSliderBtns.forEach((o) => o.classList.remove("active"));
    e.target.classList.toggle("active");
    indicator.style.transform = `translateX(${index * 100}%)`;
    if (e.target.dataset.value === "yearly") {
      animatePriceChange(planPriceStarter, "0");
      animatePriceChange(planPricePro, "120");
      animatePriceChange(planPriceBusiness, "480");
      planPriceStarter.textContent = "$0";
      planPricePro.textContent = "$120";
      planPriceBusiness.textContent = "$480";
      planPrices.forEach((price) => (price.textContent = "/yr"));
    } else {
      animatePriceChange(planPriceStarter, "0");
      animatePriceChange(planPricePro, "12");
      animatePriceChange(planPriceBusiness, "49");
      planPriceStarter.textContent = "$0";
      planPricePro.textContent = "$12";
      planPriceBusiness.textContent = "$49";
      planPrices.forEach((price) => (price.textContent = "/mo"));
    }
  });
});

waBtn.addEventListener("click", () => {
  const phoneNumber = "919834561689";
  const message =
    "Hi, I'm " +
    document.querySelector(".nameInput").value +
    ". " +
    messageArea.value;
  if (!messageArea.value || !document.querySelector(".nameInput").value) {
    alert("Please enter your name and message before contacting on WhatsApp.");
    return;
  } else {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  }
});
