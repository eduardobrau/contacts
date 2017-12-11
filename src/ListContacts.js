import React, { Component } from 'react';
import PropTypes from 'prop-types';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';

class ListContacts extends Component{
  // Se um componente estiver usando apenas o método render para
  // exibir conteúdo, então ele pode ser convertido em um 
  // componente funcional sem estado. 
  //console.log('Props', this.props);
  static propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired
  }
  state={
    query: ''
  }
  updateQuery = (query) => {
    this.setState({ query: query.trim() })
  }
  render(){
    // Filtra os contatos a serem exibidos
    let showingContacts
    // Caso o usuário digite algo será alterado o state do
    // componente e está condição será executada
    if (this.state.query) {
      // Cria uma regex case insensitive 'i' baseado no campo imput
      // de busca, eliminando caracteres especiais
      const match = new RegExp(escapeRegExp(this.state.query), 'i')
      // Filtra cada nome dentro do array de contatos que correspondem
      // a regex match e atribui ao filtro de contatos showingContacts
      showingContacts = this.props.contacts.filter((contact) => match.test(contact.name))
    } else {
      showingContacts = this.props.contacts
    }
    return(
      <div className='list-contacts'>
        {JSON.stringify(this.state)}
        <div className='list-contacts-top'>
          <input
            className='search-contacts'
            type='text'
            placeholder='Search contacts'
            value={this.state.query}
            onChange={(event) => this.updateQuery(event.target.value)}
          />
        </div>
        <ol className='contact-list'>
        {/* 
          Adicionando colchetes na expressao. 
          Caso não declaramos uma unique 'key'
          para cada filho do array veremos esse erro
          Warning: Each child in an array or iterator should
          have a unique "key" prop.
          OBS: precisamos declarar a key porque estes itens
          pode mudar, e caso mude o React saberá qual item
          mudou sem precisar recriar todos os itens novamente.
        */}
        {/*Atualiza a nova lista de contatos de this.props.contacts
        para a variavel local showingContacts que contém o filtro*/ }
        {showingContacts.map((contact) =>(
          <li key={contact.id} className='contact-list-item'> 
            <div className='contact-avatar' style={{
              backgroundImage: `url(${contact.avatarURL})`
            }}/>
            <div className='contact-details'>
              <p>{contact.name}</p>
              <p>{contact.email}</p>
            </div>
            <button onClick={() => this.props.onDeleteContact(contact)} className='contact-remove'>
              Remove
            </button> 
          </li>
          
        ))}
        </ol>
      </div>
    )
  };
}

export default ListContacts;