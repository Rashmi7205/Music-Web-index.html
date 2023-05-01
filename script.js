import { artist } from "./artist.js";
import {audios} from "./data.js";


let audioItems = audios.map((ele)=>{
    return `<li class="audio-item" onclick="getTheAudio(this)">
    <img src="${ele.coverImage}" alt="" id="cover-Img">
    <p id="audio-name">${ele.songName}
    <audio src="${ele.song}"></audio>
    </p>
    <div class="song-menu">
         <i class="fa-solid fa-circle-play" id="pl-btn"></i>
         <i class="fa-solid fa-heart" onclick="fav(this)"></i>
         <a href="${ele.song}" download><i class="fa-solid fa-download"></i></a>
    </div>
  </li>`
})



let main_content = document.querySelector(".audList");
audioItems.forEach((ele)=>{
  main_content.innerHTML+=ele;
}) 

//Artist 
let artist_list = document.querySelector('.artist-list'); 
let artist_items = artist.map((ele)=>{
 return `<div class="artist" onclick="getSongList(this)">
  <img src="${ele.image}" alt=""/>
  <h3 id="aname">${ele.name}</h3>
</div>`
})

artist_items.forEach((ele)=>{
  artist_list.innerHTML+=ele;
}) 

//Made for you section
let mdf_list = document.querySelector('.mdf-list'); 
let mdf_items = audios.map((ele)=>{
 return `<div class="mdf" onclick="handlemdf(this)">
  <img src="${ele.coverImage}" alt=""/>
  <h3>${ele.songName}</h3>
</div>`
})

mdf_items.forEach((ele)=>{
  mdf_list.innerHTML+=ele;
}) 


