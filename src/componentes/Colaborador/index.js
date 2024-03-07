import { IoIosCloseCircleOutline} from "react-icons/io";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoIosHeart } from "react-icons/io";


import './colaborador.css'

const Colaborador = ({ colaborador, corDeFundo, aoDeletar,aoFavoritar }) => {

    function favoritar(){
        aoFavoritar(colaborador.id);
    }

    const propsFavorito={
        size: 25,
        onClick: favoritar
    }


    return (<div className="colaborador">
        <IoIosCloseCircleOutline 
        size={30} 
        color="white" 
        className='deletar' 
        onClick={() => aoDeletar(colaborador.id)}
        />

        <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
            <img src={colaborador.imagem} alt={colaborador.nome} />
        </div>z

        <div className="rodape">
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
                <div className="favoritar">
                    {colaborador.favorito ? 
                    <IoIosHeart size={25} onClick={favoritar} color="red"/> 
                    : <IoIosHeartEmpty size={25} onClick={favoritar}
                />}
                </div>
        </div>
    </div>)
}

export default Colaborador;