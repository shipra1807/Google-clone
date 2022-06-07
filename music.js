const music = document.querySelector("audio");
const play = document.getElementById("play");
const img = document.querySelector("img");
const artist = document.getElementById("artist");
const title= document.getElementById("title");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

const songs=[{
    name: "music-1",
    title:"PLAY DATE",
    artist:"Malanie Martinez",
},
{
    name: "music-2",
    title:"DRUNK AND HIGH",
    artist:"Astha Gill",
},
{
    name: "music-3",
    title:"AAJA MERI BIKE PE",
    artist:"Tony Kakkar",
},
{
    name: "music-4",
    title:"GULABI ANKHEIN",
    artist:"Sanam Puri",
},
{
    name: "music-5",
    title:"SAJNA VE",
    artist:"Vishal Mishra",
}


];
isplaying=false;
const playmusic=()=>{
    isplaying=true;
    music.play();
    play.classList.replace("fa-play","fa-pause");
    img.classList.add("anime");
};
const pausemusic=()=>{
    isplaying=false;
    music.pause();
    play.classList.replace("fa-pause","fa-play");
    img.classList.remove("anime");
};

play.addEventListener("click",()=>{
   isplaying ? pausemusic() : playmusic(); 
});
const loadSong=(songs)=>{
title.textContent= songs.title;
artist.textContent = songs.artist;
music.src = "music/"+songs.name+".mp3";
img.src="images/"+songs.name+".jpg";

};
function myFunction() {
    document.body.style.backgroundImage = "url('images/music-1.jpg')";

  }
// loadSongs(songs[2]);
SongIndex=0;
// loadSongs(songs[1]);

const nextSong=()=>{
    SongIndex=(SongIndex+1)%songs.length;
    loadSong(songs[SongIndex]);
    playmusic();

}
    

next.addEventListener("click",nextSong);
next.addEventListener("click",myFunction());