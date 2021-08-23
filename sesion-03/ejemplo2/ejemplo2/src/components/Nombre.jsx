import React from 'react';
import PropTypes from 'prop-types';

class Nombre extends React.Component {
   
   componentDidMount() {
      alert('Te damos la bienvenida ' + this.props.nombre);
   }

   render() {
    return (
       <div>
          {this.props.nombre}
          <button>
             X
          </button>
       </div>
    );
 }
};

Nombre.propTypes = {
   nombre: PropTypes.string.isRequired
}

export default Nombre;