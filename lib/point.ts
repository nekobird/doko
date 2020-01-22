import {
  Point,
  PointLike,
} from './interfaces';

import {
  getEuclideanDistance,
} from '@nekobird/piko';

import {
  getDistanceFromPointToPoint,
} from './shared';

interface IdentifiyElementFunction {
  (element: HTMLElement): boolean;
}

// Point is relative to viewport. (clientX, clientY)
// Offset is relative to Point.
export function getElementOffsetFromPoint(
  element: HTMLElement,
  { x, y }: PointLike,
): Point {
  const { left, top } = element.getBoundingClientRect();

  return {
    x: getEuclideanDistance(left, x),
    y: getEuclideanDistance(top, y),
  };
}

export function getElementCornerPoints(element: HTMLElement): Point[] {
  const { top, bottom, left, right } = element.getBoundingClientRect();

  return [
    { x: left,  y: top},
    { x: left,  y: bottom},
    { x: right, y: top},
    { x: right, y: bottom},
  ];
}

export function getElementCenterPoint(element: HTMLElement): Point {
  const { left, top, width, height } = element.getBoundingClientRect();

  return {
    x: left + width  / 2,
    y: top  + height / 2,
  };
}

export function getElementDiagonalPoints(element: HTMLElement): [Point, Point] {
  const { top, bottom, left, right } = element.getBoundingClientRect();

  return [
    { x: left,  y: top},
    { x: right, y: bottom},
  ];
}

export function getElementTopPoints(element: HTMLElement): Point[] {
  const { left, right, top } = element.getBoundingClientRect();

  return [
    { x: left,  y: top },
    { x: right, y: top },
  ];
}

export function getElementBottomPoints(element: HTMLElement): Point[] {
  const { left, right, bottom } = element.getBoundingClientRect();

  return [
    { x: left,  y: bottom },
    { x: right, y: bottom },
  ];
}

export function getElementLeftPoints(element: HTMLElement): Point[] {
  const { left, top, bottom } = element.getBoundingClientRect();

  return [
    { x: left, y: top },
    { x: left, y: bottom },
  ];
}

export function getElementRightPoints(element: HTMLElement): Point[] {
  const { right, top, bottom } = element.getBoundingClientRect();

  return [
    { x: right, y: top },
    { x: right, y: bottom },
  ];
}

export function isElementAbovePoints(
  element: HTMLElement,
  points: PointLike | PointLike[],
  offset: number = 0,
) {
  const { bottom } = element.getBoundingClientRect();

  if (Array.isArray(points) === true) {
    let isAbovePoints = true;

    points = points as Point[];

    points.forEach(({ y }) => {
      if (bottom + offset < y === false) {
        isAbovePoints = false;
      }
    });

    return isAbovePoints;
  }

  const point = points as Point;

  return bottom + offset < point.y;
}

export function isElementBelowPoints(
  element: HTMLElement,
  points: PointLike | PointLike[],
  offset: number = 0,
) {
  const { top } = element.getBoundingClientRect();

  if (Array.isArray(points) === true) {
    let isBelowPoints = true;

    (points as Point[]).forEach(({ y }) => {
      if (top + offset > y === false) {
        isBelowPoints = false;
      }
    });

    return isBelowPoints;
  }

  return top + offset > (points as Point).y;
}

export function isElementCenterAbovePoints(
  element: HTMLElement,
  points: PointLike | PointLike[],
  offset: number = 0,
) {
  const centerPoint = getElementCenterPoint(element);

  if (Array.isArray(points) === true) {
    let isAbovePoint = true;

    (points as Point[]).forEach(({ y }) => {
      if (centerPoint.y + offset > y === false) {
        isAbovePoint = false;
      }
    });

    return isAbovePoint;
  }

  return centerPoint.y + offset > (points as Point).y;
}

export function isElementCenterBelowPoints(
  element: HTMLElement,
  points: PointLike | PointLike[],
  offset: number = 0,
) {
  const centerPoint = getElementCenterPoint(element);

  if (Array.isArray(points)) {
    let isBelowPoint = true;

    points.forEach(({ y }) => {
      if (centerPoint.y + offset < y === false) {
        isBelowPoint = false;
      }
    });

    return isBelowPoint;
  }

  return centerPoint.y + offset < points.y;
}

export function getClosestDistanceFromElementCornersToPoint(
  element: HTMLElement,
  point: PointLike,
): number {
  const corners = getElementCornerPoints(element);

  const distances = corners.map(corner => (
    getDistanceFromPointToPoint(corner, point)
  ));

  return Math.min(...distances);
}

export function getDistanceFromElementCenterToPoint(element: HTMLElement, point: Point): number {
  const centerPoint = getElementCenterPoint(element);

  return getDistanceFromPointToPoint(centerPoint, point);
}

// Point is relative to viewport. (clientX, clientY)

export function pointIsInElement(
  { x, y }: PointLike,
  element: HTMLElement
): boolean {
  return document
    .elementsFromPoint(x, y)
    .indexOf(element) !== -1;
}

export function findElementFromPoint(
  { x, y }: PointLike,
  identifiyElementFunction?: IdentifiyElementFunction,
  getAll: boolean = true,
): HTMLElement | HTMLElement[] | false {
  const elements = document.elementsFromPoint(x, y);

  if (elements.length === 0) {
    return false;
  }

  let identifyElement;

  identifyElement = typeof identifiyElementFunction === 'undefined'
    ? () => true
    : identifiyElementFunction;

  let results: HTMLElement[] = [];

  elements.forEach(element => {
    if (identifyElement(element) === true) {
      results.push(element as HTMLElement);
    }
  });

  if (results.length === 0) {
    return false;
  } else if (results.length === 1) {
    return results[0];
  }

  if (getAll === true) {
    return results;
  }

  return results[0];
}

export function getClosestChildFromPoints(
  parent: HTMLElement,
  points: PointLike | PointLike[],
  identifiyElementFunction?: IdentifiyElementFunction,
): HTMLElement | false {
  if (typeof identifiyElementFunction === 'undefined') {
    identifiyElementFunction = element => true;
  }

  const children = [...parent.children] as HTMLElement[];

  const selectedChildren = children.filter(identifiyElementFunction);

  if (selectedChildren.length === 0) {
    return false;
  }

  const distances = selectedChildren.map(item => {
    if (Array.isArray(points)) {
      const distances = points.map(
        point => getClosestDistanceFromElementCornersToPoint(item, point)
      );

      return Math.min(...distances);
    }

    return getClosestDistanceFromElementCornersToPoint(item, points);
  });

  const closesDistanceIndex = distances.indexOf(Math.min(...distances));

  return selectedChildren[closesDistanceIndex];
}