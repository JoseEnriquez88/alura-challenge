function handleMouseOver() {
  document.querySelector(".firstButton").classList.add("firstButtonHover");
  document.querySelector(".secondButton").classList.add("secondButtonHover");
}

function handleMouseOut() {
  document.querySelector(".firstButton").classList.remove("firstButtonHover");
  document.querySelector(".secondButton").classList.remove("secondButtonHover");
}

function handleEncrypt() {
  const textarea = document.querySelector(".textarea");
  const text = textarea.value;

  if (!text.match(/^[a-z\s]*$/)) {
    alert("Solo letras minúsculas y sin acentos");
    return;
  }

  const encryptedText = text
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

  hideImage();
  displayResult(encryptedText);
}

function handleDecrypt() {
  const textarea = document.querySelector(".textarea");
  const text = textarea.value;

  const decryptedText = text
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

  hideImage();
  displayResult(decryptedText);
}

function displayResult(processedText) {
  const textContainer = document.querySelector(".textContainer");
  const resultContainer = document.querySelector(".resultMainContainer");

  textContainer.innerHTML = `<p class="processedText">${processedText}</p>`;
  resultContainer.style.display = "block";
}

function hideImage() {
  const image = document.querySelector(".image");
  image.style.display = "none";
}

function copyToClipboard() {
  const text = document.querySelector(".processedText").innerText;
  navigator.clipboard.writeText(text).then(() => {
    alert("Texto copiado al portapapeles");
  });
}
