import {Link} from 'react-router-dom' 

//Función sin props
const CardRazasPerros = ({nombreRaza, imagen}) => {
    return(
      
      <li className="breedCard" > 
        <Link to = "/rhodesian">
          <div className="contenedorImagen">
            <img src={imagen} alt={nombreRaza} />
          </div>
          <span className="breedTitle">{nombreRaza}</span>      
        </Link>     
      </li>
      
    )
  }
  export default CardRazasPerros;