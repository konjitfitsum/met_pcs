const accordions = document.querySelectorAll(".accordion-header");

accordions.forEach((btn) => {
  btn.addEventListener("click", () => {
    const content = btn.nextElementSibling;

    // Close others
    document.querySelectorAll(".accordion-content").forEach((c) => {
      if (c !== content) {
        c.style.maxHeight = null;
      }
    });

    // Toggle current
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});

// document.getElementById("messageBtn").addEventListener("click", () => {
// alert("Message sent Succesefully 💙");

 
