import React, { Component } from 'react';
import ListContacts from './ListContacts';
import CreateContact from './CreateContact';
import * as ContactsAPI from './utils/ContactsAPI';
 
class App extends Component {
  /* Definido o estado inicial do component APP com
  o array de objetos contacts */
  state = {
    contacts: [],
    screen: 'list', // list, create
  }
  // Evento do ciclo de vida ou gancho que é disparado
  //sempre que os nós DOM estão prontos em uma página
  componentDidMount() {
    ContactsAPI.getAll().then((contacts) => {
      this.setState({ contacts })
    })
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
    // Agora além de apagar os dados local estamos apagando do DB
    ContactsAPI.remove(contact)
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
        {this.state.screen === 'list' && (
          <ListContacts 
            onDeleteContact={this.removeContact} 
            contacts={this.state.contacts}
          />
        )}
        {this.state.screen === 'create' && (
          <CreateContact/>
        )}
      </div>
    )
  }
}

export default App;
