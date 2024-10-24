import { render } from '@testing-library/react';
import { Button } from './index';

test('Button is visible', () => {
  const { getByText } = render(<Button buttonText="Test Button" />);
  expect(getByText('Test Button')).toBeInTheDocument();
});

test('Button background changes when disabled', () => {
  const { getByText } = render(
    <Button buttonText="Disabled Button" disabled backgroundColor="#4ea8de" />
  );
  const button = getByText('Disabled Button');
  expect(button).toHaveStyle('background-color: #a0a0a0');
});
