export class User {
  public usuarioId: number;
  public login: string;
  public personaId: number;
  public fechaUltimoIngreso: Date;
  public  estadoId: number;
  public  creadopor: number;
  public creado: Date;
  public actualizadopor: number;
  public actualizado: Date;
  public  activo: string;
  public  active: boolean;
  public notLocked: boolean;
  public password: string;
  public pregunta1: string;
  public respuesta1: string;
  public pregunta2: string;
  public respuesta2: string;
  public pregunta3: string;
  public respuesta3: string;
  public lastLoginDateDisplay: Date;
  public profileImageUrl: string;

  constructor() {
   this.active = false;
   this.notLocked = false;
   this.pregunta1 = '';
   this.respuesta1 = '';
   this.pregunta2 = '';
   this.respuesta2 = '';
   this.pregunta3 = '';
   this.respuesta3 = '';

  }


}
