/****************************************************
1. Create an array called movieQueue with at least two Movie Names as strings
****************************************************/
var movieQueue = ["The Godfather", "Scarface"];


/****************************************************
2. Create a function called addMovieToEnd
- Your function should take one parameter, the name of the movie to add
- It should add the new movie name to the end of your movieQueue array
- Finally it should return the movie name it just added
****************************************************/
function addMovieToEnd (anyMovie){
  movieQueue.push(anyMovie);
  return anyMovie;
}


/****************************************************
3. Create a function called addMovieToFront
- Your function should take one parameter, the name of the movie to add
- It should add the new movie name to the front of your movieQueue array
- Finally it should return the movie name it just added
****************************************************/
function addMovieToFront (anyMovie){
  movieQueue.unshift(anyMovie);
  return anyMovie;
}


/****************************************************
4. Create a function called changeMovie
- Your function should take two parameters. The first parameter should be an index, 
  and the second should be the name of the movie to add
- It should add the new movie name to the movieQueue array at the given index.
- Finally it should return the movie name it just added
****************************************************/
function changeMovie (location, newmovie){
  movieQueue [location] = newmovie;
  return newmovie;
}


/****************************************************
5. Create a function called getMovie
- Your function should take one parameter, the index of the movie you want to get
- If the index is valid (meaning that it's less than the number of items in the array), 
  it should return the name of the movie at that index in the array movieQueue
- If the index is not valid (meaning that it's larger than the number of items in the array),
  it should return the string "not a valid index"
****************************************************/
function getMovie (index){
  if (index < movieQueue.length){
    return movieQueue [index];
  }
  else{
    return ("not a valid index");
  }
}

