import { render } from '@testing-library/react';
import { Dropdown } from './index';

const options = [{ label: 'Option 1', value: '1' }];

test('Dropdown is visible', () => {
  const { getByRole } = render(<Dropdown options={options} />);
  expect(getByRole('combobox')).toBeInTheDocument();
});

test('Dropdown background changes when disabled', () => {
  const { getByRole } = render(
    <Dropdown options={options} disabled backgroundColor="#ffffff" />
  );
  const select = getByRole('combobox');
  expect(select).toHaveStyle('background-color: #e0e0e0');
});
