const titleInput = document.querySelector("#titleInput");
const messageInput = document.querySelector("#messageInput");
const colorSelect = document.querySelector("#colorSelect");
const sizeInput = document.querySelector("#sizeInput");
const messageBox = document.querySelector("#messageBox");
const previewTitle = document.querySelector("#previewTitle");
const previewBody = document.querySelector("#previewBody");

const defaultTitle = "Your headline appears here";
const defaultMessage = "Your message appears here.";

// TODO: Fill in this function to update the preview box.
const updatePreview = () => {
  // 1) Read the input values
  const title = titleInput.value;
  console.log(title)
  const message = messageInput.value;
  console.log(message)
  const color = colorSelect.value;
  console.log(color)
  const size = sizeInput.value;
  console.log(size)
  // 2) Update previewTitle and previewBody
  previewTitle.textContent = title



  // 3) Update the theme class on messageBox
  
  
  
  
  // 4) Update the size of messageBox
};

// TODO: Add event listeners for input + change events.
titleInput.addEventListener("input", updatePreview);


// TODO: Call updatePreview once to set the defaults.
updatePreview();
