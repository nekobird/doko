import {
  isInputOrTextArea,
} from './util';

import {
  getBoxSizing,
  copyStylesFrom,
} from './style';

import {
  InputOrTextArea,
} from './interfaces';

import {
  getTotalVerticalBorderWidths,
  getTotalVerticalPaddings,
  getTotalHorizontalInnerSpace,
} from './box-model';

const TEXT_BOX_MODEL_ATTRIBUTES = {
  border: 'none',
  height: '0',
  left: '0',
  overflowWrap: 'normal',
  overflowX: 'hidden',
  overflowY: 'hidden',
  padding: '0',
  position: 'fixed',
  resize: 'none',
  top: '0',
  visibility: 'hidden',
  whiteSpace: 'nowrap',
  width: '0',
  zIndex: '-9999',
};

const STYLE_PROPERTIES = [
  'borderBottomStyle',
  'borderBottomWidth',
  'borderLeftStyle',
  'borderLeftWidth',
  'borderRightStyle',
  'borderRightWidth',
  'borderTopStyle',
  'borderTopWidth',
  'boxSizing',
  'height',
  'maxHeight',
  'maxWidth',
  'minHeight',
  'minWidth',
  'paddingBottom',
  'paddingLeft',
  'paddingRight',
  'paddingTop',
  'width',
];

const FONT_STYLE_PROPERTIES = [
  'direction',
  'fontFamily',
  'fontSize',
  'fontSizeAdjust',
  'fontStyle',
  'fontVariant',
  'fontWeight',
  'letterSpacing',
  'lineHeight',
  'tabSize',
  'textAlign',
  'textDecoration',
  'textIndent',
  'textOverflow',
  'textTransform',
  'whiteSpace',
  'wordBreak',
  'wordSpacing',
  'wordWrap',
];

interface StyleObject {
  [name: string]: string;
}


export function getTextBoxHeightFromElement(
  element: HTMLElement,
  text: string | null = null,
  transformTextHook: ((text: string) => string) | null = null,
  styleOverride: StyleObject | null = null,
): number {
  const modelElement = document.createElement('TEXTAREA') as HTMLTextAreaElement;

  Object.assign(modelElement.style, TEXT_BOX_MODEL_ATTRIBUTES);

  const elementStyle = window.getComputedStyle(element);

  [...STYLE_PROPERTIES, ...FONT_STYLE_PROPERTIES].forEach(property => {
    modelElement.style[property] = elementStyle[property];
  });

  Object.assign(modelElement.style, {
    height: '0',
    maxHeight: '0',
    whiteSpace: 'pre-wrap',
  });

  if (
    typeof styleOverride === 'object'
    && styleOverride !== null
  ) {
    Object.assign(modelElement.style, styleOverride);
  }

  let transformText = text => text;

  if (typeof transformTextHook === 'function') {
    transformText = transformTextHook as (text: string) => string;
  }

  if (typeof text === 'string') {
    modelElement.value = transformText(text);
  } else {
    modelElement.value = transformText(getTextFromElement(element));
  }

  // Set offset for when boxSizing is set to border-box.
  let offset = 0;

  if (getBoxSizing(element) === 'border-box') {
    offset = getTotalVerticalBorderWidths(element);
  } else {
    offset -= getTotalVerticalPaddings(element);
  }

  document.body.appendChild(modelElement);

  const result = modelElement.scrollHeight + offset;

  document.body.removeChild(modelElement);

  modelElement.remove();

  return result;
}

export function getTextBoxWidthFromElement(
  element: HTMLElement,
  text: string | null = null,
  transformTextHook: ((text: string) => string) | null = null,
  styleOverride: StyleObject | null = null,
): number {
  const modelElement = document.createElement('DIV');

  Object.assign(modelElement.style, TEXT_BOX_MODEL_ATTRIBUTES);

  const elementStyle = window.getComputedStyle(element);

  [...STYLE_PROPERTIES, ...FONT_STYLE_PROPERTIES].forEach(property => {
    modelElement.style[property] = elementStyle[property];
  });

  Object.assign(modelElement.style, {
    borderLeftWidth: '0',
    borderRightWidth: '0',
    boxSizing: 'content-box',
    minWidth: '0',
    paddingLeft: '0',
    paddingRight: '0',
    whiteSpace: 'nowrap',
    width: '0',
    wordBreak: 'normal',
    wordWrap: 'normal',
  });

  if (
    typeof styleOverride === 'object'
    && styleOverride !== null
  ) {
    Object.assign(modelElement.style, styleOverride);
  }

  let textString;

  let transformText = text => text;

  if (typeof transformTextHook === 'function') {
    transformText = transformTextHook as (text: string) => string;
  }

  if (typeof text === 'string') {
    textString = transformText(text);
  } else {
    textString = transformText(getTextFromElement(element));
  }

  textString = textString.replace(/[\n\r]/g, '<br>');
  textString = textString.replace(/[\t]/g, '&#9');
  textString = textString.replace(/[\s]/g, '&nbsp');

  modelElement.innerHTML = textString;

  document.body.appendChild(modelElement);

  const result = modelElement.scrollWidth;

  document.body.removeChild(modelElement);

  modelElement.remove();

  return result;
}

export function getTextFromElement(element: HTMLElement): string {
  if (isInputOrTextArea(element) === true) {
    return (element as InputOrTextArea).value;
  }

  if (element.textContent !== null) {
    return element.textContent;
  }

  return '';
}

export function setElementText(element: HTMLElement, text: string) {
  if (isInputOrTextArea(element) === true) {
    const input = element as InputOrTextArea;

    input.value = text;
  } else {
    element.textContent = text;
  }
}

export function getLastLine(element: HTMLElement): string {
  const text = element.textContent;

  if (text) {
    const words = text.split(' ');

    const lastLine: string[] = [];

    let index = words.length - 1;

    const temp = document.createElement('div');

    temp.style.padding = '0';
    temp.style.visibility = 'none';

    copyStylesFrom(element, ['font-size', 'font-family', 'line-height'], temp);

    const maxWidth = element.clientWidth - getTotalHorizontalInnerSpace(element);

    temp.style.maxWidth = `${maxWidth}px`;

    temp.textContent = text;

    if (element.parentNode) {
      element.parentNode.appendChild(temp);
    } else {
      document.appendChild(temp);
    }

    const startingHeight = temp.clientHeight;

    let textCopy = text;

    while (true) {
      if (!words[index]) {
        break;
      }

      const wordLength = words[index].length + 1;

      textCopy = textCopy.substring(0, textCopy.length - wordLength);

      temp.textContent = textCopy;

      lastLine.unshift(words[index]);

      if (temp.clientHeight < startingHeight) {
        break;
      }

      index--;
    }

    if (element.parentNode) {
      element.parentNode.removeChild(temp);
    } else {
      document.removeChild(temp);
    }

    return lastLine.join(' ');
  }

  return '';
}
