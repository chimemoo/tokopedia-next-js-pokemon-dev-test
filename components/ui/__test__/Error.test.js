/**
 * @jest-environment jsdom
 */

import { render, screen } from '../../../test-utils';
import Error from '../Error';

describe('Button', () => {
  it('should render the Error', () => {
    render(<Error>Test</Error>);

    const text = screen.getByText(/Test/i);
    expect(text).toBeInTheDocument();
  });
});
