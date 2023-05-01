function getSongList(ele){
    let obj = new XMLHttpRequest();
        obj.onreadystatechange=function(){
            if(this.readyState==4 && this.status==200){
                let rtext = this.response
                setList(JSON.parse(rtext),ele.querySelector("#aname").innerText,ele)
            }
            else
                console.log('Error 404');    
    }
    obj.open('GET','./pg1.txt',true);
    obj.send(); 
}        
function setList(songList,artist_name,ele){
    let newList = songList.filter(element => {
        if(element.artist==artist_name)
            return element
    });
    let audioItems = newList.map((ele)=>{
        return `<li class="audio-item" onclick="getTheAudio(this)">
        <img src="${ele.coverImage}" alt="" id="cover-Img">
        <p id="audio-name">${ele.songName}
        <audio src="${ele.song}"></audio>
        </p>
        <div class="song-menu">
             <i class="fa-solid fa-circle-play" id="pl-btn"></i>
             <i class="fa-solid fa-heart" onclick="fav(this)"></i>
             <a href="${ele.songName}"><i class="fa-solid fa-download"></i></a>
        </div>
      </li>`
    })
    //artist introduction
    const artist_intro_name = document.querySelector('.artist-section')
    artist_intro_name.innerHTML = `<a href="./mpage.html" id="back-btn">Back</a>
                                    <div class="artist-intro"><img src="${ele.querySelector('img').src}"/>
                                    <div class="artist-details">
                                    <p>${artist_name}</p>
                                    <p><i class="fa-solid fa-heart" onclick="fav(this)"></i>Like</p>
                                    </div></div>`;
    //Making made for you section empty
    document.querySelector('.mdf-section').remove()
    //popular song heading
    document.getElementById('song-list-heading').innerText = `${artist_name}'s Popular Songs`



    let container = document.querySelector('.audList');
    container.innerHTML=""; 
    audioItems.forEach(element => {
            let container = document.querySelector('.audList'); 
            container.innerHTML+=element;
    });
}

//View More expand tab
document.getElementById('artist-view-more').addEventListener('click',()=>{
    if(document.querySelector('.artist-list').style.height != 'auto')
        {
        document.getElementById('artist-view-more').innerText = 'View Less';
        document.querySelector('.artist-list').style.height = 'auto';
        }
    else
    {
        document.getElementById('artist-view-more').innerText = 'View More';
        if(document.body.clientWidth>=1200)
        {
        document.querySelector('.artist-list').style.height = '130px';
        }
        else{
            document.querySelector('.artist-list').style.height = '90px';
        }
    }
})

document.getElementById('mdf-view-more').addEventListener('click',()=>{
    if(document.querySelector('.mdf-list').style.height != 'auto')
        {
        document.getElementById('mdf-view-more').innerText = 'View Less';
        document.querySelector('.mdf-list').style.height = 'auto';
        }
    else
    {
        document.getElementById('mdf-view-more').innerText = 'View More';
        if(document.body.clientWidth>=1200)
            document.querySelector('.mdf-list').style.height = '130px';
        else{
            document.querySelector('.mdf-list').style.height = '130px';
        }
    }
})