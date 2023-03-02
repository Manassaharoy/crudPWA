import './App.css';
import { useEffect, useState } from 'react';
import getUserData from './api/dataCall';

function App() {
  const [ users, setUsers ] = useState()

  async function fetchdata(){
    let data = await getUserData();

    setUsers(data.data.users)
  }

  useEffect(() => {
    fetchdata();
  }, []);
  

  return (
    <div className="App">
      <header className="App-header">
        <h1>This is a PWA testing</h1>

        {users?
        <div style={{
          border:"1px solid white"
        }}>
          {users.map((data)=>{
            return(
              <div style={{
                border:"1px solid white"
              }} key={data.id}>
                <h3>Name: {data.firstName} {data.lastName}</h3>
                <p>Age: {data.age}</p>
              </div>
            )
          })}
        </div>:
        <div>
          No users
        </div>
        }

      </header>
    </div>
  );
}

export default App;
