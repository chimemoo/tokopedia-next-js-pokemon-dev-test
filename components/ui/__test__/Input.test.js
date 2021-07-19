/**
 * @jest-environment jsdom
 */

import { render, screen } from '../../../test-utils';
import Input from '../Input';

describe('Input', () => {
  it('should render the Input', () => {
    render(<Input aria-label="test" />);

    const text = screen.getByLabelText(/Test/i);
    expect(text).toBeInTheDocument();
  });
});
