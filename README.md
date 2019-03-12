# graphlib-test
Implementing a graph based relationship between objects with assets (defined as nodes).
Edges are behaviours that define transitions between the nodes.

The underlying graph for this is apparently well done in graphlib, so this is also a benchmarking for the library as a tool on the mobile, and on a node server.

## Steps to run:

Install the required dependencies
```
> npm i
```
The directory at `assets/` contains the world `nodes/` and `associations/` (recipes).
Run the server by executing:
```
> npm run server
```

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
