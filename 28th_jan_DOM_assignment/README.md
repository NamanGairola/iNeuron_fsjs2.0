# DOM Assignment

## **Assignment 1**

## Original
![](https://lh3.googleusercontent.com/pw/AMWts8AilZb6mHSH08EQ8Lb2unmsUz9nmZAYSpR8rUI-MdcJjufd8J-mUE5eIdmUUpEVYTDxC6zAp7WYHiSN_nLSSLwydnQm9Dd5UTDFiobl7lwfCbCI9vR91Vm6WixamXN61kCVYFkD6pjGl5FXNc-y8Kc=w1380-h743-no?authuser=0)

## Task 1
![](https://lh3.googleusercontent.com/pw/AMWts8CkKHyQ-EjXGO-VKcq0piJNWGcXtm2DfF84VhTMJYgHIqMZqzEs5cq6MNPdloufP4tY0oX4fPVDKfKi8wkjhbqFQkRgsH2tIGQwXPRkZXrwyZ427C1JwDFtvXcyoBjhSe_lGfgwHhdNdLZwaj4OqSA=w1380-h740-no?authuser=0)
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

![](https://lh3.googleusercontent.com/pw/AMWts8Au-CBkyH1A97p_8PnWH3_LTHEvQwXGl3Ffs6bDYuSgh5ejSXDsuRykBiRmJhiXnx1-hiWv1eoBPZPCb7Tfe6xYekksFDlGa7Vy_Ugout5elmZWYzIapoXaj52dDsMCZzpzpnBjsg5YSqBp9GAKlWQ=w1380-h741-no?authuser=0)
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

![](https://lh3.googleusercontent.com/pw/AMWts8B5Nii3PCiJW_sQXXT-i2LzNx8h8r-wy-rn3v_5nfiXxrgvg8F-9ExTpzZXfZXNmkGbdu9CXhuZxGuIKbITj8lhMB0cOiVmjhJ8onFcc7yh1juIB9ptwedS0PMU9Jky_UdhMEMSFzPrn2CNYR5p1Ws=w1380-h737-no?authuser=0)

```js
//To change text in paragraph
document.querySelector(".hero-left-section p").innerHTML=`I am an aspiring <span>Full Stack JavaScript Developer</span>,
<br />who is currently working as <span> an Employee</span> for <br /><span>iNeuron Intelligence Pvt Ltd</span>.`

//for changing 'Content' in navbar to 'Projects'
document.querySelector("nav ul").lastElementChild.firstElementChild.innerText="Projects"
```
## Task 4

![](https://lh3.googleusercontent.com/pw/AMWts8BDdDu_qlJACMeAyyR4JEEoOKt-5oFT7WSwluJNU27hCGaCle6kXy6sUETg40ImBgqnDC7g5M-y60KKR_yPZyjOQ0eer_bjJigZrUrTOzYrVOSJ5OFJ2uSiYzFFp07p48-LR4HjvfFl5ShKnjKV2u4=w1380-h741-no?authuser=0)

```js
// To change image
document.querySelector(".hero-right-section img").src="https://hiteshchoudhary.com/static/a8d73d1aac4c79e9bb689640e6090367/2eaab/person-image.jpg"

//for changing 'Content' in navbar to 'Projects'
document.querySelector("nav ul").lastElementChild.firstElementChild.innerText="Projects"
```
## Task 5

![](https://lh3.googleusercontent.com/pw/AMWts8BDNF_MwALn5VBS9V6ry8zhplgF4JbFHErHHVCDvV7ZvNNJB5e-sYmULhKw4ns6-c597jyA-UWUZI-sS44Yp3KW9YX8YQnVHYU9Vxo7cKDiHmjuIAI7uebJgnL7EDQ2xQSl4jXmE3FfI-lU3pvWheo=w1380-h740-no?authuser=0)

```js
// To add 'Support Me' button below profile pic
let bt=document.createElement("button")
bt.innerText="Support Me"
document.querySelector(".hero-right-section-btns").appendChild(bt)

//for changing 'Content' in navbar to 'Projects'
document.querySelector("nav ul").lastElementChild.firstElementChild.innerText="Projects"​
```

## **Assignment 2**

## Original
![](https://lh3.googleusercontent.com/pw/AMWts8D0BVuuOBJ6cbhjxBHd-2hbtDRde8y82JZEOvZLdd2lq2q4t_KU6NXyurRO_vzH-cqnoKJzNvXC-a9p-uEbILcNugBcLFD-rEbqSUSq2wfACwpl9YNUhiZk2gcCZQqthE1lMDMdjPb8FS0vN3_nclM=w1380-h741-no?authuser=0)

## Task 1

![](https://lh3.googleusercontent.com/pw/AMWts8Bisa2OgCY1URWiz3fYH9JHqGPvFL-iKH9a6uQoCYOr0z_Xi6WGDHjDD79HhhoiCkU1936pn_nbWbUOBfIXL-rV6qw6_q6sXCTOjBg05xpeZJR2SM92qE4HrBOiu-jHdiodQpW-_BAruCLBtQfQVmk=w1380-h738-no?authuser=0)
```js
// To change color
document.querySelectorAll(".accordian").forEach((e)=>{console.log(e.children[0].style.background="#dadaf8")})

//for changing 'Content' in navbar to 'Projects'
document.querySelector("nav ul").lastElementChild.firstElementChild.innerText="Projects"
```

## Task 2

![](https://lh3.googleusercontent.com/pw/AMWts8AXWluZ11TrxyBqW0Km-H12sWNOAt0wljznMc_23_T4mz6qwb-ZxJ7Vjgl4z-RdTWJc2SYUAeIWFMHioqJE-0M6qyd5jdvKazX0BLCb225qDr5zlRBauVC9SQvRzrAb25cUvtxFM081d8DO_UaFkQk=w1380-h743-no?authuser=0)

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

## Original
![](https://lh3.googleusercontent.com/pw/AMWts8B_dJwEwEbUDgwl8yF8KvPDNw3ymYYcnahMQFek8LKF3Q6ZJHCxtHVRWf10vGgLxnWN1N60ex4zURofpFNEMwQMKt-UEAT8Exu1XpS8yXgZSriidZAxJpt73-tXHUNRvi_ZRNZUwF3rWIQXahXhj48=w1380-h738-no?authuser=0)

## Task

![](https://lh3.googleusercontent.com/pw/AMWts8CUFDe4deuqSMDPawDekWt7D88BXr1r9ZTZS2vvQmuHrIJ29iOP7ScZOodhzbLv-NgqOXG07XcxWZ5kWbf_AnFfDeAZJmAx5NZxVKsV3jc0wYp2MjBFdtdLLGz_G7EB-pEWVWhe22P4Yp5f-EcvUxc=w1380-h740-no?authuser=0)

```js
// To change text in placeholder
document.querySelectorAll(".enterName,.userName").forEach((e)=>{(e.placeholder="FSJS2.0")})
document.querySelectorAll(".enterMail,.userEmail").forEach((e)=>{(e.placeholder="fsjs@ineuron.ai")})
document.querySelectorAll(".enterMessage,.userMessage").forEach((e)=>{(e.placeholder="Hello World")})
```

## **Assignment 4**

## Original
![](https://lh3.googleusercontent.com/pw/AMWts8D2QmNkfxOsducEzSCaO3UPq2sCuRFdcM37WSJiEiIAPS2ibHq9k8qdIfsAgThgFrraRC8sGOG_X4Xi4o6IKex0C7LBqAP8L0WkIgWLCFlA-7wfidGOUpViPe9xUNN6Qb5RtmCnzyM_a-9TuwcpWVU=w1380-h743-no?authuser=0)

## Task

![](https://lh3.googleusercontent.com/pw/AMWts8D36wX2oqpbKBJ3R6EFgB2K3GJsOnlkg-KyZntlVOUJ4sn9eKLRvXjy6PlRGlrJqvZhob1JTYiT8DnZKFdYPenIZY0mpEmFNxQCAbHiJ7fjNgNwoLQ_T5_VcPmSlSxHFEIhXUHBIPErYc8lTdlWt5I=w1380-h743-no?authuser=0)

```js
// To add Archer name
document.querySelector(".archer").children[2].innerHTML="The Archer"

//To add Goblin name
document.querySelector(".goblin").children[2].innerHTML="The Goblin"

//To add color
document.querySelector(".clash-card__unit-stats--barbarian").style.background="#ec9b3b"

document.querySelector(".clash-card__unit-stats--archer").style.background="#ee5487"

document.querySelector(".clash-card__unit-stats--giant").style.background="#f6901a"

document.querySelector(".clash-card__unit-stats--goblin").style.background="#82bb30"

document.querySelector(".clash-card__unit-stats--wizard").style.background="#4facff"

// To add white font color 
document.querySelectorAll(".one-third").forEach((e)=>{e.style.color="#ffffff"})
```
## **Assignment 5**

## Original
![](https://lh3.googleusercontent.com/pw/AMWts8CEvUvgq9n4SKdxVLgT5b6JT80amuBBmdC8to1w46ygjM5JzPUKSILD-1X-nbpWDnVWgTObeNcAFYtTL5gEfP1S6F3wLwOdmRwc8eT-hdT48xV0Cgf0Y02t5jG_UtF4KHGhpxeCTGrzGwuBXBZwsyo=w1380-h743-no?authuser=0)

## Task

![](https://lh3.googleusercontent.com/pw/AMWts8B-gRYo6l3x-ye1PgCt9LgfPjulf5kmxffUoKam3DhwJ3Wq5Pfc16lgMEaTQIwFmWmKKQJ35abfymlX7jXrIG8XMP2wHQYWT_ZXRwv1wq5AHeYthbGdg1qafrn82u00S2JlVRarS4YETicumm6koY0=w941-h866-no?authuser=0)

```js
// To add Pro Subscription button
e=document.createElement("a")
e.className="btn"
e.innerText=" Pro Subscription "
document.querySelector(".nav-center").lastElementChild.appendChild(e)

// To add chinese(7) in Recipes
e=document.createElement("a")
e.innerText=" Chinese (7) "
document.querySelector(".tags-container div").appendChild(e)

// To add 6th card
bev=document.createElement("div")
bev.className="card"
bev.innerHTML=`
<a href="#" class="recipe-text">
<img src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" class="recipe-img" />
<h5 class="recipe-name">Coffee</h5>
<p class="recipe-disp">Prep : 10min | Cook : 10min</p>
                    </a>
                    `
document.querySelector(".recipe-gallery").appendChild(bev)

// To change color
document.querySelectorAll(".recipe-text").forEach((r)=>{r.style.color="#5c1b8b"})
```

## **Assignment 6**

## Original
![](https://lh3.googleusercontent.com/pw/AMWts8CaHY2-vK-kI_7vlt8DjTjuECKOLOefQr9V1dEneezbT_IzKFkL3NbTfMKq5X-1fyuYDoQuXd24igiTAgIfS8fqnqOXaTpL8tU299ussYDnjE1R7gVdGYEW_z6_DW7sbyLgcwV2IwxcLwBqqogxcPo=w1380-h743-no?authuser=0)

![](https://lh3.googleusercontent.com/pw/AMWts8DFOr8hj4kMFbSOBq3a-2THYYDH6TXMJYNOGIXrwW0WIyWD5LVCmcOfxI55KAvbEUn1x4GdcZVK6kaPWZc0Sdj8FPzK0dU9VsYAiun5SXUGXOISfhSW5us32-LE-QdUJGH5fnHFdeYi0F0hmWnrxv4=w1380-h743-no?authuser=0)

## Task
![](https://lh3.googleusercontent.com/pw/AMWts8D3NvGLukTmqGUyx-6CSyrpoY15VFcNhWVlI5EV9Ws6RUuuqDcIc9-EO8JfsGw13w3p7yXILi5rAMFWrUl_Itd8-DfH4lZBv3jgzFG1a3oVAkN42v4vmSfd6sH5e8vuYRbsN4PbMXalPNjpEZKUYjw=w1380-h740-no?authuser=0)

![](https://lh3.googleusercontent.com/pw/AMWts8AQGFwvoBGPjNZBldGC3KKt0JLwTK546Sov_S-ta2er6ZaepK_9hSEj7Nv8z5lnW7WpMqCdIHu_jNov6DtE3WZJPYajVKPxfuklnmx3b8HV42KPY_Y9YSR2n8rqslGAhD5fP7f-YTCHkYSW8l44jjk=w1380-h741-no?authuser=0)
```js

// adding iNeuron 
document.querySelector("header img").src="https://ineuron.ai/images/ineuron-logo.png"

//To change price
document.querySelector(".app_price span").innerText="$10"

// To add linkedin Icon
li=document.createElement("div")
li.className="footer_social_ico"
li.innerHTML=`<i class="fa-brands fa-linkedin"></i>`
document.querySelector(".footer_social").appendChild(li)
```

## **Assignment 7**

## Original
![](https://lh3.googleusercontent.com/pw/AMWts8BCxo2xB2p_StpBwbhtSCYZHvydk2T2dB25EIkkMzfyoA3z9FC-4jweAn7QMMuwyW2sNvDVrboCTerNf0sedOEC5L4kwzsegLIa0a9PH1yXVWH7m9DiCS3N5bE08zBvFZoSiSM703HyVPBQUIgo_J8=w1380-h740-no?authuser=0)

## Task

![](https://lh3.googleusercontent.com/pw/AMWts8DK1Xq7jJyzByt9gPQxQoYtGEVydeM4kvdUnmOexEnuQts-l3_wM-q7WzFZBLKDchvJKBIDtq5Z7UNmFAzTwFRnxNb3y57VGNf0-Q3udtkzBn-LfK5PGfDiMCDVw-D_ApgdLUgLMp-x_nOK6ZB8s7c=w1380-h738-no?authuser=0)

```js
// To remove alternate link
document.querySelectorAll(".main__languages a").forEach((e,i,arr)=>{if (i%2==1) {e.remove()
}})

// To add in input form
document.querySelector(".main__form-input").value="iNeuron"

// To add refresh button
ref=document.createElement("input")
document.querySelector(".main").appendChild(ref)
ref.type='button'
ref.style.gridColumn="2"
ref.value="After writing the text submit the form"
ref.style.background="#f23c3c"
ref.style.border="0"
ref.style.textAlign="center"
ref.style.borderRadius="2px"
ref.style.marginLeft="50px"
ref.style.width="360px"
ref.style.height="35px"
ref.style.color="#ffffff"
ref.style.fontSize="20px"
const refreshPage = () => {
  location.reload();
}
ref.addEventListener('click', refreshPage)
```


## **Assignment 8**

## Original
![](https://lh3.googleusercontent.com/pw/AMWts8DR_Z6GbwZQiiNDMg2cT30Z7GDmjAf0Vfu6u9JrukYVQPQXQFKkXWe4DCEZCVSc7onQLyGCJCSb_8mnYBiUSKC53GjTTauj3M7TgcEldwHyV_q6lWCOfFEbIUOAAc8TG-NllDHz_QecEcw1JA8G67Y=w1380-h743-no?authuser=0)

## Task 1

![](https://lh3.googleusercontent.com/pw/AMWts8AGL2xHEKbNNhFUWBRJhLYdDG1_NjwYEd33D48no3ZlQ9-q7-2-ejwkB_VQB2JV14mzSsRCHY-UlEBl2y4zoWJqXdMe0ocGlfO5HqgqonxFo6cEzt0DOpwKe16Qq0C0GJ7FNeDIhCYzRvuBBPu00Vw=w1380-h741-no?authuser=0)

```js
// To make aside scroll
document.querySelector("aside").style.overflowY="scroll"
h=document.createElement("hr")
h.className="hr-line"
document.querySelector("aside").appendChild(h)
he=document.createElement("h2")
he.className="new-head"
he.innerText="This is my custom heading"
document.querySelector("aside").appendChild(he)
document.querySelector("aside").style.outline="3px solid red"
document.querySelector("aside").style.outlineOffset="5px"
document.querySelector("aside").style.borderRadius="1px"
```

## Task 2
![](https://lh3.googleusercontent.com/pw/AMWts8CQO7159qDZDgJvtj8k29YDq3KOSlGklSS0wr4_C-I8ViKJhaLM4XNUY4URPMwDknWVybpQgcLPPm9O3hoAknXOJ7E7oJWWsNWUwUNQAqKh2U89QkSe0xBr7f-54S2xNBdqwN3iXlF54O_mCU7SUSY=w1380-h743-no?authuser=0)

```js
// To remove web page background
document.querySelector("body").style.background="#ffffff"
```

## Task 3
![](https://lh3.googleusercontent.com/pw/AMWts8DeKGRt24PeUMNt9LLcGVumfYBoseQlBFLmG63gK_uUH09XkEQEJXALhemJ-ujEkXv2J8eXD_jCnc_E0HPfIpD5QrxCa1XkG9qeEM_sMVps64A0j7J_pB93NewoXo_l8BJRzYF6NP7NQZ1FFHsZHyY=w1380-h777-no?authuser=0)

```js
// To Add functionality to hamburger button
ele=document.querySelector(".navbar-collapse")
let num=0
document.querySelector(".navbar-toggler").addEventListener('click',()=>{if (num==0){ele.style.display="flex";num=1;}else {ele.style.display="none";num=0;}})
```

## **Assignement 9**

## Original
![](https://lh3.googleusercontent.com/pw/AMWts8Ao0av-6ITwKib7z-hGp-MFTULlKQKk_p9VxOHydxP_6fhH8ylprLnds7TZUN2hyLPAqgB74ypMRzB_oBqiNP_uYT1CduhtcLfY4ag_1VnecPJRoKsEgZwxR3NXFf5bFW4qv8tmI2qndtAitGXIntQ=w1380-h743-no?authuser=0)

## Task 1

![](https://lh3.googleusercontent.com/pw/AMWts8AKWCElsOlp5HX2UKHMQtoP2o4wBW67Eo6fwnteFUxQhygNihvQZc8cXu4JdRTgJwdI3jG38Ak2ecrIhH6Qw9_l5HeswL_6ztKHr7M5yty3bdtWCqk5AKPuO39Wi7ABfqBYJirrryelueV9Ef93OW0=w1380-h741-no?authuser=0) 

```js
// To change color and font
document.querySelectorAll(".title")[1].style.fontFamily="serif"
document.querySelectorAll(".title")[1].style.color="#dc143c"
```

## Task 2
![](https://lh3.googleusercontent.com/pw/AMWts8DdB6U8c5Jvq-MWWNvq4m_FtYeeMdlVjho5H-vzNzyAyaROo39G8i_-KtxvX434B3A-QMkQynaRF0w6hAeGY57j8knHyYbPxDoFUSiIeC8U2S_APYJ96CaeOXQrxYjnKdVru0QRnIXfUFBtEkdDKgc=w1380-h740-no?authuser=0)

```js
// To change color of add to cart on hover
ele=document.querySelector(".add-to-cart")
ele.addEventListener('mouseenter',()=>{ele.style.background="#dc143c"})
ele.addEventListener('mouseleave',()=>{ele.style.background="#3c8067"})

```