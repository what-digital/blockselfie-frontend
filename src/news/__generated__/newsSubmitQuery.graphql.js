/**
 * @flow
 * @relayHash fb2771a65d75b8d73061aa826c79a33b
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Layout$ref = any;
type Submit$ref = any;
export type newsSubmitQueryVariables = {||};
export type newsSubmitQueryResponse = {|
  +$fragmentRefs: Layout$ref & Submit$ref
|};
export type newsSubmitQuery = {|
  variables: newsSubmitQueryVariables,
  response: newsSubmitQueryResponse,
|};
*/


/*
query newsSubmitQuery {
  ...Layout
  ...Submit
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

fragment Submit on Query {
  me {
    id
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
  "name": "newsSubmitQuery",
  "id": null,
  "text": "query newsSubmitQuery {\n  ...Layout\n  ...Submit\n}\n\nfragment Layout on Query {\n  me {\n    ...AutoUpdater_user\n    id\n    username\n    displayName\n    photoURL\n  }\n}\n\nfragment Submit on Query {\n  me {\n    id\n  }\n}\n\nfragment AutoUpdater_user on User {\n  id\n  timeZone\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "newsSubmitQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "Layout",
        "args": null
      },
      {
        "kind": "FragmentSpread",
        "name": "Submit",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "newsSubmitQuery",
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
(node/*: any*/).hash = 'acf7ca92e478ebdbec0b660c9da39fcf';
module.exports = node;
