import { Request, Response } from "express";

import * as subjectsService from "../services/subjectsService";

export async function getSubjects(req:Request,res:Response){
    try{
        const subjects = await  subjectsService.getSubjects();
        if(subjects.length===0) return res.sendStatus(404)
        res.send(subjects)
    }
    catch (e){
        console.log(e);
        res.sendStatus(500);
    }
}