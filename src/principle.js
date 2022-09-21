import PropTypes from 'prop-types';

const PrinciplePage = ({nameDev,programmingLang,imgReact,imgJhoem}) => {
    return (
        <>  
            <img src={imgJhoem} className='logoImg' />
            <div className='titlePage'>
                <h1> {nameDev} </h1>
            </div>
            <div className='parrfPage'>
                <p> Desarrollador web en {programmingLang} </p>
            </div>
            <div className="container">
                <div className="card">
                    <div className="content">
                    <img src={imgReact} />
                        <h3>Perfil</h3>
                    </div>
                </div>
                <div className="card">
                    <div className="content">
                        
                        <h3>GitHub</h3>
                    </div>
                </div>
            </div>
        </>
    );
}

PrinciplePage.propTypes = {
    nameDev: PropTypes.string.isRequired,
    programmingLang: PropTypes.string.isRequired,
    imgReact: PropTypes.string.isRequired,
    imgJhoem: PropTypes.string.isRequired
}


export default PrinciplePage;