/**
 * @flow
 * @relayHash 16acdcd84fc52f8301ced2ffbe64644d
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type StatsQueryVariables = {|
  id: string,
|};
export type StatsQueryResponse = {|
  +stat: ?{|
    +id: ?string,
    +type: ?string,
    +name: ?string,
    +players: ?$ReadOnlyArray<?{|
      +Name: ?string,
      +playerId: ?string,
      +G: ?number,
      +AB: ?number,
      +R: ?number,
      +H: ?number,
      +BB: ?number,
      +SINGLE: ?number,
      +DOUBLE: ?number,
      +TRIPLE: ?number,
      +HR: ?number,
      +RBI: ?number,
      +AVG: ?number,
      +SLG: ?number,
      +TB: ?number,
      +OBP: ?number,
      +RUNC: ?number,
      +OPS: ?number,
      +ISO: ?number,
      +GAME_LIMIT: ?boolean,
    |}>,
  |},
|};
*/


/*
query StatsQuery(
  $id: ID!
) {
  stat(id: $id) {
    id
    type
    name
    players {
      Name
      playerId
      G
      AB
      R
      H
      BB
      SINGLE
      DOUBLE
      TRIPLE
      HR
      RBI
      AVG
      SLG
      TB
      OBP
      RUNC
      OPS
      ISO
      GAME_LIMIT
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "stat",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id",
        "type": "ID!"
      }
    ],
    "concreteType": "Stats",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "type",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "name",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "players",
        "storageKey": null,
        "args": null,
        "concreteType": "Player",
        "plural": true,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "HR",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "Name",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "G",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "AB",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "R",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "H",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "BB",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "SINGLE",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "DOUBLE",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "TRIPLE",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "playerId",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "RBI",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "AVG",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "SLG",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "TB",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "OBP",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "RUNC",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "OPS",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "ISO",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "GAME_LIMIT",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "StatsQuery",
  "id": null,
  "text": "query StatsQuery(\n  $id: ID!\n) {\n  stat(id: $id) {\n    id\n    type\n    name\n    players {\n      Name\n      playerId\n      G\n      AB\n      R\n      H\n      BB\n      SINGLE\n      DOUBLE\n      TRIPLE\n      HR\n      RBI\n      AVG\n      SLG\n      TB\n      OBP\n      RUNC\n      OPS\n      ISO\n      GAME_LIMIT\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "StatsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "StatsQuery",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
(node/*: any*/).hash = '8888026db4e8f431855bb5e9713c20ef';
module.exports = node;
