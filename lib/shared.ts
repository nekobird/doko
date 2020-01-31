import {
  hypotenuse,
  isNumber,
  isObject,
} from '@nekobird/piko';

import {
  Point,
  PointLike,
} from './interfaces';

export function scrollLeft(): number {
  return isNumber(window.pageXOffset)
    ? window.pageXOffset
    : document.documentElement.scrollLeft
      || document.body.scrollLeft
      || window.scrollX
      || 0;
}

export function scrollTop(): number {
  return isNumber(window.pageYOffset)
    ? window.pageYOffset
    : document.documentElement.scrollTop
      || document.body.scrollTop
      || window.scrollY
      || 0;
}

export function getLengthFromOrigin(point: PointLike): number {
  return hypotenuse(point.x, point.y);
}

export function getDistanceFromPointToPoint(from: PointLike, to: PointLike): number {
  return getLengthFromOrigin(subtractPoint(from, to, true));
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

export function isPointLike(point?: any): point is PointLike {
  return (
       isObject(point)
    && isNumber(point.x)
    && isNumber(point.y)
  );
}