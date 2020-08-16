
var apiUrl = 'https://api.lyrics.ovh';
document.getElementById("inputForm").addEventListener('submit', start);

function start(e) {
    var searchInput = document.getElementById("text-search").value;
    console.log(searchInput)
    var fetchUrl = `https://api.lyrics.ovh/suggest/${searchInput}`;

    fetch(fetchUrl)
        .then(response => response.json())
        .then(data => displaySuggestion(data))
        .catch(err => console.log(err))
    e.preventDefault();
}



function displaySuggestion(allData) {
    let data = allData.data;
    console.log(data);
    let list = [];
    for (let i = 0; i < 10; i++) {
        const item = {
            title: data[i].title,
            albumTitle: data[i].album.title,
            albumImage: data[i].album.cover_small,
            artistName: data[i].artist.name,
            artistImage: data[i].artist.picture_small
        }

        list.push(item);
    }
    console.log(list);
    let display = document.getElementById("display-result");
    for (let i = 0; i < list.length; i++) {
        const { title, albumTitle, albumImage, artistName, artistImage } = list[i];
        display.innerHTML +=
            `<div class="col-md-9 ">
                <h3 class="lyrics-name"><span id="title">${title}</span></h3>
                <p class="author lead">Artist: <span id="artistName">${artistName}</span></p>
                <p class="author lead">Album: <span id="albumTitle">${albumTitle}</span></p>
            </div>
            <div class ="col-md-3 text-md-right text-center">
                <a href="#" onclick="getLyrics(${title},${artistName})" class="btn btn-success">Get Lyrics</a>
            </div>`
    }
}

const getLyrics = (a, b) => {
    console.log(a, b);
}