/**
 * @flow
 * @relayHash f3379dbde1f5fb277d08c53913244004
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateStoryInput = {
  title?: ?string,
  text?: ?string,
  validateOnly?: ?boolean,
  clientMutationId?: ?string,
};
export type CreateStoryMutationVariables = {|
  input: CreateStoryInput
|};
export type CreateStoryMutationResponse = {|
  +createStory: ?{|
    +story: ?{|
      +id: string
    |}
  |}
|};
export type CreateStoryMutation = {|
  variables: CreateStoryMutationVariables,
  response: CreateStoryMutationResponse,
|};
*/


/*
mutation CreateStoryMutation(
  $input: CreateStoryInput!
) {
  createStory(input: $input) {
    story {
      id
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "CreateStoryInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createStory",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "CreateStoryInput!"
      }
    ],
    "concreteType": "CreateStoryPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "story",
        "storageKey": null,
        "args": null,
        "concreteType": "Story",
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
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "CreateStoryMutation",
  "id": null,
  "text": "mutation CreateStoryMutation(\n  $input: CreateStoryInput!\n) {\n  createStory(input: $input) {\n    story {\n      id\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "CreateStoryMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateStoryMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a1044890af6c03f318a6f8f2ab389903';
module.exports = node;
