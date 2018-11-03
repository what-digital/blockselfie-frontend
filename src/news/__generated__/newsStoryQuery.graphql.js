/**
 * @flow
 * @relayHash 400c9bbc0fe3fc26bfc17e72cc83cde2
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Layout$ref = any;
type Story$ref = any;
export type newsStoryQueryVariables = {|
  slug: string
|};
export type newsStoryQueryResponse = {|
  +story: ?{|
    +title: string,
    +$fragmentRefs: Story$ref,
  |},
  +$fragmentRefs: Layout$ref,
|};
export type newsStoryQuery = {|
  variables: newsStoryQueryVariables,
  response: newsStoryQueryResponse,
|};
*/


/*
query newsStoryQuery(
  $slug: String!
) {
  ...Layout
  story(slug: $slug) {
    title
    ...Story
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

fragment Story on Story {
  title
  text
  isURL
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
    "name": "slug",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "slug",
    "variableName": "slug",
    "type": "String!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "title",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "newsStoryQuery",
  "id": null,
  "text": "query newsStoryQuery(\n  $slug: String!\n) {\n  ...Layout\n  story(slug: $slug) {\n    title\n    ...Story\n    id\n  }\n}\n\nfragment Layout on Query {\n  me {\n    ...AutoUpdater_user\n    id\n    username\n    displayName\n    photoURL\n  }\n}\n\nfragment Story on Story {\n  title\n  text\n  isURL\n}\n\nfragment AutoUpdater_user on User {\n  id\n  timeZone\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "newsStoryQuery",
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
        "name": "story",
        "storageKey": null,
        "args": v1,
        "concreteType": "Story",
        "plural": false,
        "selections": [
          v2,
          {
            "kind": "FragmentSpread",
            "name": "Story",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "newsStoryQuery",
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
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "story",
        "storageKey": null,
        "args": v1,
        "concreteType": "Story",
        "plural": false,
        "selections": [
          v2,
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "text",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "isURL",
            "args": null,
            "storageKey": null
          },
          v3
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '1ec435c9f170fbd82da49099b35c7182';
module.exports = node;
