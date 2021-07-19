/**
 * @jest-environment jsdom
 */

import { render, screen } from '../../../test-utils';
import Block from '../Block';

describe('Button', () => {
  it('should render the Block', () => {
    render(<Block>Test</Block>);

    const text = screen.getByText(/Test/i);
    expect(text).toBeInTheDocument();
  });
});
