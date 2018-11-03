/**
 * @flow
 * @relayHash 9a78f4e13ccdf5957a16ab421ccdc6c5
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdateUserInput = {
  id: string,
  username?: ?string,
  email?: ?string,
  displayName?: ?string,
  photoURL?: ?string,
  timeZone?: ?string,
  isAdmin?: ?boolean,
  validateOnly?: ?boolean,
  clientMutationId?: ?string,
};
export type AutoUpdaterMutationVariables = {|
  input: UpdateUserInput
|};
export type AutoUpdaterMutationResponse = {|
  +updateUser: ?{|
    +user: ?{|
      +id: string,
      +timeZone: ?string,
    |}
  |}
|};
export type AutoUpdaterMutation = {|
  variables: AutoUpdaterMutationVariables,
  response: AutoUpdaterMutationResponse,
|};
*/


/*
mutation AutoUpdaterMutation(
  $input: UpdateUserInput!
) {
  updateUser(input: $input) {
    user {
      id
      timeZone
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "UpdateUserInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "updateUser",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "UpdateUserInput!"
      }
    ],
    "concreteType": "UpdateUserPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "user",
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
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "AutoUpdaterMutation",
  "id": null,
  "text": "mutation AutoUpdaterMutation(\n  $input: UpdateUserInput!\n) {\n  updateUser(input: $input) {\n    user {\n      id\n      timeZone\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "AutoUpdaterMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "AutoUpdaterMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '970b6ade2a44cc82530e1f7f52397f83';
module.exports = node;
