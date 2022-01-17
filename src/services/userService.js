import requester from '../api/requester';
import apiRoutes from '../api/apiRouties.js';

const addUserRegisterDetails = (username,email,password) => {
    return requester.post(apiRoutes.userRegisterURL(), {username, email, password});
};

const addUserLoginDetails = (email,password) => {
    return requester.post(apiRoutes.userLoginURL(), { email ,password });
};
const getUserBooksList = (userId)=>{
    return requester.get(apiRoutes.userBooksListURL(userId));
}
const getUserMoviesList = (userId)=>{
    return requester.get(apiRoutes.userMoviesListURL(userId));
}
const postUserBookRating = (userId,bookId,rating)=>{
    return requester.post(apiRoutes.userBookRatingURL(),{userId,bookId,rating});
}
const addBookToUserLibrary = (userId,bookId) =>{
    return requester.post(apiRoutes.userAddBookToLibraryURL(userId,bookId));
}
const removeBookToUserLibrary = (userId,bookId) =>{
    return requester.remove(apiRoutes.userRemoveBookFromUserLibraryURL(userId,bookId));
}
const postUserMovieRating =(userId,movieId,rating) =>{
    return requester.post(apiRoutes.userMovieRatingURL(),{userId,movieId,rating});
} 
const addMovieToUserLibrary =(userId,movieId)=>{
    return requester.post(apiRoutes.userAddMovieToLibraryURL(userId,movieId));
}
const removeMovieFromUserLibrary = (userId,movieId) =>{
    return requester.remove(apiRoutes.userRemoveMovieFromLibraryURL(userId,movieId));
}
const userService = {
    addUserRegisterDetails,
    addUserLoginDetails,
    getUserBooksList,
    getUserMoviesList,
    postUserBookRating,
    addBookToUserLibrary,
    removeBookToUserLibrary,
    postUserMovieRating,
    addMovieToUserLibrary,
    removeMovieFromUserLibrary,
};
export default userService;