function setupScrollControls(containerId, prevBtnId, nextBtnId) {
        const container = document.getElementById(containerId);
        const prevBtn = document.getElementById(prevBtnId);
        const nextBtn = document.getElementById(nextBtnId);
    
        function scroll(direction) {
          const scrollAmount = container.clientWidth / 3.5;
          container.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
        }
    
        function updateButtons() {
          const maxScroll = container.scrollWidth - container.clientWidth;
          prevBtn.disabled = container.scrollLeft <= 0;
          nextBtn.disabled = container.scrollLeft >= maxScroll - 1; 
        }
    
        prevBtn.addEventListener('click', () => scroll(-1));
        nextBtn.addEventListener('click', () => scroll(1));
        container.addEventListener('scroll', updateButtons);
        window.addEventListener('load', updateButtons);
        updateButtons();
}
    
      setupScrollControls('scrollContainer1', 'scrollPrev1', 'scrollNext1');
      setupScrollControls('scrollContainer2', 'scrollPrev2', 'scrollNext2');