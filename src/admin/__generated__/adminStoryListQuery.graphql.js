/**
 * @flow
 * @relayHash 3bd6c6bd55778441050f49ca4a9b5040
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type LayoutAdmin$ref = any;
type StoryListAdmin$ref = any;
export type adminStoryListQueryVariables = {||};
export type adminStoryListQueryResponse = {|
  +$fragmentRefs: LayoutAdmin$ref & StoryListAdmin$ref
|};
export type adminStoryListQuery = {|
  variables: adminStoryListQueryVariables,
  response: adminStoryListQueryResponse,
|};
*/


/*
query adminStoryListQuery {
  ...LayoutAdmin
  ...StoryListAdmin
}

fragment LayoutAdmin on Query {
  me {
    id
  }
}

fragment StoryListAdmin on Query {
  me {
    id
  }
}
*/

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "operationKind": "query",
  "name": "adminStoryListQuery",
  "id": null,
  "text": "query adminStoryListQuery {\n  ...LayoutAdmin\n  ...StoryListAdmin\n}\n\nfragment LayoutAdmin on Query {\n  me {\n    id\n  }\n}\n\nfragment StoryListAdmin on Query {\n  me {\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "adminStoryListQuery",
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
        "name": "StoryListAdmin",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "adminStoryListQuery",
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
(node/*: any*/).hash = '5962c9573ae61c34a636c42f50c81aec';
module.exports = node;
