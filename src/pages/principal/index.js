import React from 'react';
import './index.css';


export default class Principal extends React.Component {

  state = {
    filmes: [],

  }
  handleInputChange = (e) => {
    e.preventDefault();
    const { value } = e.target;

    if (!value) return;

    fetch(`https://api.tvmaze.com/search/shows?q=${value}`)
    .then((response) => response.json())
    .then(response => {
      this.setState({
        filmes: response
      });
      console.log(response);
    });   
  };
  
  





render(){
  return (

    <div className='Principal'>
      <input type="search" onChange={this.handleInputChange}/>
      <h1>LISTA DE FILMES</h1>
      <ul className='listagem'>
        {this.state.filmes.map((item) => (
          <li key={item.show.id}>
            <h3>Nome Do Filme: </h3> {item.show.name}
          <br></br>
            <h2>Gênero: </h2> {item.show.genres.join(",")}
          <br></br>
            <h3>Idioma: </h3> {item.show.language}
        </li>
    
        ))}
     
      </ul>
      </div>
      
    
  
   
  
   
  );
}
}
