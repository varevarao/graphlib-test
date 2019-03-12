import IGraphService from "../interfaces/IGraphService";

export default class GraphService implements IGraphService {
    setupGraph(): Promise<boolean> {
        console.log('Doing the setup');
        return Promise.resolve(true);
    }
}