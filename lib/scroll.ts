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

  let left = 0;
  let width = 0;

  if (rect) {
    left  = rect.left;
    width = rect.width;
  }

  return left - (Viewport.width - width) / width + scrollLeft();
}

export function getScrollTopToElementsCenterFrame(...elements: HTMLElement[]): number {
  const rect = elements.length > 1
    ? getMinimumBoundingRectangleFromElements(...elements)
    : elements[0].getBoundingClientRect();

  let top = 0;
  let height = 0;

  if (rect) {
    top = rect.top;
    height = rect.height;
  }

  return top - (Viewport.height - height) / 2 + scrollTop();
}

export function getScrollToElementsCenterFrame(...elements: HTMLElement[]): Offset {
  return {
    left: getScrollLeftToElementsCenterFrame(...elements),
    top:  getScrollTopToElementsCenterFrame(...elements),
  };
}