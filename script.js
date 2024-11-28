const header1 = document.getElementById("h1")//elemen node
header1.style.backgroundColor = "Pink"
header1.style.color = "mediumslateblue"

const warnadiv = document.getElementById("container1")
warnadiv.style.backgroundColor = "lightblue"

const divwarna = document.getElementById("container2")
divwarna.style.backgroundColor = "lightblue"


const listItems = document.querySelectorAll("li");
listItems.forEach((item, index) => {
    item.style.backgroundColor = "pink";
    item.style.color = "mediumslateblue";
    item.style.fontSize = "18px";
    item.style.padding = "10px";
    item.style.fontWeight= "bold";

});

const u = document.querySelectorAll("p")
u.forEach((e,d) => {
    e.style.backgroundColor="Pink"
    e.style.color = "mediumslateblue";
    e.style.fontSize = "18px";
    e.style.fontWeight= "bold";
})




// const p = document.getElementsByTagName("p")//html collection
// const list =document.getElementsByClassName("list")//html collection
// p[0].style.color = "Yellow"
// list[0].style.color = "Blue"

// const list2 = document.querySelector("li:nth-child(2)")
// const anchor = document.querySelector("#a a")
// list2.style.backgroundColor = "grey";
// anchor.style.fontSize = "40px";

// const list = document.querySelectorAll("li")

// const sebuahNode = document.getElementById("hi")
// sebuahNode.innerHTML = "<em>Javascript</em>"

// const nodeSection = document.getElementById("a")
// const nodeP = nodeSection.querySelector("p")
// const list = "<ol><li>ayam goreng</li><li>ayam rebus</li></ol>"
// nodeP.innerHTML = list

// const nodeH1 = document.getElementById("h1")
// nodeH1.style.fontFamily = "Consolas"
// nodeH1.style.backgroundColor = "Gold"
// nodeH1.style.textShadow = "10px 10px 10px"

// const nodeH1 = document.getElementById("h1")
// nodeH1.getAttribute("id")

// const nodeSection = document.getElementById("a")
// const nodeP1 = nodeSection.querySelector("p")
// nodeP1.setAttribute("id","P1")

// const nodeDiv2 = document.getElementById("container2")
// const nodeUl =nodeDiv2.querySelector("ul")
// nodeUl.removeAttribute("id")



