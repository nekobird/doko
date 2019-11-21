import {
  getEuclideanDistance,
} from '@nekobird/piko'

import {
  FullOffset,
} from './interfaces';

import {
  scrollLeft,
  scrollTop,
} from './shared';

export function getElementOffsetFromAnotherElement(from: HTMLElement, to: HTMLElement): FullOffset {
  const fromRect = from.getBoundingClientRect();
  const toRect   = to.getBoundingClientRect();

  const top    = getEuclideanDistance(fromRect.top,    toRect.top);
  const bottom = getEuclideanDistance(fromRect.bottom, toRect.bottom);

  const left  = getEuclideanDistance(fromRect.left,  toRect.left);
  const right = getEuclideanDistance(fromRect.right, toRect.right);

  return { top, bottom, left, right };
}

export function getElementOffsetFromDocument(element: HTMLElement): FullOffset {
  const rect = element.getBoundingClientRect();

  const top    = rect.top    + scrollTop();
  const bottom = rect.bottom + scrollTop();

  const left  = rect.left  + scrollLeft();
  const right = rect.right + scrollLeft();

  return { top, bottom, left, right };
}

export function getElementOffsetFromView(element: HTMLElement): FullOffset {
  const { top, bottom, left, right } = element.getBoundingClientRect();
  return { top, bottom, left, right };
}