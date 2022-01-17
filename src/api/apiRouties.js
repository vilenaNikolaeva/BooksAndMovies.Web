const userRoutes = {
  userRegisterURL: () => `Authentication/signup`,
  userLoginURL: () => `Authentication/login`,

  //  BOOKS
  userBooksListURL: (userId) => `User/Books?id=${userId}`,
  userMoviesListURL: (userId) => `User/Movies?id=${userId}`,
  userBookRatingURL: () => `User/BookRating`,
  userAddBookToLibraryURL: (userId,bookId)=>`User/Book/?userId=${userId}&id=${bookId}`,
  userRemoveBookFromUserLibraryURL: (userId,bookId)=>`User/Book/?userId=${userId}&id=${bookId}`,
  //MOVIES
  userMovieRatingURL: ()=> `User/MovieRating`,
  userAddMovieToLibraryURL: (userId,movieId) => `User/Movie/?userId=${userId}&id=${movieId}`,
  userRemoveMovieFromLibraryURL: (userId,movieId) => `User/Movie?userId=${userId}&id=${movieId}`,
};
const bookRoutes ={
    allBooks: () => `Book`,
}
const movieRoutes = {
    allMovies: ()=> `Movie`,
    updateMovieWatchedStatus : (userId,movieId,isWatched) =>`Movie/watched?userId=${userId}&movieId=${movieId}&isWatched=${isWatched}`
}
const routes = {
  ...userRoutes,
  ...bookRoutes,
  ...movieRoutes,
};

export default routes;
