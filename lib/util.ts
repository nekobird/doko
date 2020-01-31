import {
  isObject,
  isNumber,
} from '@nekobird/piko';

import {
  Elements,
  HTMLElements,
} from './interfaces';

export function isElement(thing: any): thing is Element;
export function isElement(...things: any[]): boolean;
export function isElement(...things: any[]): boolean {
  const values = Array.from(things);

  if (values.length === 0) {
    return false;
  }

  const isElement = (value?: any): value is Element => (
    value
    && 'nodeType' in value
    && isNumber(value.nodeType)
    && value.nodeType === 1
    && value instanceof Element
  );

  return values.every(isElement);
}

export function isNodeListOfElement(thing: any): thing is NodeListOf<Element>;
export function isNodeListOfElement(...things: any[]): boolean;
export function isNodeListOfElement(...things: any[]): boolean {
  const values = Array.from(things);

  if (values.length === 0) {
    return false;
  }

  const isNodeListOfElement = (value: any): value is NodeListOf<Element> => (
    value
    && isObject(value)
    && NodeList.prototype.isPrototypeOf(value)
    && [...value].every(element => isElement(element))
  );

  return values.every(isNodeListOfElement);
}

export function toElementArray(elements: Element | Elements): Element[] {
  if (isNodeListOfElement(elements) || isHTMLCollection(elements)) {
    return [...elements];
  } else if (isElement(elements)) {
    return [elements];
  } else if (Array.isArray(elements) && isElement(...elements)) {
    return elements;
  }

  return [];
}

export function isHTMLElement(thing: any): thing is HTMLElement;
export function isHTMLElement(...things: any[]): boolean;
export function isHTMLElement(...things: any[]): boolean {
  const values = Array.from(things);

  if (values.length === 0) {
    return false;
  }

  const isHTMLElement = (value: any): value is HTMLElement => (
    value
    && 'nodeType' in value
    && isNumber(value.nodeType)
    && value.nodeType === 1
    && value instanceof HTMLElement
  );

  return values.every(isHTMLElement);
}

export function isNodeListOfHTMLElement(thing: any): thing is NodeListOf<HTMLElement>;
export function isNodeListOfHTMLElement(...things: any[]): boolean;
export function isNodeListOfHTMLElement(...things: any[]): boolean {
  const values = Array.from(things);

  if (values.length === 0) {
    return false;
  }

  const isNodeListOfHTMLElement = (value: any): value is NodeListOf<HTMLElement> => (
    value
    && isObject(value)
    && NodeList.prototype.isPrototypeOf(value)
    && [...value].every(element => isHTMLElement(element))
  );

  return values.every(isNodeListOfHTMLElement);
}

export function isHTMLCollection(thing: any): thing is HTMLCollection;
export function isHTMLCollection(...things: any[]): boolean;
export function isHTMLCollection(...things: any[]): boolean {
  const values = Array.from(things);

  if (values.length === 0) {
    return false;
  }

  const isHTMLCollection = (value: any): value is HTMLCollection => (
    value
    && isObject(value)
    && HTMLCollection.prototype.isPrototypeOf(value)
  );

  return values.every(isHTMLCollection);
}

export function toHTMLElementArray(elements: HTMLElement | HTMLElements): HTMLElement[] {
  if (isNodeListOfHTMLElement(elements) || isHTMLCollection(elements)) {
    return [...elements] as HTMLElement[];
  } else if (isHTMLElement(elements)) {
    return [elements];
  } else if (Array.isArray(elements) && isHTMLElement(...elements as unknown[])) {
    return elements;
  }

  return [];
}

export function isInputOrTextArea(thing: any): thing is HTMLInputElement | HTMLTextAreaElement;
export function isInputOrTextArea(...things: any[]): boolean;
export function isInputOrTextArea(...things: any[]): boolean {
  const values = Array.from(things);

  if (values.length === 0) {
    return false;
  }

  const isInputOrTextArea = (value?: any): value is HTMLInputElement | HTMLTextAreaElement => (
    value
    && 'nodeType' in value
    && isNumber(value.nodeType)
    && value.nodeType === 1
    && (
         (value.nodeName === 'INPUT'    && value instanceof HTMLInputElement)
      || (value.nodeName === 'TEXTAREA' && value instanceof HTMLTextAreaElement)
    )
  );

  return values.every(isInputOrTextArea);
}

export function prependChild(parent: HTMLElement, child: HTMLElement): void {
  parent.childElementCount > 0
    ? parent.insertBefore(child, parent.childNodes[0])
    : parent.appendChild(child);
}
