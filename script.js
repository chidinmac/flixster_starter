const apiKey="604f39a764a2aa705c2df92edb9e2897";
let pg_no=1;
const url ="https://api.themoviedb.org/3/movie/popular?api_key=604f39a764a2aa705c2df92edb9e2897&language=en-US&page="
const searchurl="https://api.themoviedb.org/3/search/movie?api_key={api_key}&query="

const moviegridEl=document.querySelector("#movies-grid")
const searchFormEl=document.querySelector("#search-form")
const searchmoviesEl=document.querySelector("#search-input")
const closeOverviewButton=document.querySelector("#close-popup")
const moviePosterEl=document.querySelector(".movie_poster")
const morebtns= document.querySelector("#load-more-movies-btn")
const clearbtn= document.querySelector("#clearbtn")
const prev_btn=document.querySelector("#prev-btn")


let moviesArray = []
let look=0

window.onload = function(){
    fetchmovies()
}

//Fetch data 
async function fetchmovies() {
    //api call 
    let response = await fetch(url+pg_no);
    let data = await response.json();
    
    displaymovies(data)
}
//Move inside the array and display its content
//For the last div with class "movie_poster", when we get to the poster, set a click button to pass the overview,title, and path to the displayMovieOverview function
//so they can be display
async function displaymovies(info)
{
    moviesArray.push(...info.results);
    // moviesArray += info.results;
    let moviestring = "";
    moviesArray.forEach((watch) => {
      moviestring += `
      <div class="movie-card"> 
      
          <div class="movie-title">
              <p>${watch.original_title}</p>
          </div>
          <div class="movie-votes">
              <p>${watch.vote_average} <span style="color:yellow;">&#9733</span></p>
          </div>
  
          <div class="movie_poster" onclick="displayMovieOverview('${watch.id}');"> 
              <img class="image" src="https://image.tmdb.org/t/p/w500${watch.poster_path}" alt=${watch.title}>
          </div>
      </div>
          `;

    moviegridEl.innerHTML = "";
    moviegridEl.innerHTML += moviestring;

  });
}

//Close button on popup page
  closeOverviewButton.addEventListener("click", (event) => {
    event.preventDefault()
    
    const popup = document.querySelector("#popup");
    popup.style.display = "none";
  });

  //Function is called in line 37 when we call the dispalyMovieOverview during the onclick event
  async function displayMovieOverview(id) {
    
    const foundMovie = moviesArray.find((movieItem) => {
        return movieItem.id == id;
    })

    //set the overview text
    const overviewText = document.querySelector("#overview-text");
    overviewText.innerHTML= foundMovie.overview;
  
    //Set the image
    const overviewImage = document.querySelector("#overview-image");
    overviewImage.src = `https://image.tmdb.org/t/p/w500${foundMovie.poster_path}`;
    overviewImage.alt = `${foundMovie.movieTitle}`;
  
    //show the image
    const popup = document.querySelector("#popup");
    popup.style.display = "block";
  
  }

//search button handle click event 
searchFormEl.addEventListener("submit", (event)=> {
    event.preventDefault()
    look=1
    moviesArray=[]
    getResults()
})


// make the api call when you click the search button
async function getResults() {

    // retrieve input value
    const input = searchmoviesEl.value
    console.log("input :", input)

    // api call
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${input}`)
    const results = await response.json();

    // store result into a variable
    // const moviedata = results.results
    

    displaymovies(results)
}

//More movies buttons
morebtns.addEventListener("click", (event) => {
    prev_btn.style.display="block"
    pg_no++
    if(look==1)
    {
        getResults()
    }
    else
    {
        fetchmovies()
    }
})
//Clear button
clearbtn.addEventListener("click", (event) => {
    //Visibly make the input bar empty
    searchmoviesEl.value=""
    look=0
    //Reload page when you clear it
    location.reload()
})
//Previous button
prev_btn.addEventListener("click", (event) => {
    pg_no--
    moviesArray.length-=20
    if(pg_no==1)
    {
        prev_btn.style.display="none"
    }
    if(look==1)
    {
        getResults()
    }
    else
    {
        fetchmovies()
    }
})