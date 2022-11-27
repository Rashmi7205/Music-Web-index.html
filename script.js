console.log("connecetd");
var Audios = [
  { aud: 'audio/Daku_64(PagalWorld.com.se).mp3', 
    img:'images/daku.jpg'
  },
  { aud: "audio/Dekha Ek Khwab x Laila - Sush Yohan_64(PagalWorld.com.se).mp3",
  img:"images/dekha.jpg"   
},
  { aud: 'audio/Jo Tainu Dhoop Lagya Ve_64(PagalWorld.com.se).mp3',
  img:'images/tenudhoop.jpg'
},
  { aud: 'audio/Kesariya_64(PagalWorld.com.se).mp3', 
    img:'images/keshriya.jpg'
  },
  { aud: "audio/Let Me Down Slowly x Main Dhoondne Ko Zamaane Mein (Gravero Mashup)_64(PagalWorld.com.se).mp3",
  img:"images/letme.jpg"   
},
  { aud: 'audio/Akela_64(PagalWorld.com.se).mp3',
  img:'images/akela.jpg'
  },
  { aud: 'audio/kb.mp3', 
    img:'images/227.jpg'
  },
  { aud: "audio/How's It Supposed to Feel (Instrumental) - NEFFEX.mp3" ,
  img:"images/headphones-african-american-woman-s-portrait-isolated-dark-studio-background-multicolored-neon-light-beautiful-female-model-concept-human-emotions-facial-expression-sales-ad-fashion.jpg"  
  },
  { aud: 'audio/kb.mp3',
  img:'images/headphone.jpg'
  }
  ];

let pr_aud;
let img=document.getElementById("pl-img");
let element;
let j=0;
let li=document.querySelectorAll("#list li");
let isPlaying=false;
let musicName=document.getElementById("music-name");

for(let x=0;x<li.length;x++)
{
  console.log(li[x]);
  li[x].querySelector("#cover").src=Audios[x].img;
}

function Pl(i) {
 // console.log(ele);
  pr_aud=i;
  console.log(Audios[i].aud);
  let mySound = new Audio(Audios[i].aud);
  if(element && element != mySound)
  {
       element.pause();
  }
  mySound.currentTime=10;
  mySound.play();
  element=mySound;
  img.src=Audios[i].img;
  musicName.innerHTML = li[i].querySelector("#about").innerText;
  
  mySound.onplaying = function() {
    isPlaying = true;
    };
    mySound.onpause = function() {
    isPlaying = false;
    };
    let mpl=document.querySelector("#mplay");
    mpl.setAttribute('class','fa-solid fa-pause');
}

//Play-pause ,prev and next button

function back()
{
    if(pr_aud>0)
    {
      Pl(pr_aud-1);
    }
}
function next()
{
  if(pr_aud<Audios.length)
  {
    Pl(pr_aud+1);
  }
}

function Audiopp(Ele)
{

    if (isPlaying) {
        element.pause();
        Ele.setAttribute('class','fa-solid fa-play');
    } else {
        element.play();
        Ele.setAttribute('class','fa-solid fa-pause');
      }
};
