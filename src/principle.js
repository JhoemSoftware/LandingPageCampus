import PropTypes from 'prop-types';

const PrinciplePage = ({nameDev,programmingLang,imgReact,imgJhoem}) => {
    return (
        <>
        <div className='container'>
            <div className='logoImg'>
                <img src={imgJhoem} />
            </div>
            <div className='titlePage'>
                <h1> {nameDev} </h1>
            </div>
            <div className='parrfPage'>
                <p> Desarrollador web en {programmingLang} </p>
            </div>
        </div>
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-12 col-sm-4'>
                    <a href='#' type='button' className='btn btn-primary'>perfil</a>
                </div>
                <div className='col-12 col-sm-4'>
                    <a href='#' type='button' className='btn btn-primary'>git hub</a>
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