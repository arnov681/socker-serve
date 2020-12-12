import { Router } from "express";
import from { Router, Request,  Response } 'express';

const router = Router();

router.get('/mensajes', ( req: Request, res: Response ) =>{
    res.json({
        ok: true,
        mensaje: 'todo esta bien' 
    });
});