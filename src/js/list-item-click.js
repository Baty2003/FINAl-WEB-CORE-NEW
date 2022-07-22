const listItem = document.querySelector('.list-item')

const listItemListener = () => {
  listItem.addEventListener('click', (evt) => {
    const target = evt.target

    if (target.tagName === 'A') {
      try {
        document
          .querySelector('.list-item__item--active')
          .classList.remove('list-item__item--active')
      } catch {
      } finally {
        target.classList.add('list-item__item--active')
      }
    }
  })
}

export { listItemListener }
