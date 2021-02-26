import { repository } from "@loopback/repository";
import {PersonaRepository} from "../repositories";
import {Persona} from "../models";
const jwt = require("jsonwebtoken")
const bcrypt= require("bcryptjs");

export class AuthService{
    constructor(        
        @repository(PersonaRepository)
        public personaRepository: PersonaRepository
    ){

    }

    async Identify(username: string, password: string): Promise<Persona | false>{
        console.log(username, password)
        let persona = await this.personaRepository.findOne({where:{username: username}})
        if(persona){
            let flag = await bcrypt.compare(password, persona.contrasena)
            if(  flag) {
                return persona;
            }
        }
        return false;
    }

    async generateToken(persona: Persona){
        persona.contrasena = "";
        let token = jwt.sign({
            exp: 846000,
            data:{
                _id: persona.id,
                username: persona.username,
                nombre: persona.nombre,
                edad: persona.edad,
                role: persona.role
            }
        },
        "jwt@auth");
        return token;
    }
}