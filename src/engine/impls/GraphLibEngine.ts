import IGraphEngine from "../interfaces/IGraphEngine";

import {Graph} from "graphlib";
import IGraph from "../interfaces/IGraph";

export default class GraphLibEngine implements IGraphEngine {
    createGraph(): Promise<IGraph> {
        return new Promise((res, rej) => {
            let graph = new Graph();

            // Traverse over data implementation, to create the nodes
            // TODO

            // Finally return the graph
            res(graph);
        });
    }   
}