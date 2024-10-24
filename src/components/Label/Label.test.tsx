import { render } from '@testing-library/react';
import { Label } from './index';

test('Label is visible', () => {
  const { getByText } = render(<Label labelText="Test Label" />);
  expect(getByText('Test Label')).toBeInTheDocument();
});

test('Label color changes when disabled', () => {
  const { getByText } = render(<Label labelText="Disabled Label" disabled />);
  const label = getByText('Disabled Label');
  expect(label).toHaveStyle('color: #a0a0a0');
});
