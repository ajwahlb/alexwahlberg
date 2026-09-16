const emailBtn = document.getElementById("email-btn");

emailBtn.addEventListener("click", function () {
  const user = "yourname";
  const domain = "example.com";
  
  // Set mailto href right before user clicks
  this.href = `mailto:${user}@${domain}`;
});