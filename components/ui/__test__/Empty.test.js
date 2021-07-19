/**
 * @jest-environment jsdom
 */

import { render, screen } from '../../../test-utils';
import Empty from '../Empty';

describe('Empty', () => {
  it('should render the Empty', () => {
    render(<Empty />);

    const text = screen.getByText(/Data is empty/i);
    expect(text).toBeInTheDocument();
  });
});
