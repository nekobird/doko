[@nekobird/doko](../README.md) › [Globals](../globals.md) › ["align-offset"](_align_offset_.md)

# External module: "align-offset"

## Index

### Type aliases

* [DOMAlignOffsetReferenceCornerNames](_align_offset_.md#domalignoffsetreferencecornernames)
* [DOMAlignOffsetReferenceEdgeNames](_align_offset_.md#domalignoffsetreferenceedgenames)
* [DOMAlignOffsetReferencePointNames](_align_offset_.md#domalignoffsetreferencepointnames)
* [OffsetRelation](_align_offset_.md#offsetrelation)

### Variables

* [DOMAlignOffsetReferenceCornerNames](_align_offset_.md#const-domalignoffsetreferencecornernames)
* [DOMAlignOffsetReferenceEdgeNames](_align_offset_.md#const-domalignoffsetreferenceedgenames)
* [DOMAlignOffsetReferencePointNames](_align_offset_.md#const-domalignoffsetreferencepointnames)
* [DOMAlignOffsetReferencePointRotation](_align_offset_.md#const-domalignoffsetreferencepointrotation)

### Functions

* [applySpacingToOffset](_align_offset_.md#applyspacingtooffset)
* [calculateCornerSpacing](_align_offset_.md#calculatecornerspacing)
* [getComplementaryReferencePoint](_align_offset_.md#getcomplementaryreferencepoint)
* [getElementOffset](_align_offset_.md#getelementoffset)
* [getOffsetFromTargeReferencePointToOrigin](_align_offset_.md#getoffsetfromtargereferencepointtoorigin)
* [getReferencePointFromRotation](_align_offset_.md#getreferencepointfromrotation)
* [getTargetAlignment](_align_offset_.md#gettargetalignment)
* [getTargetAlignmentToPoint](_align_offset_.md#gettargetalignmenttopoint)
* [getTargetAlignmentToView](_align_offset_.md#gettargetalignmenttoview)
* [getViewOffset](_align_offset_.md#getviewoffset)
* [transformOffsetRelativeTo](_align_offset_.md#transformoffsetrelativeto)

## Type aliases

###  DOMAlignOffsetReferenceCornerNames

Ƭ **DOMAlignOffsetReferenceCornerNames**: *"top-left" | "top-right" | "bottom-left" | "bottom-right"*

Defined in align-offset.ts:24

___

###  DOMAlignOffsetReferenceEdgeNames

Ƭ **DOMAlignOffsetReferenceEdgeNames**: *"top" | "left" | "right" | "bottom"*

Defined in align-offset.ts:26

___

###  DOMAlignOffsetReferencePointNames

Ƭ **DOMAlignOffsetReferencePointNames**: *"center" | [DOMAlignOffsetReferenceCornerNames](_align_offset_.md#domalignoffsetreferencecornernames) | [DOMAlignOffsetReferenceEdgeNames](_align_offset_.md#domalignoffsetreferenceedgenames)*

Defined in align-offset.ts:28

___

###  OffsetRelation

Ƭ **OffsetRelation**: *"viewport" | "document" | HTMLElement*

Defined in align-offset.ts:60

## Variables

### `Const` DOMAlignOffsetReferenceCornerNames

• **DOMAlignOffsetReferenceCornerNames**: *[DOMAlignOffsetReferenceCornerNames](_align_offset_.md#domalignoffsetreferencecornernames)[]* =  [
  'top-left',
  'top-right',
  'bottom-left',
  'bottom-right',
]

Defined in align-offset.ts:30

___

### `Const` DOMAlignOffsetReferenceEdgeNames

• **DOMAlignOffsetReferenceEdgeNames**: *[DOMAlignOffsetReferenceEdgeNames](_align_offset_.md#domalignoffsetreferenceedgenames)[]* =  [
  'top',
  'bottom',
  'left',
  'right',
]

Defined in align-offset.ts:37

___

### `Const` DOMAlignOffsetReferencePointNames

• **DOMAlignOffsetReferencePointNames**: *[DOMAlignOffsetReferencePointNames](_align_offset_.md#domalignoffsetreferencepointnames)[]* =  [
  'center',
  ...DOMAlignOffsetReferenceCornerNames,
  ...DOMAlignOffsetReferenceEdgeNames,
]

Defined in align-offset.ts:44

___

### `Const` DOMAlignOffsetReferencePointRotation

• **DOMAlignOffsetReferencePointRotation**: *[DOMAlignOffsetReferencePointNames](_align_offset_.md#domalignoffsetreferencepointnames)[]* =  [
  'top-left',
  'top',
  'top-right',
  'right',
  'bottom-right',
  'bottom',
  'bottom-left',
]

Defined in align-offset.ts:50

## Functions

###  applySpacingToOffset

▸ **applySpacingToOffset**(`offset`: [Offset](../interfaces/_interfaces_.offset.md), `referencePoint`: [DOMAlignOffsetReferencePointNames](_align_offset_.md#domalignoffsetreferencepointnames), `spacing`: number): *[Offset](../interfaces/_interfaces_.offset.md)*

Defined in align-offset.ts:340

**Parameters:**

Name | Type |
------ | ------ |
`offset` | [Offset](../interfaces/_interfaces_.offset.md) |
`referencePoint` | [DOMAlignOffsetReferencePointNames](_align_offset_.md#domalignoffsetreferencepointnames) |
`spacing` | number |

**Returns:** *[Offset](../interfaces/_interfaces_.offset.md)*

___

###  calculateCornerSpacing

▸ **calculateCornerSpacing**(`spacing`: number): *number*

Defined in align-offset.ts:410

**Parameters:**

Name | Type |
------ | ------ |
`spacing` | number |

**Returns:** *number*

___

###  getComplementaryReferencePoint

▸ **getComplementaryReferencePoint**(`referencePoint`: [DOMAlignOffsetReferencePointNames](_align_offset_.md#domalignoffsetreferencepointnames)): *[DOMAlignOffsetReferencePointNames](_align_offset_.md#domalignoffsetreferencepointnames)*

Defined in align-offset.ts:114

**Parameters:**

Name | Type |
------ | ------ |
`referencePoint` | [DOMAlignOffsetReferencePointNames](_align_offset_.md#domalignoffsetreferencepointnames) |

**Returns:** *[DOMAlignOffsetReferencePointNames](_align_offset_.md#domalignoffsetreferencepointnames)*

___

###  getElementOffset

▸ **getElementOffset**(`element`: HTMLElement, `referencePoint`: [DOMAlignOffsetReferencePointNames](_align_offset_.md#domalignoffsetreferencepointnames)): *[Offset](../interfaces/_interfaces_.offset.md)*

Defined in align-offset.ts:173

**Parameters:**

Name | Type |
------ | ------ |
`element` | HTMLElement |
`referencePoint` | [DOMAlignOffsetReferencePointNames](_align_offset_.md#domalignoffsetreferencepointnames) |

**Returns:** *[Offset](../interfaces/_interfaces_.offset.md)*

___

###  getOffsetFromTargeReferencePointToOrigin

▸ **getOffsetFromTargeReferencePointToOrigin**(`target`: HTMLElement, `referencePoint`: [DOMAlignOffsetReferencePointNames](_align_offset_.md#domalignoffsetreferencepointnames)): *[Offset](../interfaces/_interfaces_.offset.md)*

Defined in align-offset.ts:305

**Parameters:**

Name | Type |
------ | ------ |
`target` | HTMLElement |
`referencePoint` | [DOMAlignOffsetReferencePointNames](_align_offset_.md#domalignoffsetreferencepointnames) |

**Returns:** *[Offset](../interfaces/_interfaces_.offset.md)*

___

###  getReferencePointFromRotation

▸ **getReferencePointFromRotation**(`from`: [DOMAlignOffsetReferencePointNames](_align_offset_.md#domalignoffsetreferencepointnames), `offset`: number): *[DOMAlignOffsetReferencePointNames](_align_offset_.md#domalignoffsetreferencepointnames)*

Defined in align-offset.ts:156

**Parameters:**

Name | Type |
------ | ------ |
`from` | [DOMAlignOffsetReferencePointNames](_align_offset_.md#domalignoffsetreferencepointnames) |
`offset` | number |

**Returns:** *[DOMAlignOffsetReferencePointNames](_align_offset_.md#domalignoffsetreferencepointnames)*

___

###  getTargetAlignment

▸ **getTargetAlignment**(`target`: HTMLElement, `targetReferencePoint`: [DOMAlignOffsetReferencePointNames](_align_offset_.md#domalignoffsetreferencepointnames), `anchor`: HTMLElement, `anchorReferencePoint`: [DOMAlignOffsetReferencePointNames](_align_offset_.md#domalignoffsetreferencepointnames), `relativeTo`: [OffsetRelation](_align_offset_.md#offsetrelation)): *[Offset](../interfaces/_interfaces_.offset.md)*

Defined in align-offset.ts:62

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`target` | HTMLElement | - |
`targetReferencePoint` | [DOMAlignOffsetReferencePointNames](_align_offset_.md#domalignoffsetreferencepointnames) | - |
`anchor` | HTMLElement | - |
`anchorReferencePoint` | [DOMAlignOffsetReferencePointNames](_align_offset_.md#domalignoffsetreferencepointnames) | - |
`relativeTo` | [OffsetRelation](_align_offset_.md#offsetrelation) | "viewport" |

**Returns:** *[Offset](../interfaces/_interfaces_.offset.md)*

___

###  getTargetAlignmentToPoint

▸ **getTargetAlignmentToPoint**(`target`: HTMLElement, `targetReferencePoint`: [DOMAlignOffsetReferencePointNames](_align_offset_.md#domalignoffsetreferencepointnames), `point`: [Point](../interfaces/_interfaces_.point.md), `relativeTo`: [OffsetRelation](_align_offset_.md#offsetrelation)): *[Offset](../interfaces/_interfaces_.offset.md)*

Defined in align-offset.ts:80

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`target` | HTMLElement | - |
`targetReferencePoint` | [DOMAlignOffsetReferencePointNames](_align_offset_.md#domalignoffsetreferencepointnames) | - |
`point` | [Point](../interfaces/_interfaces_.point.md) | - |
`relativeTo` | [OffsetRelation](_align_offset_.md#offsetrelation) | "viewport" |

**Returns:** *[Offset](../interfaces/_interfaces_.offset.md)*

___

###  getTargetAlignmentToView

▸ **getTargetAlignmentToView**(`target`: HTMLElement, `targetReferencePoint`: [DOMAlignOffsetReferencePointNames](_align_offset_.md#domalignoffsetreferencepointnames), `viewReferencePoint`: [DOMAlignOffsetReferencePointNames](_align_offset_.md#domalignoffsetreferencepointnames), `relativeTo`: [OffsetRelation](_align_offset_.md#offsetrelation)): *[Offset](../interfaces/_interfaces_.offset.md)*

Defined in align-offset.ts:96

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`target` | HTMLElement | - |
`targetReferencePoint` | [DOMAlignOffsetReferencePointNames](_align_offset_.md#domalignoffsetreferencepointnames) | - |
`viewReferencePoint` | [DOMAlignOffsetReferencePointNames](_align_offset_.md#domalignoffsetreferencepointnames) | - |
`relativeTo` | [OffsetRelation](_align_offset_.md#offsetrelation) | "viewport" |

**Returns:** *[Offset](../interfaces/_interfaces_.offset.md)*

___

###  getViewOffset

▸ **getViewOffset**(`referencePoint`: [DOMAlignOffsetReferencePointNames](_align_offset_.md#domalignoffsetreferencepointnames)): *[Offset](../interfaces/_interfaces_.offset.md)*

Defined in align-offset.ts:244

**Parameters:**

Name | Type |
------ | ------ |
`referencePoint` | [DOMAlignOffsetReferencePointNames](_align_offset_.md#domalignoffsetreferencepointnames) |

**Returns:** *[Offset](../interfaces/_interfaces_.offset.md)*

___

###  transformOffsetRelativeTo

▸ **transformOffsetRelativeTo**(`offset`: [Offset](../interfaces/_interfaces_.offset.md), `to`: [OffsetRelation](_align_offset_.md#offsetrelation)): *[Offset](../interfaces/_interfaces_.offset.md)*

Defined in align-offset.ts:319

**Parameters:**

Name | Type |
------ | ------ |
`offset` | [Offset](../interfaces/_interfaces_.offset.md) |
`to` | [OffsetRelation](_align_offset_.md#offsetrelation) |

**Returns:** *[Offset](../interfaces/_interfaces_.offset.md)*
