export interface RPTCategorias {
  jsonapi: Jsonapi;
  code:    number;
  message: string;
  data:    Categorias[];
}

export interface Jsonapi {
  environment: string;
  version:     string;
  name:        string;
  summary:     string;
}

export interface Categorias {
  idcategoria:   number;
  Nom_Categoria: string;
}

export interface RptRegistro{
  jsonapi: Jsonapi;
  code:    number;
  message: string;
}
