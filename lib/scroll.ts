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
  let rect;
  let left = 0;

  if (elements.length > 1) {
    rect = getMinimumBoundingRectangleFromElements(...elements);
  } else {
    rect = elements[0].getBoundingClientRect();
  }

  if (rect !== false) {
    left = rect.left;
  }

  return left + scrollLeft();
}

export function getScrollTopToElement(...elements: HTMLElement[]): number {
  let rect;
  let top = 0;

  if (elements.length > 1) {
    rect = getMinimumBoundingRectangleFromElements(...elements);
  } else {
    rect = elements[0].getBoundingClientRect();
  }

  if (rect !== false) {
    top = rect.top;
  }

  return top + scrollTop();
}

export function getScrollLeftToElementsCenterFrame(...elements: HTMLElement[]): number {
  let rect;
  let left = 0;
  let width = 0;

  if (elements.length > 1) {
    rect = getMinimumBoundingRectangleFromElements(...elements);
  } else {
    rect = elements[0].getBoundingClientRect();
  }

  if (rect !== false) {
    left = rect.left;
    width = rect.width;
  }

  return left - (Viewport.width - width) / 2 + scrollLeft();
}

export function getScrollTopToElementsCenterFrame(...elements: HTMLElement[]): number {
  let rect;
  let top = 0;
  let height = 0;

  if (elements.length > 1) {
    rect = getMinimumBoundingRectangleFromElements(...elements);
  } else {
    rect = elements[0].getBoundingClientRect();
  }

  if (rect !== false) {
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