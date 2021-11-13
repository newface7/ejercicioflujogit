import './styles/App.css';
import Index from './Pages/index';
import RhodesianPageInfo from './Pages/rhodesian';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  
  
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
                    
          <Route path = "/rhodesian">
            <RhodesianPageInfo />
          </Route>          

          <Route path = "/">
            <Index />
          </Route>          

        </Routes>
      </Router>
      
    </div>    
  );
}
export default App;

//Función con props
//function CardRazasPerros (props){
//  return(

//    <li className="breedCard" >
//      <div className = {props.color}>      
//            <div className="contenedorImagen">
//              <img src={props.imagen} alt={props.nombreRaza} />
//            </div>
//            <span className="breedTitle">{props.nombreRaza}</span>
//      </div>    
//    </li>

//  )
//}