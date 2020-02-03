import '@testing-library/jest-dom';

import {
  ascendFrom,
} from '../lib/doko';

describe('test DOM stuff', () => {
  document.body.innerHTML = `
    <div id="root">
      <div id="node">
      </div>
    </div>
  `;

  const node = document.getElementById('node');
  it('should return not null', () => {
    expect(ascendFrom(node as HTMLElement, element => true));
  });
});
