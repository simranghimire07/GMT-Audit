const container = document.getElementById('scrollContainer');
  const prevBtn = document.getElementById('scrollPrev');
  const nextBtn = document.getElementById('scrollNext');

  function scrollCards(direction) {
    const scrollAmount = container.clientWidth / 3.5; 
    container.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
  }

  function updateButtonState() {
    const maxScrollLeft = container.scrollWidth - container.clientWidth;
    prevBtn.disabled = container.scrollLeft <= 0;
    nextBtn.disabled = container.scrollLeft >= maxScrollLeft - 1; 
  }

  container.addEventListener('scroll', updateButtonState);
  window.addEventListener('load', updateButtonState);