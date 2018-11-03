/**
 * @flow
 * @relayHash 8e6f0bcd4a49be10d2d5a1ee88684ea7
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
export type UpdateUserMutationVariables = {|
  input: UpdateUserInput
|};
export type UpdateUserMutationResponse = {|
  +updateUser: ?{|
    +clientMutationId: ?string
  |}
|};
export type UpdateUserMutation = {|
  variables: UpdateUserMutationVariables,
  response: UpdateUserMutationResponse,
|};
*/


/*
mutation UpdateUserMutation(
  $input: UpdateUserInput!
) {
  updateUser(input: $input) {
    clientMutationId
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
        "kind": "ScalarField",
        "alias": null,
        "name": "clientMutationId",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "UpdateUserMutation",
  "id": null,
  "text": "mutation UpdateUserMutation(\n  $input: UpdateUserInput!\n) {\n  updateUser(input: $input) {\n    clientMutationId\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "UpdateUserMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "UpdateUserMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c907776ac285b247aef484569264da87';
module.exports = node;
