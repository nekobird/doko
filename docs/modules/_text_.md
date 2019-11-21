[@nekobird/doko](../README.md) › [Globals](../globals.md) › ["text"](_text_.md)

# External module: "text"

## Index

### Interfaces

* [StyleObject](../interfaces/_text_.styleobject.md)

### Variables

* [FONT_STYLE_PROPERTIES](_text_.md#const-font_style_properties)
* [STYLE_PROPERTIES](_text_.md#const-style_properties)

### Functions

* [getLastLine](_text_.md#getlastline)
* [getTextBoxHeightFromElement](_text_.md#gettextboxheightfromelement)
* [getTextBoxWidthFromElement](_text_.md#gettextboxwidthfromelement)
* [getTextFromElement](_text_.md#gettextfromelement)
* [setElementText](_text_.md#setelementtext)

### Object literals

* [TEXT_BOX_MODEL_ATTRIBUTES](_text_.md#const-text_box_model_attributes)

## Variables

### `Const` FONT_STYLE_PROPERTIES

• **FONT_STYLE_PROPERTIES**: *string[]* =  [
  'direction',
  'fontFamily',
  'fontSize',
  'fontSizeAdjust',
  'fontStyle',
  'fontVariant',
  'fontWeight',
  'letterSpacing',
  'lineHeight',
  'tabSize',
  'textAlign',
  'textDecoration',
  'textIndent',
  'textOverflow',
  'textTransform',
  'whiteSpace',
  'wordBreak',
  'wordSpacing',
  'wordWrap',
]

Defined in text.ts:59

___

### `Const` STYLE_PROPERTIES

• **STYLE_PROPERTIES**: *string[]* =  [
  'borderBottomStyle',
  'borderBottomWidth',
  'borderLeftStyle',
  'borderLeftWidth',
  'borderRightStyle',
  'borderRightWidth',
  'borderTopStyle',
  'borderTopWidth',
  'boxSizing',
  'height',
  'maxHeight',
  'maxWidth',
  'minHeight',
  'minWidth',
  'paddingBottom',
  'paddingLeft',
  'paddingRight',
  'paddingTop',
  'width',
]

Defined in text.ts:37

## Functions

###  getLastLine

▸ **getLastLine**(`element`: HTMLElement): *string*

Defined in text.ts:236

**Parameters:**

Name | Type |
------ | ------ |
`element` | HTMLElement |

**Returns:** *string*

___

###  getTextBoxHeightFromElement

▸ **getTextBoxHeightFromElement**(`element`: HTMLElement, `text`: string | null, `transformTextHook`: function | null, `styleOverride`: [StyleObject](../interfaces/_text_.styleobject.md) | null): *number*

Defined in text.ts:86

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`element` | HTMLElement | - |
`text` | string &#124; null |  null |
`transformTextHook` | function &#124; null |  null |
`styleOverride` | [StyleObject](../interfaces/_text_.styleobject.md) &#124; null |  null |

**Returns:** *number*

___

###  getTextBoxWidthFromElement

▸ **getTextBoxWidthFromElement**(`element`: HTMLElement, `text`: string | null, `transformTextHook`: function | null, `styleOverride`: [StyleObject](../interfaces/_text_.styleobject.md) | null): *number*

Defined in text.ts:147

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`element` | HTMLElement | - |
`text` | string &#124; null |  null |
`transformTextHook` | function &#124; null |  null |
`styleOverride` | [StyleObject](../interfaces/_text_.styleobject.md) &#124; null |  null |

**Returns:** *number*

___

###  getTextFromElement

▸ **getTextFromElement**(`element`: HTMLElement): *string*

Defined in text.ts:214

**Parameters:**

Name | Type |
------ | ------ |
`element` | HTMLElement |

**Returns:** *string*

___

###  setElementText

▸ **setElementText**(`element`: HTMLElement, `text`: string): *void*

Defined in text.ts:226

**Parameters:**

Name | Type |
------ | ------ |
`element` | HTMLElement |
`text` | string |

**Returns:** *void*

## Object literals

### `Const` TEXT_BOX_MODEL_ATTRIBUTES

### ▪ **TEXT_BOX_MODEL_ATTRIBUTES**: *object*

Defined in text.ts:20

###  border

• **border**: *string* = "none"

Defined in text.ts:21

###  height

• **height**: *string* = "0"

Defined in text.ts:22

###  left

• **left**: *string* = "0"

Defined in text.ts:23

###  overflowWrap

• **overflowWrap**: *string* = "normal"

Defined in text.ts:24

###  overflowX

• **overflowX**: *string* = "hidden"

Defined in text.ts:25

###  overflowY

• **overflowY**: *string* = "hidden"

Defined in text.ts:26

###  padding

• **padding**: *string* = "0"

Defined in text.ts:27

###  position

• **position**: *string* = "fixed"

Defined in text.ts:28

###  resize

• **resize**: *string* = "none"

Defined in text.ts:29

###  top

• **top**: *string* = "0"

Defined in text.ts:30

###  visibility

• **visibility**: *string* = "hidden"

Defined in text.ts:31

###  whiteSpace

• **whiteSpace**: *string* = "nowrap"

Defined in text.ts:32

###  width

• **width**: *string* = "0"

Defined in text.ts:33

###  zIndex

• **zIndex**: *string* = "-9999"

Defined in text.ts:34
