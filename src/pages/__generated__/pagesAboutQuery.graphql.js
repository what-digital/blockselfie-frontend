/**
 * @flow
 * @relayHash 1a8f9d47a99fb0c607d438290b7b96f5
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Layout$ref = any;
export type pagesAboutQueryVariables = {||};
export type pagesAboutQueryResponse = {|
  +$fragmentRefs: Layout$ref
|};
export type pagesAboutQuery = {|
  variables: pagesAboutQueryVariables,
  response: pagesAboutQueryResponse,
|};
*/


/*
query pagesAboutQuery {
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
  "name": "pagesAboutQuery",
  "id": null,
  "text": "query pagesAboutQuery {\n  ...Layout\n}\n\nfragment Layout on Query {\n  me {\n    ...AutoUpdater_user\n    id\n    username\n    displayName\n    photoURL\n  }\n}\n\nfragment AutoUpdater_user on User {\n  id\n  timeZone\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "pagesAboutQuery",
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
    "name": "pagesAboutQuery",
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
(node/*: any*/).hash = 'fce116a06c05d9820f0dac8ec06c290a';
module.exports = node;
