/**
 * @jest-environment jsdom
 */

import { render, screen } from '../../../test-utils';
import Flex from '../Flex';

describe('Button', () => {
  it('should render the Flex', () => {
    render(<Flex>Test</Flex>);

    const text = screen.getByText(/Test/i);
    expect(text).toBeInTheDocument();
  });
});
