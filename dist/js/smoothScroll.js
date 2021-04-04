// Smooth Scrolling
$('#main-nav a, .header-content a').on('click', function (e) {
  if (this.hash !== '') {
    e.preventDefault()

    const hash = this.hash

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top,
      },
      800
    )
  }
})
