/**
 * @jest-environment jsdom
 */

import { render, screen } from '../../../test-utils';
import Item from '../Item';

describe('Item', () => {
  it('should render the Item', () => {
    render(<Item>Test</Item>);

    const text = screen.getByText(/Test/i);
    expect(text).toBeInTheDocument();
  });
});
