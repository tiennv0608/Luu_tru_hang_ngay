function showResults(){
    let e = document.getElementById("from");
    let firstCur = e.options[e.selectedIndex].text;
    let f = document.getElementById("to");
    let secondCur = f.options[f.selectedIndex].text;
    let a = document.getElementById('value').value;
    let conVert = parseInt(a);
    let v;
    if (firstCur === secondCur){
        v = conVert;
    } else if (firstCur === "VietNam" && secondCur === "USD") {
        v = conVert/24000;
    } else if (firstCur==="USD" && secondCur==="VietNam"){
        v = conVert * 24000;}
    document.getElementById("result").innerHTML=("Results: " + v);
}
