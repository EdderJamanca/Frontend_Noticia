export interface RptArticulos {
  jsonapi: Jsonapi;
  code:    number;
  message: string;
  data:    articulo[];
}

export interface articulo {
  NoticiaId:    number;
  CategoriaId:  string;
  Titulo:       string;
  Resumen:      string;
  Img:          string;
  Contenido:    string;
  Calificacion: number;
  Nom_Autor:    string;
}

export interface Jsonapi {
  environment: string;
  version:     string;
  name:        string;
  summary:     string;
}
