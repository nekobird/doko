export interface Offset {
  left: number;
  top: number;
}

export interface FullOffset extends Offset {
  right: number;
  bottom: number;
}

export interface Size {
  width: number;
  height: number;
}

export type Elements = NodeListOf<Element> | Element[] | HTMLElements;

export type HTMLElements = NodeListOf<HTMLElement> | HTMLCollection | HTMLElement[];

export type InputOrTextArea = HTMLTextAreaElement | HTMLInputElement;