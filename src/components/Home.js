import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "./Logo";
import CommonSearch from "./CommonSearch";

function Home() {

    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const handleSearch = (e) => {
        setQuery(e.target.value);
    }

    const submitForm = (e) => {
        e.preventDefault();
        if (query.length)
            navigate(`/results?query=${query}`);
    }

    return (
        <>
            <Logo big="true" />

            <div className="search container">
                <div className="container h-100 mt-5">
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={handleSearch} />
                        <button className="btn btn-outline-success" onClick={submitForm}>Search</button>
                    </form>
                </div>

                <CommonSearch />
            </div>

        </>
    );
}

export default Home;