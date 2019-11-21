[@nekobird/doko](../README.md) › [Globals](../globals.md) › ["traverse"](_traverse_.md)

# External module: "traverse"

## Index

### Interfaces

* [DOMTraverseExtractFunction](../interfaces/_traverse_.domtraverseextractfunction.md)
* [DOMTraverseInspectFunction](../interfaces/_traverse_.domtraverseinspectfunction.md)
* [DOMTraversePredicateFunction](../interfaces/_traverse_.domtraversepredicatefunction.md)

### Type aliases

* [DOMTraverseResult](_traverse_.md#domtraverseresult)

### Functions

* [ascendFrom](_traverse_.md#ascendfrom)
* [descendFrom](_traverse_.md#descendfrom)
* [findAncestor](_traverse_.md#findancestor)
* [findAncestorWithClass](_traverse_.md#findancestorwithclass)
* [findAncestorWithId](_traverse_.md#findancestorwithid)
* [findDescendant](_traverse_.md#finddescendant)
* [findDescendantWithClass](_traverse_.md#finddescendantwithclass)
* [findDescendantWithId](_traverse_.md#finddescendantwithid)
* [findNextSibling](_traverse_.md#findnextsibling)
* [findSibling](_traverse_.md#findsibling)
* [findSiblingWithClass](_traverse_.md#findsiblingwithclass)
* [getChildren](_traverse_.md#getchildren)
* [getNthChild](_traverse_.md#getnthchild)
* [getSiblings](_traverse_.md#getsiblings)
* [hasAncestor](_traverse_.md#hasancestor)
* [hasDescendant](_traverse_.md#hasdescendant)
* [mapDataFromChildren](_traverse_.md#mapdatafromchildren)
* [removeChild](_traverse_.md#removechild)
* [removeChildren](_traverse_.md#removechildren)

## Type aliases

###  DOMTraverseResult

Ƭ **DOMTraverseResult**: *Element | Element[] | null*

Defined in traverse.ts:22

## Functions

###  ascendFrom

▸ **ascendFrom**(`from`: Element, `inspect`: [DOMTraverseInspectFunction](../interfaces/_traverse_.domtraverseinspectfunction.md), `to`: Element): *void*

Defined in traverse.ts:24

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`from` | Element | - |
`inspect` | [DOMTraverseInspectFunction](../interfaces/_traverse_.domtraverseinspectfunction.md) | - |
`to` | Element |  document.documentElement |

**Returns:** *void*

___

###  descendFrom

▸ **descendFrom**(`from`: Element, `inspect`: [DOMTraverseInspectFunction](../interfaces/_traverse_.domtraverseinspectfunction.md)): *void*

Defined in traverse.ts:44

**Parameters:**

Name | Type |
------ | ------ |
`from` | Element |
`inspect` | [DOMTraverseInspectFunction](../interfaces/_traverse_.domtraverseinspectfunction.md) |

**Returns:** *void*

___

###  findAncestor

▸ **findAncestor**(`from`: Element, `identifyElement`: [DOMTraversePredicateFunction](../interfaces/_traverse_.domtraversepredicatefunction.md), `getAllMatchingAncestors`: boolean): *[DOMTraverseResult](_traverse_.md#domtraverseresult)*

Defined in traverse.ts:69

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`from` | Element | - |
`identifyElement` | [DOMTraversePredicateFunction](../interfaces/_traverse_.domtraversepredicatefunction.md) | - |
`getAllMatchingAncestors` | boolean | false |

**Returns:** *[DOMTraverseResult](_traverse_.md#domtraverseresult)*

___

###  findAncestorWithClass

▸ **findAncestorWithClass**(`from`: Element, `classNames`: string | string[], `getAllMatchingAncestors`: boolean): *[DOMTraverseResult](_traverse_.md#domtraverseresult)*

Defined in traverse.ts:150

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`from` | Element | - |
`classNames` | string &#124; string[] | - |
`getAllMatchingAncestors` | boolean | false |

**Returns:** *[DOMTraverseResult](_traverse_.md#domtraverseresult)*

___

###  findAncestorWithId

▸ **findAncestorWithId**(`from`: Element, `id`: string, `getAllMatchingAncestors`: boolean): *[DOMTraverseResult](_traverse_.md#domtraverseresult)*

Defined in traverse.ts:198

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`from` | Element | - |
`id` | string | - |
`getAllMatchingAncestors` | boolean | false |

**Returns:** *[DOMTraverseResult](_traverse_.md#domtraverseresult)*

___

###  findDescendant

▸ **findDescendant**(`from`: Element, `identifyElement`: [DOMTraversePredicateFunction](../interfaces/_traverse_.domtraversepredicatefunction.md), `getAllMatchingDescendants`: boolean): *[DOMTraverseResult](_traverse_.md#domtraverseresult)*

Defined in traverse.ts:108

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`from` | Element | - |
`identifyElement` | [DOMTraversePredicateFunction](../interfaces/_traverse_.domtraversepredicatefunction.md) | - |
`getAllMatchingDescendants` | boolean | false |

**Returns:** *[DOMTraverseResult](_traverse_.md#domtraverseresult)*

___

###  findDescendantWithClass

▸ **findDescendantWithClass**(`from`: Element, `classNames`: string | string[], `getAllMatchingDescendants`: boolean): *[DOMTraverseResult](_traverse_.md#domtraverseresult)*

Defined in traverse.ts:174

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`from` | Element | - |
`classNames` | string &#124; string[] | - |
`getAllMatchingDescendants` | boolean | false |

**Returns:** *[DOMTraverseResult](_traverse_.md#domtraverseresult)*

___

###  findDescendantWithId

▸ **findDescendantWithId**(`from`: Element, `id`: string, `getAllMatchingDescendants`: boolean): *[DOMTraverseResult](_traverse_.md#domtraverseresult)*

Defined in traverse.ts:208

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`from` | Element | - |
`id` | string | - |
`getAllMatchingDescendants` | boolean | false |

**Returns:** *[DOMTraverseResult](_traverse_.md#domtraverseresult)*

___

###  findNextSibling

▸ **findNextSibling**(`element`: Element, `identifyElement`: [DOMTraversePredicateFunction](../interfaces/_traverse_.domtraversepredicatefunction.md)): *Element | null*

Defined in traverse.ts:293

**Parameters:**

Name | Type |
------ | ------ |
`element` | Element |
`identifyElement` | [DOMTraversePredicateFunction](../interfaces/_traverse_.domtraversepredicatefunction.md) |

**Returns:** *Element | null*

___

###  findSibling

▸ **findSibling**(`element`: Element, `identifyElement`: [DOMTraversePredicateFunction](../interfaces/_traverse_.domtraversepredicatefunction.md), `getAllMatchingSiblings`: boolean): *[DOMTraverseResult](_traverse_.md#domtraverseresult)*

Defined in traverse.ts:259

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`element` | Element | - |
`identifyElement` | [DOMTraversePredicateFunction](../interfaces/_traverse_.domtraversepredicatefunction.md) | - |
`getAllMatchingSiblings` | boolean | true |

**Returns:** *[DOMTraverseResult](_traverse_.md#domtraverseresult)*

___

###  findSiblingWithClass

▸ **findSiblingWithClass**(`element`: Element, `classNames`: string | string[], `getAllMatchingSiblings`: boolean): *[DOMTraverseResult](_traverse_.md#domtraverseresult)*

Defined in traverse.ts:313

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`element` | Element | - |
`classNames` | string &#124; string[] | - |
`getAllMatchingSiblings` | boolean | false |

**Returns:** *[DOMTraverseResult](_traverse_.md#domtraverseresult)*

___

###  getChildren

▸ **getChildren**(`element`: Element, `identifyElement?`: [DOMTraversePredicateFunction](../interfaces/_traverse_.domtraversepredicatefunction.md)): *Element[]*

Defined in traverse.ts:337

**Parameters:**

Name | Type |
------ | ------ |
`element` | Element |
`identifyElement?` | [DOMTraversePredicateFunction](../interfaces/_traverse_.domtraversepredicatefunction.md) |

**Returns:** *Element[]*

___

###  getNthChild

▸ **getNthChild**(`n`: number | "last", `element`: Element, `identifyElement?`: [DOMTraversePredicateFunction](../interfaces/_traverse_.domtraversepredicatefunction.md)): *Element | null*

Defined in traverse.ts:350

**Parameters:**

Name | Type |
------ | ------ |
`n` | number &#124; "last" |
`element` | Element |
`identifyElement?` | [DOMTraversePredicateFunction](../interfaces/_traverse_.domtraversepredicatefunction.md) |

**Returns:** *Element | null*

___

###  getSiblings

▸ **getSiblings**(`element`: Element, `isExclusive`: boolean): *Element[] | null*

Defined in traverse.ts:242

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`element` | Element | - |
`isExclusive` | boolean | false |

**Returns:** *Element[] | null*

___

###  hasAncestor

▸ **hasAncestor**(`from`: Element, `options`: Element | [Elements](_interfaces_.md#elements)): *boolean*

Defined in traverse.ts:218

**Parameters:**

Name | Type |
------ | ------ |
`from` | Element |
`options` | Element &#124; [Elements](_interfaces_.md#elements) |

**Returns:** *boolean*

___

###  hasDescendant

▸ **hasDescendant**(`from`: Element, `options`: Element | [Elements](_interfaces_.md#elements)): *boolean*

Defined in traverse.ts:229

**Parameters:**

Name | Type |
------ | ------ |
`from` | Element |
`options` | Element &#124; [Elements](_interfaces_.md#elements) |

**Returns:** *boolean*

___

###  mapDataFromChildren

▸ **mapDataFromChildren**<**T**>(`element`: Element, `extractFunction`: [DOMTraverseExtractFunction](../interfaces/_traverse_.domtraverseextractfunction.md)‹T›, `identifyElement?`: [DOMTraversePredicateFunction](../interfaces/_traverse_.domtraversepredicatefunction.md)): *T[]*

Defined in traverse.ts:415

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`element` | Element |
`extractFunction` | [DOMTraverseExtractFunction](../interfaces/_traverse_.domtraverseextractfunction.md)‹T› |
`identifyElement?` | [DOMTraversePredicateFunction](../interfaces/_traverse_.domtraversepredicatefunction.md) |

**Returns:** *T[]*

___

###  removeChild

▸ **removeChild**(`element`: Element, `identifyElement`: [DOMTraversePredicateFunction](../interfaces/_traverse_.domtraversepredicatefunction.md)): *number*

Defined in traverse.ts:386

**Parameters:**

Name | Type |
------ | ------ |
`element` | Element |
`identifyElement` | [DOMTraversePredicateFunction](../interfaces/_traverse_.domtraversepredicatefunction.md) |

**Returns:** *number*

___

###  removeChildren

▸ **removeChildren**(`element`: Element): *number*

Defined in traverse.ts:374

**Parameters:**

Name | Type |
------ | ------ |
`element` | Element |

**Returns:** *number*
