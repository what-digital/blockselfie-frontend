/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type AutoUpdater_user$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type Layout$ref: FragmentReference;
export type Layout = {|
  +me: ?{|
    +id: string,
    +username: string,
    +displayName: ?string,
    +photoURL: ?string,
    +$fragmentRefs: AutoUpdater_user$ref,
  |},
  +$refType: Layout$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "Layout",
  "type": "Query",
  "metadata": null,
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
          "kind": "FragmentSpread",
          "name": "AutoUpdater_user",
          "args": null
        },
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
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '8acd7ca823629d9ba5bf2dd784d97b13';
module.exports = node;
