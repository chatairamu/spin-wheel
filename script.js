const wheel = document.querySelector('.wheel');
const spinBtn = document.getElementById('spin-btn');

const segments = document.querySelectorAll('.segment');
const prizes = [];
segments.forEach(segment => {
    prizes.push(segment.textContent.trim());
});

spinBtn.addEventListener('click', () => {
    // Generate a random number to determine the winning segment
    const randomSegment = Math.floor(Math.random() * segments.length);
    const degrees = 360 / segments.length;
    const rotation = (randomSegment * degrees) + 3600; // Add 3600 for extra spins

    // Apply the rotation to the wheel
    wheel.style.transform = `rotate(${rotation}deg)`;

    // After the transition ends, display the result
    setTimeout(() => {
        alert(`You won: ${prizes[randomSegment]}`);
    }, 5500); // 5000ms for transition + 500ms delay
});
