import { useState, useEffect } from "react";
import { fetchImages } from "../utils/api";

const useImages = () => {
    const [images, setImages] = useState([]); // stores API response.
    const [loading, setLoading] = useState(true); // tracks loading state. why starts as true?
    const [error, setError] = useState(null); // tracks API errors.

    useEffect(() => {
        const getImages = async () => {
            try {
                const requests = Array.from({ length: 16 }).map(() => fetchImages());
                const responses = await Promise.all(requests);

                const formattedImages = responses.flatMap(data => 
                    data?.meals?.map(meal => ({
                        id: meal.idMeal,
                        imageUrl: meal.strMealThumb,
                        description: meal.strMeal,
                    })) || []
                )
                setImages(formattedImages.slice(0, 16)); // updates images state.  
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false); // mark loading as complete.
            }
        };

        getImages();
    }, []); // runs once when component mounts.

    return { images, loading, error }; 
}

export default useImages;

// this custom hook will fetch images from the API
// handle loading and errors
// return the fetched data to GameLogic

