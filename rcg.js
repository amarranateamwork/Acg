let fun=()=>{
    let random=Math.floor(Math.random()*16777215);
    let hex="#" +random.toString(16);
    document.body.style.backgroundColor=hex;
    document.getElementById("phara").innerText=hex;
}
fun();
document.getElementById("btn").addEventListener("click",fun);