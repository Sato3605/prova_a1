import { ITarefa } from "./Tarefa.type";
import "./TarefaModal.style.css"

type Props = {
    onClose: () => void
    data: ITarefa
};


const TarefaModal = (props: Props) => {
    const{onClose, data} = props
    return <div id="myModal" className="modal">
        <div className="modal-content"> 
            <span className="close" onClick={onClose}>&times;</span>
            <h3>Tarefa</h3>
            <div>
                <label>Titulo Tarefa : {data.tituloTarefa}</label>
            </div>
            <div>
                <label>Descrição Tarefa : {data.descricaoTarefa}</label>
            </div>
            <div>
                <label>Criado em : {data.criadoEm}</label>
            </div>
            <div>
                <label>Status : {data.status}</label>
            </div>
        </div>
    </div>
};

export default TarefaModal;