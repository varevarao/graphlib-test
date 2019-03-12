import IInteractionControl from "../interfaces/IInteractionControl";
import GraphService from "../../services/impls/GraphService";

export default class InteractionControl implements IInteractionControl {
    private graphService: GraphService = new GraphService();

    setupServer(): Promise<object> {
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
    
    startInteraction(): Promise<object> {
        throw new Error("Method not implemented.");
    }


}