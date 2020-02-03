import {
  getMinimumBoundingRectangleFromElements,
} from './rectangle';

import {
  Offset,
} from './interfaces';

import {
  Viewport,
} from './viewport';

import {
  scrollLeft,
  scrollTop,
} from './shared';

export function getScrollLeftToElement(...elements: HTMLElement[]): number {
  const rect = elements.length > 1
    ? getMinimumBoundingRectangleFromElements(...elements)
    : elements[0].getBoundingClientRect();

  return rect
    ? rect.left + scrollLeft()
    : 0;
}

export function getScrollTopToElement(...elements: HTMLElement[]): number {
  const rect = elements.length > 1
    ? getMinimumBoundingRectangleFromElements(...elements)
    : elements[0].getBoundingClientRect();

  return rect
    ? rect.top + scrollTop()
    : 0;
}

export function getScrollLeftToElementsCenterFrame(...elements: HTMLElement[]): number {
  const rect = elements.length > 1
    ? getMinimumBoundingRectangleFromElements(...elements)
    : elements[0].getBoundingClientRect();

  const left  = rect ? rect.left  : 0;
  const width = rect ? rect.width : 0;

  return left - (Viewport.width - width) / width + scrollLeft();
}

export function getScrollTopToElementsCenterFrame(...elements: HTMLElement[]): number {
  const rect = elements.length > 1
    ? getMinimumBoundingRectangleFromElements(...elements)
    : elements[0].getBoundingClientRect();

  const top    = rect ? rect.top    : 0;
  const height = rect ? rect.height : 0;

  return top - (Viewport.height - height) / 2 + scrollTop();
}

export function getScrollToElementsCenterFrame(...elements: HTMLElement[]): Offset {
  return {
    left: getScrollLeftToElementsCenterFrame(...elements),
    top:  getScrollTopToElementsCenterFrame(...elements),
  };
}