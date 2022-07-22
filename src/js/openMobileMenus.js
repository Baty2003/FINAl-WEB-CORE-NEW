const buttonOpenMobileMenu = document.getElementById('buttonOpenMobileMenu')
const buttonCloseMobileMenu = document.getElementById('buttonCloseMobileMenu')
const mobileMenu = document.querySelector('.mobile-menu')
const flexContent = document.querySelector('.flex-container__content')

const buttonsOpenFeedbackMenu = document.querySelectorAll('.feedback-button')
const buttonsOpenOrderCallMenu = document.querySelectorAll('.order-call-button')

const buttonCloseFeedback = document.getElementById('buttonCloseFeedbackMenu')
const buttonCloseOrderCallMenu = document.getElementById(
  'buttonCloseOrderCallMenu'
)

const feedbackMenu = document.getElementById('feedbackMenu')
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

  for (const button of buttonsOpenFeedbackMenu) {
    button.addEventListener('click', (evt) => {
      evt.preventDefault()
      feedbackMenu.classList.add('feedback--active')
      feedbackMenu.querySelector('.feedback__field:first-child').focus()
      flexContent.classList.add('flex-container__content--blur')
      flexContent.style.pointerEvents = 'none'
    })
  }

  for (const button of buttonsOpenOrderCallMenu) {
    button.addEventListener('click', (evt) => {
      evt.preventDefault()
      OrderCallMenu.classList.add('feedback--active')
      OrderCallMenu.querySelector('.feedback__field:first-child').focus()
      flexContent.classList.add('flex-container__content--blur')
      flexContent.style.pointerEvents = 'none'
    })
  }

  buttonCloseFeedback.addEventListener('click', () => {
    feedbackMenu.classList.remove('feedback--active')
    flexContent.classList.remove('flex-container__content--blur')
    flexContent.style.pointerEvents = 'auto'
  })
  buttonCloseOrderCallMenu.addEventListener('click', () => {
    OrderCallMenu.classList.remove('feedback--active')
    flexContent.classList.remove('flex-container__content--blur')
    flexContent.style.pointerEvents = 'auto'
  })
}

export { buttonListenerOpenMenus }
