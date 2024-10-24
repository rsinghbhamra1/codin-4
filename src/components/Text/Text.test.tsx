import { render } from '@testing-library/react';
import { Text } from './index';

test('Text is visible', () => {
  const { getByText } = render(<Text text="Test Text" />);
  expect(getByText('Test Text')).toBeInTheDocument();
});

test('Text color changes when disabled', () => {
  const { getByText } = render(<Text text="Disabled Text" disabled />);
  const textElement = getByText('Disabled Text');
  expect(textElement).toHaveStyle('color: #a0a0a0');
});
