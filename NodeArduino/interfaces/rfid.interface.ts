export interface IRfid {
  nombreUsuario: string;
  estado: boolean; // bloqueado, desbloqueado
  clave: string;
  hora: Date;
}