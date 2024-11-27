import { useState } from "react";
import { ITarefa } from "./Tarefa.type";
import "./TarefaLista.style.css"
import TarefaModal from "./TarefaModal";

type Props = {
    lista: ITarefa[]
    onDeleteClickHnd: (data: ITarefa) => void;
    onEdit: (data: ITarefa) => void;
};

const TarefaLista = (props: Props) => {
    const { lista, onDeleteClickHnd, onEdit } = props;
    const [showModal, setShowModal] = useState(false)
    const [dataToShow, setDataToShow] = useState(null as ITarefa | null);

    const viewTarefa = (data: ITarefa) => {
        setDataToShow(data)
        setShowModal(true)
    };
    const onCloseModal = () => setShowModal(false);
    
    return (

        <div>
            <article>
                <h3 className="list-header">Tarefas</h3>
            </article>
            <table>
                <tr>
                    <th>Tarefa</th>
                    <th>Descrição Tarefa</th>
                    <th>Criado em</th>
                    <th>Status</th>
                </tr>
                {lista.map((tarefa) => {
                    return (
                    <tr key={tarefa.id}>
                        <td >{`${tarefa.tituloTarefa} ${tarefa.descricaoTarefa}`}</td>
                        <td >{tarefa.descricaoTarefa}</td>
                        <td >{tarefa.criadoEm}</td>
                        <td >{tarefa.status}</td>
                        <td>
                            <div>
                                <input type="button" value="Ver" onClick={() => viewTarefa(tarefa)} />
                                <input type="button" value="Editar" onClick={() => onEdit(tarefa)} />
                                <input type="button" value="Deletar" onClick={() => onDeleteClickHnd(tarefa)}/>
                            </div>
                        </td>
                    </tr>
                    );
                })}
            </table>
            {showModal && dataToShow !== null && <TarefaModal onClose={onCloseModal} data={dataToShow}/>}
        </div>
    );
};

export default TarefaLista;
