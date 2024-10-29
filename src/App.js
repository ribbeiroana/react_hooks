// import { useState } from 'react';

// const App = () => {
//   const [count, setCount] = useState(0);

//   const incremetCount = () => {
//     setCount(count + 1);
//   };
//   return ( 
//     <div>
//       <h1>{count}</h1>
//       <button onClick={incremetCount}>Increment</button>
//     </div>
//   ) 
// }

// export default App;



// se eu vou alterar o state baseando no valor anterior ao click: 


// import { useState } from 'react';

// const App = () => {
//   const [count, setCount] = useState(0);

//   const incremetCount = () => {
//     setCount((prevstate) => prevstate + 1);
//     // passei uma função que recebe o prevState como parâmetro e retorna o novo valor 
//   };
//   return ( 
//     <div>
//       <h1>{count}</h1>
//       <button onClick={incremetCount}>Increment</button>
//     </div>
//   ) 
// }

// export default App;


// a quantidade de vezes que você chama um hook nunca pode mudar
// não pode colocar um hook dentro de um if ou dentro de uma função


// podemos colocar um objeto dentro do useState
// import { useState } from 'react';

// const App = () => {
//   const [count, setCount] = useState(0);  
//   const [theme, setTheme] = useState('Dark')
//   // const [state, setState] = useState({ count: 0, theme: 'Light' })
  
//   const incremetCount = () => {
//     setCount(prevState => prevState + 1)
//   };
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={incremetCount}>Increment</button>
//     </div>
//   )
// }

// export default App;



//useEffect

import { useState, useEffect }  from 'react';

const App = () => {
  const [resourceType, setResourceType] = useState('posts');

  const changeResourceType = (resourceType) => {
    setResourceType(resourceType);
  };

  return (
    <div>
      <h1>{resourceType}</h1>
      <div style={{ display: 'flex'}}></div>
    </div>
  )
}