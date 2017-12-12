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
  clearQuery = () => {
    //this.setState({ query: '' })
    this.updateQuery('');
  }
  render(){
    // Destructuring objets em variaveis para deixar o
    //codigo mais limpo ou facil de lêr
    const { contacts, onDeleteContact } = this.props
    const { query } = this.state

    // Filtra os contatos a serem exibidos
    let showingContacts
    // Caso o usuário digite algo será alterado o state do
    // componente e está condição será executada
    if (query) {
      // Cria uma regex case insensitive 'i' baseado no campo imput
      // de busca, eliminando caracteres especiais
      const match = new RegExp(escapeRegExp(query), 'i')
      // Filtra cada nome dentro do array de contatos que correspondem
      // a regex match e atribui ao filtro de contatos showingContacts
      showingContacts = contacts.filter((contact) => match.test(contact.name))
    } else {
      showingContacts = contacts
    }
    return(
      <div className='list-contacts'>
        {/*JSON.stringify(this.state)*/}
        <div className='list-contacts-top'>
          <input
            className='search-contacts'
            type='text'
            placeholder='Search contacts'
            value={query}
            onChange={(event) => this.updateQuery(event.target.value)}
          />
          <a
            href='#create'
            onClick={this.props.onNavigate}
            className='add-contact'
          >Add Contact</a>
        </div>
        {/* 
        Caso o usuário digitar algo então será renderizado 
        está div. lembrando que ao digitar algo o estado da
        propriedade do component muda então o filtro 
        showingcontacts poderá receber os contatos correspondente
        e o seu tamanho não será mais igual a contacts, então
        será renderizado a nova lista de contatos com base em
        seu novo estado.
        */}
        {showingContacts.length !== contacts.length && (
          <div className='showing-contacts'>
            <span>Now showing {showingContacts.length} of {contacts.length} total</span>
            <button onClick={this.clearQuery}>Show all</button>
          </div>
        )}
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
            <button onClick={() => onDeleteContact(contact)} className='contact-remove'>
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