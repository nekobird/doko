[@nekobird/doko](../README.md) › [Globals](../globals.md) › ["point"](_point_.md)

# External module: "point"

## Index

### Interfaces

* [IdentifiyElementFunction](../interfaces/_point_.identifiyelementfunction.md)

### Functions

* [findElementFromPoint](_point_.md#findelementfrompoint)
* [getClosestChildFromPoints](_point_.md#getclosestchildfrompoints)
* [getClosestDistanceFromElementCornersToPoint](_point_.md#getclosestdistancefromelementcornerstopoint)
* [getDistanceFromElementCenterToPoint](_point_.md#getdistancefromelementcentertopoint)
* [getElementBottomPoints](_point_.md#getelementbottompoints)
* [getElementCenterPoint](_point_.md#getelementcenterpoint)
* [getElementCornerPoints](_point_.md#getelementcornerpoints)
* [getElementDiagonalPoints](_point_.md#getelementdiagonalpoints)
* [getElementLeftPoints](_point_.md#getelementleftpoints)
* [getElementOffsetFromPoint](_point_.md#getelementoffsetfrompoint)
* [getElementRightPoints](_point_.md#getelementrightpoints)
* [getElementTopPoints](_point_.md#getelementtoppoints)
* [isElementAbovePoints](_point_.md#iselementabovepoints)
* [isElementBelowPoints](_point_.md#iselementbelowpoints)
* [isElementCenterAbovePoints](_point_.md#iselementcenterabovepoints)
* [isElementCenterBelowPoints](_point_.md#iselementcenterbelowpoints)
* [pointIsInElement](_point_.md#pointisinelement)

## Functions

###  findElementFromPoint

▸ **findElementFromPoint**(`__namedParameters`: object, `identifiyElementFunction?`: [IdentifiyElementFunction](../interfaces/_point_.identifiyelementfunction.md), `getAll`: boolean): *HTMLElement | HTMLElement[] | false*

Defined in point.ts:215

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`x` | number |
`y` | number |

▪`Optional`  **identifiyElementFunction**: *[IdentifiyElementFunction](../interfaces/_point_.identifiyelementfunction.md)*

▪`Default value`  **getAll**: *boolean*= true

**Returns:** *HTMLElement | HTMLElement[] | false*

___

###  getClosestChildFromPoints

▸ **getClosestChildFromPoints**(`parent`: HTMLElement, `points`: [Point](../interfaces/_interfaces_.point.md) | [Point](../interfaces/_interfaces_.point.md)[], `identifiyElementFunction?`: [IdentifiyElementFunction](../interfaces/_point_.identifiyelementfunction.md)): *HTMLElement | false*

Defined in point.ts:255

**Parameters:**

Name | Type |
------ | ------ |
`parent` | HTMLElement |
`points` | [Point](../interfaces/_interfaces_.point.md) &#124; [Point](../interfaces/_interfaces_.point.md)[] |
`identifiyElementFunction?` | [IdentifiyElementFunction](../interfaces/_point_.identifiyelementfunction.md) |

**Returns:** *HTMLElement | false*

___

###  getClosestDistanceFromElementCornersToPoint

▸ **getClosestDistanceFromElementCornersToPoint**(`element`: HTMLElement, `point`: [Point](../interfaces/_interfaces_.point.md)): *number*

Defined in point.ts:188

**Parameters:**

Name | Type |
------ | ------ |
`element` | HTMLElement |
`point` | [Point](../interfaces/_interfaces_.point.md) |

**Returns:** *number*

___

###  getDistanceFromElementCenterToPoint

▸ **getDistanceFromElementCenterToPoint**(`element`: HTMLElement, `point`: [Point](../interfaces/_interfaces_.point.md)): *number*

Defined in point.ts:201

**Parameters:**

Name | Type |
------ | ------ |
`element` | HTMLElement |
`point` | [Point](../interfaces/_interfaces_.point.md) |

**Returns:** *number*

___

###  getElementBottomPoints

▸ **getElementBottomPoints**(`element`: HTMLElement): *[Point](../interfaces/_interfaces_.point.md)[]*

Defined in point.ts:69

**Parameters:**

Name | Type |
------ | ------ |
`element` | HTMLElement |

**Returns:** *[Point](../interfaces/_interfaces_.point.md)[]*

___

###  getElementCenterPoint

▸ **getElementCenterPoint**(`element`: HTMLElement): *[Point](../interfaces/_interfaces_.point.md)*

Defined in point.ts:42

**Parameters:**

Name | Type |
------ | ------ |
`element` | HTMLElement |

**Returns:** *[Point](../interfaces/_interfaces_.point.md)*

___

###  getElementCornerPoints

▸ **getElementCornerPoints**(`element`: HTMLElement): *[Point](../interfaces/_interfaces_.point.md)[]*

Defined in point.ts:31

**Parameters:**

Name | Type |
------ | ------ |
`element` | HTMLElement |

**Returns:** *[Point](../interfaces/_interfaces_.point.md)[]*

___

###  getElementDiagonalPoints

▸ **getElementDiagonalPoints**(`element`: HTMLElement): *[[Point](../interfaces/_interfaces_.point.md), [Point](../interfaces/_interfaces_.point.md)]*

Defined in point.ts:51

**Parameters:**

Name | Type |
------ | ------ |
`element` | HTMLElement |

**Returns:** *[[Point](../interfaces/_interfaces_.point.md), [Point](../interfaces/_interfaces_.point.md)]*

___

###  getElementLeftPoints

▸ **getElementLeftPoints**(`element`: HTMLElement): *[Point](../interfaces/_interfaces_.point.md)[]*

Defined in point.ts:78

**Parameters:**

Name | Type |
------ | ------ |
`element` | HTMLElement |

**Returns:** *[Point](../interfaces/_interfaces_.point.md)[]*

___

###  getElementOffsetFromPoint

▸ **getElementOffsetFromPoint**(`element`: HTMLElement, `__namedParameters`: object): *[Point](../interfaces/_interfaces_.point.md)*

Defined in point.ts:19

**Parameters:**

▪ **element**: *HTMLElement*

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`x` | number |
`y` | number |

**Returns:** *[Point](../interfaces/_interfaces_.point.md)*

___

###  getElementRightPoints

▸ **getElementRightPoints**(`element`: HTMLElement): *[Point](../interfaces/_interfaces_.point.md)[]*

Defined in point.ts:87

**Parameters:**

Name | Type |
------ | ------ |
`element` | HTMLElement |

**Returns:** *[Point](../interfaces/_interfaces_.point.md)[]*

___

###  getElementTopPoints

▸ **getElementTopPoints**(`element`: HTMLElement): *[Point](../interfaces/_interfaces_.point.md)[]*

Defined in point.ts:60

**Parameters:**

Name | Type |
------ | ------ |
`element` | HTMLElement |

**Returns:** *[Point](../interfaces/_interfaces_.point.md)[]*

___

###  isElementAbovePoints

▸ **isElementAbovePoints**(`element`: HTMLElement, `points`: [Point](../interfaces/_interfaces_.point.md) | [Point](../interfaces/_interfaces_.point.md)[], `offset`: number): *boolean*

Defined in point.ts:96

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`element` | HTMLElement | - |
`points` | [Point](../interfaces/_interfaces_.point.md) &#124; [Point](../interfaces/_interfaces_.point.md)[] | - |
`offset` | number | 0 |

**Returns:** *boolean*

___

###  isElementBelowPoints

▸ **isElementBelowPoints**(`element`: HTMLElement, `points`: [Point](../interfaces/_interfaces_.point.md) | [Point](../interfaces/_interfaces_.point.md)[], `offset`: number): *boolean*

Defined in point.ts:122

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`element` | HTMLElement | - |
`points` | [Point](../interfaces/_interfaces_.point.md) &#124; [Point](../interfaces/_interfaces_.point.md)[] | - |
`offset` | number | 0 |

**Returns:** *boolean*

___

###  isElementCenterAbovePoints

▸ **isElementCenterAbovePoints**(`element`: HTMLElement, `points`: [Point](../interfaces/_interfaces_.point.md) | [Point](../interfaces/_interfaces_.point.md)[], `offset`: number): *boolean*

Defined in point.ts:144

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`element` | HTMLElement | - |
`points` | [Point](../interfaces/_interfaces_.point.md) &#124; [Point](../interfaces/_interfaces_.point.md)[] | - |
`offset` | number | 0 |

**Returns:** *boolean*

___

###  isElementCenterBelowPoints

▸ **isElementCenterBelowPoints**(`element`: HTMLElement, `points`: [Point](../interfaces/_interfaces_.point.md) | [Point](../interfaces/_interfaces_.point.md)[], `offset`: number): *boolean*

Defined in point.ts:166

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`element` | HTMLElement | - |
`points` | [Point](../interfaces/_interfaces_.point.md) &#124; [Point](../interfaces/_interfaces_.point.md)[] | - |
`offset` | number | 0 |

**Returns:** *boolean*

___

###  pointIsInElement

▸ **pointIsInElement**(`__namedParameters`: object, `element`: HTMLElement): *boolean*

Defined in point.ts:209

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`x` | number |
`y` | number |

▪ **element**: *HTMLElement*

**Returns:** *boolean*
