import IGraphService from "../interfaces/IGraphService";
import IGraphEngine from "../../engine/interfaces/IGraphEngine";

import GraphEngine from "../../engine";
import engine from "../../engine";
import IGraph from "../../engine/interfaces/IGraph";

export default class GraphService implements IGraphService {
    engine: IGraphEngine = GraphEngine;

    graph: IGraph | undefined;

    setupGraph(): Promise<boolean> {
        console.log('Doing the setup');

        return engine.createGraph().then(created => {
            this.graph = created;

            return true;
        });
    }
}