/**
 * @jest-environment jsdom
 */

import { render, screen } from '../../../test-utils';
import Heading from '../Heading';

describe('Heading', () => {
  it('should render the Heading', () => {
    render(<Heading>Test</Heading>);

    const text = screen.getByText(/Test/i);
    expect(text).toBeInTheDocument();
  });
});
