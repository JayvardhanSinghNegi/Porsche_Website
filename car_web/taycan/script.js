const galleryItems = document.querySelectorAll('.gallery-item');
let currentIndex = 0;

document.getElementById('next-button').addEventListener('click', function() {
    galleryItems[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % galleryItems.length;
    galleryItems[currentIndex].classList.add('active');
});





















document.getElementById('button1').addEventListener('click', function() {
  displayInfo('<h2>Specifications</h2><table><tr><td>Engine</td><td>4.0L naturally aspirated</td></tr><tr><td>Horsepower</td><td>520 hp</td></tr><tr><td>0-60 mph</td><td>3.2 seconds</td></tr></table>');
});

document.getElementById('button2').addEventListener('click', function() {
  displayInfo('<h2>Features</h2><table><tr><td>Carbon Fiber Hood</td><td>Lightweight and aerodynamic</td></tr><tr><td>Carbon Ceramic Brakes</td><td>Superior braking performance</td></tr><tr><td>Alcantara Interior</td><td>Luxurious and sporty</td></tr></table>');
});

document.getElementById('button3').addEventListener('click', function() {
  displayInfo('<h2>Performance</h2><table><tr><td>Top Speed</td><td>198 mph</td></tr><tr><td>Quarter Mile</td><td>11.5 seconds</td></tr><tr><td>Max Lateral G-Force</td><td>1.2 G</td></tr></table>');
});

function displayInfo(info) {
  document.getElementById('display-info').innerHTML = info;
}