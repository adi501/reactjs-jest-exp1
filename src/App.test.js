import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import App from './App';


test('can receive a new user and show it on a list', async () => {
  render(<App />);

  const nameInput = screen.getByRole('textbox', {
    name: /name/i,
  });
  const emailInput = screen.getByRole('textbox', {
    name: /email/i,
  });
  // Find the button
  const button = screen.getByRole('button');

// Simulate typing in a name
await user.click(nameInput);
await user.keyboard("adi");
// Simulate typing in an email
await user.click(emailInput);
await user.keyboard("adi@gmail.com");

// Simulate clicking the button
await user.click(button);

//screen.debug();


const name = screen.getByRole('cell', { name: 'adi' });
const email = screen.getByRole('cell', { name: 'adi@gmail.com' });

expect(name).toBeInTheDocument();
expect(email).toBeInTheDocument();
});


// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
