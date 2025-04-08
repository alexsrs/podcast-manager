import {IncomingMessage, ServerResponse} from 'http';
import {serviceListEpisodes} from "../services/list-episodes-service";
import { serviceFilterEpisodes } from '../services/filter-episodes-service';
import { StatusCode } from '../utils/status-code';
import { ContentType } from '../utils/content-type';
import { PodcastTransferModel } from '../models/podcast-transfer-model';

export const getListEpisodes = async (
    req : IncomingMessage, 
    res: ServerResponse
) => {
    const content = await serviceListEpisodes();
    res.writeHead(StatusCode.OK, {"Content-Type": ContentType.JSON});
    res.write(JSON.stringify(content.body));
    res.end();
    };

export const getFilterEpisodes = async(
    req: IncomingMessage, 
    res: ServerResponse
) => {
    
    const content: PodcastTransferModel = await serviceFilterEpisodes(req.url);

    res.writeHead(content.statusCode, {"Content-Type": ContentType.JSON});
    res.write(JSON.stringify(content.body))
    res.end();
}