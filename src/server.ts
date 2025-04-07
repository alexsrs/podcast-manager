import * as http from 'http';
import {getListEpisodes, getFilterEpisodes} from "./controllers/podcasts-controller";


const server = http.createServer(
    async (req: http.IncomingMessage, res: http.ServerResponse) => {

        //query strig
        const [baseUrl, queryString] = req.url?.split("?") ?? ["",""];

        console.log("Base URL:", baseUrl);
        console.log("Query String:", queryString);

        // Listar podcast
        if(req.method === "GET" && baseUrl === "/api/list") {
            await getListEpisodes(req, res);
        }
        // Filtrar podcast
        if(req.method === "GET" && baseUrl === "/api/filter") {
            await getFilterEpisodes(req, res);
        }
    }
);

const port = process.env.PORT;

server.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}`);

});