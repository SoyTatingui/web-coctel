/**
   * Initiate portfolio lightbox 
   */
const portfolioLightbox = GLightbox({
    selector: '.glightbox3'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.glightbox3-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });
