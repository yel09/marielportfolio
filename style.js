var a;
function toggle(){

    if(a==1){
        document.getElementById("hide_section").style.display="inline";
        return a=0;
    }
    else{
        document.getElementById("hide_section").style.display="none";
        return a=1;
    }

}