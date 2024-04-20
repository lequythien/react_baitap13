import axios from 'axios';

const apiURL = process.env.REACT_APP_API_URL;
const clientID = process.env.REACT_APP_CLIENT_ID;

export const searchPhotos = async (term) => {
    const photos = await axios.get(`${apiURL}/photos`, {
        headers: {
            Authorization: `Client-ID ${clientID}`,
        },
        params: {
            query: term,
        },
    });
    return photos.data;
};

export const getAllPhotos = async () => {
    const photos = await axios.get(`${apiURL}/photos`, {
        headers: {
            Authorization: `Client-ID ${clientID}`,
        },
    });
    return photos.data;
};

export const getPhotos = async (id) => {
    const photo = await axios.get(`https://api.unsplash.com/photos/${id}`, {
        headers: {
            Authorization: "Client-ID CriFIs5vZPrLTHr5MSj2zVo-eXrjTh_eQMMjZMMWkGI",
        },
    });
    console.log(photo);
};
