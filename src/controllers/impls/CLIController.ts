import InteractionControl from "./InteractionControl";

export default class CLIController extends InteractionControl {
    setupServer(): Promise<object> {
        return super.setupServer();
    }
    
    startInteraction(): Promise<object> {
        return super.startInteraction();
    }
}