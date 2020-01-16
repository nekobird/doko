import {
  Elements,
} from './interfaces';

import {
  isHTMLElement,
  toElementArray,
} from './util';

export interface DOMTraverseInspectFunction {
  (element: Element): true | void;
}

export interface DOMTraversePredicateFunction {
  (element: Element): boolean;
}

export interface DOMTraverseExtractFunction<T> {
  (child: Element): T | void;
}

export type DOMTraverseResult = Element | Element[] | null;

export function ascendFrom(
  from: Element,
  inspect: DOMTraverseInspectFunction,
  to: Element = document.documentElement,
): void {
  let element: Element | null = from;

  while (
    element
    && element !== to
    && element !== document.documentElement
  ) {
    if (inspect(element) === true) {
      break;
    }

    element = element.parentElement;
  }
}

export function descendFrom(
  from: Element,
  inspect: DOMTraverseInspectFunction,
): void {
  const descent = (element: Element) => {
    const children = element.children;

    if (children.length > 0) {
      for (let i = 0; i < children.length; i++) {
        const child = children[i];

        if (inspect(child) === true) {
          break;
        }

        if (child.children.length > 0) {
          descent(child);
        }
      }
    }
  };

  descent(from);
}

export function findAncestor(
  from: Element,
  identifyElement: DOMTraversePredicateFunction,
  getAllMatchingAncestors: boolean = false,
): DOMTraverseResult {
  const results: Element[] = [];

  if (isHTMLElement(from) === false) {
    return null;
  }

  if (identifyElement(from) === true) {
    results.push(from);
  }

  let element: Element | null = from;

  while (
    element
    && element !== document.documentElement
  ) {
    if (identifyElement(element) === true) {
      results.push(element);

      if (getAllMatchingAncestors === false) {
        break;
      }
    }

    element = element.parentElement;
  }

  if (results.length > 0) {
    return getAllMatchingAncestors === true ? results : results[0];
  }

  return null;
}

export function findDescendant(
  from: Element,
  identifyElement: DOMTraversePredicateFunction,
  getAllMatchingDescendants: boolean = false,
): DOMTraverseResult {
  const results: Element[] = [];

  if (identifyElement(from) === true) {
    results.push(from);
  }

  const descent = (element: Element) => {
    const children = element.children;

    if (children.length > 0) {
      for (let i = 0; i < children.length; i++) {
        const child = children[i];

        if (identifyElement(child) === true) {
          results.push(child);

          if (getAllMatchingDescendants === false) {
            break;
          }
        }

        if (child.children.length > 0) {
          descent(child);
        }
      }
    }
  };

  descent(from);

  if (results.length > 0) {
    return getAllMatchingDescendants === true ? results : results[0];
  }

  return null;
}

export function findAncestorWithClass(
  from: Element,
  classNames: string | string[],
  getAllMatchingAncestors: boolean = false,
): DOMTraverseResult {
  let identifyElement;

  if (typeof classNames === 'string') {
    identifyElement = element => element.classList.contains(classNames);
  } else if (Array.isArray(classNames) === true) {
    identifyElement = element => {
      for (let i = 0; i < classNames.length; i++) {
        if (element.classList.contains(classNames[i]) === true) {
          return true;
        }
      }

      return false;
    };
  }

  return findAncestor(from, identifyElement, getAllMatchingAncestors);
}

export function findDescendantWithClass(
  from: Element,
  classNames: string | string[],
  getAllMatchingDescendants: boolean = false,
): DOMTraverseResult {
  let identifyElement;

  if (typeof classNames === 'string') {
    identifyElement = element => element.classList.contains(classNames);
  } else if (Array.isArray(classNames) === true) {
    identifyElement = element => {
      for (let i = 0; i < classNames.length; i++) {
        if (element.classList.contains(classNames[i]) === true) {
          return true;
        }
      }

      return false;
    };
  }

  return findDescendant(from, identifyElement, getAllMatchingDescendants);
}

export function findAncestorWithId(
  from: Element,
  id: string,
  getAllMatchingAncestors: boolean = false,
): DOMTraverseResult {
  const identifyElement = element => element.id === id;
  return findAncestor(from, identifyElement, getAllMatchingAncestors);
}

export function findDescendantWithId(
  from: Element,
  id: string,
  getAllMatchingDescendants: boolean = false,
): DOMTraverseResult {
  const identifyElement = element => element.id === id;
  return findDescendant(from, identifyElement, getAllMatchingDescendants);
}

export function hasAncestor(
  from: Element,
  options: Element | Elements,
): boolean {
  const candidates = toElementArray(options);
  const identifyElement = element => candidates.indexOf(element) !== -1;
  return findAncestor(from, identifyElement, false) !== null;
}

export function hasDescendant(
  from: Element,
  options: Element | Elements,
): boolean {
  const candidates = toElementArray(options);
  const identifyElement = element => candidates.indexOf(element) !== -1;
  return findDescendant(from, identifyElement, false) !== null;
}

// @siblings

export function getSiblings(
  element: Element,
  isExclusive: boolean = false,
): Element[] | null {
  if (element.parentElement) {
    const siblings = [...element.parentElement.children];

    if (isExclusive === true) {
      siblings.splice(siblings.indexOf(element), 1);
    }

    return siblings.length > 0 ? siblings : null;
  }

  return null;
}

export function findSibling(
  element: Element,
  identifyElement: DOMTraversePredicateFunction,
  getAllMatchingSiblings = true,
): DOMTraverseResult {
  const siblings = getSiblings(element);

  if (!siblings) {
    return null;
  }

  if (siblings.length > 0) {
    const results: Element[] = [];

    for (let i = 0; i < siblings.length; i++) {
      const sibling = siblings[i];

      if (identifyElement(sibling) === true) {
        results.push(sibling);

        if (getAllMatchingSiblings === false) {
          break;
        }
      }
    }

    if (results.length > 0) {
      return getAllMatchingSiblings === true ? results : results[0];
    }
  }

  return null;
}

export function findNextSibling(
  element: Element,
  identifyElement: DOMTraversePredicateFunction,
): Element | null {
  let nextSibling: Element | null = element;

  while (nextSibling) {
    if (
      element
      && identifyElement(element) === true
    ) {
      return element;
    }

    nextSibling = element.nextElementSibling;
  }

  return null;
}

export function findSiblingWithClass(
  element: Element,
  classNames: string | string[],
  getAllMatchingSiblings: boolean = false,
): DOMTraverseResult {
  let identifyElement;

  if (typeof classNames === 'string') {
    identifyElement = sibling => sibling.classList.contains(classNames);
  } else if (Array.isArray(classNames) === true) {
    identifyElement = sibling => {
      for (let i = 0; i < classNames.length; i++) {
        if (sibling.classList.contains(classNames[i]) === true) {
          return true;
        }
      }

      return false;
    };
  }

  return findSibling(element, identifyElement, getAllMatchingSiblings);
}

export function getChildren(
  element: Element,
  identifyElement?: DOMTraversePredicateFunction,
): Element[] {
  const children = [...element.children];

  if (typeof identifyElement === 'undefined') {
    return children;
  }

  return children.filter(element => identifyElement(element));
}

export function getNthChild(
  n: number | 'last',
  element: Element,
  identifyElement?: DOMTraversePredicateFunction,
): Element | null {
  if (!identifyElement) {
    identifyElement = element => true;
  }

  const children = [...element.children];

  const selectedChildren = children.filter(identifyElement);

  let result;

  result = n === 'last'
    ? selectedChildren[selectedChildren.length - 1]
    : selectedChildren[n];

  return typeof result === 'object' ? result : null;
}

export function removeChildren(element: Element): number {
  let deleteCount = 0;

  while (element.firstChild !== null) {
    element.removeChild(element.firstChild);

    deleteCount++;
  }

  return deleteCount;
}

export function removeChild(
  element: Element,
  identifyElement: DOMTraversePredicateFunction,
): number {
  let deleteCount = 0;

  const inspect = parent => {
    const children = parent.children;

    if (children.length > 0) {
      for (let i = 0; i < children.length; i++) {
        const child = children[i];

        if (identifyElement(child) === true) {
          parent.removeChild(child);

          deleteCount++;
        } else if (child.children.length > 0) {
          inspect(child);
        }
      }
    }
  };

  inspect(element);

  return deleteCount;
}

export function mapDataFromChildren<T>(
  element: Element,
  extractFunction: DOMTraverseExtractFunction<T>,
  identifyElement?: DOMTraversePredicateFunction,
): T[] {
  if (!identifyElement) {
    identifyElement = element => true;
  }

  const children = [...element.children];

  const selectedChildren = children.filter(identifyElement);

  if (selectedChildren.length === 0) {
    return [];
  }

  if (selectedChildren.length === 1) {
    const datum: T = <T>extractFunction(selectedChildren[0]);

    return datum ? [datum] : [];
  }

  const results: T[] = [];

  selectedChildren.forEach(child => {
    const datum: T = <T>extractFunction(child);

    if (datum) {
      results.push(datum);
    }
  });

  return results;
}
