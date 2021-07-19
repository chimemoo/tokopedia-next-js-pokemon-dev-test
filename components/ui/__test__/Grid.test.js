/**
 * @jest-environment jsdom
 */
import renderer from 'react-test-renderer';
import { matchers } from '@emotion/jest';
import { Grid, Column } from '../Grid';

describe('Grid Component', () => {
  expect.extend(matchers);
  it('should render the Grid', () => {
    expect(renderer.create(<Grid xs={2}>Test Grid</Grid>).toJSON()).toHaveStyleRule(
      'grid-template-columns',
      'repeat(2, minmax(0, 1fr))',
      {
        media: '(min-width: 300px)',
      }
    );
  });

  it('should render the Column', () => {
    expect(renderer.create(<Column xs={2}>Test Column</Column>).toJSON()).toHaveStyleRule(
      'grid-column',
      'span 2/span 2',
      {
        media: '(min-width: 300px)',
      }
    );
  });
});
