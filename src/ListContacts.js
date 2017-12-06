import React, { Component } from 'react';

class ListContacts extends Component{
  // Definindo a IU para este component
  // a propriedade render() é a única obrigatoria
  // em um Component React, se não dá erro
  render(){
    console.log('Props', this.props);
    return(
      <ol className='contact-list'>
      </ol>
    )
  }


}

export default ListContacts;