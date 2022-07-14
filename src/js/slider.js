import Swiper, { Navigation, Pagination } from 'swiper'
import 'swiper/swiper-bundle.css'
Swiper.use([Navigation, Pagination])

let swipersContainers = document.querySelectorAll('.swiper')
let swipers = []
const breakpoint = window.matchMedia('(min-width:768px)')

function createSwiper(elem) {
  let swiper = new Swiper(elem, {
    swiperPerView: 'auto',
    loop: true,
    spaceBetween: -20,

    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  })

  return swiper
}

const breakpointChecker = function () {
  if (breakpoint.matches === true) {
    for (const swiper of swipers) {
      if (swiper !== undefined) {
        swiper.destroy(true, true)
      } else {
        return
      }
    }
    swipers = []
    return
  } else if (breakpoint.matches === false) {
    if (swipers.length !== 0) {
      return
    } else {
      for (const container of swipersContainers) {
        swipers.push(createSwiper(container))
      }
    }
  }
}

function startSwiper() {
  if (breakpoint.matches === false) {
    for (const container of swipersContainers) {
      swipers.push(createSwiper(container))
    }
  }

  window.addEventListener('resize', breakpointChecker)
}

export { startSwiper }
