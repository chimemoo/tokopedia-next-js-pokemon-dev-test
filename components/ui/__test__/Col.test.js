/**
 * @jest-environment jsdom
 */

import { render, screen } from '../../../test-utils';
import Col from '../Col';

describe('Col', () => {
  it('should render the Col', () => {
    render(<Col xs={2}>Test</Col>);

    const text = screen.getByText(/Test/i);
    expect(text).toBeInTheDocument();
  });
});
