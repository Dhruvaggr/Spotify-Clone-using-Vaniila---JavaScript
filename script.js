console.log("Spotify");
let audio = new Audio('songs/1.mp3');
songIndex = 0;
//   audio.play();
// console.log(audio.paused);
// console.log(audio.currentTime);
// audio.pause();
let songs = [
    {songName: 'Let me down slowly- Alec Benjamain', songPath: 'songs/1.mp3', coverPath: 'covers/1.jpg' },
    {songName: 'Reza-Reza - Arijit Singh', songPath: 'songs/2.mp3', coverPath: 'covers/2.jpg' },

    {songName: 'Chaleya-Jawan-Shilpa Rao, Arijit Singh', songPath: 'songs/3.mp3', coverPath: 'covers/3.jpg' },

    {songName: 'Beleiver- Imagine Dragons', songPath: 'songs/4.mp3', coverPath: 'covers/4.jpg' },

    {songName: 'Yeh Mausam ki Baarish-Half Girfriend', songPath: 'songs/5.mp3', coverPath: 'covers/5.jpg' },
    {songName: 'Zara Dil ko tham lo- Don2', songPath: 'songs/6.mp3', coverPath: 'covers/6.jpg' },
    {songName: 'Satisfya-Imaran Khan', songPath: 'songs/7.mp3', coverPath: 'covers/7.jpg' },


]
let mainPlay = document.getElementById('mainPlay');
let forwardPlay = document.getElementById('forwardPlay');
let backwardPlay = document.getElementById('backwardPlay');
let seekBar = document.getElementById('lengthOfSong');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songItemPlay = Array.from(document.getElementsByClassName('songItemPlay'));
let onPlaySong = document.getElementById('onPlay');
onPlaySong.innerText = songs[0].songName;

//  console.log(songItemPlay);
songItems.map((element,i)=>{
//   console.log(element,i);
//   console.log(songs[i].coverPath);
//    console.log(element.getElementsByTagName('img')[0]);
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;

});

const allPlays = ()=>{
    // console.log("Before fxn");
    songItemPlay.forEach((element)=>{
        // console.log("songPlayItem");
        
        element.classList.remove('fa-pause-circle');
         element.classList.add('fa-play-circle');
        
    })
}
// console.log(typeof songItemPlay);
songItemPlay.forEach((element)=>{
    // console.log(element);
    element.addEventListener('click',(e)=>{
        // console.log(element.id);
        //  console.log(e.target);
        songIndex = parseInt(element.id);
        // console.log(songIndex);
          allPlays();
        //   console.log("After fxn");
         element.classList.remove('fa-play-circle');
         element.classList.add('fa-pause-circle');
       
         audio.src = `songs/${songIndex}.mp3`;
         audio.currentTime = 0;
         audio.play();
         mainPlay.classList.remove('fa-play-circle');
         mainPlay.classList.add('fa-pause-circle');
         gif.style.opacity = 1;
         onPlaySong.innerText = songs[songIndex-1].songName;


        
    });
});
// console.log(songItems); // HTML Collection 
// console.log(Array.from(songItems)); // ARRAY 

// stepForward and Backward
forwardPlay.addEventListener('click',()=>{
    // console.log(songIndex);
    if(songIndex>6)
    {  
        // console.log("7th position");
        songIndex=1;
        // audio.play('songs/1.mp3');
    }
    else{
    songIndex+=1;
    }
    audio.src = `songs/${songIndex}.mp3`;
    audio.currentTime = 0;
    audio.play();
    mainPlay.classList.remove('fa-play-circle');
    mainPlay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
    
    onPlaySong.innerText = songs[songIndex-1].songName;


    
   
    // console.log("forward");
});
backwardPlay.addEventListener('click',()=>{
 if(songIndex<=1)
 {
    songIndex=1;
 }
 else{
    songIndex-=1;

 }
audio.src = `songs/${songIndex}.mp3`;
audio.currentTime = 0;
audio.play();
mainPlay.classList.remove('fa-play-circle');
mainPlay.classList.add('fa-pause-circle');
gif.style.opacity = 1;
onPlaySong.innerText = songs[songIndex-1].songName;


});



// console.log(audio.currentTime);
// console.log(lengthOfSong.value);

// mainPlay click 
mainPlay.addEventListener('click',()=>{

    if(audio.paused || audio.currentTime<=0)
    {
        audio.play();
        mainPlay.classList.remove('fa-play-circle');
        mainPlay.classList.add('fa-pause-circle');
        
        gif.style.opacity="1";
     }
    else{
        // console.log(lengthOfSong.value);
        audio.pause();
        mainPlay.classList.remove('fa-pause-circle');
        mainPlay.classList.add('fa-play-circle');
        allPlays();
        gif.style.opacity="0";

    }
});


audio.addEventListener('timeupdate',()=>{
    let progressTime = parseInt((audio.currentTime/audio.duration)*100);
    lengthOfSong.value = progressTime;
    //  console.log(lengthOfSong.value);
    //  let time = String(new Date());
    // //  console.log(audio.tim)
    //  let xtime  = time.slice(19,25); 
    //   console.log(time.slice(0,19));
       //console.log(xtime);
// console.log(typeof time);
}); 
// seekbar change

// let str = "dhruv Gupta"
// x = str.slice(0,3);
// console.log(x);


seekBar.addEventListener('change',()=>{
   audio.currentTime = lengthOfSong.value *audio.duration / 100;
//    let time = String(new Date());
//    let xtime  = time.slice(19,25); 
//   //   console.log(time.slice(0,19));
//     console.log(time);
//      console.log(xtime);
    
    //   let seekBarTime =  parseInt((progressTime*audio.currentTime)/100);

    // console.log(lengthOfSong.value);
})