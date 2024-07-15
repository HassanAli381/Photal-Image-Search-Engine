function Logo(props) {
    return (
        <div className={props.big ? "container d-flex justify-content-center logo-main" : "container d-flex justify-content-center"}>
            <h1>
                <strong>
                    <span className={props.big ? "logo-title" : ""}>
                        <span className="g-blue">P</span>
                        <span className="o-red">h</span>
                        <span className="o-yellow">o</span>
                        <span className="g-blue">t</span>
                        <span className="l-green">a</span>
                        <span className="o-red e-red">l</span>
                    </span>
                </strong>
            </h1>
        </div>
    );
}

export default Logo;