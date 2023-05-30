let isClicked = false
let interval = null

const autoGenerationBtn = document.getElementById("quoteAutoGenerationBtn")

const generateQuote = () => {
    fetch("data/quoteData.json")
    .then(result => result.json())
    .then(quoteMainObject => {

        let random = Math.floor(Math.random() * quoteMainObject.length)

        createQuote(quoteMainObject[random])
    })
}

const createQuote = (json) => {
    const blockquoteContainer = document.getElementById("blockquoteContainer")
    const philosopherPicture = document.getElementById("authorImg")

    const quote = document.createElement("blockquote")
    const author = document.createElement("figcaption")
    const book = document.createElement("cite")

    blockquoteContainer.innerHTML = ""

    quote.classList.add("quote")
    author.classList.add("author")
    book.classList.add("book")

    quote.innerText += json["quote"]
    author.innerText += json["author"]
    book.innerText += json["book"]
    philosopherPicture.setAttribute("src", json["picture"])
    philosopherPicture.setAttribute("alt", json["imgAlt"])

    blockquoteContainer.appendChild(quote)
    blockquoteContainer.appendChild(author)
    blockquoteContainer.appendChild(book)
}

const autoGenerationInterval = () => {
    const autoGenerationLabel = document.getElementById("autoGenerationBtnLabel")

    if (isClicked === false) {
        isClicked = true
        interval = setInterval(generateQuote, 10000)
        autoGenerationLabel.innerText = "Auto géneration activé avec succés"
        autoGenerationBtn.style.background = "rgb(0, 207, 111)"

    } else {
        clearInterval(interval)            
        isClicked = false
        autoGenerationLabel.innerText = "Auto géneration désactivé"
        autoGenerationBtn.style.background = "indianred"
    } 
    return isClicked
}

window.onload = () => {
    generateQuote()
    autoGenerationBtn.style.background = "indianred"

    document.getElementById("newQuoteBtn").addEventListener("click", () => {
        generateQuote()
    })

    autoGenerationBtn.addEventListener("click", () => {
        autoGenerationInterval()

        document.getElementById("autoGenerationBtnLabel").style.display = "block"
        setTimeout(() => {
            document.getElementById("autoGenerationBtnLabel").style.display = "none"
        }, 5000)
    })
}