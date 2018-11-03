/**
 * @flow
 * @relayHash 91920d9d1a1830a01c33f0d46bd12d9a
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type LayoutAdmin$ref = any;
type UserListAdmin$ref = any;
export type adminUserListQueryVariables = {||};
export type adminUserListQueryResponse = {|
  +$fragmentRefs: LayoutAdmin$ref & UserListAdmin$ref
|};
export type adminUserListQuery = {|
  variables: adminUserListQueryVariables,
  response: adminUserListQueryResponse,
|};
*/


/*
query adminUserListQuery {
  ...LayoutAdmin
  ...UserListAdmin
}

fragment LayoutAdmin on Query {
  me {
    id
  }
}

fragment UserListAdmin on Query {
  me {
    id
  }
}
*/

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "operationKind": "query",
  "name": "adminUserListQuery",
  "id": null,
  "text": "query adminUserListQuery {\n  ...LayoutAdmin\n  ...UserListAdmin\n}\n\nfragment LayoutAdmin on Query {\n  me {\n    id\n  }\n}\n\nfragment UserListAdmin on Query {\n  me {\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "adminUserListQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "LayoutAdmin",
        "args": null
      },
      {
        "kind": "FragmentSpread",
        "name": "UserListAdmin",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "adminUserListQuery",
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
          }
        ]
      }
    ]
  }
};
// prettier-ignore
(node/*: any*/).hash = '9ddf514e7e38b729b3420119a26d19b9';
module.exports = node;
