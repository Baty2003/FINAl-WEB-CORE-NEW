const breakpoint = window.matchMedia('(min-width:768px)')

const initLessMoreButton = function (
  idSectionWithButtons,
  countHiddenElements
) {
  let sectionWithButtons = document.getElementById(idSectionWithButtons)
  let buttonLess = sectionWithButtons.querySelector('.section__read-more--less')
  let buttonMore = sectionWithButtons.querySelector('.section__read-more--show')
  let containersElements = sectionWithButtons.querySelector('.swiper-wrapper')

  if (!buttonLess || !buttonMore || !containersElements) {
    return
  }

  let elemsHidden = containersElements.querySelectorAll(
    `.swiper-slide:nth-child(${countHiddenElements}) ~ .swiper-slide`
  )

  if(breakpoint.matches === true) {
	for (const elem of elemsHidden) {
		elem.style.display = 'none'
	  }
  }


  buttonMore.addEventListener('click', () => {
    for (const elem of elemsHidden) {
      elem.style.display = 'block'
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
	if (breakpoint.matches === true){
		for (const elem of elemsHidden) {
			elem.style.display = 'none'
		}	
	} else {
		for (const elem of elemsHidden) {
			elem.style.display = 'block'
		}	
	} 
  })
}

export { initLessMoreButton }

// const showMore = function () {
//   let elements = document.querySelectorAll(
//     '.swiper-slide:nth-of-type(8) ~ .swiper-slide'
//   )
//   for (const elem of elements) {
//     elem.style.display = 'block'
//   }
//   buttonShowMore.style.display = 'none'
//   buttonShowLess.style.display = 'block'
// }

// const showLess = function () {
//   let elements = document.querySelectorAll(
//     '.swiper-slide:nth-of-type(8) ~ .swiper-slide'
//   )
//   for (const elem of elements) {
//     elem.style.display = 'none'
//   }
//   buttonShowMore.style.display = 'block'
//   buttonShowLess.style.display = 'none'
// }

// buttonShowMore.addEventListener('click', showMore)
// buttonShowLess.addEventListener('click', showLess)
