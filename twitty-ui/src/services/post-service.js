import axios from 'axios'

const API_URL = 'http://localhost:8080/post'

class PostService {
    getComments(id) {
        return axios.get(API_URL + '/comments',
            {
                params:
                    {
                        id: id
                    }
            })
    }
}

export default new PostService()