let indexm = (lastx = lasty = pointer = ppointer = npointer = 0);
window.onmousedown = (e) => {
    pointer = e.clientX;
};
window.onmouseup = (e) => {
    ppointer = npointer;
    pointer = 0;
};
window.addEventListener("mousemove", mousemoveevents);
function mousemoveevents(e) {
    paralleximageeffect(e);
    imagetrail(e);
    galleryverse(e);
    mousetrail1(e);
    mousetrail(e);
    transformeffect(e);
    // bghover(e);
}
const gallery = document.querySelector(".blocks");
function galleryverse(e) {
    let mx = e.clientX / window.innerWidth;
    let my = e.clientY / window.innerHeight;
    panx = (gallery.offsetWidth - window.innerWidth) * mx * -1;
    pany = (gallery.offsetHeight - window.innerHeight) * my * -1;
    // gallery.style.transform=`translate(${panx}px,${pany}px)`
    // fixedresult.innerHTML=panx+','+pany
    gallery.animate(
        { transform: `translate(${panx}px,${pany}px)` },
        { duration: 500, fill: "forwards" }
    );
}
function paralleximageeffect(e) {
    if (pointer == 0) {
        return;
    }
    // pointer==0?return:
    npointer = ((pointer - e.clientX) / (window.innerWidth / 2)) * -100;
    npointer = npointer + ppointer;
    // npointer>-101&&npointer<1?(document.querySelector(".parallexcontainer").style.transform=`translate(${npointer}%,-50%)`,for(const image of document.getElementsByClassName(".paralleximage")){
    // }):true
    if (npointer > -101 && npointer < 1) {
        // document.querySelector(".parallexcontainer").style.transform=`translate(${npointer}%,-50%)`
        document
            .querySelector(".parallexcontainer")
            .animate(
                { transform: `translate(${npointer}%,-50%)` },
                { duration: 1500, fill: "forwards" }
            );
        for (const imagee of document.getElementsByClassName("paralleximage")) {
            imagee.animate(
                { objectPosition: npointer + 100 + "%" },
                { duration: 1500, fill: "forwards" }
            );
        }
    }
}
const images = document.getElementsByClassName("image");
// window.onmousemove=e=>{
//     }
// }
function imagetrail(e) {
    if (Math.hypot(e.clientX - lastx, e.clientY - lasty) >= 100) {
        lastx = e.clientX;
        lasty = e.clientY;
        images[indexm % images.length].dataset.status = "active";
        images[indexm % images.length].style.zIndex = indexm;
        images[indexm % images.length].style.top = e.clientY + "px";
        images[indexm % images.length].style.left = e.clientX + "px";
        // images[indexm%images.length].style.transform=`translate(${e.clientX}px,${e.clientY}px)`
        indexm++;
    }
}
function toggle() {
    if (togglepic.style.visibility == "hidden") {
        togglepic.style.visibility = "visible";
    } else {
        togglepic.style.visibility = "hidden";
    }
}
let aindex = 0;
group = document.getElementsByClassName("cards");
function next() {
    // consol.log(innerHTML=document.getElementsByClassName("group").length)
    // console.log(group.length);
    nindex = aindex + 1 < group.length ? aindex + 1 : 0;
    // console.log(nindex);
    currentgroup = document.querySelector(`[data-index="${aindex}"]`);
    nextgroup = document.querySelector(`[data-index="${nindex}"]`);
    // console.log(currentgroup);
    // console.log(nextgroup);
    // currentgroup.status="active"
    // nextgroup.status="next"
    currentgroup.dataset.status = "previous";
    nextgroup.dataset.status = "nexttoactive";
    setTimeout(() => {
        nextgroup.dataset.status = "active";
        aindex = nindex;
    });
}
function back() {
    // consol.log(innerHTML=document.getElementsByClassName("group").length)
    console.log(group.length);
    nindex = aindex - 1 >= 0 ? aindex - 1 : group.length - 1;
    console.log(nindex);
    currentgroup = document.querySelector(`[data-index="${aindex}"]`);
    nextgroup = document.querySelector(`[data-index="${nindex}"]`);
    console.log(currentgroup);
    console.log(nextgroup);
    // currentgroup.status="active"
    // nextgroup.status="next"
    currentgroup.dataset.status = "next";
    nextgroup.dataset.status = "previoustoactive";
    setTimeout(() => {
        nextgroup.dataset.status = "active";
        aindex = nindex;
    });
}
// const images=document.getElementsByClassName("image")
// let gindex=0,zin=10
// document.getElementById("room").addEventListener("mousemove",e=>{
//     index=gindex+1<images.length?gindex+1:0
//     images[index].style.left=`${e.clientX}px`
//     images[index].style.top=`${e.clientY}px`
//     images[index].style.zIndex=zin
//     images[index].dataset.status="active"
//     gindex=index
//     zin+=1
// })
const ball1 = document.querySelector(".ball1");
const ball2 = document.querySelector(".ball2");
function mousetrail1(e) {
    ball1.style.top = (e.clientY / window.innerHeight) * 100 + "%";
    ball1.style.left = e.clientX / 2 + "px";
    ball2.style.top = (e.clientY / (window.innerHeight * 2)) * 100 + "%";
    ball2.style.left = e.clientX / -2 + "px";
}
function mousetrail(e) {
    // let x=e.clientX,y=e.clientY
    // fixedresult.innerHTML=x+','+y/(innerHeight)*100
    // ball2.style.transform='translate('+x+'px,'+y/innerHeight*100+'%)'
    document.querySelector(".cursoralt").style.top = e.clientY + "px";
    document.querySelector(".cursoralt").style.left = e.clientX + "px";
}
function transformeffect(e) {
    tx = (e.clientX / window.innerWidth) * -50;
    ty = (e.clientY / window.innerHeight) * -50;
    fixedresult.innerHTML = tx;
    document.querySelector(
        ".transformwrapper"
    ).style.transform = `translate(${tx}%,${ty}%)`;
}
const herotext = document.getElementById("theherotext");
const cursoralt = document.querySelector(".cursoralt");
herotext.onmouseleave = () => {
    cursoralt.animate(
        { backgroundColor: "white", height: "6vmin" },
        { duration: 200, fill: "forwards" }
    );
    // cursoralt.style.backgroundColor = "white"
    // cursoralt.style.height = "5vmin";
};
herotext.onmouseover = () => {
    // cursoralt.style.backgroundColor = "transparent";
    // cursoralt.style.height = "30vmin";
    // cursoralt.style.border = `.5vmin dashed white`;
    cursoralt.animate(
        {
            backgroundColor: "transparent",
            height: "22vmin",
            border: `.4vmin dashed white`,
        },
        { duration: 200, fill: "forwards" }
    );
    cursoralt.animate(
        { transform: `translate(-50%, -50%) rotate(180deg)` },
        { duration: 30000, iterations: Infinity }
    );
};
const twitchcard = document.querySelector(".twitchcard");
const textcontainer = document.getElementById("twitchsubtext");
const textcopy = textcontainer.innerHTML;
textcontainer.innerHTML = "";
texts = textcopy.split(" ");
texts = texts.filter((e) => e != "");
newindex = 0;
// const newtext = document.createElement("div");
// newtextarray=[]
// // newtext.classList.add("bg-yellow", "text-lg");
// // newtext.textContent = "hello world";
twitchcard.onmouseover = () => {
    max = setInterval(() => {
        newindex < texts.length
            ? ((text = document.createElement("span")),
              text.classList.add("slidinguptext"),
              (text.textContent = texts[newindex] + " "),
              textcontainer.appendChild(text),
              newindex++)
            : (clearInterval(max), (newindex = 0));
    }, 40);
};
twitchcard.onmouseleave = () => {
    textcontainer.innerHTML = null;
    clearInterval(max);
    newindex = 0;
};
const slimes = document.getElementsByClassName("slime");
let pr = (randomposition = randomroundness = random = 0);
const rightcombos = [
    { p: 0, r: 0 },
    { p: 0, r: 1 },
    { p: 0, r: 2 },
    { p: 1, r: 0 },
    { p: 1, r: 2 },
    { p: 2, r: 0 },
    { p: 2, r: 2 },
];
setInterval(() => {
    while (pr == random) {
        random = Math.floor(Math.random() * 7);
    }
    for (let index = 0; index < slimes.length; index++) {
        slimes[index].dataset.position = rightcombos[random].p;
        slimes[index].dataset.roundness = rightcombos[random].r;
    }
    pr = random;
}, 3000);
const bgrings = document.querySelector(".bghovereffect");
function bghover(e) {
    console.log((e.clientX / window.innerWidth) * 100);
    bgrings.style =
        `background: repeating-radial-gradient(
        circle,
        black,
        black 6%,
        rgb(10, 10, 10) 6%,
        rgb(10, 10, 10) 6.1%
    );
    background-size: 200vw 200vh;background-position:` +
        ((e.clientX / -window.innerWidth) * 100 + 100) +
        "%" +
        ((e.clientY / -window.innerHeight) * 100 + 100) +
        "%;";
}
for (let i = 1; i <= 12; i++) {
    bghoverring = document.createElement("div");
    bghoverring.classList.add("ring");
    bghoverring.dataset.menuno = "";
    bghoverring.style.transform = `scale(${2 * i})`;
    bghoverring.style.transitionDelay = `${50 * i}ms`;
    bgrings.appendChild(bghoverring);
}
Array.from(document.getElementsByClassName("bghovermenuitem")).forEach(
    (element, index) => {
        element.onmouseover = () => {
            // Array.from(
            //     document.getElementsByClassName("bghovermenuitem")
            // ).forEach((element) => {
            //     element.style.opacity = "0.5";
            // });
            // element.style.opacity = "1";
            Array.from(document.querySelectorAll(".ring")).forEach(
                (element) => {
                    element.dataset.menuno = index;
                }
            );
        };
    }
);
Array.from(document.getElementsByClassName("bghovermenuitem")).forEach(
    (element) => {
        element.onmouseleave = () => {
            // element.style.opacity = "1";
            Array.from(document.querySelectorAll(".ring")).forEach(
                (element) => {
                    element.dataset.menuno = "";
                }
            );
        };
    }
);
const bombtext = [],
    bombs = Array.from(document.getElementsByClassName("bombtext"));
bombs.forEach((element, i) => {
    bombtext.push(element.innerHTML);
    element.innerHTML = "";
    for (let j = 0; j < bombtext[i].length; j++) {
        letter = document.createElement("div");
        letter.innerHTML = bombtext[i].charAt(j);
        element.appendChild(letter);
    }
    element.onmouseover = () => {
        for (let i = 0; i < element.children.length; i++) {
            xmov = Math.random() * 50 - 25;
            ymov = Math.random() * 50 - 25;
            element.children[i].style.transform = `translate(${xmov}%,
            ${ymov}%)
            rotate(${Math.random() * 20 - 10}deg)`;
            // randmove = setInterval(() => {
            //     element.children[i].style.transform = `translate(${
            //         Math.random() * 10 - 5
            //     }%,
            //     ${Math.random() * 10 - 5}%)`;
            // }, 500);
            // console.log((Math.random() * 100)-50);
            element.children[i].style.color = "red";
            element.children[i].style.fontWeight = "1000";
            element.children[i].style.margin = "-1vh 0";
            // element.children[i].style.textShadow='0 0 4vmin rgba(255,0,0,.5)'
        }
    };
    element.onmouseleave = () => {
        element.style = "";
        for (let i = 0; i < element.children.length; i++) {
            element.children[i].style = "";
        }
        // clearInterval('randmove');
    };
});
// console.log(bombtext);
// console.log(bombtext);
// Array.from(document.getElementsByClassName("bombtext")).forEach((element) => {
//     bombtext.push(element.innerHTML);
// });
// Array.from(document.getElementsByClassName("bombtext")).forEach((element) => {
//     element.innerHTML = "";
// });
// Array.from(bombtext[0]).forEach((element) => {
//     console.log(element);
// });
// for (let i = 0; i < bombtext.length; i++) {
//     for (let j = 0; j < bombtext[i].length; j++) {
//         console.log(bombtext[i].charAt(j));
//     }
// }
// bombtext.forEach((e) => {
//     for (let i = 0; i < e.length; i++) {
//         console.log(e.charAt(i));
//     }
// });
