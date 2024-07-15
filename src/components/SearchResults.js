import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function SearchResults() {
    // console.log('props', props);
    const [results, setResults] = useState([]);
    const [page, setPage] = useState(1);
    const [showNoResults, setShowNoResults] = useState(false);

    const [searchParams] = useSearchParams();
    // console.log('searchParams => ', searchParams);
    const query = searchParams.get('query');
    // console.log('query => ', query);

    const API_URL = `https://api.unsplash.com/search/photos?page=${page}&query=${query}&client_id=${process.env.REACT_APP_CLIENT_ID}&per_page=12`;

    // fetch inital results on component mount
    useEffect(() => {
        // console.log(page);
        axios.get(API_URL)
            .then((response) => {
                if (response.data.results.length > 0) {
                    setResults(response.data.results);
                    setPage(2);
                }
                else {
                    setTimeout(() => {
                        setShowNoResults(true);
                    }, 2000);
                }
            });

    }, []);

    const showMore = () => {
        // console.log(page);
        setPage(page + 1);
        axios.get(API_URL)
            .then((response) => {
                setResults((prevResults) => [...prevResults, ...response.data.results])
            });
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    {
                        results.length > 0 ?
                            results.map((result, index) => (
                                <div className="col-md-4 mb-4" key={index}>
                                    <a href={result.links.html} target="_blank" rel="noreferrer" >
                                        <img
                                            src={result.urls.regular}
                                            className="photo-result shadow-1-strong rounded mb-4 p-3"
                                            alt={result.title}
                                        />
                                    </a>
                                </div>
                            )) :
                            showNoResults && <h2 className="text-center">No Results Found, please try again with another word</h2>
                    }
                </div>
            </div>

            {
                results.length > 0 ?
                    <div className="text-center mb-4">
                        <button type="button" className="btn btn-info" onClick={showMore}>Show More</button>
                    </div> :
                    <span></span>
            }

        </>
    );

}

export default SearchResults;