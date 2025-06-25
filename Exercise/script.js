const nameInput = document.getElementById("name");
const nameMessage = document.getElementById("nameMessage");

nameInput.addEventListener("input", () => {
  const name = nameInput.value;
  const nameRegex = /^[A-Za-z\s]+$/; // Only letters and spaces

  if (name === "") {
    nameMessage.textContent = "";
    nameMessage.className = "";
  } else if (nameRegex.test(name)) {
    nameMessage.textContent = "Valid name ✅";
    nameMessage.className = "valid";
  } else {
    nameMessage.textContent = "Invalid name ❌ (letters and spaces only)";
    nameMessage.className = "invalid";
  }

    
});
