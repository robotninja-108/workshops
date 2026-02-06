const titleInput = document.querySelector("#titleInput");
const messageInput = document.querySelector("#messageInput");
const colorSelect = document.querySelector("#colorSelect");
const sizeInput = document.querySelector("#sizeInput");
const messageBox = document.querySelector("#messageBox");
const previewTitle = document.querySelector("#previewTitle");
const previewBody = document.querySelector("#previewBody");

const defaultTitle = "Your headline appears here";
const defaultMessage = "Your message appears here.";
const defaultSize = 300;

const updatePreview = () => {
  // 1) Read the input values  
  const title = titleInput.value.trim();
  const message = messageInput.value.trim();

  // 2) Update previewTitle and previewBody
  previewTitle.textContent = title === "" ? defaultTitle : title;
  previewBody.textContent = message === "" ? defaultMessage : message;

  // 3) Update the theme class on messageBox
  messageBox.className = `message-preview ${colorSelect.value}`;

  // 4) Update the size of messageBox
  const sizeValue = Number(sizeInput.value);
  const safeSize = Number.isNaN(sizeValue) || sizeValue <= 0 ? defaultSize : sizeValue;
  messageBox.style.width = `${safeSize}px`;
  messageBox.style.minHeight = `${Math.round(safeSize * 0.6)}px`;
};

// Listeners for input + change events.
titleInput.addEventListener("input", updatePreview);
messageInput.addEventListener("input", updatePreview);
colorSelect.addEventListener("change", updatePreview);
sizeInput.addEventListener("input", updatePreview);

// Call updatePreview once to set the defaults.
updatePreview();

// Extra: Shout button functionality
const shoutButton = document.querySelector("#shoutButton");
shoutButton.addEventListener("click", () => {
  const currentMessage = messageInput.value;
  messageInput.value = currentMessage.toUpperCase();
  updatePreview();
});
