import { LEVELS } from "./levels.enum";

//Definir constructor de la tarea (Cuando se cree la tarea, tendra estos datos)
export class Task {
    name = "";
    description = "";
    completed = false;
    level = LEVELS.NORMAL;

    constructor(name, description, completed, level){
        this.name = name,
        this.description = description,
        this.completed = completed,
        this.level = level
    }
}