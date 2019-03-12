import IInteractionControl from "./interfaces/IInteractionControl";

export default class InteractionControl implements IInteractionControl {
    setupServer(): Promise<object> {
        throw new Error("Method not implemented.");
    }
    
    startInteraction(): Promise<object> {
        throw new Error("Method not implemented.");
    }


}