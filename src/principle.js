import PropTypes from 'prop-types' ;

const PrinciplePage = ({nameDev,programmingLang}) => {
    return (
        <>  
            <div className='titlePage'>
                <h1> {nameDev} </h1>
            </div>
            <div className='parrfPage'>
                <p> Desarrollador web en {programmingLang} </p>
            </div>
            <div className="container">
                <div className="card">
                    <div className="content">
                        <h2>01</h2>
                        <h3>Perfil</h3>
                    </div>
                </div>
                <div className="card">
                    <div className="content">
                        <h2>02</h2>
                        <h3>GitHub</h3>
                    </div>
                </div>
                <div className="card">
                    <div className="content">
                        <h2>03</h2>
                        <h3>Projects</h3>
                    </div>
                </div>
            </div>
        </>
    );
}

PrinciplePage.propTypes = {
    nameDev: PropTypes.string,
    programmingLang: PropTypes.string
}


export default PrinciplePage;