const breakpoint = window.matchMedia('(min-width:768px)')

const initLessMoreButton = function (
  idSectionWithButtons,
  countHiddenElements
) {
  const sectionWithButtons = document.getElementById(idSectionWithButtons)
  const buttonLess = sectionWithButtons.querySelector(
    '.section__read-more--less'
  )
  const buttonMore = sectionWithButtons.querySelector(
    '.section__read-more--show'
  )
  const containersElements = sectionWithButtons.querySelector('.swiper-wrapper')

  if (!buttonLess || !buttonMore || !containersElements) {
    return
  }

  const elemsHidden = containersElements.querySelectorAll(
    `.swiper-slide:nth-child(${countHiddenElements}) ~ .swiper-slide:not(.swiper-slide-duplicate-prev, .swiper-slide-duplicate-active,.swiper-slide-prev,.swiper-slide-active, .swiper-slide-next)`
  )

  if (breakpoint.matches === true) {
    for (const elem of elemsHidden) {
      elem.style.display = 'none'
    }
  }

  buttonMore.addEventListener('click', () => {
    for (const elem of elemsHidden) {
      elem.style.display = 'inherit'
    }
    buttonMore.style.display = 'none'
    buttonLess.style.display = 'block'
  })

  buttonLess.addEventListener('click', () => {
    for (const elem of elemsHidden) {
      elem.style.display = 'none'
    }
    buttonMore.style.display = 'block'
    buttonLess.style.display = 'none'
  })

  window.addEventListener('resize', () => {
    if (breakpoint.matches === true) {
      for (const elem of elemsHidden) {
        elem.style.display = 'none'
      }
    } else {
      for (const elem of elemsHidden) {
        elem.style.display = null
        console.log(elemsHidden)
      }
    }
  })
}

export { initLessMoreButton }
