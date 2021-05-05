'use-strict';

// This next block of code runs after the document loads.
(() => {
    // Get toggle and burger elements
    const toggleButton = document.querySelector('.toggle');
    const burger = document.querySelector('.burger');

    // Add click event listner to toggle element
    toggleButton.addEventListener('click', () => {
      burger.classList.toggle('burger-on');
    });
})();
