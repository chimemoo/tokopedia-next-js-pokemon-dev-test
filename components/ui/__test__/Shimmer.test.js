/**
 * @jest-environment jsdom
 */

import { render, screen } from '../../../test-utils';
import Shimmer from '../Shimmer';

describe('Shimmer', () => {
  it('should render the Shimmer', async () => {
    render(<Shimmer length={2} />);

    const item = await screen.findAllByRole('listitem');
    expect(item).toHaveLength(2);
  });
});
