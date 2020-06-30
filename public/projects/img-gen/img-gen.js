let topTextInput, bottomTextInput, imgInput, generateBtn, canvas, ctx

function generateImage(img) {
  canvas.width = img.width
  canvas.height = img.height
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.drawImage(img, 0, 0)
}

function init() {
  topTextInput = document.getElementById('top-text')
  bottomTextInput = document.getElementById('bottom-text')
  imgInput = document.getElementById('img-input')
  generateBtn = document.getElementById('generate-btn')
  canvas = document.getElementById('img-canvas')
  ctx = canvas.getContext('2d')
  canvas.width = canvas.height = 0

  generateBtn.addEventListener('click', () => {
    let reader = new FileReader()
    reader.onload = function () {
      let img = new Image()
      img.src = reader.result
      generateImage(img)
    }
    reader.readAsDataURL(imgInput.files[0])
  })
}

init()
