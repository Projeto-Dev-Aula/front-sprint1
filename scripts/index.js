const form = document.querySelector('form')
const name = document.querySelector('input[type="text"]')
const email = document.querySelector('input[type="email"]')
const textArea = document.querySelector('textarea')
const button = document.querySelector(".send-button")
button.disabled = true
button.classList.add('disabled')

form.addEventListener('change', () => {
  if (email.value.toLowerCase()
  .match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  ) && name.value.match(/^([A-Za-zÀ-ÖØ-öø-ÿ]{3,})( [A-Za-zÀ-ÖØ-öø-ÿ]{2,})*$/u)) {
    button.disabled = false
    button.classList.remove('disabled')
  } else {
    button.disabled = true
    button.classList.add('disabled')
  }
})

form.addEventListener('submit', (event) => {
  event.preventDefault()
  console.log(name.value, email.value, textArea.value)
  form.reset()
})