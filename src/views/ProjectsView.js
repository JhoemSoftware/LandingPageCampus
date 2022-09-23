import PropTypes from 'prop-types';

const PerfilView = ({imgKanban,imgBlackJack,imgClima,imgMusic,imgView,imgGit}) => {
    return (
        <>
        <div className='container'>
            <h2>Proyectos desarrollados</h2>
            <div className='row justify-content-between mt-5'>
                <div className='col-4 col-lg-3 mb-3'>
                    <div className='card mb-3'>
                        <div className='row'>
                            <div className='card-body'>
                                <img src={imgKanban} className='img-fluid rounded-start'/>
                                <h3 className='card-title'>Kanban</h3>
                                <p className='card-text'>Proyecto réplica de Trello</p>
                                <div className='container'>
                                    <div className='row justify-content-around'>
                                        <div className='col-7 col-sm-5 btn btn-primary mb-3' type='button'><a href='https://jhoemsoftware.com/Trello/' target='_blank'><img src={imgView} /></a></div>
                                        <div className='col-7 col-sm-5 btn btn-primary' type='button'><a href='https://github.com/JhoemSoftware/AppTrelloJS' target='_blank'><img src={imgGit} /></a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-4 col-lg-3 mb-3'>
                    <div className='card mb-3'>
                        <div className='row'>
                            <div className='card-body'>
                                <img src={imgBlackJack} className='img-fluid rounded-start'/>
                                <h3 className='card-title'>BlakcJack</h3>
                                <p className='card-text'>Proyecto réplica de Trello</p>
                                <div className='container'>
                                    <div className='row justify-content-around'>
                                        <div className='col-7 col-sm-5 btn btn-primary mb-3' type='button'><a href='https://jhoemsoftware.com/BlackJack/' target='_blank'><img src={imgView} /></a></div>
                                        <div className='col-7 col-sm-5 btn btn-primary' type='button'><a href='https://github.com/JhoemSoftware/BlackJack' target='_blank'><img src={imgGit} /></a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-4 col-lg-3 mb-3'>
                    <div className='card mb-3'>
                        <div className='row'>
                            <div className='card-body'>
                                <img src={imgClima} className='img-fluid rounded-start'/>
                                <h3 className='card-title'>Clima</h3>
                                <p className='card-text'>Proyecto réplica de Trello</p>
                                <div className='container'>
                                    <div className='row justify-content-around'>
                                        <div className='col-7 col-sm-5 btn btn-primary mb-3' type='button'><a href='https://jhoemsoftware.com/ApiFetch/' target='_blank'><img src={imgView} /></a></div>
                                        <div className='col-7 col-sm-5 btn btn-primary' type='button'><a href='https://github.com/fimlm-campus/EjercicioClase13Junio_Api_Fecth_JS' target='_blank'><img src={imgGit} /></a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-4 col-lg-3 mb-3'>
                    <div className='card mb-3'>
                        <div className='row'>
                            <div className='card-body'>
                                <img src={imgMusic} className='img-fluid rounded-start'/>
                                <h3 className='card-title'>Músicos</h3>
                                <p className='card-text'>Proyecto réplica de Trello</p>
                                <div className='container'>
                                    <div className='row justify-content-around'>
                                        <div className='col-7 col-sm-5 btn btn-primary mb-3' type='button'><a href='https://jhoemsoftware.com/Mentoria/' target='_blank'><img src={imgView} /></a></div>
                                        <div className='col-7 col-sm-5 btn btn-primary' type='button'><a href='https://github.com/fimlm-campus/MentoriaJS' target='_blank'><img src={imgGit} /></a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );   
}

PerfilView.propTypes = {
    imgKanban: PropTypes.string.isRequired,
    imgBlackJack: PropTypes.string.isRequired,
    imgClima: PropTypes.string.isRequired,
    imgMusic: PropTypes.string.isRequired
}

export default PerfilView;