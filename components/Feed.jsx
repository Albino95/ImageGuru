"use client"
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ImageCard from './ImageCard';
import { fetchPhotosRequest, fetchPhotosSuccess, fetchPhotosFailure } from '../app/actions/imageActions';
import { fetchPhotos } from '../app/api/data/route';

const ImageCardList = ({ images, handleElementClick }) => {
  return (
    <div className='mt-16 image_layout'>
      {images.map((image) => (
          <ImageCard
            image={image}
            handleElementClick={handleElementClick}
          />
      ))}
    </div>
  );
};


const Feed = () => {
  const dispatch = useDispatch();
  const { photos, loading, error } = useSelector((state) => state);
  const [images, setImages] = useState([]);
  const [searchText, setSearchText] = useState("")

  
  const handleSearchChange = (e) => {
    
  }
  
  useEffect(() => {
    dispatch(fetchPhotosRequest());
    fetchPhotos()
    .then((response) => {
      setImages(response.data)
      console.log(response)
    })
    .catch((error) => {
      dispatch(fetchPhotosFailure(error));
    });
  }, []);

  if (images) {
    return (
      <div>
        {images.map((img) => (
          <div key={img.id}>{img}</div>
        ))}
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <section className='feed'>
      <form className='relative w-full flex-center'>
        <input
        type='text'
        placeholder='Search'
        value={searchText}
        onChange={handleSearchChange}
        className='search_input peer'
        required
        />
      </form>
      <ImageCardList
        images={[images]}
        handleElementClick={() => {
          
        }}
        />
    </section>
  );
}

export default Feed


// useEffect(() => {
//   const fetchImages = async () => {
//     try {
//       const response = await fetch(
//         `https://api.unsplash.com/photos/random?client_id=v-Lh3JXBoz01lm9Zq-N8kIvGe1Mslr7Y7FpLbZoFUIc`
//       );
//       const data = await response.json();

//       setImages(data);
//       console.log(data);
//     } catch (error) {
//       console.error('Error fetching images:', error);
//     }
//   };

//   fetchImages();
// }, []);


// if (loading) {
//   return <div>Loading...</div>;
// }