const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  menuToggle.textContent = isOpen ? "×" : "☰";
});

mainNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
    menuToggle.textContent = "☰";
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

// WhatsApp appointment request. Replace this number with the clinic's WhatsApp number
// if it differs from the phone number listed on the clinic profile.
const clinicPhoneDigits = "919098264902";
const message = "Hello Maihar City Dental Care, I would like to ask about appointment availability. Please let me know the available timings.";
document.getElementById("whatsappLink").href =
  `https://wa.me/${clinicPhoneDigits}?text=${encodeURIComponent(message)}`;
