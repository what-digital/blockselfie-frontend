/**
 * @flow
 * @relayHash 40c3456b4d311661a19c00f65c85b409
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Layout$ref = any;
export type pagesHomeQueryVariables = {||};
export type pagesHomeQueryResponse = {|
  +$fragmentRefs: Layout$ref
|};
export type pagesHomeQuery = {|
  variables: pagesHomeQueryVariables,
  response: pagesHomeQueryResponse,
|};
*/


/*
query pagesHomeQuery {
  ...Layout
}

fragment Layout on Query {
  me {
    ...AutoUpdater_user
    id
    username
    displayName
    photoURL
  }
}

fragment AutoUpdater_user on User {
  id
  timeZone
}
*/

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "operationKind": "query",
  "name": "pagesHomeQuery",
  "id": null,
  "text": "query pagesHomeQuery {\n  ...Layout\n}\n\nfragment Layout on Query {\n  me {\n    ...AutoUpdater_user\n    id\n    username\n    displayName\n    photoURL\n  }\n}\n\nfragment AutoUpdater_user on User {\n  id\n  timeZone\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "pagesHomeQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "Layout",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "pagesHomeQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "me",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
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
            "name": "timeZone",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "username",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "displayName",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "photoURL",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
};
// prettier-ignore
(node/*: any*/).hash = '63cd3e01114e6e83d1bbe93c16c7ffdf';
module.exports = node;
