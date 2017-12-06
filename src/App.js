import React, { Component } from 'react';
import ListContacts from './ListContacts';
 
class App extends Component {
  state = {
    contacts: [
      {
        "id": "ryan",
        "name": "Ryan Florence",
        "email": "ryan@reacttraining.com",
        "avatarURL": "http://localhost:5001/ryan.jpg"
      },
      {
        "id": "michael",
        "name": "Michael Jackson",
        "email": "michael@reacttraining.com",
        "avatarURL": "http://localhost:5001/michael.jpg"
      },
      {
        "id": "tyler",
        "name": "Tyler McGinnis",
        "email": "tyler@reacttraining.com",
        "avatarURL": "http://localhost:5001/tyler.jpg"
      }
    ]
  }
  render() {
    return (
      <div>
        {/* Adicionando um atributo ao component ListContacts
        e setando seu valor com um array de objetos contacts
        OBS: Podemos pensar em passar os props para componentes,
        assim como passamos argumentos para funções. Assim como
        podemos acessar os argumentos passados ​​para uma função
        em JavaScript, podemos também acessar os props de um
        componente com this.props (ou props em componentes
        funcionais sem estado).  */}
        <ListContacts contacts={this.state.contacts}/>
      </div>
    )
  }
}

export default App;
