import { useEffect, useState } from "react";
import { ITarefa, PageEnum } from "./Tarefa.type";
import TarefaLista from "./TarefaLista";
import AddTarefa from "./AddTarefa";
import "./Home.style.css";
import EditTarefa from "./EditTarefa";

const Home = () => {

    const [tarefaLista, setTarefaLista] = useState([] as ITarefa[]);
    const [shownPage, setShownPage] = useState(PageEnum.lista)
    const [dataToEdit, setDataToEdit] = useState({} as ITarefa);

useEffect(() => {
    const listInString = window.localStorage.getItem("TarefaLista")
    if (listInString) {
        setTarefaLista(JSON.parse(listInString));
    }
}, [])

    const onAddTarefaClickHnd = () => {
        setShownPage(PageEnum.add);
    };

    const showListaPagina = () => {
        setShownPage(PageEnum.lista);
    }

    const _setTarefaLista = (lista: ITarefa[]) => {
        setTarefaLista(lista);
        window.localStorage.setItem("TarefaLista", JSON.stringify(lista));
    }

    const addTarefa = (data: ITarefa) => {
        setTarefaLista([...tarefaLista, data]);
    };

    const deleteTarefa = (data: ITarefa) => {

        const indexToDelete = tarefaLista.indexOf(data);
        const tempList = [...tarefaLista];

        tempList.splice(indexToDelete, 1);
        setTarefaLista(tempList)
    };

    const EditTarefaData = (data: ITarefa) => {
        setShownPage(PageEnum.edit);
        setDataToEdit(data);

    };

    const updateData = (data: ITarefa) => {
        const filteredData = tarefaLista.filter(x => x.id === data.id)[0];
        const indexOfRecord =tarefaLista.indexOf(filteredData)
        const tempData = [...tarefaLista]
        tempData[indexOfRecord] = data;
        setTarefaLista(tempData)
    };

    return (
        <>
            <article className="article-header">
                <header>
                    <h1>React: Prova A1</h1>
                </header>
            </article>

            <section className="section-content">
                {shownPage === PageEnum.lista && (
                    <>
                        <input type="button" value="Adicionar Tarefa" onClick={onAddTarefaClickHnd}
                            className="add-tarefa-btn"
                        />
                        <TarefaLista lista={tarefaLista} onDeleteClickHnd={deleteTarefa}
                        onEdit={EditTarefaData}/>
                    </>
                )}

                {shownPage === PageEnum.add && <AddTarefa onBackBtnClickHnd={showListaPagina} onSubmitClickHnd={addTarefa} />}

                {shownPage === PageEnum.edit && <EditTarefa data={dataToEdit} onBackBtnClickHnd={showListaPagina} onUpdateClickHnd={updateData}/>}
            </section>
        </>
    );
};

export default Home;