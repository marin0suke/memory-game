import { useState, useEffect } from "react";
import { fetchImages } from "../utils/api";

const useImages = () => {
    const [images, setImages] = useState([]); // stores API response.
    const [loading, setLoading] = useState(true); // tracks loading state. why starts as true?
    const [error, setError] = useState(null); // tracks API errors.

    useEffect(() => {
        const getImages = async () => {
            try {
                const data = await fetchImages();
                console.log("api response: ", data);

                if (data.meals) {
                    const formatted = data.meals.map(meal => ({
                        id: meal.idMeal,
                        imageUrl: meal.strMealThumb,
                        description: meal.strMeal,
                    }));
                    console.log("Formatted images:", formatted);
                    setImages(formatted); // updates images state.
                } else {
                    throw new Error("Invalid API response format");
                }
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

