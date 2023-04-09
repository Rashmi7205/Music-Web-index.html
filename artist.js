console.log()
function getSongList(x){
    
    let xthp = new  XMLHttpRequest();
    xthp.onreadystatechange  = function(){
        if(this.readyState==4&&this.status==200)
           {
            let container = document.querySelector('.main-content');
            container.innerHTML = this.responseText;
           }
        else
            console.log("Loading")    
    }
    xthp.open('GET','./pg1.txt',true);
    xthp.send();
}