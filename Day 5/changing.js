const con =document.getElementById("container")
const arr =["./assets/Nature1.jpg",
    "./assets/Nature2.jpg",
    "./assets/Nature3.jpg",
    "./assets/Nature4.jpg",
    "./assets/Nature5.jpg"
]

const img = document.getElementsByClassName('img');
console.log(img);


let i=0;
let next=()=>{
    img[i].classList.remove('active');
    i++;
     if(i==arr.length)
    {
        i=0;    }

img[i].classList.add('active');
 con.style.backgroundImage=`url('${arr[i]}')`;
}

let prev=()=>{
    i--;
    if(i==-1)
    {
        i=4;
    }
    con.style.backgroundImage=`url('${arr[i]}')`;
    
}

let change=(a)=>{
    con.style.backgroundImage=`url('${arr[a]}')`;
}


setInterval(()=>{
  next();
},2000)