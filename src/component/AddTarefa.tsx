import {useState} from 'react';
import "./TarefaForm.style.css"
import { ITarefa } from './Tarefa.type';

type Props = {
    onBackBtnClickHnd: () => void;
    onSubmitClickHnd: (data: ITarefa) => void;
}
const AddTarefa = (props: Props) => {

    const [tituloTarefa, setTituloTarefa] = useState("");
    const [descricaoTarefa, setDescricaoTarefa] = useState("");
    const [Criadoem, setCriadoEm] = useState("");
    const [Status, setStatus] = useState("");

    const { onBackBtnClickHnd, onSubmitClickHnd } = props;

    const onTituloTarefaChangeHnd = (e: any) => {
        setTituloTarefa(e.target.value)
    };
    const onDescricaoTarefaChangeHnd = (e: any) => {
        setDescricaoTarefa(e.target.value)
    };
    const onCriadoemChangeHnd = (e: any) => {
        setCriadoEm(e.target.value)
    };
    const onStatusChangeHnd = (e: any) => {
        setStatus(e.target.value)
    };

    const onSubmitBtnClickHnd = (e: any) => {
        e.preventDefault();
        const data: ITarefa = {
            id: new Date().toJSON().toString(),
            tituloTarefa: tituloTarefa,
            descricaoTarefa: descricaoTarefa,
            criadoEm: Criadoem,
            status: Status
        }
        onSubmitClickHnd(data);
        onBackBtnClickHnd();
    };

    return (
        <div className="form-container">
            <div>
                <h3>Tarefas</h3>
            </div>
            <form onSubmit={onSubmitBtnClickHnd}>
                <div>
                    <label>Titulo Tarefa : </label>
                    <input type="text" value={tituloTarefa} onChange={onTituloTarefaChangeHnd} />
                </div>
                <div>
                    <label> Descrição Tarefa  : </label>
                    <input type="text" value={descricaoTarefa} onChange={onDescricaoTarefaChangeHnd}/>
                </div>
                <div>
                    <label>Criado em : </label>
                    <input type="text" value={Criadoem} onChange={onCriadoemChangeHnd}/>
                </div>
                <div>
                    <label>Status : </label>
                    <input type="text" value={Status} onChange={onStatusChangeHnd}/>
                </div>
                <div>
                    <input type="button" value="Voltar" onClick={onBackBtnClickHnd} />
                    <input type="submit" value="Adicionar Tarefa" />
                </div>
            </form>
        </div>
    )
};

export default AddTarefa;