import '@testing-library/jest-dom';

import {
  getTotalHorizontalMargins,
  getTotalVerticalMargins,
} from '../lib/doko';

describe('test DOM stuff', () => {
  document.body.innerHTML = `
    <div id="root">
      <div id="node" style="margin: 20px;">
      </div>
    </div>
  `;

  const node = document.getElementById('node');

  it('should return the corrent vertical and horizontal margins.', () => {
    expect(getTotalHorizontalMargins(node as HTMLElement)).toEqual(40);
    expect(getTotalVerticalMargins(node as HTMLElement)).toEqual(40);
  });
});
