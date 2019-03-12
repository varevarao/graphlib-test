import GraphService from "./impls/GraphService";

export default class Services {
    private graphService: GraphService = new GraphService();

    setup() {
        // setup the graph
        return new Promise((res, rej) => {
            this.graphService.setupGraph().then(result => {
                return {
                    complete: result,
                    error: !result ? "Graph setup failed!" : ""
                };
            });
        });
    }
}