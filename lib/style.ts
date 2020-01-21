import {
  kebabCaseToCamelCase,
  sumNumberArrays,
} from '@nekobird/piko';

import {
  isHTMLElement,
} from './util';

import {
  ascendFrom,
  descendFrom,
} from './traverse';

export interface StyleObject {
  [key: string]: string | number;
}

// NOTE:
// You can remove style by setting it to null
// For example element.style.backgroundColor = null;

export function applyStyle(
  element: HTMLElement,
  styleObject: StyleObject,
): void

export function applyStyle(
  styleObject: StyleObject,
  ...elements: HTMLElement[]
): void

export function applyStyle(
  a: HTMLElement | StyleObject,
  b: HTMLElement | StyleObject,
  ...c: HTMLElement[]
): void {
  let elements = c;
  let styleObject;

  if (isHTMLElement(a) === true) {
    elements.push(a as HTMLElement);
    styleObject = b as StyleObject;
  } else if (isHTMLElement(b) === true) {
    styleObject = a as StyleObject;
    elements.push(b as HTMLElement);
  }

  Object.keys(styleObject).forEach(property => {
    let value = styleObject[property];

    const propertyName = kebabCaseToCamelCase(property);

    if (typeof value === 'number') {
      value = value.toString();
    }

    if (typeof value === 'string') {
      elements.forEach(element => element.style[propertyName] = value);
    }
  });
}

export function clearStyles(element: HTMLElement) {
  element.removeAttribute('style');
}

export function copyStylesFrom(
  from: HTMLElement,
  properties: string | string[],
  ...to: HTMLElement[]
): void {
  if (typeof properties === 'string') {
    properties = [properties];
  }

  const style = window.getComputedStyle(from);

  properties.forEach(property => {
    to.forEach(element => {
      property = kebabCaseToCamelCase(property);
      element.style[property] = style[property];
    });
  });
}

export function getAnimationDelaysInSeconds(element: HTMLElement): number[] {
  const computedStyle = getComputedStyle(element);
  const value = computedStyle.animationDelay;

  if (!value) {
    return [0];
  }

  return value.split(',').map(delay => parseFloat(delay) * 1000);
}

export function getAnimationDurationsInSeconds(element: HTMLElement): number[] {
  const computedStyle = getComputedStyle(element);
  const value = computedStyle.animationDuration;

  if (!value) {
    return [0];
  }

  return value.split(',').map(duration => parseFloat(duration) * 1000);
}

export function getBaseFontSize(): number {
  const fontSize = window.getComputedStyle(document.documentElement).fontSize;

  return (
    typeof fontSize === 'string'
    && fontSize.match(/^[0-9]+/g) !== null
  )
    ? parseFloat(fontSize)
    : 16;
}

export function getBoxSizing(element: HTMLElement): string {
  return getStyleValue(element, 'box-sizing') as string;
}

export function getChildrenMaxAnimationDuration(
  from: HTMLElement,
  withDelay: boolean = false,
): number {
  let durations: number[] = [];

  descendFrom(
    from,
    element => {
      if (isHTMLElement(element)) {
        const duration = withDelay === true
          ? getMaxAnimationDurationInSeconds(element as HTMLElement)
          : getMaxAnimationDurationWithDelayInSeconds(element as HTMLElement);

        durations.push(duration);
      }
    }
  );

  return Math.max(...durations);
}

export function getFontSize(element: HTMLElement): number {
  return getStyleValue(element, 'font-size') as number;
}

export function getLineHeight(element: HTMLElement): number {
  const temp = document.createElement('div');

  temp.style.padding = '0';
  temp.style.visibility = 'none';
  temp.textContent = 'abcd';

  copyStylesFrom(
    element,
    [
      'font-family',
      'font-size',
      'line-height',
    ],
    temp,
  );

  let result;

  if (element.parentNode) {
    element.parentNode.appendChild(temp);
    result = temp.clientHeight;
    element.parentNode.removeChild(temp);
  } else {
    document.appendChild(temp);
    result = temp.clientHeight;
    document.removeChild(temp);
  }

  temp.remove();

  return result;
}

export function getMaxAnimationDelayInSeconds(element: HTMLElement): number {
  return Math.max(...getAnimationDelaysInSeconds(element));
}

export function getMaxAnimationDurationInSeconds(element: HTMLElement): number {
  return Math.max(...getAnimationDurationsInSeconds(element));
}

export function getMaxAnimationDurationWithDelayInSeconds(element: HTMLElement): number {
  const delays = getAnimationDelaysInSeconds(element);
  const durations = getAnimationDurationsInSeconds(element);
  return Math.max(...sumNumberArrays(delays, durations));
}

export function getMaxTransitionDelayInSeconds(element: HTMLElement): number {
  return Math.max(...getTransitionDelaysInSeconds(element));
}

export function getMaxTransitionDurationInSeconds(element: HTMLElement): number {
  return Math.max(...getTransitionDurationsInSeconds(element));
}

export function getMaxTransitionDurationWithDelayInSeconds(element: HTMLElement): number {
  const delays = getTransitionDelaysInSeconds(element);
  const durations = getTransitionDurationsInSeconds(element);
  return Math.max(...sumNumberArrays(delays, durations));
}

export function getParentsMaxAnimationDuration(
  from: HTMLElement,
  withDelay: boolean = false,
): number {
  let durations: number[] = [];

  ascendFrom(
    from,
    element => {
      if (isHTMLElement(element) === true) {
        const duration = withDelay === true
          ? getMaxAnimationDurationWithDelayInSeconds(element as HTMLElement)
          : getMaxAnimationDurationInSeconds(element as HTMLElement);

        durations.push(duration);
      }
    }
  );

  return Math.max(...durations);
}

export function getStyleValue(
  element: HTMLElement,
  property: string,
  stringOnly: boolean = false,
): string | number {
  const style     = window.getComputedStyle(element);
  const _property = kebabCaseToCamelCase(property);
  const value     = style[_property];

  return !stringOnly && value.match(/^[0-9]+/g)
    ? parseFloat(value)
    : value;
}

export function getStyleValues(
  element: HTMLElement,
  properties: string | string[],
  stringOnly: boolean = false,
): StyleObject {
  if (typeof properties === 'string') {
    properties = [properties];
  }

  const style = window.getComputedStyle(element);

  return properties.reduce((result, property) => {
    const _property = kebabCaseToCamelCase(property);
    const value = style[_property];

    result[_property] = stringOnly === false && value.match(/^[0-9]+/g)
      ? parseFloat(value)
      : value;

    return result;
  }, {});
}

export function getTransitionDelaysInSeconds(element: HTMLElement): number[] {
  const computedStyle = getComputedStyle(element);
  const value = computedStyle.transitionDelay;

  return value
    ? value.split(',').map(delay => parseFloat(delay) * 1000)
    : [0];
}

export function getTransitionDurationsInSeconds(element: HTMLElement): number[] {
  const computedStyle = getComputedStyle(element);
  const value = computedStyle.transitionDuration;

  return value
    ? value.split(',').map(duration => parseFloat(duration) * 1000)
    : [0];
}

export function removeStyles(
  element: HTMLElement,
  properties: string | string[],
) {
  if (typeof properties === 'string') {
    properties = [properties];
  }

  properties.forEach(property => {
    property = kebabCaseToCamelCase(property);
    element.style.removeProperty(property);
  });
}

export function RemToPx(rem: number): number {
  return rem * getBaseFontSize();
}

export function setFontSize(
  element: HTMLElement,
  fontSize: number,
  unit: string = 'px',
): void {
  element.style.fontSize = `${fontSize}${unit}`;
}
