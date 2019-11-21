[@nekobird/doko](../README.md) › [Globals](../globals.md) › ["style"](_style_.md)

# External module: "style"

## Index

### Interfaces

* [StyleObject](../interfaces/_style_.styleobject.md)

### Functions

* [RemToPx](_style_.md#remtopx)
* [applyStyle](_style_.md#applystyle)
* [clearStyles](_style_.md#clearstyles)
* [copyStylesFrom](_style_.md#copystylesfrom)
* [getAnimationDelaysInSeconds](_style_.md#getanimationdelaysinseconds)
* [getAnimationDurationsInSeconds](_style_.md#getanimationdurationsinseconds)
* [getBaseFontSize](_style_.md#getbasefontsize)
* [getBoxSizing](_style_.md#getboxsizing)
* [getChildrenMaxAnimationDuration](_style_.md#getchildrenmaxanimationduration)
* [getFontSize](_style_.md#getfontsize)
* [getLineHeight](_style_.md#getlineheight)
* [getMaxAnimationDelayInSeconds](_style_.md#getmaxanimationdelayinseconds)
* [getMaxAnimationDurationInSeconds](_style_.md#getmaxanimationdurationinseconds)
* [getMaxAnimationDurationWithDelayInSeconds](_style_.md#getmaxanimationdurationwithdelayinseconds)
* [getMaxTransitionDelayInSeconds](_style_.md#getmaxtransitiondelayinseconds)
* [getMaxTransitionDurationInSeconds](_style_.md#getmaxtransitiondurationinseconds)
* [getMaxTransitionDurationWithDelayInSeconds](_style_.md#getmaxtransitiondurationwithdelayinseconds)
* [getParentsMaxAnimationDuration](_style_.md#getparentsmaxanimationduration)
* [getStyleValue](_style_.md#getstylevalue)
* [getStyleValues](_style_.md#getstylevalues)
* [getTransitionDelaysInSeconds](_style_.md#gettransitiondelaysinseconds)
* [getTransitionDurationsInSeconds](_style_.md#gettransitiondurationsinseconds)
* [removeStyles](_style_.md#removestyles)
* [setFontSize](_style_.md#setfontsize)

## Functions

###  RemToPx

▸ **RemToPx**(`rem`: number): *number*

Defined in style.ts:352

**Parameters:**

Name | Type |
------ | ------ |
`rem` | number |

**Returns:** *number*

___

###  applyStyle

▸ **applyStyle**(`element`: HTMLElement, `styleObject`: [StyleObject](../interfaces/_style_.styleobject.md)): *void*

Defined in style.ts:23

**Parameters:**

Name | Type |
------ | ------ |
`element` | HTMLElement |
`styleObject` | [StyleObject](../interfaces/_style_.styleobject.md) |

**Returns:** *void*

▸ **applyStyle**(`styleObject`: [StyleObject](../interfaces/_style_.styleobject.md), ...`elements`: HTMLElement[]): *void*

Defined in style.ts:28

**Parameters:**

Name | Type |
------ | ------ |
`styleObject` | [StyleObject](../interfaces/_style_.styleobject.md) |
`...elements` | HTMLElement[] |

**Returns:** *void*

___

###  clearStyles

▸ **clearStyles**(`element`: HTMLElement): *void*

Defined in style.ts:65

**Parameters:**

Name | Type |
------ | ------ |
`element` | HTMLElement |

**Returns:** *void*

___

###  copyStylesFrom

▸ **copyStylesFrom**(`from`: HTMLElement, `properties`: string | string[], ...`to`: HTMLElement[]): *void*

Defined in style.ts:69

**Parameters:**

Name | Type |
------ | ------ |
`from` | HTMLElement |
`properties` | string &#124; string[] |
`...to` | HTMLElement[] |

**Returns:** *void*

___

###  getAnimationDelaysInSeconds

▸ **getAnimationDelaysInSeconds**(`element`: HTMLElement): *number[]*

Defined in style.ts:89

**Parameters:**

Name | Type |
------ | ------ |
`element` | HTMLElement |

**Returns:** *number[]*

___

###  getAnimationDurationsInSeconds

▸ **getAnimationDurationsInSeconds**(`element`: HTMLElement): *number[]*

Defined in style.ts:101

**Parameters:**

Name | Type |
------ | ------ |
`element` | HTMLElement |

**Returns:** *number[]*

___

###  getBaseFontSize

▸ **getBaseFontSize**(): *number*

Defined in style.ts:113

**Returns:** *number*

___

###  getBoxSizing

▸ **getBoxSizing**(`element`: HTMLElement): *string*

Defined in style.ts:126

**Parameters:**

Name | Type |
------ | ------ |
`element` | HTMLElement |

**Returns:** *string*

___

###  getChildrenMaxAnimationDuration

▸ **getChildrenMaxAnimationDuration**(`from`: HTMLElement, `withDelay`: boolean): *number*

Defined in style.ts:130

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`from` | HTMLElement | - |
`withDelay` | boolean | false |

**Returns:** *number*

___

###  getFontSize

▸ **getFontSize**(`element`: HTMLElement): *number*

Defined in style.ts:158

**Parameters:**

Name | Type |
------ | ------ |
`element` | HTMLElement |

**Returns:** *number*

___

###  getLineHeight

▸ **getLineHeight**(`element`: HTMLElement): *number*

Defined in style.ts:162

**Parameters:**

Name | Type |
------ | ------ |
`element` | HTMLElement |

**Returns:** *number*

___

###  getMaxAnimationDelayInSeconds

▸ **getMaxAnimationDelayInSeconds**(`element`: HTMLElement): *number*

Defined in style.ts:201

**Parameters:**

Name | Type |
------ | ------ |
`element` | HTMLElement |

**Returns:** *number*

___

###  getMaxAnimationDurationInSeconds

▸ **getMaxAnimationDurationInSeconds**(`element`: HTMLElement): *number*

Defined in style.ts:205

**Parameters:**

Name | Type |
------ | ------ |
`element` | HTMLElement |

**Returns:** *number*

___

###  getMaxAnimationDurationWithDelayInSeconds

▸ **getMaxAnimationDurationWithDelayInSeconds**(`element`: HTMLElement): *number*

Defined in style.ts:209

**Parameters:**

Name | Type |
------ | ------ |
`element` | HTMLElement |

**Returns:** *number*

___

###  getMaxTransitionDelayInSeconds

▸ **getMaxTransitionDelayInSeconds**(`element`: HTMLElement): *number*

Defined in style.ts:217

**Parameters:**

Name | Type |
------ | ------ |
`element` | HTMLElement |

**Returns:** *number*

___

###  getMaxTransitionDurationInSeconds

▸ **getMaxTransitionDurationInSeconds**(`element`: HTMLElement): *number*

Defined in style.ts:221

**Parameters:**

Name | Type |
------ | ------ |
`element` | HTMLElement |

**Returns:** *number*

___

###  getMaxTransitionDurationWithDelayInSeconds

▸ **getMaxTransitionDurationWithDelayInSeconds**(`element`: HTMLElement): *number*

Defined in style.ts:225

**Parameters:**

Name | Type |
------ | ------ |
`element` | HTMLElement |

**Returns:** *number*

___

###  getParentsMaxAnimationDuration

▸ **getParentsMaxAnimationDuration**(`from`: HTMLElement, `withDelay`: boolean): *number*

Defined in style.ts:233

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`from` | HTMLElement | - |
`withDelay` | boolean | false |

**Returns:** *number*

___

###  getStyleValue

▸ **getStyleValue**(`element`: HTMLElement, `property`: string, `stringOnly`: boolean): *string | number*

Defined in style.ts:261

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`element` | HTMLElement | - |
`property` | string | - |
`stringOnly` | boolean | false |

**Returns:** *string | number*

___

###  getStyleValues

▸ **getStyleValues**(`element`: HTMLElement, `properties`: string | string[], `stringOnly`: boolean): *[StyleObject](../interfaces/_style_.styleobject.md)*

Defined in style.ts:282

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`element` | HTMLElement | - |
`properties` | string &#124; string[] | - |
`stringOnly` | boolean | false |

**Returns:** *[StyleObject](../interfaces/_style_.styleobject.md)*

___

###  getTransitionDelaysInSeconds

▸ **getTransitionDelaysInSeconds**(`element`: HTMLElement): *number[]*

Defined in style.ts:313

**Parameters:**

Name | Type |
------ | ------ |
`element` | HTMLElement |

**Returns:** *number[]*

___

###  getTransitionDurationsInSeconds

▸ **getTransitionDurationsInSeconds**(`element`: HTMLElement): *number[]*

Defined in style.ts:325

**Parameters:**

Name | Type |
------ | ------ |
`element` | HTMLElement |

**Returns:** *number[]*

___

###  removeStyles

▸ **removeStyles**(`element`: HTMLElement, `properties`: string | string[]): *void*

Defined in style.ts:337

**Parameters:**

Name | Type |
------ | ------ |
`element` | HTMLElement |
`properties` | string &#124; string[] |

**Returns:** *void*

___

###  setFontSize

▸ **setFontSize**(`element`: HTMLElement, `fontSize`: number, `unit`: string): *void*

Defined in style.ts:356

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`element` | HTMLElement | - |
`fontSize` | number | - |
`unit` | string | "px" |

**Returns:** *void*
