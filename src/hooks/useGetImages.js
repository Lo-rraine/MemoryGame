import { useEffect, useState } from "react";

const pexcels_url = 'https://api.pexels.com/v1/search'

const getRandomPageNumber = () => Math.round(Math.random() * (10-1) + 1);
const useGetImages = () => {
    const[images, setImages] = useState([]);//store pictures from data.photos so they can be used
    
    const buildUrl = () => {
        let url = new URL(pexcels_url)

        url.search = new URLSearchParams({
            query: 'nature',
            orientation: 'square',
            size: 'small',
            per_page: 4,
            page: getRandomPageNumber(),
        });

        return url
    };

    const fetchPictures = () => {
        fetch(buildUrl(), {//fetch our data and will show in the network-preview tab
            headers: {
                Authorization: process.env.REACT_APP_AUTH_KEY
            },
        }).then(data => data.json())//render the data into json
        .then(data => setImages(data.photos));//store the data.json into the images declared by the function
    }
    //call the fetch pictures so that it is only rendered once instead of twice
    useEffect(() => {
        fetchPictures();
    }, []);

    return images;

};

export default useGetImages;
