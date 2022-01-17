import requester from '../api/requester';
import apiRoutes from '../api/apiRouties.js';

const getAllMoviessURL= () =>{
    return requester.get(apiRoutes.allMovies());
}
const updateUserMovieWatchedStatus = (userId,movieId,isWatched) =>{
    return requester.put(apiRoutes.updateMovieWatchedStatus(userId,movieId,isWatched));
}
const movieService = {
    getAllMoviessURL,
    updateUserMovieWatchedStatus,
};
export default movieService;