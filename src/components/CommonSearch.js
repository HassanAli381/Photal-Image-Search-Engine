import axios from "axios";
import { useNavigate } from "react-router-dom";

function CommonSearch() {

    const navigate = useNavigate();

    const handleSearch = (query) => {
        navigate(`/results?query=${query}`);
    }

    const handleRandomSearch = async () => {
        const randomWordAPI = 'https://random-word-api.herokuapp.com/word';
        const word = await axios.get(randomWordAPI);
        console.log(word);
        console.log(word.data);
        handleSearch(word.data);
    }

    return (
        <div className="text-center mt-4">
            <span>Frequently searched</span>
            <div className="mt-2">
                <button type="button" className="btn btn-info m-3" onClick={() => handleSearch('Flowers')}>Flowers</button>
                <button type="button" className="btn btn-info m-3" onClick={() => handleSearch('Computers')}>Computers</button>
                <button type="button" className="btn btn-info m-3" onClick={() => handleSearch('Nature')}>Nature</button>
                <button type="button" className="btn btn-info m-3" onClick={() => handleSearch('Car')}>Car</button>
            </div>
            <div className="mt-3">
                <button type="button" className="btn btn-warning" onClick={handleRandomSearch}>Random Search</button>
            </div>
        </div>
    );
}

export default CommonSearch;
