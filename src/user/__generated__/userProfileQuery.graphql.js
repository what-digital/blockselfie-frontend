/**
 * @flow
 * @relayHash af26f96c335e57c46250f624fd9f5938
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Layout$ref = any;
type UserProfile$ref = any;
export type userProfileQueryVariables = {|
  username: string
|};
export type userProfileQueryResponse = {|
  +user: ?{|
    +displayName: ?string,
    +$fragmentRefs: UserProfile$ref,
  |},
  +$fragmentRefs: Layout$ref,
|};
export type userProfileQuery = {|
  variables: userProfileQueryVariables,
  response: userProfileQueryResponse,
|};
*/


/*
query userProfileQuery(
  $username: String!
) {
  ...Layout
  user(username: $username) {
    displayName
    ...UserProfile
    id
  }
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

fragment UserProfile on User {
  id
  username
  displayName
  photoURL
}

fragment AutoUpdater_user on User {
  id
  timeZone
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "username",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "username",
    "variableName": "username",
    "type": "String!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "displayName",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "username",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "photoURL",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "userProfileQuery",
  "id": null,
  "text": "query userProfileQuery(\n  $username: String!\n) {\n  ...Layout\n  user(username: $username) {\n    displayName\n    ...UserProfile\n    id\n  }\n}\n\nfragment Layout on Query {\n  me {\n    ...AutoUpdater_user\n    id\n    username\n    displayName\n    photoURL\n  }\n}\n\nfragment UserProfile on User {\n  id\n  username\n  displayName\n  photoURL\n}\n\nfragment AutoUpdater_user on User {\n  id\n  timeZone\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "userProfileQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "Layout",
        "args": null
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "user",
        "storageKey": null,
        "args": v1,
        "concreteType": "User",
        "plural": false,
        "selections": [
          v2,
          {
            "kind": "FragmentSpread",
            "name": "UserProfile",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "userProfileQuery",
    "argumentDefinitions": v0,
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
          v3,
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "timeZone",
            "args": null,
            "storageKey": null
          },
          v4,
          v2,
          v5
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "user",
        "storageKey": null,
        "args": v1,
        "concreteType": "User",
        "plural": false,
        "selections": [
          v2,
          v3,
          v4,
          v5
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '8d83d8aed776b59c6cb678787a4dc7c0';
module.exports = node;
