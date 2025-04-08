import { PodcastTransferModel } from "../models/podcast-transfer-model";
import { repositoryPodcast } from "../repositories/podcasts-repository";
import { StatusCode } from "../utils/status-code";

export const serviceListEpisodes = async (): Promise<PodcastTransferModel> => {
    // define o contrato
    let responseFormat: PodcastTransferModel = {
            statusCode: 0,
            body: []
        };
    //busco os dados    
    const data = await repositoryPodcast();

    // verifica o tipo de resposta
    if (data.length === 0) {
    responseFormat.statusCode = data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT;}
    responseFormat.body = data;
    return responseFormat;
};