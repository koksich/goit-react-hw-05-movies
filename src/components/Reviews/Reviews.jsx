import { fetchMovieReviews } from "API";
import HandleError from "components/HandleError/HandleError";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
           setError(false);

        const fetchReviews = async () => {
           try {
               const response = await fetchMovieReviews(movieId);
               if (response.length === 0) setError(true);
               setReviews(response);
        } catch (error) {
               setError(true);
               console.error(error.message);
        }
       }
       
        fetchReviews();
    }, [movieId])

    return (<div>
        {reviews.length > 0 && (<ul>
            {reviews.map(({ id, author, content }) => {
                return (<li key={id}>
                    <h4>Author: {author}</h4>
                    <p>{ content}</p>
            </li>)})}
        </ul>)}
        {error && <HandleError title="Sorry, there are no reviews for this movie"/>}
    </div>)
}

export default Reviews;