import Axios from 'axios';

const api = Axios.create({  
    baseUrl : "https://api.tvmaze.com/search/shows?q=barbie"


});

export default api;