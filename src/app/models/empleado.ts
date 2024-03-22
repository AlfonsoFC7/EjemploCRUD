export class Empleado {
    constructor(
        public id_empleado: number,
        public nombre?: string,
        public correo?: string,
        public telefono?: string,
        public id_area?: number
    ){}
}
