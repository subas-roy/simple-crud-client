import { Helmet } from 'react-helmet'
import './App.css'

function App() {
  const handleAddUser = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };
    console.log(user);

    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user) // send data to body of server side
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
          alert('User added successfuly!')
          form.reset();
        }
      })
  }

  return (
    <>
      <Helmet>
        <title>Simple CRUD</title>
      </Helmet>
      <h1>Simple CRUD</h1>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" placeholder='Your Name' id="" />
        <br />
        <input type="email" name="email" placeholder='Email' id="" />
        <br />
        <input type="submit" value="Add" />
      </form>
    </>
  )
}

export default App
