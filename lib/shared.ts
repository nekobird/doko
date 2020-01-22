import {
  hypotenuse,
} from '@nekobird/piko';

import {
  Point,
  PointLike,
} from './interfaces';

export function scrollLeft(): number {
  if (typeof window.pageXOffset === 'number') {
    return window.pageXOffset;
  }

  return document.documentElement.scrollLeft
    || document.body.scrollLeft
    || window.scrollX
    || 0;
}

export function scrollTop(): number {
  if (typeof window.pageYOffset === 'number') {
    return window.pageYOffset;
  }

  return document.documentElement.scrollTop
    || document.body.scrollTop
    || window.scrollY
    || 0;
}

export function getLengthFromOrigin(point: PointLike): number {
  return hypotenuse(point.x, point.y);
}

export function getDistanceFromPointToPoint(from: PointLike, to: PointLike): number {
  const difference = subtractPoint(from, to, true);
  return getLengthFromOrigin(difference);
}

export function subtractPoint(
  from: PointLike,
  by: PointLike,
  mutate: boolean = false,
): Point {
  const x = from.x - by.x;
  const y = from.y - by.y;

  if (mutate) {
    from.x = x;
    from.y = y;
    return { ...from };
  }

  return { x, y };
}

export function isPointLike(point: any): point is PointLike {
  return (
    typeof point === 'object'
    && typeof point.x === 'number'
    && typeof point.y === 'number'
  );
}