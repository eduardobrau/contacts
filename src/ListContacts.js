import React, { Component } from 'react';

function ListContacts(props){
  // Se um componente estiver usando apenas o método render para
  // exibir conteúdo, então ele pode ser convertido em um 
  // componente funcional sem estado. 
  //console.log('Props', this.props);
  return(
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
    {props.contacts.map((contact) =>(
      <li key={contact.id} className='contact-list-item'> 
        <div className='contact-avatar' style={{
          backgroundImage: `url(${contact.avatarURL})`
        }}/>
        <div className='contact-details'>
          <p>{contact.name}</p>
          <p>{contact.email}</p>
        </div>
        <button className='contact-remove'>
          Remove
        </button> 
      </li>
      
    ))}
    </ol>
  )

}

export default ListContacts;