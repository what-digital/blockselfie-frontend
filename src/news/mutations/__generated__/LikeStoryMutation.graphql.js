/**
 * @flow
 * @relayHash 2e0c827b56c0ea2d5842539aac4a4538
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type LikeStoryInput = {
  id: string,
  clientMutationId?: ?string,
};
export type LikeStoryMutationVariables = {|
  input: LikeStoryInput
|};
export type LikeStoryMutationResponse = {|
  +likeStory: ?{|
    +story: ?{|
      +id: string,
      +pointsCount: number,
      +pointGiven: boolean,
    |}
  |}
|};
export type LikeStoryMutation = {|
  variables: LikeStoryMutationVariables,
  response: LikeStoryMutationResponse,
|};
*/


/*
mutation LikeStoryMutation(
  $input: LikeStoryInput!
) {
  likeStory(input: $input) {
    story {
      id
      pointsCount
      pointGiven
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "LikeStoryInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "likeStory",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "LikeStoryInput!"
      }
    ],
    "concreteType": "LikeStoryPayload",
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
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "pointsCount",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "pointGiven",
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
  "name": "LikeStoryMutation",
  "id": null,
  "text": "mutation LikeStoryMutation(\n  $input: LikeStoryInput!\n) {\n  likeStory(input: $input) {\n    story {\n      id\n      pointsCount\n      pointGiven\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "LikeStoryMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "LikeStoryMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '59c8122f3b664289dfda695a977e1003';
module.exports = node;
