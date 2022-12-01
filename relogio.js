function horario(){
    let d = new Date();

    let h = d. getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();

    if (h< 10){
        h= "0"+h;
    }
    if (s < 10){
        s ="0"+s;
    }
    if (m< 10){
        m= "0"+m;
    }
    document.getElementById("hora").innerHTML= h + ":"+m+ ":" + s;
    setTimeout (horario,1000)
}