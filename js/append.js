// Where to add
const placesList = document.getElementById("places-list");

// what to be added
const li = document.createElement("li");
li.innerText = "pahartoli bon";

// add the child
placesList.appendChild(li);



// Where to add
const mainContainer = document.getElementById("main-container");
// console.log(mainContainer);

// what to be added
const section = document.createElement("section");
const h1 = document.createElement("h1");
h1.innerText = "My food list";
section.appendChild(h1);
// console.log(section);

const ul = document.createElement("ul");


const li1 = document.createElement("li");
li1.innerText = "Biriyani";
ul.appendChild(li1);

const li2 = document.createElement("li");
li2.innerText = "Borhani";
ul.appendChild(li2);

const li3 = document.createElement("li");
li3.innerText = "Beresta";
ul.appendChild(li3);


section.appendChild(ul);
mainContainer.appendChild(section)



// Set innerHTML directly
const sectionDress = document.createElement("section");
sectionDress.innerHTML = `
<h1> My Dress Section </h1>
<ul>
    <li> t-shirt </li>
    <li> shirt </li>
    <li> pant </li>
</ul>
`
mainContainer.appendChild(sectionDress);