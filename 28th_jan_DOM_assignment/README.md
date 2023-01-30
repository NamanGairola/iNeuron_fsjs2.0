# DOM Assignment

## **Assignment 1**

## Task 1
![](images/assign1task1.png)
```js
//for changing Content in navbar to Projects
document.querySelector("nav ul").lastElementChild.firstElementChild.innerText="Projects"

//To add Hire Me anchor tag in nav bar
const h=document.createElement("li")
h.innerHTML="<a>Hire Me</a>"
document.querySelector("nav ul").appendChild(h)

//To remove from footer various links
document.querySelector("footer ul").style.visibility="hidden"

//To change style of 'a' in paragraph
document.querySelector(".hero-left-section p").innerHTML=`I am an aspiring <span>Full Stack JavaScript Developer</span>,
<br />who is currently working as a<span> Freelancer</span> for <br /><span>National and International Client</span>.`

```
## Task 2

![](images/assign1task2.PNG)
```js
// To change the placeholder in searchbox
document.querySelector(".search-field").firstElementChild.placeholder="Search My Project"

//for changing Content in navbar to Projects
document.querySelector("nav ul").lastElementChild.firstElementChild.innerText="Projects"

//To remove from footer various links
document.querySelector("footer ul").style.visibility="hidden"

//To change style of 'a' in paragraph
document.querySelector(".hero-left-section p").innerHTML=`I am an aspiring <span>Full Stack JavaScript Developer</span>,
<br />who is currently working as a<span> Freelancer</span> for <br /><span>National and International Client</span>.`

```
## Task 3

![](images/assign1task3.PNG)

```js
//To change text in paragraph
document.querySelector(".hero-left-section p").innerHTML=`I am an aspiring <span>Full Stack JavaScript Developer</span>,
<br />who is currently working as <span> an Employee</span> for <br /><span>iNeuron Intelligence Pvt Ltd</span>.`

//for changing 'Content' in navbar to 'Projects'
document.querySelector("nav ul").lastElementChild.firstElementChild.innerText="Projects"
```
## Task 4

![](images/assign1task4.PNG)

```js
// To change image
document.querySelector(".hero-right-section img").src="https://hiteshchoudhary.com/static/a8d73d1aac4c79e9bb689640e6090367/2eaab/person-image.jpg"

//for changing 'Content' in navbar to 'Projects'
document.querySelector("nav ul").lastElementChild.firstElementChild.innerText="Projects"
```
## Task 5

![](images/assign1task5.PNG)

```js
// To add 'Support Me' button below profile pic
let bt=document.createElement("button")
bt.innerText="Support Me"
document.querySelector(".hero-right-section-btns").appendChild(bt)

//for changing 'Content' in navbar to 'Projects'
document.querySelector("nav ul").lastElementChild.firstElementChild.innerText="Projects"​
```

## **Assignment 2**

## Task 1

![](images/assign2task1.PNG)
```js
// To change color
document.querySelectorAll(".accordian").forEach((e)=>{console.log(e.children[0].style.background="#dadaf8")})

//for changing 'Content' in navbar to 'Projects'
document.querySelector("nav ul").lastElementChild.firstElementChild.innerText="Projects"
```

## Task 2

![](images/assign2task2.PNG)

```js
// To add Skills section
let ele=document.createElement("div")
ele.className="accordian"
ele.innerHTML=`
        <h3>Skills</h3>
        <p style="display:block;">I possess a very good command over the Full Stack Development technologies like MERN which can be seen in my work over the Github</p>
        `
document.querySelector(".accordian-wrapper").appendChild(ele)

// To change color
document.querySelectorAll(".accordian").forEach((e)=>{console.log(e.children[0].style.background="#dadaf8")})

//for changing 'Content' in navbar to 'Projects'
document.querySelector("nav ul").lastElementChild.firstElementChild.innerText="Projects"
```

## **Assignment 3**

## Task

![](images/assign3.PNG)

```js
// To change text in placeholder
document.querySelectorAll(".enterName,.userName").forEach((e)=>{(e.placeholder="FSJS2.0")})
document.querySelectorAll(".enterMail,.userEmail").forEach((e)=>{(e.placeholder="fsjs@ineuron.ai")})
document.querySelectorAll(".enterMessage,.userMessage").forEach((e)=>{(e.placeholder="Hello World")})
```