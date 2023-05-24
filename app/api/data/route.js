"use client"
import axios from 'axios';

// const API_KEY = process.env.UNSPLASH_KEY;

const api = axios.create({
  baseURL: 'https://api.unsplash.com',
});

export const fetchPhotos = async () => {
    try {
      const response = await api.get(`/photos/random?client_id=v-Lh3JXBoz01lm9Zq-N8kIvGe1Mslr7Y7FpLbZoFUIc`);
      console.log(response.data, "HEREEEEEE");
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
  
// export const GET = async (request) => {
//     try{
//     await fetchPhotos();
    
//     return new Response(JSON.stringify(images), {
//     status: 200 })
//     } catch (error) {
//     return new Response(
//         "Failed to fetch photos", {status: 500})
//     }
// }