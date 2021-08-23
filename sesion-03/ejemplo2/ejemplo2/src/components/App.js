import React from 'react';
import Nombre from './Nombre';

class App extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         nombre: '',
         mensaje: '',
         listaNombres: ['Bedu']
      };
   };

   handleInputChange = (event) => {
      this.setState({
         nombre: event.target.value
      });
   };

   handleClick = () => {
      const nombreEnEstado = this.state.nombre;
      if (!nombreEnEstado) return;

      const listaActualizada = [
         ...this.state.listaNombres,
         nombreEnEstado
      ];

      this.setState({
         nombre: '',
         listaNombres: listaActualizada,
      });
   };

   render() {
      return (
         <div className="margen">
            <input
               value={this.state.nombre}
               onChange={this.handleInputChange}
            />
            <button onClick={this.handleClick}>
               Agregar
            </button>

            <ul>
               {this.state.listaNombres.map((nmbr, key) => (
                  <li key={key}>
                     {nmbr}
                  </li>
               ))}
            </ul>
         </div>
      );
   }
}

export default App;