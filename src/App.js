import React, { Component } from 'react';
import ListContacts from './ListContacts';
 
class App extends Component {
  /* Definido o estado inicial do component APP com
  o array de objetos contacts */
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
  // função para remover um contato especifico
  removeContact = (contact) => {
    /* setState atualizara o estado atual do Component
    removendo um contact especifico ao clickar no botão 
    do component ListContacts.
    */
    this.setState((state) => ({
      /* Usamos setState com uma arow function como argumento
      porque queremos atualizar o estado com base no anterior,
      ou seja, vamos remover um contato e retornar uma nova
      lista de contato com base nos contatos já existente
      assim atualizando o estado do Component sempre que o
      botão remover for clicado.*/
      contacts: state.contacts.filter((c) => c.id !== contact.id)
    }))
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
        <ListContacts onDeleteContact={this.removeContact} contacts={this.state.contacts}/>
      </div>
    )
  }
}

export default App;
