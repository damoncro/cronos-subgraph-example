# Example Subgraph on Cronos

An example to help you get started with The Graph on Cronos
For more information see the docs on https://thegraph.com/docs/.

make sure to config as below for compatiable version with https://portal.cronoslabs.com/ :
in package.json
```
    "@graphprotocol/graph-cli": "^0.21.0",
    "@graphprotocol/graph-ts": "^0.20.0"
```
in subgraph.yaml
```
    mapping:
      kind: ethereum/events
      apiVersion: 0.0.4
```
```
dataSources:
  - kind: ethereum/contract
    network: cronos
```
where network should be 
`cronos` for Cronos Mainnet
`testnet3` for Cronos Testnet3


Steps for and deployment:
1. 
```
yarn install && yarn codegen && yarn build
```

```
graph deploy {subgraph_id} -—access-token={project_secret} --node {graph_node_url} --ipfs {ipfs_api_url}
```