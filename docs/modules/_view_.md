[@nekobird/doko](../README.md) › [Globals](../globals.md) › ["view"](_view_.md)

# External module: "view"

## Index

### Type aliases

* [DOMViewCornerNames](_view_.md#domviewcornernames)
* [DOMViewEdgeAndCornerNames](_view_.md#domviewedgeandcornernames)
* [DOMViewEdgeNames](_view_.md#domviewedgenames)

### Variables

* [DOMViewCornerNames](_view_.md#const-domviewcornernames)
* [DOMViewEdgeAndCornerNames](_view_.md#const-domviewedgeandcornernames)
* [DOMViewEdgeNames](_view_.md#const-domviewedgenames)

### Functions

* [elementIsClipping](_view_.md#elementisclipping)
* [elementIsClippingCorner](_view_.md#elementisclippingcorner)
* [elementIsClippingCornerOrEdge](_view_.md#elementisclippingcorneroredge)
* [elementIsClippingEdge](_view_.md#elementisclippingedge)
* [elementIsInView](_view_.md#elementisinview)
* [getElementHeightInView](_view_.md#getelementheightinview)
* [getElementWidthInView](_view_.md#getelementwidthinview)
* [getProportionOfElementHeightInView](_view_.md#getproportionofelementheightinview)
* [getProportionOfElementInView](_view_.md#getproportionofelementinview)
* [getProportionOfElementWidthInView](_view_.md#getproportionofelementwidthinview)

## Type aliases

###  DOMViewCornerNames

Ƭ **DOMViewCornerNames**: *"top-left" | "top-right" | "bottom-left" | "bottom-right"*

Defined in view.ts:5

___

###  DOMViewEdgeAndCornerNames

Ƭ **DOMViewEdgeAndCornerNames**: *[DOMViewCornerNames](_view_.md#domviewcornernames) | [DOMViewEdgeNames](_view_.md#domviewedgenames)*

Defined in view.ts:9

___

###  DOMViewEdgeNames

Ƭ **DOMViewEdgeNames**: *"top" | "bottom" | "left" | "right"*

Defined in view.ts:7

## Variables

### `Const` DOMViewCornerNames

• **DOMViewCornerNames**: *[DOMViewCornerNames](_view_.md#domviewcornernames)[]* =  [
  'top-left',
  'top-right',
  'bottom-left',
  'bottom-right',
]

Defined in view.ts:11

___

### `Const` DOMViewEdgeAndCornerNames

• **DOMViewEdgeAndCornerNames**: *[DOMViewEdgeAndCornerNames](_view_.md#domviewedgeandcornernames)[]* =  [
  ...DOMViewCornerNames,
  ...DOMViewEdgeNames,
]

Defined in view.ts:25

___

### `Const` DOMViewEdgeNames

• **DOMViewEdgeNames**: *[DOMViewEdgeNames](_view_.md#domviewedgenames)[]* =  [
  'top',
  'bottom',
  'left',
  'right',
]

Defined in view.ts:18

## Functions

###  elementIsClipping

▸ **elementIsClipping**(`element`: HTMLElement, `cornersOrEdges?`: [DOMViewEdgeAndCornerNames](_view_.md#domviewedgeandcornernames) | [DOMViewEdgeAndCornerNames](_view_.md#domviewedgeandcornernames)[]): *[DOMViewEdgeAndCornerNames](_view_.md#domviewedgeandcornernames) | null*

Defined in view.ts:114

**Parameters:**

Name | Type |
------ | ------ |
`element` | HTMLElement |
`cornersOrEdges?` | [DOMViewEdgeAndCornerNames](_view_.md#domviewedgeandcornernames) &#124; [DOMViewEdgeAndCornerNames](_view_.md#domviewedgeandcornernames)[] |

**Returns:** *[DOMViewEdgeAndCornerNames](_view_.md#domviewedgeandcornernames) | null*

___

###  elementIsClippingCorner

▸ **elementIsClippingCorner**(`element`: HTMLElement): *[DOMViewCornerNames](_view_.md#domviewcornernames) | null*

Defined in view.ts:158

**Parameters:**

Name | Type |
------ | ------ |
`element` | HTMLElement |

**Returns:** *[DOMViewCornerNames](_view_.md#domviewcornernames) | null*

___

###  elementIsClippingCornerOrEdge

▸ **elementIsClippingCornerOrEdge**(`element`: HTMLElement): *[DOMViewEdgeAndCornerNames](_view_.md#domviewedgeandcornernames) | null*

Defined in view.ts:182

**Parameters:**

Name | Type |
------ | ------ |
`element` | HTMLElement |

**Returns:** *[DOMViewEdgeAndCornerNames](_view_.md#domviewedgeandcornernames) | null*

___

###  elementIsClippingEdge

▸ **elementIsClippingEdge**(`element`: HTMLElement): *[DOMViewEdgeNames](_view_.md#domviewedgenames) | null*

Defined in view.ts:142

**Parameters:**

Name | Type |
------ | ------ |
`element` | HTMLElement |

**Returns:** *[DOMViewEdgeNames](_view_.md#domviewedgenames) | null*

___

###  elementIsInView

▸ **elementIsInView**(`element`: HTMLElement): *boolean*

Defined in view.ts:30

**Parameters:**

Name | Type |
------ | ------ |
`element` | HTMLElement |

**Returns:** *boolean*

___

###  getElementHeightInView

▸ **getElementHeightInView**(`element`: HTMLElement): *number*

Defined in view.ts:65

**Parameters:**

Name | Type |
------ | ------ |
`element` | HTMLElement |

**Returns:** *number*

___

###  getElementWidthInView

▸ **getElementWidthInView**(`element`: HTMLElement): *number*

Defined in view.ts:45

**Parameters:**

Name | Type |
------ | ------ |
`element` | HTMLElement |

**Returns:** *number*

___

###  getProportionOfElementHeightInView

▸ **getProportionOfElementHeightInView**(`element`: HTMLElement): *number*

Defined in view.ts:93

**Parameters:**

Name | Type |
------ | ------ |
`element` | HTMLElement |

**Returns:** *number*

___

###  getProportionOfElementInView

▸ **getProportionOfElementInView**(`element`: HTMLElement): *number*

Defined in view.ts:101

**Parameters:**

Name | Type |
------ | ------ |
`element` | HTMLElement |

**Returns:** *number*

___

###  getProportionOfElementWidthInView

▸ **getProportionOfElementWidthInView**(`element`: HTMLElement): *number*

Defined in view.ts:85

**Parameters:**

Name | Type |
------ | ------ |
`element` | HTMLElement |

**Returns:** *number*
