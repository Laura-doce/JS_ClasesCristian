import { AppService } from './app.service';
import { Student } from './entidades/Stuents';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    Ejemplo(): string;
    getIdenticifacion(id: number, nom: string, cel: number, edad: number): Student;
}
