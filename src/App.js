
import Form  from './components/Form';
import Heading from './components/Heading';
import Body from "./components/Body";
import Footer from "./components/Footer";
import {useState} from 'react';
import { TodoListProvider } from './context/TodoContext';


function App() { 
  
 
  
   
    












  return <TodoListProvider> <div>

      <Heading />
      <Form />
      <Body 
          
          />
      <Footer />
    
      </div>
      </TodoListProvider>
}

export default App;
