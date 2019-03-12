
# graphlib-test
Implementing a graph based relationship between objects with assets (defined as nodes).
Edges are behaviours that define transitions between the nodes.

The underlying graph for this is apparently well done in graphlib, so this is also a benchmarking for the library as a tool on the mobile, and on a node server.

## Steps to run:

Install the required dependencies
```
> npm i
```

Run the server by executing:
```
> npm run server [--conf "config file location" | default: "./server-config.json"]
```

### Server:
The directory at `assets/` contains the world `nodes/` and `associations/` (recipes). The class `GraphTestServer` under `server/index.js` creates and runs the server. The type of server run depends on the `interactionControl`  parameter under config (`default: 'cli'`).
The source code under `server/` is distributed as follows:

#### 1. controllers (`server/controllers`)
Endpoint classes to handle the external interaction interfaces. **Every controller implements `interfaces/IInteractionControl`**.
Currently only includes a `CliController`, for the cli operations.

#### 2. services (`server/services`)
Classes to handle interactions on the underlying graph of relations. **Every service implements `interfaces/IGraphService`.**
    - `GraphService` Creates the graph using underlying relations, and nodes.
    - `TravellerService` Maintains a list of travellers hashed by their ID. Controls creation of traveller objects, and interactions between travellers, or traveller and the graph.
    - `AuthService` Auth implementation, should export a `passport-js` compliant interface.
#### 3. graph-engine (`server/engine`)
Library of classes to abstract the engine (graph creation, traversal, and operations) from the server. Exports a single `index.js`, which is configurable to any implemented engine (in this case `graphlib`), and **must implement `interfaces/IGraphEngine`**.

## Admin tool:

After running the server, admin tool simulates a client although in CLI mode. It expects a server to be running at http://localhost:3000, or as defined by the `server-url` JSON param under admin-config.
Use the following to run the client:
```
> npm run admin [--conf "config file location" | default: "./admin-config.json"]
```

The following commands are available on the CLI:
```
  # Start a traversal on the world loaded 
  > start-travel [node-key|empty for random] [attributes (blank for default)|verrides + custom attributes]
  > peek [local|world] [-d <distance>] # Print the nodes around location of traveller, upto 'distance' depth
  > reload <local|world> [-d <distance>] # Reloads either the travelling nodes 'locality' (a region of the graph the traveller can "see", defined by the default attrs, processed locally on the travelling node), or the entire world (using the files under assets, and the logic defined by the server script. The server side script accepts this command only from 'localhost'.)
  > exit
  ```
