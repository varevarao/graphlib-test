export default interface IInteractionControl {
    /**
     * Allows the controller a chance to setup any required environment.
     * In the base interaction, it calls the graph service to setup the graph using provided data.
     * 
     * @returns { complete: "true/false", error: "" }
     */
    setupServer(): Promise<object>,

    /**
     * Informs the controller that interaction is now ready to be accepted (all external setup steps are complete too).
     * 
     * @returns { complete: "true/false", error: "" }
     */
    startInteraction(): Promise<object>
}