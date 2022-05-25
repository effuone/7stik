import axios from "axios"
const jsonplaceholder = 'https://jsonplaceholder.typicode.com/posts/'
const fakestoreapi = 'https://fakestoreapi.com/products/'
export default class PostService
{
    static async getAll(limit = 10, page = 1)
    {
        try {
            const response = await axios.get(jsonplaceholder, {
                params: {
                    _limit: limit,
                    _page: page
                }
            })
            return response
        }catch(e) {
            console.log(e)
        }
    }
    static async getById(id)
    {
        try {
            const response = await axios.get(jsonplaceholder + id)
            return response
        }catch(e) {
            console.log(e)
        }
    }
    static async getCommentsByPostId(id)
    {
        try {
            const response = await axios.get(jsonplaceholder + id + '/comments/')
            return response
        }catch(e) {
            console.log(e)
        }
    }
}