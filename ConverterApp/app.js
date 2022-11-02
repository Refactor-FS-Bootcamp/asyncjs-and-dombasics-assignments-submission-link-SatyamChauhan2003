document.getElementById("kgInput").addEventListener("input", e=>{
    let kg=e.target.value;
    document.getElementById("lbOutput").innerText=kg * 2.205;
})

document.getElementById("feetInput").addEventListener("input", e=>{
    let feet=e.target.value;
    document.getElementById("cmOutput").innerText=feet * 30.48;
})