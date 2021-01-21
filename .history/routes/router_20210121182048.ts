
import { Router, Request, Response } from 'express';
import Server from '../classes/server';

const router = Router();



router.get('/mensajes', ( req: Request, res: Response  ) => {

    res.json({
        ok: true,
        mensaje: 'Todo esta bien!!'
    });

});

router.post('/mensajes', ( req: Request, res: Response  ) => {

    const cuerpo = req.body.cuerpo;
    const de     = req.body.de;

    res.json({
        ok: true,
        cuerpo,
        de
    });

});


router.post('/mensajes/:id', ( req: Request, res: Response  ) => {

    const cuerpo = req.body.cuerpo;
    const de     = req.body.de;
    const id     = req.params.id;

    const payload

    const server = Server.instance;

    server.io.in( id ).emit( 'mensaje-privado' );

    res.json({
        ok: true,
        cuerpo,
        de,
        id
    });

});



export default router;

