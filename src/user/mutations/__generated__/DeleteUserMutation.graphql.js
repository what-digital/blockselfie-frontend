/**
 * @flow
 * @relayHash 5680dc4191779bc1802db6183fc1634c
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteUserInput = {
  id: string,
  clientMutationId?: ?string,
};
export type DeleteUserMutationVariables = {|
  input: DeleteUserInput
|};
export type DeleteUserMutationResponse = {|
  +deleteUser: ?{|
    +clientMutationId: ?string
  |}
|};
export type DeleteUserMutation = {|
  variables: DeleteUserMutationVariables,
  response: DeleteUserMutationResponse,
|};
*/


/*
mutation DeleteUserMutation(
  $input: DeleteUserInput!
) {
  deleteUser(input: $input) {
    clientMutationId
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "DeleteUserInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "deleteUser",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "DeleteUserInput!"
      }
    ],
    "concreteType": "DeleteUserPayload",
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
  "name": "DeleteUserMutation",
  "id": null,
  "text": "mutation DeleteUserMutation(\n  $input: DeleteUserInput!\n) {\n  deleteUser(input: $input) {\n    clientMutationId\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "DeleteUserMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "DeleteUserMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '4a541795e33c228b3e011002770520e3';
module.exports = node;
