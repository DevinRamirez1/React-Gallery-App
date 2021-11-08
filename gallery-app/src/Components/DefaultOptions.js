import axios from "axios";
import apiKey from "./Config";

let rivers = {}
let mountains = {}
let dogs = {}

const DefaultOptions = (query) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
        if(query === 'rivers'){
            rivers = response.data.photos.photo
        } 
        if (query === 'mountains'){
            mountains = response.data.photos.photo
        }
        if (query === 'dogs'){
            dogs = response.data.photos.photo
        }
    })
}

DefaultOptions('rivers');
DefaultOptions('mountains');
DefaultOptions('dogs');

export {rivers, mountains, dogs};