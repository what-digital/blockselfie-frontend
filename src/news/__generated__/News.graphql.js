/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type News$ref: FragmentReference;
export type News = {|
  +stories: ?$ReadOnlyArray<?{|
    +id: string,
    +slug: string,
    +title: string,
    +text: string,
    +isURL: boolean,
    +createdAt: ?string,
    +author: {|
      +username: string,
      +displayName: ?string,
      +photoURL: ?string,
    |},
    +pointsCount: number,
    +pointGiven: boolean,
  |}>,
  +$refType: News$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "News",
  "type": "Query",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "stories",
      "storageKey": null,
      "args": null,
      "concreteType": "Story",
      "plural": true,
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
};
// prettier-ignore
(node/*: any*/).hash = '2cc4134b87328df57f1f95dcbf1ab43f';
module.exports = node;
