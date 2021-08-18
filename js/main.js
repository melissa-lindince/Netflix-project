const jquery = $(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    loop: true,
    items: 6.3,
    margin: 4,
    dots: false,
    responsive: {
      0: {
        items: 2
      },
      360: {
        items: 4
      },
      1000: {
        items: 6.5
      }
    }
  })
})

module.exports = jquery
