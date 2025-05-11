export interface Participante {
    _id?: string;
    nombre: string;
    edad: number;
    genero: string;
    rol: 'tentador' | 'pareja';
    temporada: number;
    foto: number;
  }
  