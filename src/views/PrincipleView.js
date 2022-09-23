import PropTypes from 'prop-types';

const PrincipleView = ( {nameDev,programmingLang,company,imgJhoem} ) => {
    return (
        <>
            <div className='container'>
                <div className='logoImg'>
                    <img src={imgJhoem} />
                </div>
                <div className='titlePage'>
                    <h1> {company} </h1>
                    <hr/>
                    <h4> {nameDev} </h4>
                </div>
                <div className='parrfPage'>
                    <p> Desarrollador web en {programmingLang} </p>
                </div>
            </div>
            <div className='container mt-4'>
                <div className='row justify-content-center'>
                    <div className='col-10 col-sm-3 mb-3'>
                        <a href='#perfil' type='button' className='btn btn-primary'>perfil</a>
                    </div>
                    <div className='col-10 col-sm-3'>
                        <a href='https://github.com/JhoemSoftware/'  target='_blank' type='button' className='btn btn-primary'>git hub</a>
                    </div>
                </div>
            </div>
        </>
    );
}

PrincipleView.propTypes = {
    nameDev: PropTypes.string.isRequired,
    programmingLang: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    imgJhoem: PropTypes.string.isRequired
}


export default PrincipleView;