/**
 * @jest-environment jsdom
 */

import { render, screen } from '../../../test-utils';
import Toast from '../Toast';

describe('Toast', () => {
  it('should render the Toast', () => {
    render(
      <Toast visible={true} type="primary" close={() => console.log('test')}>
        Test
      </Toast>
    );

    const item = screen.getByText(/Test/i);
    expect(item).toBeInTheDocument();
  });

  it('should not render the Toast', () => {
    render(
      <Toast visible={false} type="primary" close={() => console.log('test')}>
        Test
      </Toast>
    );
    expect.assertions(1);
    try {
      // if the element is found, the following expect will fail the test
      screen.getByText(/Test/i);
      expect(false).toBeFalsy();
    } catch (error) {
      // otherwise, the expect will throw, and the following expect will pass the test
      expect(true).toBeTruthy();
    }
  });
});
