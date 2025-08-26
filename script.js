document.addEventListener("DOMContentLoaded", function () {
    const audioPlayer = document.getElementById("audioPlayer");
    const playlist = document.getElementById("playlist");
    const playButton = document.getElementById("playButton");
    const pauseButton = document.getElementById("pauseButton");
    const shuffleButton = document.getElementById("shuffleButton");
    const repeatButton = document.getElementById("repeatButton");
    const songImage = document.getElementById("songImage");
    const songTitle = document.getElementById("songTitle");

    const songs = [
        {
            title: "Brodha V x Jordindian - Vainko",
            src: "../Assests/Brodha V x Jordindian - Vainko [Music Video].mp3",
            image: "../Assests/Vainko.webp"
        },
        {
            title: "Jawan Prevue Theme",
            src: "../Assests/Jawan Prevue Theme.mp3",
            image: "../Assests/jawan.jpg"
        },
        {
            title: "Gujju Pataka - SatyaPrem Ki Katha  Kartik, Kiara",
            src: "../Assests/Gujju Pataka - SatyaPrem Ki Katha  Kartik, Kiara.mp3",
            image: "../Assests/SPKK 1.jpg"
        },
        {
        title: "Pasoori Nu (Full) SatyaPrem Ki Katha  Kartik,Kiara",
            src: "../Assests/Pasoori Nu (Full) SatyaPrem Ki Katha  Kartik,Kiara Arijit Rochak Ali Tulsi Gurpreet  Sajid,Sameer.mp3",
            image: "../Assests/SPKK 1.jpg"
        },
        {
            title: "Taal Se Taal Mila - Western",
                src: "../Assests/Taal Se Taal Mila - Western  Taal  Aishwarya Rai  Anil Kapoor  Sukhwinder Singh  AR Rahman.mp3",
                image: "../Assests/Jailer.jpg"
         },
        {
                title: "With You - AP Dhillon ",
                    src: "../Assests/With You - AP Dhillon (Official Music Video).mp3",
                    image: "../Assests/With You.webp"
        },
        {
                    title: "Jawan - Chaleya (Hindi) Shah Rukh Khan, Nayanthara, Atlee, Anirudh " ,
                        src: "../Assests/Jawan_ Chaleya (Hindi)  Shah Rukh Khan  Nayanthara  Atlee  Anirudh  Arijit S, Shilpa R  Kumaar.mp3",
                        image: "../Assests/Chaleya.webp"
        },
        {
            title: "Jawan - Not Ramaiya Vastavaiya Shah Rukh Khan, Atlee, Anirudh " ,
                src: "../Assests/Jawan_ Not Ramaiya Vastavaiya  Shah Rukh Khan  Atlee  Anirudh  Nayanthara  Vishal D  Shilpa R.mp3",
                image: "../Assests/Ramaiya Vastavaiya.webp"
},
{
    title: "Hukum - Thalaivar Alappara (From Jailer)" ,
        src: "../Assests/Hukum - Thalaivar Alappara (From _Jailer_).mp3",
        image: "../Assests/Jailer.jpg"
},
{
    title: "Master - Vaathi Coming" ,
        src: "../Assests/Master - Vaathi Coming Video  Thalapathy Vijay  Anirudh Ravichander  Lokesh Kanagaraj.mp3",
        image: "../Assests/Vaathi.webp"
},
        


        // Add more songs with images as needed
    ];

    let currentSongIndex = 0;
    let isPlaying = false;
    let isShuffled = false;
    let isRepeated = false;

    // Function to play the selected song
    function playSong() {
        audioPlayer.src = songs[currentSongIndex].src;
        audioPlayer.play();
        isPlaying = true;
        playButton.disabled = true;
        pauseButton.disabled = false;
        updateSongInfo();
    }

    // Function to pause the currently playing song
    function pauseSong() {
        audioPlayer.pause();
        isPlaying = false;
        playButton.disabled = false;
        pauseButton.disabled = true;
    }

    // Function to shuffle the playlist
    function shufflePlaylist() {
        if (!isShuffled) {
            isShuffled = true;
            songs.sort(() => Math.random() - 0.5);
            shuffleButton.style.backgroundColor = "#ff9900";
        } else {
            isShuffled = false;
            songs.sort((a, b) => a.title.localeCompare(b.title));
            shuffleButton.style.backgroundColor = "#333";
        }
        populatePlaylist();
    }

    // Function to toggle repeat mode
    function toggleRepeat() {
        isRepeated = !isRepeated;
        if (isRepeated) {
            repeatButton.style.backgroundColor = "#ff9900";
        } else {
            repeatButton.style.backgroundColor = "#333";
        }
    }


    function updateSongInfo() {
        const currentSong = songs[currentSongIndex];
        songImage.src = currentSong.image;
        songImage.classList.add("large-image"); // Always add the "large-image" class
        songTitle.textContent = currentSong.title;
        logoImage.style.display = "none"; // Hide the logo when a song is playing
    }

    // Function to determine whether to use large image
    function isLargeImage(index) {
        return index === 0; // Use large image for the first song
    }

    

    // Function to populate the playlist
    function populatePlaylist() {
        playlist.innerHTML = '';
        songs.forEach((song, index) => {
            const listItem = document.createElement("li");
            const playlistImage = document.createElement("img");
            playlistImage.src = song.image;
            listItem.appendChild(playlistImage);
            listItem.innerHTML += song.title;
            listItem.addEventListener("click", () => {
                currentSongIndex = index;
                playSong();
            });
            playlist.appendChild(listItem);
        });
    }

    // Event listeners for play, pause, shuffle, and repeat buttons
    playButton.addEventListener("click", playSong);
    pauseButton.addEventListener("click", pauseSong);
    shuffleButton.addEventListener("click", shufflePlaylist);
    repeatButton.addEventListener("click", toggleRepeat);

    // Initial state
    pauseButton.disabled = true;
    populatePlaylist();
});

