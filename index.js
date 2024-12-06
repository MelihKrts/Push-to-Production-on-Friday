
const title = [  "Push to production on Friday",
    "I love pushing code on Friday",
    "Do you believe in urban myths?",
    "Don't stop pushing",
    "Come on, come on",
    "Ready to Push"]

const button = document.getElementById("messageBtn")
const paragraph = document.getElementById("paragraphText")


button.addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * title.length)
    paragraph.textContent = title[randomIndex]
    console.log("Message clicked", title[randomIndex])
})