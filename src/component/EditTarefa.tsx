import { useState } from "react";
import { ITarefa } from "./Tarefa.type";
import "./TarefaForm.style.css";

type Props = {
    onBackBtnClickHnd: () => void;
    data: ITarefa;
    onUpdateClickHnd: (data: ITarefa) => void;
}

const EditTarefa = (props: Props) => {
    const { data, onBackBtnClickHnd, onUpdateClickHnd } = props;

    const [tituloTarefa, setTituloTarefa] = useState(data.tituloTarefa);
    const [descricaoTarefa, setDescricaoTarefa] = useState(data.descricaoTarefa);
    const [Criadoem, setCriadoEm] = useState(data.criadoEm);
    const [Status, setStatus] = useState(data.status);

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
        const updateData: ITarefa = {
            id: data.id,
            tituloTarefa: tituloTarefa,
            descricaoTarefa: descricaoTarefa,
            criadoEm: Criadoem,
            status: Status
        }
        onUpdateClickHnd(updateData);
        onBackBtnClickHnd();
    };

    return         <div className="form-container">
    <div>
        <h3>Editar Tarefa</h3>
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
            <label> Criado em : </label>
            <input type="text" value={Criadoem} onChange={onCriadoemChangeHnd}/>
        </div>
        <div>
            <label> Status : </label>
            <input type="text" value={Status} onChange={onStatusChangeHnd}/>
        </div>
        <div>
            <input type="button" value="Voltar" onClick={onBackBtnClickHnd} />
            <input type="submit" value="Atualizar Tarefa" />
        </div>
    </form>
</div>
};

export default EditTarefa;
