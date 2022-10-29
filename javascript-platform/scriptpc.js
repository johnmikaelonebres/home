const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'c2c1eda3a1msh3175c78dc587758p131463jsnc3f70434aaa9',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
  }
};
fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?platform=pc', options).then((data) => {
  return data.json();
}).then((completedata) => {
  let data1 = "";
  completedata.map((values) => {
    data1 += `<div class="card">
    <img src=${values.thumbnail} alt="img" class="images">
    <h2 class="title">${values.title}</h2>
    <h4 class="genre">Genre: ${values.genre}</h4>
    <p class="short-desc">${values.short_description}</p>
    <p class="platform">${values.platform}</p>
    <a href="${values.game_url}" target="_blank">Play Now</a>
    </div>`
  });
  document.getElementById("cards").innerHTML = data1
}).catch((err) => {
  console.log(err);
})
