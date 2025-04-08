import { PodcastTransferModel } from "../models/podcast-transfer-model";
import { repositoryPodcast } from "../repositories/podcasts-repository"
import { StatusCode } from "../utils/status-code";

export const serviceFilterEpisodes = async (
    podcastName: string | undefined
): Promise<PodcastTransferModel> => {
    // define a interface
    let responseFormat: PodcastTransferModel = {
        statusCode: 0,
        body: []
    };
    //busca os dados
    const queryString =podcastName?.split("?p=")[1] || "";
    const data = await repositoryPodcast(queryString);

    //verifica se tem conteúdo
    responseFormat.statusCode = data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT;
    responseFormat.body = data;

    return responseFormat;
};
