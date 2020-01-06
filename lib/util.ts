import {
  Elements,
  HTMLElements,
} from './interfaces';

export function isElement(...things: any[]): boolean {
  if (things.length === 0) {
    return false;
  }

  const isElement = (thing: any): thing is Element => {
    return (
      thing
      && typeof thing === 'object'
      && typeof thing.nodeType === 'number'
      && thing.nodeType === 1
      && thing instanceof Element === true
    );
  }

  return things.every(isElement);
}

export function isNodeListOfElement(...things: any[]): boolean {
  if (things.length === 0) {
    return false;
  }

  const isNodeListOfElement = (thing: any): thing is NodeListOf<Element> => {
    return (
      thing
      && typeof thing === 'object'
      && NodeList.prototype.isPrototypeOf(thing) === true
      && [...thing].every(element => isElement(element)) === true
    );
  }

  return things.every(isNodeListOfElement);
}

export function toElementArray(elements: Element | Elements): Element[] {
  if (
    isNodeListOfElement(elements) === true
    || isHTMLCollection(elements) === true
  ) {
    elements = elements as NodeListOf<Element> | HTMLCollection;

    return [...elements];
  } else if (isElement(elements) === true) {
    const element = elements as Element;

    return [element];
  } else if (
    Array.isArray(elements) === true
    && isElement(...elements as unknown[]) === true
  ) {
    return elements as Element[];
  }

  return [];
}

export function isHTMLElement(...things: any[]): boolean {
  if (things.length === 0) {
    return false;
  }

  const isHTMLElement = (thing: any): thing is HTMLElement => {
    return (
      thing
      && typeof thing === 'object'
      && typeof thing.nodeType === 'number'
      && thing.nodeType === 1
      && thing instanceof HTMLElement === true
    );
  }

  return things.every(isHTMLElement);
}

export function isNodeListOfHTMLElement(...things: any[]): boolean {
  if (things.length === 0) {
    return false;
  }

  const isNodeListOfHTMLElement = (thing: any): thing is NodeListOf<HTMLElement> => {
    return (
      thing
      && typeof thing === 'object'
      && NodeList.prototype.isPrototypeOf(thing) === true
      && [...thing].every(element => isHTMLElement(element)) === true
    );
  }

  return things.every(isNodeListOfHTMLElement);
}

export function isHTMLCollection(...things: any[]): boolean {
  if (things.length === 0) {
    return false;
  }

  const isHTMLCollection = (thing: any): thing is HTMLCollection => {
    return (
      thing
      && typeof thing === 'object'
      && HTMLCollection.prototype.isPrototypeOf(thing) === true
    );
  }

  return things.every(isHTMLCollection);
}

export function toHTMLElementArray(elements: HTMLElement | HTMLElements): HTMLElement[] {
  if (
    isNodeListOfHTMLElement(elements) === true
    || isHTMLCollection(elements) === true
  ) {
    elements = elements as NodeListOf<HTMLElement> | HTMLCollection;

    return [...elements] as HTMLElement[];
  } else if (
    isHTMLElement(elements) === true
  ) {
    const element = elements as HTMLElement;

    return [element];
  } else if (
    Array.isArray(elements) === true
    && isHTMLElement(...elements as unknown[]) === true
  ) {
    return elements as HTMLElement[];
  }

  return [];
}

export function isInputOrTextArea(...things: any[]): boolean {
  if (things.length === 0) {
    return false;
  }

  const isInputOrTextArea = (thing: any): thing is HTMLInputElement | HTMLTextAreaElement => {
    return (
      thing
      && typeof thing === 'object'
      && typeof thing.nodeType === 'number'
      && thing.nodeType === 1
      && (
        (
          thing.nodeName === 'INPUT'
          && thing instanceof HTMLInputElement
        )
        || (
          thing.nodeName === 'TEXTAREA'
          && thing instanceof HTMLTextAreaElement
        )
      )
    );
  }

  return things.every(isInputOrTextArea);
}

export function prependChild(parent: HTMLElement, child: HTMLElement): void {
  if (parent.childElementCount > 0) {
    parent.insertBefore(child, parent.childNodes[0]);
  } else {
    parent.appendChild(child);
  }
}
