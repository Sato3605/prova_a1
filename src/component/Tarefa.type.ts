export interface ITarefa {
    id: string;
    tituloTarefa: string;
    descricaoTarefa: string;
    criadoEm: string;
    status: string;
}

export enum PageEnum {
    lista,
    add,
    edit,
}

