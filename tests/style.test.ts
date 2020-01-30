import fs from 'fs';
import path from 'path';
import {
  getBoxSizing,
} from '../lib/style'

const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');

jest.dontMock('fs');

describe('button', () => {
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
  });

  afterEach(() => {
    jest.resetModules();
  });

  it('should return content-box', () => {
    const element = document.getElementById('box') as HTMLElement;
    expect(document.getElementById('box')).toBeTruthy();
    console.log(element);
    expect(getBoxSizing(element)).toEqual('content-box');
  })
});