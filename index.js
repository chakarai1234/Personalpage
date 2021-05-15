const about = document.querySelector("#about");
const contact = document.querySelector("#contact");
const aboutContent = document.querySelector("#about-content");
const contactContent = document.querySelector("#contact-content");

about.addEventListener("click", () => {
  const aboutBox = new WinBox({
    title: "About Chakara",
    x: "center",
    background: "#0f0",
    modal: true,
    y: "center",
    width: "50%",
    height: "50%",
    mount: document.getElementById("about-content"),
  });
});

contact.addEventListener("click", () => {
  const contactBox = new WinBox({
    title: "Contact Chakara",
    background: "#0f0",
    x: "center",
    y: "center",
    width: "50%",
    height: "50%",
    mount: document.getElementById("contact-content"),
  });
});
