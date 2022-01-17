import requester from '../api/requester';
import apiRoutes from '../api/apiRouties.js';

const getAllBooksURL= () =>{
    return requester.get(apiRoutes.allBooks());
}
const bookService = {
    getAllBooksURL,
};
export default bookService;