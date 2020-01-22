import {
  Elements,
  HTMLElements,
} from './interfaces';

export function isElement(thing: any): thing is Element;
export function isElement(...things: any[]): boolean;
export function isElement(...things: any[]): boolean {
  if (things.length === 0) {
    return false;
  }

  const isElement = (thing: any): thing is Element => (
    thing
    && 'nodeType' in thing
    && typeof thing.nodeType === 'number'
    && thing.nodeType === 1
    && thing instanceof Element
  );

  return things.every(isElement);
}

export function isNodeListOfElement(thing: any): thing is NodeListOf<Element>;
export function isNodeListOfElement(...things: any[]): boolean;
export function isNodeListOfElement(...things: any[]): boolean {
  if (things.length === 0) {
    return false;
  }

  const isNodeListOfElement = (thing: any): thing is NodeListOf<Element> => (
    thing
    && typeof thing === 'object'
    && NodeList.prototype.isPrototypeOf(thing)
    && [...thing].every(element => isElement(element))
  );

  return things.every(isNodeListOfElement);
}

export function toElementArray(elements: Element | Elements): Element[] {
  if (
    isNodeListOfElement(elements)
    || isHTMLCollection(elements)
  ) {
    elements = elements as NodeListOf<Element> | HTMLCollection;

    return [...elements];
  } else if (isElement(elements)) {
    const element = elements as Element;

    return [element];
  } else if (
    Array.isArray(elements)
    && isElement(...elements as unknown[])
  ) {
    return elements as Element[];
  }

  return [];
}

export function isHTMLElement(thing: any): thing is HTMLElement;
export function isHTMLElement(...things: any[]): boolean;
export function isHTMLElement(...things: any[]): boolean {
  if (things.length === 0) {
    return false;
  }

  const isHTMLElement = (thing: any): thing is HTMLElement => (
    thing
    && 'nodeType' in thing
    && typeof thing.nodeType === 'number'
    && thing.nodeType === 1
    && thing instanceof HTMLElement
  );

  return things.every(isHTMLElement);
}

export function isNodeListOfHTMLElement(thing: any): thing is NodeListOf<HTMLElement>;
export function isNodeListOfHTMLElement(...things: any[]): boolean;
export function isNodeListOfHTMLElement(...things: any[]): boolean {
  if (things.length === 0) {
    return false;
  }

  const isNodeListOfHTMLElement = (thing: any): thing is NodeListOf<HTMLElement> => (
    thing
    && typeof thing === 'object'
    && NodeList.prototype.isPrototypeOf(thing) === true
    && [...thing].every(element => isHTMLElement(element)) === true
  );

  return things.every(isNodeListOfHTMLElement);
}

export function isHTMLCollection(thing: any): thing is HTMLCollection;
export function isHTMLCollection(...things: any[]): boolean;
export function isHTMLCollection(...things: any[]): boolean {
  if (things.length === 0) {
    return false;
  }

  const isHTMLCollection = (thing: any): thing is HTMLCollection => (
    thing
    && typeof thing === 'object'
    && HTMLCollection.prototype.isPrototypeOf(thing) === true
  );

  return things.every(isHTMLCollection);
}

export function toHTMLElementArray(elements: HTMLElement | HTMLElements): HTMLElement[] {
  if (isNodeListOfHTMLElement(elements) || isHTMLCollection(elements)) {
    return [...elements] as HTMLElement[];
  } else if (isHTMLElement(elements)) {
    return [elements];
  } else if (
    Array.isArray(elements)
    && isHTMLElement(...elements as unknown[])
  ) {
    return elements;
  }

  return [];
}

export function isInputOrTextArea(thing: any): thing is HTMLInputElement | HTMLTextAreaElement;
export function isInputOrTextArea(...things: any[]): boolean;
export function isInputOrTextArea(...things: any[]): boolean {
  if (things.length === 0) {
    return false;
  }

  const isInputOrTextArea = (thing: any): thing is HTMLInputElement | HTMLTextAreaElement => (
    thing
    && 'nodeType' in thing
    && typeof thing.nodeType === 'number'
    && thing.nodeType === 1
    && (
      (thing.nodeName === 'INPUT' && thing instanceof HTMLInputElement)
      || (thing.nodeName === 'TEXTAREA' && thing instanceof HTMLTextAreaElement)
    )
  );

  return things.every(isInputOrTextArea);
}

export function prependChild(parent: HTMLElement, child: HTMLElement): void {
  parent.childElementCount > 0
    ? parent.insertBefore(child, parent.childNodes[0])
    : parent.appendChild(child);
}
