let icon=document.querySelector(".icon")
let ul=document.querySelector("ul")

icon.addEventListener("click",()=>{
    ul.classList.toggle("showData")
    if(ul.classList == "showData"){
        document.getElementById('bar').classList="fa-solid fa-xmark"
    }else{
        document.getElementById('bar').classList="fa-solid fa-bars"

    }
})

document.getElementById("shopes").addEventListener("click", () => {
    document.getElementById("homes").style.color = "white";
    document.getElementById("shopes").style.color = "rgb(20,251,20)";
    document.getElementById("reviews").style.color = "white";
    document.getElementById("blogs").style.color = "white";
    document.getElementById("contacts").style.color = "white";
});

document.getElementById("blogs").addEventListener("click", () => {
    document.getElementById("homes").style.color = "white";
    document.getElementById("shopes").style.color = "white";
    document.getElementById("reviews").style.color = "white";
    document.getElementById("blogs").style.color = "rgb(20,251,20)";
    document.getElementById("contacts").style.color = "white";
});

document.getElementById("contacts").addEventListener("click", () => {
    document.getElementById("homes").style.color = "white";
    document.getElementById("shopes").style.color = "white";
    document.getElementById("reviews").style.color = "white";
    document.getElementById("blogs").style.color = "white";
    document.getElementById("contacts").style.color = "rgb(20,251,20)";
});

document.getElementById("reviews").addEventListener("click", () => {
    document.getElementById("homes").style.color = "white";
    document.getElementById("shopes").style.color = "white";
    document.getElementById("reviews").style.color = "rgb(20,251,20)";
    document.getElementById("blogs").style.color = "white";
    document.getElementById("contacts").style.color = "white";
});
// card js  
let crd=document.querySelectorAll(".crd")
let itempage=document.querySelector(".itempage")
let container=document.querySelector(".container")
let crdimg=document.getElementById("crdimg")
let buybtn=document.getElementById("buybtn")
let buypage=document.querySelector(".buypage")
let buytext=document.querySelector(".buytext")
crd.forEach(function(crdvalue){
crdvalue.addEventListener("click",function(){
    itempage.style.display="flex"
    container.style.display="none"


    let imgsrc=crdvalue.firstElementChild.src;
    crdimg.src=imgsrc



buybtn.addEventListener("click",function(){
        document.querySelector(".buypage").style.display="block"
            document.querySelector(".buytext").innerHTML=
            `
             <h3>Enter Details :</h3>
            <input type="text" placeholder="enter your name" id="name"><br>
            <input type="text" placeholder="enter your Addrees" id="address"><br>
            <input type="text" placeholder="enter your Mobile number" id="num"><br>
            <h3>payment option :</h3>
            <select>
                <option value="Google-pay">Google-pay</option>
                <option value="Jazcash">Jazcash</option>
                <option value="easypasa">easypasa</option>
                <option value=">cash-on-delivery">cash-on-delivery</option>
            
        
            </select><br>
             `
        let button =document.createElement("button")
 button.innerText="submit";
 buytext.appendChild(button);
button.addEventListener("click",()=>{
let name=document.getElementById("name");
if(name.value == "" && address.value =="" && num.value==""){
    alert("please enter your details")
}else{
    alert("your response is recorded")
    document.querySelector(".buypage").style.display="none"

}
})

            let cross=document.querySelector('.cross')
            cross.addEventListener("click",()=>{
                buypage.style.display="none"
            })
})
})

})


