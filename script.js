function slider() {
  const body = document.body;
  const sliderContainer = document.querySelector('.slider-container');
  const slider = document.querySelector('.slider');


  function toggleSlider(){
    body.style.background = `rgba(79, 97, 130, ${slider.value / 100})`;
    sliderContainer.style.border = `20px solid rgba(141, 168, 226, ${slider.value / 100 + .2})`;
    slider.style.background = `rgba(79, 97, 130, ${slider.value / 100 })`;
    if (this.value > 45) {
      slider.classList.remove('active');
    } else {
      slider.classList.add('active'); 
    }
  }

  slider.oninput = toggleSlider;
}

window.onload = slider;