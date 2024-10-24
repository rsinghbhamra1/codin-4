import { render } from '@testing-library/react';
import { RadioButton } from './index';

test('RadioButton is visible', () => {
  const { getByLabelText } = render(
    <RadioButton labelText="Test Radio" />
  );
  expect(getByLabelText('Test Radio')).toBeInTheDocument();
});

test('RadioButton is disabled when disabled prop is true', () => {
  const { getByLabelText } = render(
    <RadioButton labelText="Disabled Radio" disabled />
  );
  const radio = getByLabelText('Disabled Radio') as HTMLInputElement;
  expect(radio.disabled).toBe(true);
});
