function showPopup(type) {
  const popup = document.createElement("div");
  popup.className = "popup";
  const closeBtn = document.createElement("span");
  closeBtn.textContent = "X";
  closeBtn.className = "popup-close";

  popup.appendChild(closeBtn);

  if (type === "login") {
   
    popup.innerHTML += "<h2>Login</h2>";
  
  } else if (type === "register") {
   
    popup.innerHTML += "<h2>Register</h2>";
   
  }

  document.body.appendChild(popup);

  closeBtn.addEventListener("click", function () {
    document.body.removeChild(popup);
  });
}

