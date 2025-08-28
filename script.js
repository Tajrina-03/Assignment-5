// Heart icon Count
const likeButtons = document.querySelectorAll('.like-btn');
const heartCount = document.getElementById('heart-count');

let count = 0;

likeButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    count++;
    heartCount.innerText = count;
    btn.classList.remove('far');
    btn.classList.add('fas', 'text-red-500');
  });
});
// Copy button 
const copyButtons = document.querySelectorAll('.copy-btn');
const copyCountEl = document.getElementById('copy-count');

let copyCount = 0;

copyButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.bg-white');

    const numberElement = card.querySelector('p.font-semibold');

    if (numberElement) {
      const hotlineNumber = numberElement.innerText.trim();

      // Copy to clipboard
      navigator.clipboard.writeText(hotlineNumber).then(() => {
        alert(`The number ${hotlineNumber} has been copied to your clipboard.`);

        // Update count
        copyCount++;
        copyCountEl.innerText = copyCount;
      }).catch((err) => {
        console.error('Copy failed:', err);
        alert('Failed to copy the number.');
      });
    } else {
      alert('Hotline number not found.');
    }
  });
});

