const wheel = document.querySelector('.wheel');
const spinBtn = document.getElementById('spin-btn');

const segments = document.querySelectorAll('.segment');
const prizes = [];
segments.forEach(segment => {
    prizes.push(segment.textContent.trim());
});

const degreesPerSegment = 360 / segments.length;

spinBtn.addEventListener('click', () => {
    // Disable the button while spinning
    spinBtn.disabled = true;

    // Generate a random number to determine the winning segment
    const winnerIndex = Math.floor(Math.random() * segments.length);

    // Calculate the angle of the center of the winning segment's text
    // CSS --i is 1-based, so we use winnerIndex + 1
    // The angle for each text container is `(45 * i) - (45 / 2)`
    const textAngle = (degreesPerSegment * (winnerIndex + 1)) - (degreesPerSegment / 2);

    // We want the text to land under the pointer at the top (270 degrees).
    // The required rotation is `270 - textAngle`.
    // We add extra spins for effect (e.g., 10 full spins).
    // We also need to add a small random offset within the segment to make it look more natural.
    const randomOffset = (Math.random() - 0.5) * (degreesPerSegment * 0.8);
    const rotation = (270 - textAngle - randomOffset) + (360 * 10);

    // Apply the rotation to the wheel
    wheel.style.transform = `rotate(${rotation}deg)`;

    // After the transition ends, display the result and re-enable the button
    setTimeout(() => {
        alert(`You won: ${prizes[winnerIndex]}`);
        spinBtn.disabled = false;
    }, 5500); // 5000ms for transition + 500ms delay
});
