import PropTypes from 'prop-types';

const Boton = props => {
    return (
        <button onClick={props.handleClick }>
            {props.texto}
        </button>
    );
};

Boton.propTyupes = {
    handleClick: PropTypes.func.isRequired,
    texto: PropTypes.number.isRequired
}

export default Boton;