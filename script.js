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
// CALL BUTTON FUNCTIONALITY
const callButtons = document.querySelectorAll('.call-btn');
const coinCountEl = document.getElementById('coin-count');
const callHistoryList = document.getElementById('call-history-list');
const clearHistoryBtn = document.getElementById('clear-history');

let coins = 100;

callButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    if (coins < 20) {
      alert("You don't have enough coins to make this call.");
      return;
    }

    const card = btn.closest('.bg-white');
    const serviceName = card.querySelector('h3').innerText;
    const serviceNumber = card.querySelector('p.font-semibold').innerText;

    // Alert
    alert(`Calling ${serviceName} at ${serviceNumber}`);

    // Cut coins
    coins -= 20;
    coinCountEl.innerText = coins;

    // Add to history
    const li = document.createElement('li');
    li.className = "bg-gray-100 px-3 py-2 rounded-[10px] flex justify-between items-center";

    // current time
    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    li.innerHTML = `
      <div>
        <strong>${serviceName}</strong><br/>
        <span class="text-gray-600">${serviceNumber}</span>
      </div>
      <span class="text-sm text-gray-500">${timeString}</span>
    `;
    callHistoryList.prepend(li); // Newest on top
  });
});

// CLEAR BUTTON FUNCTIONALITY
clearHistoryBtn.addEventListener('click', () => {
  callHistoryList.innerHTML ='';
});