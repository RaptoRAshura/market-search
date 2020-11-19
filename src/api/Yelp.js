import axios from 'axios';
export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
    Authorization: 'Bearer fSmETMp8BJosGLkKxTDPaw1Ui2XcdhkUczAGQplUoO4toMq5eNq4cDGvDdLtBtUr1wps4NNVqbqoCiQ3HCiJW2TELgzisCwcSy5bzrVIm10E_566Di50ENnh-wSVXnYx'
    }
})