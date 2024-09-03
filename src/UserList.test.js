import {render, screen,within} from  '@testing-library/react';
import UserList from './UserList';


function renderComponent()
{
    const users=[
        {name:'adi',email:'adi@gmail'},
        {name:'jc',email:'jc@gmail.com'}
    ];
    //render the component
    render(<UserList users={users}/>);

    return {users};
}

test('render 1 row for user',()=>{
     
    //
    renderComponent();
   // const {container}= render(<UserList users={users}/>);

     //find the all rows in the table
    // screen.logTestingPlaygroundURL();
   //const rows= screen.getAllByRole('row');
   const rows=within(screen.getByTestId('users')).getAllByRole('row');
   
   //const rows=  container.querySelectorAll('tbody tr');


     //what we expect it to do.
     expect(rows).toHaveLength(2);
});

test('render the name & email each user',()=>{
   
    const{users}= renderComponent();
    //find the all rows in the table
    // screen.logTestingPlaygroundURL();

    for(let user of users)
    {
        const name=screen.getByRole('cell',{name:user.name});
        const email=screen.getByRole('cell',{name:user.email});

        expect(name).toBeInTheDocument();
        expect(email).toBeInTheDocument();

    }
       
    });
    
