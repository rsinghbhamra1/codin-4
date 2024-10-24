import { render } from '@testing-library/react';
import { Card } from './index';

test('Card is visible', () => {
  const { getByText } = render(
    <Card cardTitle="Test Title" cardContent="Test Content" />
  );
  expect(getByText('Test Title')).toBeInTheDocument();
  expect(getByText('Test Content')).toBeInTheDocument();
});

test('Card background changes when disabled', () => {
  const { getByText } = render(
    <Card
      cardTitle="Disabled Title"
      cardContent="Disabled Content"
      disabled
      backgroundColor="#ffffff"
    />
  );
  const card = getByText('Disabled Title').parentElement;
  expect(card).toHaveStyle('background-color: #f0f0f0');
});