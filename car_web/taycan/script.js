document.addEventListener("DOMContentLoaded", function() {
  const galleryItems = document.querySelectorAll('.gallery-item');
  let currentIndex = 0;

  // Function to change the displayed image
  function changeImage() {
    galleryItems.forEach((item, index) => {
      item.classList.remove('active');
    });
    galleryItems[currentIndex].classList.add('active');
  }

  // Next button functionality
  document.getElementById('next-button').addEventListener('click', function () {
    currentIndex = (currentIndex + 1) % galleryItems.length; // Loop to the first image when the last image is reached
    changeImage();
  });

  // Previous button functionality
  document.getElementById('prev-button').addEventListener('click', function () {
    currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length; // Loop to the last image when the first image is reached
    changeImage();
  });



  // Info section buttons functionality
  document.getElementById('button1').addEventListener('click', function () {
    displayInfo(`
      <h3>Specifications</h3>
      <table>
        <tr><td>Engine</td><td>4.0L Naturally Aspirated</td></tr>
        <tr><td>Horsepower</td><td>520 hp</td></tr>
        <tr><td>0-60 mph</td><td>3.2 sec</td></tr>
      </table>
    `);
  });

  document.getElementById('button2').addEventListener('click', function () {
    displayInfo(`
      <h3>Features</h3>
      <table>
        <tr><td>Carbon Fiber Hood</td><td>Lightweight and aerodynamic</td></tr>
        <tr><td>Carbon Ceramic Brakes</td><td>Superior braking</td></tr>
        <tr><td>Alcantara Interior</td><td>Sporty luxury</td></tr>
      </table>
    `);
  });

  document.getElementById('button3').addEventListener('click', function () {
    displayInfo(`
      <h3>Performance</h3>
      <table>
        <tr><td>Top Speed</td><td>198 mph</td></tr>
        <tr><td>Quarter Mile</td><td>11.5 sec</td></tr>
        <tr><td>Max Lateral G-Force</td><td>1.2 G</td></tr>
      </table>
    `);
  });

  function displayInfo(info) {
    document.getElementById('display-info').innerHTML = info;
  }

  // Initialize gallery with first image visible
  changeImage();
});


// Add event listeners to the specification cards
document.getElementById('spec-engine').addEventListener('click', function () {
  displayInfo(`
    <h3>Engine</h3>
    <table>
      <tr><th>Engine Type</th><td>4.0L Naturally Aspirated</td></tr>
      <tr><th>Horsepower</th><td>520 hp</td></tr>
      <tr><th>Torque</th><td>470 lb-ft</td></tr>
      <tr><th>Max RPM</th><td>9,000 rpm</td></tr>
    </table>
  `);
});

document.getElementById('spec-performance').addEventListener('click', function () {
  displayInfo(`
    <h3>Performance</h3>
    <table>
      <tr><th>0-60 mph</th><td>3.2 sec</td></tr>
      <tr><th>Top Speed</th><td>198 mph</td></tr>
      <tr><th>Quarter Mile</th><td>11.5 sec</td></tr>
      <tr><th>Braking (60-0 mph)</th><td>100 ft</td></tr>
    </table>
  `);
});

document.getElementById('spec-features').addEventListener('click', function () {
  displayInfo(`
    <h3>Features</h3>
    <table>
      <tr><th>Carbon Fiber Hood</th><td>Lightweight and aerodynamic</td></tr>
      <tr><th>Carbon Ceramic Brakes</th><td>Superior braking</td></tr>
      <tr><th>Alcantara Interior</th><td>Sporty luxury</td></tr>
      <tr><th>Active Aerodynamics</th><td>Improved high-speed stability</td></tr>
    </table>
  `);
});

function displayInfo(info) {
  const displayElement = document.getElementById('display-info');
  displayElement.innerHTML = info;
  displayElement.classList.add('active');
}
