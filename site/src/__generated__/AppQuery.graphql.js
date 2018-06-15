/**
 * @flow
 * @relayHash 0be0b36bb4ee914bf97c8e2f8e4383b2
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AppQueryVariables = {| |};
export type AppQueryResponse = {|
  +stats: ?$ReadOnlyArray<?{|
    +id: ?string,
    +name: ?string,
  |}>,
|};
*/


/*
query AppQuery {
  stats {
    id
    name
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "stats",
    "storageKey": null,
    "args": null,
    "concreteType": "Stats",
    "plural": true,
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
        "name": "name",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "AppQuery",
  "id": null,
  "text": "query AppQuery {\n  stats {\n    id\n    name\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "AppQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": v0
  },
  "operation": {
    "kind": "Operation",
    "name": "AppQuery",
    "argumentDefinitions": [],
    "selections": v0
  }
};
})();
(node/*: any*/).hash = '3339fe89fbd68c827a1a9e0e4b0e9f33';
module.exports = node;
