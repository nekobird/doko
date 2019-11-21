[@nekobird/doko](../README.md) › [Globals](../globals.md) › ["image"](_image_.md)

# External module: "image"

## Index

### Interfaces

* [DOMImagePromiseValue](../interfaces/_image_.domimagepromisevalue.md)

### Functions

* [getImageSizeFromSource](_image_.md#getimagesizefromsource)
* [loadImageFromSource](_image_.md#loadimagefromsource)

## Functions

###  getImageSizeFromSource

▸ **getImageSizeFromSource**(`source`: string, `timeoutInSeconds`: number, `checkIntervalInMilliseconds`: number): *Promise‹[Size](../interfaces/_interfaces_.size.md)›*

Defined in image.ts:31

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`source` | string | - |
`timeoutInSeconds` | number | 1 |
`checkIntervalInMilliseconds` | number | 10 |

**Returns:** *Promise‹[Size](../interfaces/_interfaces_.size.md)›*

___

###  loadImageFromSource

▸ **loadImageFromSource**(`source`: string): *Promise‹[DOMImagePromiseValue](../interfaces/_image_.domimagepromisevalue.md)›*

Defined in image.ts:12

**Parameters:**

Name | Type |
------ | ------ |
`source` | string |

**Returns:** *Promise‹[DOMImagePromiseValue](../interfaces/_image_.domimagepromisevalue.md)›*
