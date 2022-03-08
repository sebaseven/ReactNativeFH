import axios from "axios";

const movieDB = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie",
    params: {
        api_key:"3c7d01d0e70c018513ea94bf10d26522",
        language:"es-ES"
    }
    
});

export default movieDB;