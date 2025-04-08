import * as http from 'http';
import {getListEpisodes, getFilterEpisodes} from "./controllers/podcasts-controller";
import { Routes } from './routes/routes';
import { HttpMethods } from './utils/http-methods';


const server = http.createServer(
    async (req: http.IncomingMessage, res: http.ServerResponse) => {

        //query strig
        const [baseUrl, queryString] = req.url?.split("?") ?? ["",""];

        //console.log("Base URL:", baseUrl);
        //console.log("Query String:", queryString);

        // Listar podcast
        if(req.method === HttpMethods.GET && baseUrl === Routes.LIST) {
            await getListEpisodes(req, res);
        }
        // Filtrar podcast
        if(req.method === HttpMethods.GET && baseUrl === Routes.FILTER) {
            await getFilterEpisodes(req, res);
        }
    }
);

const port = process.env.PORT;

server.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}`);
});