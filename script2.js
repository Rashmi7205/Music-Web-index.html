
//Reference for the current playing audio
let currAudio = null;
//refererence for the previous audio
let prevAudio = currAudio;
//Reference for the prvisious audio element
let prevAudioEle =null;
//Functio  to get the audio element
function getTheAudio(element){
  //get the clicked element
  currAudio =element.querySelector('audio'); 
  //find the current audio is playing or not
  if(currAudio.paused) 
    {
      currAudio.play();
      //change the icon
      element.querySelector('#pl-btn').classList = 'fa-solid fa-circle-pause';
      document.getElementById('control-play').classList = 'fa-solid fa-circle-pause';
      setImage(element.querySelector('#cover-Img').src);
    }
    else 
    {
      currAudio.pause();
      element.querySelector('#pl-btn').classList = 'fa-solid fa-circle-play';
      document.getElementById('control-play').classList = 'fa-solid fa-circle-play';
    }
    //if prev audio is playing
    if(prevAudio!=null && prevAudio!=currAudio)
    {
      prevAudioEle.querySelector('#pl-btn').classList = 'fa-solid fa-circle-play';
      prevAudio.pause();
    }
    //update the prev audio and the prev element
    prevAudio=currAudio;
    prevAudioEle = element; 
    // function for the seekbar
    if(currAudio!=null)
    {
      currAudio.addEventListener("timeupdate", () => {
        console.log(currAudio.currentTime)
      let value = parseFloat((currAudio.currentTime/currAudio.duration)*100).toFixed(2);
      document.getElementById('slider').value = value;
      if(currAudio.currentTime == currAudio.duration)
        playnext();
    });
  }
}

//on seekbar change
document.getElementById('slider').addEventListener('change',()=>{
  currAudio.currentTime = (document.getElementById('slider').value*currAudio.duration)/100;

})

const setImage = (img)=>{
    let playerImage = document.querySelector('.player-body');
    playerImage.style.backgroundImage = `url(${img})`;
}


//Audio player control
function playPauseAudio(){
    getTheAudio(prevAudioEle);
}

//Function for the next audio;
//REference for the Audio nodes
document.querySelector('#control-next').addEventListener('click',playnext);
function playnext(){
    let arr = new Array(...document.querySelectorAll('.audList li'));
    if(prevAudioEle==null)
    {
      console.log("null")
      return;
    }
    else{
      let AudInd = arr.indexOf(prevAudioEle);
      getTheAudio(arr[(AudInd+1)%arr.length]);
    }
}

//Control for the previous audio
document.getElementById('control-prev').addEventListener('click',playPrevious);
function playPrevious(){
  let arr = new Array(...document.querySelectorAll('.audList li'));
  if(prevAudioEle==null)
  {
    console.log("null")
    return;
  }
  else{
    let AudInd = arr.indexOf(prevAudioEle);
    if(AudInd<=0)
      AudInd=0;
    getTheAudio(arr[AudInd-1]);
  }
}


//function for like button
function fav(ele){
     if(ele.style.color!='green')
        ele.style.color='green';
     else 
      ele.style.color='white';   
}


//Function for the made for you section
function handlemdf(ele)
{
    let songname = ele.innerText
    currAudio.src = `./audio/${songname}`
}