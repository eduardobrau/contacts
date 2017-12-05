import React, { Component } from 'react';

class ContactList extends React.Component {
  
  render() {
    /* 2º Ao invés de atribuir uma lista de contatos
    a people foi adicionado a propriedade this.props 
    na estrutura de cada Component e assim podemos atribuir
    seus valores em tempo de execução. */
    const people = this.props.contacts;

    return <ol>
      {people.map(person => (
        <li key={person.name}>{person.name}</li>
      ))}
    </ol>
  }

}

class App extends Component {
  render() {
    return (
      <div className="App">
      {/* 1º Adicionado a propriedade props no component
      ContactList para configurar cada elemento da lista
      dinamicamente */}
        <ContactList contacts={[
          { name: 'Michael' },
          { name: 'Ryan' },
          { name: 'Tyler' }
        ]}/>
        <ContactList contacts={[
          { name: 'Amanda' },
          { name: 'Maria' },
          { name: 'Larissa' }
        ]}/>
      </div>
    );
  }
}

export default App;
