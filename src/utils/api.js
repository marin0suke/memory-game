export const fetchImages = async () => {
    try {
        const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php"); //
        if (!response.ok) throw new Error("Failed to fetch images");

        const data = await response.json();
        return data; // return the pasred JSON response.
    } catch (error) {
        console.error("API error: ", error);
        throw error; // re throw so that useImages can handle it.
    }
};

