let topTextInput, bottomTextInput, imgInput, generateBtn, canvas, ctx

const generateImage = (img, topText, bottomText) => {
  canvas.width = img.width
  canvas.height = img.height
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.drawImage(img, 0, 0)

  let fontsize = canvas.width / 15
  ctx.font = fontsize + 'px Impact'
  ctx.fillStyle = 'red'
  ctx.strokeStyle = 'black'
  ctx.textAlign = 'center'
  ctx.lineWidth = fontsize / 15

  // top text
  ctx.textBaseline = 'top'
  ctx.fillText(topText, canvas.width / 2, 5, canvas.width)
  ctx.strokeText(topText, canvas.width / 2, 5, canvas.width)

  // bottom text
  ctx.textBaseline = 'bottom'
  ctx.fillText(bottomText, canvas.width / 2, canvas.height - 5, canvas.width)
  ctx.strokeText(bottomText, canvas.width / 2, canvas.height - 5, canvas.width)
}

const init = () => {
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
      generateImage(img, topTextInput.value, bottomTextInput.value)
    }
    reader.readAsDataURL(imgInput.files[0])
  })
}

init()
