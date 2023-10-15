import express, { Request, Response } from "express";
import logger from "./logger";

const app = express();
const port = process.env.PORT || 30788

app.get('/', ( req: Request, res: Response ) => {
    logger.debug('This is  home / route');
    logger.silly('verbose silly massage');
    res.sendStatus(200);
});

app.get('/event', ( req: Request, res: Response ) => {
    try {
        logger.error("Event Error: Unauthenticated user");
        res.sendStatus( 401 );
    } catch (error) {
        res.status( 500 ).json( { error: "Internal Server Error" });
    }
});

app.listen( port, () => {
    logger.info(`server start on port : ${port}`)
})