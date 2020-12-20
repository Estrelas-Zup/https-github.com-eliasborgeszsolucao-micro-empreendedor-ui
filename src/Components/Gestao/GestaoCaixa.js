import React from 'react';
import { post } from '../../Core/request';


const GestaoPost = () => {
 
  const [capitalSocial, setCapitalSocial] = React.useState('');
  

  function handleSubmit(event) {
    event.preventDefault();

    post('http://localhost:8080/gestao', 

       JSON.stringify({
        capitalSocial,
        
      }),
    )
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json);
        return json;
      });
  }

  return (
    <form onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Capital Social"
        value={capitalSocial}
        onChange={({ target }) => setCapitalSocial(target.value)}
      />
     
      <button>Enviar</button>
    </form>
  );
};

export default GestaoPost;