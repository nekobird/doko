// DOMBoxModel is helper function to get data on element box-model.
// Similar to: https://github.com/InlineManual/dom-box
import {
  getBoxSizing,
} from './style';

/**
 * 
 * @param element - Target Element.
 * @returns The total horizontal margin of the element.
 */
export function getTotalHorizontalMargins(element: HTMLElement): number {
  const { marginLeft, marginRight } = window.getComputedStyle(element);

  const left  = marginLeft  ? parseFloat(marginLeft)  : 0;
  const right = marginRight ? parseFloat(marginRight) : 0;

  return left + right;
}

export function getTotalVerticalMargins(element: HTMLElement): number {
  const { marginTop, marginBottom } = window.getComputedStyle(element);

  const top    = marginTop    ? parseFloat(marginTop)    : 0;
  const bottom = marginBottom ? parseFloat(marginBottom) : 0;

  return top + bottom;
}

export function getTotalHorizontalBorderWidths(element: HTMLElement): number {
  const { borderLeftWidth, borderRightWidth } = window.getComputedStyle(element);

  const left  = borderLeftWidth  ? parseFloat(borderLeftWidth)  : 0;
  const right = borderRightWidth ? parseFloat(borderRightWidth) : 0;

  return left + right;
}

export function getTotalVerticalBorderWidths(element: HTMLElement): number {
  const { borderTopWidth, borderBottomWidth } = window.getComputedStyle(element);

  const top    = borderTopWidth    ? parseFloat(borderTopWidth)    : 0;
  const bottom = borderBottomWidth ? parseFloat(borderBottomWidth) : 0;

  return top + bottom;
}

export function getTotalHorizontalPaddings(element: HTMLElement): number {
  const { paddingLeft, paddingRight } = window.getComputedStyle(element);

  const left  = paddingLeft  ? parseFloat(paddingLeft)  : 0;
  const right = paddingRight ? parseFloat(paddingRight) : 0;

  return left + right;
}

export function getTotalVerticalPaddings(element: HTMLElement): number {
  const { paddingTop, paddingBottom } = window.getComputedStyle(element);

  const top    = paddingTop    ? parseFloat(paddingTop)    : 0;
  const bottom = paddingBottom ? parseFloat(paddingBottom) : 0;

  return top + bottom;
}

export function getTotalHorizontalInnerSpace(element: HTMLElement): number {
  return getBoxSizing(element) === 'border-box'
    ? getTotalHorizontalPaddings(element) + getTotalHorizontalBorderWidths(element)
    : getTotalHorizontalPaddings(element);
}

export function getTotalVerticalInnerSpace(element: HTMLElement): number {
  return getBoxSizing(element) === 'border-box'
    ? getTotalVerticalPaddings(element) + getTotalVerticalBorderWidths(element)
    : getTotalVerticalPaddings(element);
}

export function getTotalHorizontalOuterSpace(element: HTMLElement): number {
  return getBoxSizing(element) === 'content-box'
    ? getTotalHorizontalMargins(element) + getTotalHorizontalBorderWidths(element)
    : getTotalHorizontalMargins(element);
}

export function getTotalVerticalOuterSpace(element: HTMLElement): number {
  return getBoxSizing(element) === 'content-box'
    ? getTotalVerticalMargins(element) + getTotalVerticalBorderWidths(element)
    : getTotalVerticalMargins(element);
}

export function getTotalHorizontalDimension(
  element: HTMLElement,
  includeTransform: boolean = false,
): number {
  let width = element.offsetWidth;

  if (includeTransform === true) {
    width = element.getBoundingClientRect().width;
  }

  return width + getTotalHorizontalOuterSpace(element);
}

export function getTotalVerticalDimension(
  element: HTMLElement,
  includeTransform: boolean = false,
): number {
  let height = element.offsetHeight;
  
  if (includeTransform === true) {
    height = element.getBoundingClientRect().height;
  }

  return height + getTotalVerticalOuterSpace(element);
}

export function getContentWidth(element: HTMLElement): number {
  return element.offsetWidth - getTotalHorizontalInnerSpace(element);
}

export function getContentHeight(element: HTMLElement): number {
  return element.offsetHeight - getTotalVerticalInnerSpace(element);
}