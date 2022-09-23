import PropTypes from 'prop-types';

const EducationPage = ( {imgCampus,imgReact,imgTwtt,imgWp,imgGitH} ) => {
    return (
        <>
            <div className='container mt-5'>
                <h2>Formación Académica</h2>
                <hr/>
                <div className='row justify-content-center mt-5'>
                    <div className='col-12 col-lg-3 align-self-center'>
                        <img src={imgReact} id='logoReact' />
                    </div>
                    <div className='col-12 col-lg-8 align-self-center'>
                        <h4>Diplomado Front-end web con React JS 2022</h4>
                        <img src={imgCampus} id='logoCampus' />
                    </div>
                    <div className='col-12 mt-5'>
                        <p className='mt-5'>Contacto</p>
                        <div className='row justify-content-center'>
                            <div className='col-1 imgSocial'>
                                <a href='https://github.com/JhoemSoftware/' target='_blank'><img src={imgGitH} /></a>
                            </div>
                            <div className='col-1 imgSocial'>
                                <a href='https://twitter.com/JhoemLive' target='_blank'><img src={imgTwtt} /></a>
                            </div>
                            <div className='col-1 imgSocial'>
                                <a href='https://api.whatsapp.com/send?phone=573197395274&text=¡Hola!%20&#128075;%20Quiero%20conocer%20más%20información%20de%20tus%20servicios%20como%20programador.%20&#128187;' target='_blank'><img src={imgWp} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EducationPage;