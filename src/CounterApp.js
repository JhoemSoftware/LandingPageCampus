import ProptTypes from 'prop-types';

const CounterApp = ({value}) => {
    return (
        <>
            <h1> Counter App </h1>
            <p> {value} </p>
        </>
    );
}

CounterApp.propTypes = {
    value: ProptTypes.number.isRequired
}

export default CounterApp;