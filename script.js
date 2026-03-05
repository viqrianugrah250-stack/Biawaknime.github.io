const animeContainer=document.getElementById("animeList")
const trendingContainer=document.getElementById("trendingList")

let animeDatabase=[]

for(let i=1;i<=1000;i++){

animeDatabase.push({

title:"Anime "+i,

img:"https://picsum.photos/300/400?random="+i,

rating:(Math.random()*5).toFixed(1)

})

}

function createCard(anime){

return `

<a href="episode.html" class="card">

<img src="${anime.img}">

<h3>${anime.title}</h3>

<div class="rating">⭐ ${anime.rating}</div>

</a>

`

}

function showAnime(){

if(!animeContainer) return

animeContainer.innerHTML=""

animeDatabase.slice(0,60).forEach(a=>{

animeContainer.innerHTML+=createCard(a)

})

}

function showTrending(){

if(!trendingContainer) return

trendingContainer.innerHTML=""

animeDatabase.slice(0,10).forEach(a=>{

trendingContainer.innerHTML+=createCard(a)

})

}

showAnime()
showTrending()

function searchAnime(){

let keyword=document

.getElementById("searchInput")

.value

.toLowerCase()

let result=animeDatabase.filter(a=>

a.title.toLowerCase().includes(keyword)

)

animeContainer.innerHTML=""

result.forEach(a=>{

animeContainer.innerHTML+=createCard(a)

})

}