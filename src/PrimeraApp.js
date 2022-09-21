import PropTypes from 'prop-types';

const PrimeraApp = ( {namePage, salutName} ) => {
    return (
        <>
            <h1>{namePage}</h1>
            <p>{salutName}</p>
        </>
    );
}

PrimeraApp.propTypes = {
    namePage: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    salutName : 'Desarrollador web con React JS'
}

export default PrimeraApp;