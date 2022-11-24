let shareButtons = document.querySelectorAll('.share-button')

shareButtons.forEach(e => e.addEventListener('click', copyText))

async function copyText(e) {
  e.preventDefault()
  let link = this.getAttribute('link')
  console.log(link)

  try {
    await navigator.clipboard.writeText(link)
    alert("Copied the text: " + link)
  } catch(err) {
    console.error(err)
  }
}