/**
 * @jest-environment jsdom
 */

import { render, screen } from '../../../test-utils';
import * as Button from '../Button';

describe('Button', () => {
  it('should render the Button', () => {
    render(<Button.Primary>Test</Button.Primary>);

    const text = screen.getByText(/Test/i);
    expect(text).toBeInTheDocument();
  });
});
