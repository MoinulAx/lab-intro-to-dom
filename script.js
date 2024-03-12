/// Add a clas of "featured" to the first `section` element on the page.
firstSection.classList.add("featured")

///Create elements

const firstSection = document.querySelector('section')
const articleElement = document.createElement('article')
const imgElement = document.createElement('img')
const hThreeElement = document.createElement('h3')
const pFirst = document.createElement('p')
const pSecond = document.createElement('p')
const asideElement = document.createElement('aside')
const strongElement = document.createElement('strong')
const spanElement = document.createElement('span')
const fourMinText = document.createTextNode("4 minutes")
const aTagElement = document.createElement('a')
const classPost = document.querySelector


const arrayOfElements = [imgElement,hThreeElement,pFirst,asideElement]

arrayOfElements.forEach(x =>{
    articleElement.appendChild(x)
})



//Modify Elements

asideElement.appendChild(pSecond)

spanElement.textContent = "4 minutes"
spanElement.appendChild(strongElement)
spanElement.appendChild(fourMinText)

pSecond.appendChild(spanElement)
asideElement.appendChild(aTagElement)
asideElement.appendChild()




imgElement.src = "images/paul-gilmore-unsplash.jpg";
imgElement.alt =  "Image of a moutain in front of a late.";

hThreeElement.innerText = "Stop Planning";
pSecond.innerText = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?"
strongElement.textContent = 'Read Time:'
aTagElement.innerText = 'Read more'





