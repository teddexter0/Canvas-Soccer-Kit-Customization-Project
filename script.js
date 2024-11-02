const canvasShirt = document.getElementById('shirt');
const canvasShort = document.getElementById('short');

const ctxShirt = canvasShirt.getContext("2d");
const ctxShort = canvasShort.getContext("2d");

// Select the primary and secondary color dropdown elements
const primaryColorSelect = document.getElementById("primaryColor");
const secondaryColorSelect = document.getElementById("secondaryColor");

// Function to update colors
function updateColors() {
  const primaryColor = primaryColorSelect.value;
  const secondaryColor = secondaryColorSelect.value;
  return { primaryColor, secondaryColor };
}

// Helper function to reset all pattern variables
function resetPatterns() {
    isStripesSelected = false;
    isHoopsSelected = false;
    isSashSelected = false;
    isHalvesSelected = false;
}

// Initial color update
let { primaryColor, secondaryColor } = updateColors();

function clearShirtPattern() {
    ctxShirt.clearRect(0, 0, canvasShirt.width, canvasShirt.height); // Clear the entire canvas
    drawShirt(primaryColor); // Redraw the plain shirt outline
}


// Function to draw the shirt
function drawShirt(primaryColor) {
// Clear the canvas
ctxShirt.clearRect(0, 0, canvasShirt.width, canvasShirt.height);

// Set up stroke style and line width
ctxShirt.strokeStyle = '#000';
ctxShirt.lineWidth = 1;

// Start drawing the continuous shirt outline
ctxShirt.beginPath();

// Shirt outline using bezier curve
ctxShirt.moveTo(70, 60); // Start point at shoulder
ctxShirt.bezierCurveTo(100, 110, 200, 100, 220, 55); // Right shoulder curve

// Right diagonal line (shoulder to elbow)
ctxShirt.lineTo(290, 120); 

// Right elbow line
ctxShirt.lineTo(240, 150);

// Right armpit line
ctxShirt.lineTo(190, 125);

// Right side (armpit to bottom)
ctxShirt.lineTo(190, 250);

// Bottom (right base to left base)
ctxShirt.lineTo(90, 250);

// Left side (bottom to left armpit)
ctxShirt.lineTo(90, 125);

// Left armpit line
ctxShirt.lineTo(50, 155);

// Left elbow line
ctxShirt.lineTo(10, 120);

// Left diagonal line (elbow to shoulder)
ctxShirt.lineTo(70, 60); // Close the path back to the left shoulder

// Stroke the continuous outline
ctxShirt.stroke();



    ctxShirt.fillStyle = primaryColor;
    ctxShirt.fill();
}

// Function to draw shorts
function drawShorts(secondaryColor) {
    ctxShort.clearRect(0, 0, canvasShort.width, canvasShort.height);

    ctxShort.strokeStyle = '#000';
    ctxShort.lineWidth = 1;

    // Shorts outline
    ctxShort.beginPath();
    ctxShort.moveTo(120, 50);
    ctxShort.lineTo(40, 250);
    ctxShort.lineTo(125, 250);
    ctxShort.lineTo(150, 150);
    ctxShort.lineTo(165, 250);
    ctxShort.lineTo(240, 250);
    ctxShort.lineTo(180, 50);
    ctxShort.lineTo(120, 50);
    ctxShort.stroke();

    ctxShort.fillStyle = secondaryColor;
    ctxShort.fill();
}

// Function to apply patterns on shirt
function applyShirtPatterns() {
    if (isStripesSelected) {
        clearShirtPattern();

        ctxShirt.beginPath();
        ctxShirt.moveTo(95, 250); //base
        ctxShirt.lineTo(95, 125);
        ctxShirt.lineTo(105, 125);
        ctxShirt.lineTo(105, 250);
        ctxShirt.stroke();
        ctxShirt.fillStyle = secondaryColor;
        ctxShirt.fill();

        ctxShirt.beginPath();
        ctxShirt.moveTo(115, 250); //base
        ctxShirt.lineTo(115, 125);
        ctxShirt.lineTo(125, 125);
        ctxShirt.lineTo(125, 250);
        ctxShirt.stroke();
        ctxShirt.fillStyle = secondaryColor;
        ctxShirt.fill();

        ctxShirt.beginPath();
        ctxShirt.moveTo(135, 250); //base
        ctxShirt.lineTo(135, 125);
        ctxShirt.lineTo(145, 125);
        ctxShirt.lineTo(145, 250);
        ctxShirt.stroke();
        ctxShirt.fillStyle = secondaryColor;
        ctxShirt.fill();

        ctxShirt.beginPath();
        ctxShirt.moveTo(155, 250); //base
        ctxShirt.lineTo(155, 125);
        ctxShirt.lineTo(165, 125);
        ctxShirt.lineTo(165, 250);
        ctxShirt.stroke();
        ctxShirt.fillStyle = secondaryColor;
        ctxShirt.fill();

        ctxShirt.beginPath();
        ctxShirt.moveTo(185, 250); //base
        ctxShirt.lineTo(185, 125);
        ctxShirt.lineTo(175, 125);
        ctxShirt.lineTo(175, 250);
        ctxShirt.stroke();
        ctxShirt.fillStyle = secondaryColor;
        ctxShirt.fill();
    } 
    // Other patterns like hoops, sash, and halves can be added here
     if (isHoopsSelected) {
        clearShirtPattern();
            ctxShirt.beginPath();
            ctxShirt.moveTo(190,120);
            ctxShirt.lineTo(90,120);
            ctxShirt.lineTo(90,130);
            ctxShirt.lineTo(190,130);
            ctxShirt.stroke();
            ctxShirt.fillStyle = secondaryColor;
            ctxShirt.fill();

            ctxShirt.beginPath();
            ctxShirt.moveTo(190,150);
            ctxShirt.lineTo(90,150);
            ctxShirt.lineTo(90,160);
            ctxShirt.lineTo(190,160);
            ctxShirt.stroke();
            ctxShirt.fillStyle = secondaryColor;
            ctxShirt.fill();

            ctxShirt.beginPath();
            ctxShirt.moveTo(190,180);
            ctxShirt.lineTo(90,180);
            ctxShirt.lineTo(90,190);
            ctxShirt.lineTo(190,190);
            ctxShirt.stroke();
            ctxShirt.fillStyle = secondaryColor;
            ctxShirt.fill();

            ctxShirt.beginPath();
            ctxShirt.moveTo(190,210);
            ctxShirt.lineTo(90,210);
            ctxShirt.lineTo(90,220);
            ctxShirt.lineTo(190,220);
            ctxShirt.stroke();
            ctxShirt.fillStyle = secondaryColor;
            ctxShirt.fill();

            ctxShirt.beginPath();
            ctxShirt.moveTo(190,240);
            ctxShirt.lineTo(90,240);
            ctxShirt.lineTo(90,250);
            ctxShirt.lineTo(190,250);
            ctxShirt.stroke();
            ctxShirt.fillStyle = secondaryColor;
            ctxShirt.fill();

    }   if (isSashSelected) {
        clearShirtPattern();
            ctxShirt.beginPath();
            ctxShirt.moveTo(90,250);
            ctxShirt.lineTo(190, 125);
            ctxShirt.lineTo(190,135);
            ctxShirt.lineTo(100,250);
            ctxShirt.stroke();
            
            ctxShirt.fillStyle = secondaryColor;
            ctxShirt.fill();

    }  if (isHalvesSelected) {
        clearShirtPattern();
        ctxShirt.beginPath();
        ctxShirt.moveTo(90,125);
        ctxShirt.lineTo(90,250);
        ctxShirt.lineTo(140,250);
        ctxShirt.lineTo(140,125);
        ctxShirt.lineTo(90,125);       
        ctxShirt.fillStyle = secondaryColor;
        ctxShirt.fill();

    }

}

// Main draw function
function drawAll() {
    primaryColor = primaryColorSelect.value;
    secondaryColor = secondaryColorSelect.value;

    drawShirt(primaryColor);
    drawShorts(secondaryColor);

    if (isStripesSelected || isHoopsSelected || isSashSelected || isHalvesSelected) {
        applyShirtPatterns();
    }
}

// Add event listeners to update colors and redraw when patterns are selected
document.getElementById("primaryColor").addEventListener("change", drawAll);
document.getElementById("secondaryColor").addEventListener("change", drawAll);

// Event listeners for pattern selection with reset
document.getElementById("stripes").addEventListener("click", () => {
    resetPatterns();
    isStripesSelected = true;
    drawAll();
});

document.getElementById("hoops").addEventListener("click", () => {
    resetPatterns();
    isHoopsSelected = true;
    drawAll();
});

document.getElementById("halves").addEventListener("click", () => {
    resetPatterns();
    isHalvesSelected = true;
    drawAll();
});

document.getElementById("sash").addEventListener("click", () => {
    resetPatterns();
    isSashSelected = true;
    drawAll();
});
// Initial draw
drawAll();


document.addEventListener('DOMContentLoaded', function() {
    const dropdownBtn = document.querySelector('.dropdown-btn');
    const dropdownContent = document.querySelector('.dropdown-content');

    dropdownBtn.addEventListener('click', function() {
      dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    });

    // Close dropdown if user clicks outside of it
    window.addEventListener('click', function(event) {
      if (!event.target.matches('.dropdown-btn')) {
        dropdownContent.style.display = 'none';
      }
    });
  });