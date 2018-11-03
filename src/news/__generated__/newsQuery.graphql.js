/**
 * @flow
 * @relayHash ca6deaf3de42919e955fc2751c726f09
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Layout$ref = any;
type News$ref = any;
export type newsQueryVariables = {||};
export type newsQueryResponse = {|
  +$fragmentRefs: Layout$ref & News$ref
|};
export type newsQuery = {|
  variables: newsQueryVariables,
  response: newsQueryResponse,
|};
*/


/*
query newsQuery {
  ...Layout
  ...News
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

fragment News on Query {
  stories {
    id
    slug
    title
    text
    isURL
    createdAt(format: "MMM Do, YYYY")
    author {
      username
      displayName
      photoURL
      id
    }
    pointsCount
    pointGiven
  }
}

fragment AutoUpdater_user on User {
  id
  timeZone
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "username",
  "args": null,
  "storageKey": null
},
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
  "name": "photoURL",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "newsQuery",
  "id": null,
  "text": "query newsQuery {\n  ...Layout\n  ...News\n}\n\nfragment Layout on Query {\n  me {\n    ...AutoUpdater_user\n    id\n    username\n    displayName\n    photoURL\n  }\n}\n\nfragment News on Query {\n  stories {\n    id\n    slug\n    title\n    text\n    isURL\n    createdAt(format: \"MMM Do, YYYY\")\n    author {\n      username\n      displayName\n      photoURL\n      id\n    }\n    pointsCount\n    pointGiven\n  }\n}\n\nfragment AutoUpdater_user on User {\n  id\n  timeZone\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "newsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "Layout",
        "args": null
      },
      {
        "kind": "FragmentSpread",
        "name": "News",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "newsQuery",
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
          v0,
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "timeZone",
            "args": null,
            "storageKey": null
          },
          v1,
          v2,
          v3
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "stories",
        "storageKey": null,
        "args": null,
        "concreteType": "Story",
        "plural": true,
        "selections": [
          v0,
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "slug",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "title",
            "args": null,
            "storageKey": null
          },
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
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "createdAt",
            "args": [
              {
                "kind": "Literal",
                "name": "format",
                "value": "MMM Do, YYYY",
                "type": "String"
              }
            ],
            "storageKey": "createdAt(format:\"MMM Do, YYYY\")"
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "author",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": [
              v1,
              v2,
              v3,
              v0
            ]
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
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c9c13dd6c6ffd6164f126996fa3d8da4';
module.exports = node;
