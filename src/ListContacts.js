import React, { Component } from 'react';
import PropTypes from 'prop-types'

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
        {this.props.contacts.map((contact) =>(
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