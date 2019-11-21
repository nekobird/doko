[@nekobird/doko](../README.md) › [Globals](../globals.md) › ["viewport"](../modules/_viewport_.md) › [Viewport](_viewport_.viewport.md)

# Class: Viewport

## Hierarchy

* **Viewport**

## Index

### Accessors

* [centerPoint](_viewport_.viewport.md#static-centerpoint)
* [centerX](_viewport_.viewport.md#static-centerx)
* [centerY](_viewport_.viewport.md#static-centery)
* [diagonal](_viewport_.viewport.md#static-diagonal)
* [documentHeight](_viewport_.viewport.md#static-documentheight)
* [documentWidth](_viewport_.viewport.md#static-documentwidth)
* [hasHorizontalScrollBar](_viewport_.viewport.md#static-hashorizontalscrollbar)
* [hasVerticalScrollBar](_viewport_.viewport.md#static-hasverticalscrollbar)
* [height](_viewport_.viewport.md#static-height)
* [modelElement](_viewport_.viewport.md#static-private-modelelement)
* [modelIsCreated](_viewport_.viewport.md#static-private-modeliscreated)
* [modelIsReady](_viewport_.viewport.md#static-private-modelisready)
* [scrollingIsEnabled](_viewport_.viewport.md#static-scrollingisenabled)
* [scrollingIsLocked](_viewport_.viewport.md#static-scrollingislocked)
* [width](_viewport_.viewport.md#static-width)

### Methods

* [createModel](_viewport_.viewport.md#static-private-createmodel)
* [destroyModel](_viewport_.viewport.md#static-private-destroymodel)
* [disableScrolling](_viewport_.viewport.md#static-disablescrolling)
* [enableScrolling](_viewport_.viewport.md#static-enablescrolling)
* [getHorizontalPageScrollPercentage](_viewport_.viewport.md#static-gethorizontalpagescrollpercentage)
* [getVerticalPageScrollPercentage](_viewport_.viewport.md#static-getverticalpagescrollpercentage)
* [scrollTo](_viewport_.viewport.md#static-scrollto)
* [setScrollToggleElement](_viewport_.viewport.md#static-setscrolltoggleelement)

## Accessors

### `Static` centerPoint

• **get centerPoint**(): *[Point](../interfaces/_interfaces_.point.md)*

Defined in viewport.ts:150

**Returns:** *[Point](../interfaces/_interfaces_.point.md)*

___

### `Static` centerX

• **get centerX**(): *number*

Defined in viewport.ts:159

**Returns:** *number*

___

### `Static` centerY

• **get centerY**(): *number*

Defined in viewport.ts:165

**Returns:** *number*

___

### `Static` diagonal

• **get diagonal**(): *number*

Defined in viewport.ts:183

**Returns:** *number*

___

### `Static` documentHeight

• **get documentHeight**(): *number*

Defined in viewport.ts:206

**Returns:** *number*

___

### `Static` documentWidth

• **get documentWidth**(): *number*

Defined in viewport.ts:192

**Returns:** *number*

___

### `Static` hasHorizontalScrollBar

• **get hasHorizontalScrollBar**(): *boolean*

Defined in viewport.ts:142

**Returns:** *boolean*

___

### `Static` hasVerticalScrollBar

• **get hasVerticalScrollBar**(): *boolean*

Defined in viewport.ts:146

**Returns:** *boolean*

___

### `Static` height

• **get height**(): *number*

Defined in viewport.ts:177

**Returns:** *number*

___

### `Static` `Private` modelElement

• **get modelElement**(): *HTMLElement*

Defined in viewport.ts:230

**Returns:** *HTMLElement*

___

### `Static` `Private` modelIsCreated

• **get modelIsCreated**(): *boolean*

Defined in viewport.ts:240

**Returns:** *boolean*

___

### `Static` `Private` modelIsReady

• **get modelIsReady**(): *boolean*

Defined in viewport.ts:236

**Returns:** *boolean*

___

### `Static` scrollingIsEnabled

• **get scrollingIsEnabled**(): *boolean*

Defined in viewport.ts:57

**Returns:** *boolean*

___

### `Static` scrollingIsLocked

• **get scrollingIsLocked**(): *boolean*

Defined in viewport.ts:61

**Returns:** *boolean*

___

### `Static` width

• **get width**(): *number*

Defined in viewport.ts:171

**Returns:** *number*

## Methods

### `Static` `Private` createModel

▸ **createModel**(): *[Viewport](_viewport_.viewport.md)*

Defined in viewport.ts:244

**Returns:** *[Viewport](_viewport_.viewport.md)*

___

### `Static` `Private` destroyModel

▸ **destroyModel**(): *[Viewport](_viewport_.viewport.md)*

Defined in viewport.ts:258

**Returns:** *[Viewport](_viewport_.viewport.md)*

___

### `Static` disableScrolling

▸ **disableScrolling**(`isLocked`: boolean, `forceHideScrollbar`: boolean): *void*

Defined in viewport.ts:65

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`isLocked` | boolean | false |
`forceHideScrollbar` | boolean | false |

**Returns:** *void*

___

### `Static` enableScrolling

▸ **enableScrolling**(`unlock`: boolean): *void*

Defined in viewport.ts:103

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`unlock` | boolean | false |

**Returns:** *void*

___

### `Static` getHorizontalPageScrollPercentage

▸ **getHorizontalPageScrollPercentage**(): *number*

Defined in viewport.ts:220

**Returns:** *number*

___

### `Static` getVerticalPageScrollPercentage

▸ **getVerticalPageScrollPercentage**(): *number*

Defined in viewport.ts:224

**Returns:** *number*

___

### `Static` scrollTo

▸ **scrollTo**(`left`: number, `top`: number): *void*

Defined in viewport.ts:129

**Parameters:**

Name | Type |
------ | ------ |
`left` | number |
`top` | number |

**Returns:** *void*

___

### `Static` setScrollToggleElement

▸ **setScrollToggleElement**(`element`: HTMLElement): *void*

Defined in viewport.ts:46

**Parameters:**

Name | Type |
------ | ------ |
`element` | HTMLElement |

**Returns:** *void*
