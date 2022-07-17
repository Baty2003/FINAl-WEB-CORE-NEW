const buttonOpenMobileMenu = document.getElementById('buttonOpenMobileMenu')
const buttonCloseMobileMenu = document.getElementById('buttonCloseMobileMenu')
const mobileMenu = document.querySelector('.mobile-menu')
const flexContent = document.querySelector('.flex-container__content')

const buttonOpenFeedback = document.getElementById('buttonOpenFeedbackMenu')
const buttonCloseFeedback = document.getElementById('buttonCloseFeedbackMenu')
const feedbackMenu = document.getElementById('feedbackMenu')

const buttonOpenOrderCallMenu = document.getElementById(
  'buttonOpenOrderCallMenu'
)
const buttonCloseOrderCallMenu = document.getElementById(
  'buttonCloseOrderCallMenu'
)
const OrderCallMenu = document.getElementById('orderCallMenu')

const buttonListenerOpenMenus = () => {
  buttonOpenMobileMenu.addEventListener('click', () => {
    mobileMenu.classList.add('mobile-menu--absolute')
    flexContent.classList.add('flex-container__content--blur')
    flexContent.style.pointerEvents = 'none'
  })
  buttonCloseMobileMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('mobile-menu--absolute')
    flexContent.classList.remove('flex-container__content--blur')
    flexContent.style.pointerEvents = 'auto'
  })

  buttonOpenFeedback.addEventListener('click', () => {
    feedbackMenu.classList.add('feedback--active')
    flexContent.classList.add('flex-container__content--blur')
    flexContent.style.pointerEvents = 'none'
  })
  buttonCloseFeedback.addEventListener('click', () => {
    feedbackMenu.classList.remove('feedback--active')
    flexContent.classList.remove('flex-container__content--blur')
    flexContent.style.pointerEvents = 'auto'
  })

  buttonOpenOrderCallMenu.addEventListener('click', () => {
    OrderCallMenu.classList.add('feedback--active')
    flexContent.classList.add('flex-container__content--blur')
    flexContent.style.pointerEvents = 'none'
  })
  buttonCloseOrderCallMenu.addEventListener('click', () => {
    OrderCallMenu.classList.remove('feedback--active')
    flexContent.classList.remove('flex-container__content--blur')
    flexContent.style.pointerEvents = 'auto'
  })
}

export { buttonListenerOpenMenus }
