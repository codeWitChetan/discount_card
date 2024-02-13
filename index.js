// Get the three div elements
const topBox = document.querySelector('.top-box');
const middleBox = document.querySelector('.middle-box');
const lastBox = document.querySelector('.last-box');

// Function to handle the click event
function handleBoxClick(box) {
  // Uncheck all radio buttons
  document.querySelectorAll('.box input[type="radio"]').forEach(radioButton => {
    radioButton.checked = false;
  });

  // Get the radio button within the clicked box
  const radioButton = box.querySelector('input[type="radio"]');

  // Check the radio button
  radioButton.checked = true;

  // Remove the 'selected' class from all boxes
  document.querySelectorAll('.box').forEach(b => {
    b.classList.remove('selected');
  });

  // Add the 'selected' class to the clicked box
  box.classList.add('selected');
}

// Add click event listeners to each box
topBox.addEventListener('click', () => handleBoxClick(topBox));
middleBox.addEventListener('click', () => handleBoxClick(middleBox));
lastBox.addEventListener('click', () => handleBoxClick(lastBox));
