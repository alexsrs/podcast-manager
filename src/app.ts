import {getListEpisodes, getFilterEpisodes} from "./controllers/podcasts-controller";
import { Routes } from './routes/routes';
import { HttpMethods } from './utils/http-methods';
import * as http from 'http';
export const app = async (req: http.IncomingMessage, res: http.ServerResponse) => {

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