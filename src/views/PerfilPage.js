import PropTypes from 'prop-types';

const PerfilPage = ( {reactLogo,htmlLogo,cssLogo,jsLogo,company} ) => {
    return (
        <>
        <div className='container perfil'>
            <div className='row justify-content-center'>
                <div className='col-12 col-lg-5'>
                    <div className='cube'>
                        <div className='top'></div>
                        <div><span className='sideOne'> <img src={htmlLogo} /></span></div>
                        <div><span className='sideTwo'> <img src={cssLogo} /></span></div>
                        <div><span className='sideThre'> <img src={jsLogo} /></span></div>
                        <div><span className='sideFour'> <img src={reactLogo} /></span></div>
                    </div>
                </div>
                <div className='col-12 col-lg-6 align-self-center textPerfil'>
                    <h2 className='mb-4'>{company}</h2>
                    <p>
                        Ubicados en la ciudad de Medellín CO. 
                        Desarrollamos aplicaciones web a la medida con 
                        amplia seguridad y respaldo. <br/>
                        Trabajamos con los estándares y las tecnologías más
                        populares en el mundo del desarrollo web tales como: <br/>
                        HTML, CSS, Bootstrap, Tailwind CSS, Bulma CSS, JavaScript / EcmaScript,
                        TypeScript, Node JS, React JS, Vue JS, Angular, PHP, Laravel, 
                        Yii Framework, Codeigniter, Java, ASP .NET C# <br/>Bases de datos SQL & NO-SQL
                    </p>
                    <a href='#' type='button' className='btn btn-primary mt-3'>Proyectos</a>
                </div>
            </div>
        </div>
        </>
    );
}

PerfilPage.propTypes = {
    reactLogo: PropTypes.string.isRequired,
    htmlLogo: PropTypes.string.isRequired,
    cssLogo: PropTypes.string.isRequired,
    jsLogo: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired
}

export default PerfilPage;