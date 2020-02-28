const SPLASH_LOGO_WRAPPER = document.querySelector(".splash-logo-wrapper")
const BACKGROUND_IMAGE = document.querySelector(".background-image")
const DISCOVER_OURS =document.querySelector(".discover-ours")
const BODY = document.querySelector("body")



const splash = () => {
  SPLASH_LOGO_WRAPPER.classList.add("hide")
  BACKGROUND_IMAGE.classList.add("zoomout")
  DISCOVER_OURS.classList.add("show")
  BODY.classList.add("overflow")
}

const delay = () => {
  setTimeout(splash, 1300)
}

window.onload = delay()
