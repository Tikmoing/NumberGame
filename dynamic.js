function on_off(type){
    var btn = document.getElementsByClassName("btn-on")[0];
    var circle = document.getElementsByClassName("btn-on-circle")[0];
    var text = document.getElementsByClassName("btn-on-text")[0];
    // console.log(btn);
    if(!type){
        btn.style= "background-color: #ccc;"
        circle.style="left: 40px;background-color: #888;box-shadow: 0 0 10px #888;";
        text.style="right: 30px;color: #888;";
        text.innerText="Fix";
    } else {
        btn.style= ""
        circle.style="";
        text.style="";
        text.innerText="Pe";
    }
    btn.setAttribute("onclick", "on_off(" + !type + ")"); 
    btn.setAttribute("status", +type); 
}
on_off(true)