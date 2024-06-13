async function randomAdvice(){
    const response=await fetch("https://api.adviceslip.com/advice");
    const adviceAPI=await response.json();
    // alert(advice.slip.id)
    document.querySelector("h1").innerText=adviceAPI.slip.advice;
    document.querySelector("#number").innerText=adviceAPI.slip.id;
}


document.querySelector(".dicebg").addEventListener("click",randomAdvice)
