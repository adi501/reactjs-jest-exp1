import {render, screen} from  '@testing-library/react';
import user from '@testing-library/user-event';
import UserForm from './UserForm';

test('it shows 2 inputs and button in componet',()=>{
    //render the component
    render(<UserForm/>);

    //find the elements in the componet
    const inputs=screen.getAllByRole('textbox');
    const buttons=screen.getByRole('button');
    //what we expect it to do.
    expect(inputs).toHaveLength(2);
    expect(buttons).toBeInTheDocument();
});

test("not good way-it calls onUserAdd when the form is submitted", async () => {
   // creating mock funtion
    const mock=jest.fn();
   
  // Try to render my component
    render(<UserForm onUserAdd={mock} />);
    // Find the two inputs
    // const [nameInput, emailInput] = screen.getAllByRole("textbox"); (it will work but it's not good way to use u can use below way)

    const nameInput = screen.getByRole("textbox",{
        name:/name/i,
    });
    const emailInput = screen.getByRole("textbox",{
        name:/email/i,
    });
    // Simulate typing in a name
    await user.click(nameInput);
    await user.keyboard("adi");
    // Simulate typing in an email
    await user.click(emailInput);
    await user.keyboard("adi@gmail.com");
    // Find the button
    const button=screen.getByRole('button');
    // Simulate clicking the button
    user.click(button);
   
    // Assertion to make sure 'onUserAdd' gets called with email/name
    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledWith({name:'adi',email:'adi@gmail.com'})
  });

  // this is not good way to use
test("not good way-it calls onUserAdd when the form is submitted", async () => {
    // NOT THE BEST IMPLEMENTATION
    
    const argList=[];
    const callBack=(...args)=>{
        argList.push(args);
    }
   // Try to render my component
    render(<UserForm onUserAdd={callBack} />);
    // Find the two inputs
    const [nameInput, emailInput] = screen.getAllByRole("textbox");
    // Simulate typing in a name
    await user.click(nameInput);
    await user.keyboard("adi");
    // Simulate typing in an email
    await user.click(emailInput);
    await user.keyboard("adi@gmail.com");
    // Find the button
    const button=screen.getByRole('button');
    // Simulate clicking the button
    user.click(button);
   
    // Assertion to make sure 'onUserAdd' gets called with email/name
    expect(argList).toHaveLength(1);
    expect(argList[0][0]).toEqual({name:'adi',email:'adi@gmail.com'})
  });


test('empties the two inputs when form is submitted', async () => {
  render(<UserForm onUserAdd={() => {}} />);

  const nameInput = screen.getByRole('textbox', { name: /name/i });
  const emailInput = screen.getByRole('textbox', { name: /email/i });
  const button = screen.getByRole('button');

  await user.click(nameInput);
  await user.keyboard('adi');
  await user.click(emailInput);
  await user.keyboard('adi@gmail.com');

  await user.click(button);

  expect(nameInput).toHaveValue('');
  expect(emailInput).toHaveValue('');
});
