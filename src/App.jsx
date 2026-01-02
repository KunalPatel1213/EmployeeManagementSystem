import React, { useEffect, useState , useContext} from 'react';
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Auth/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Auth/Dashboard/AdminDashboard';
import { getLocalStorage, setLocalStorage } from './utils/localStorage';
import { AuthContext } from './context/AuthProvider';

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const authData  = useContext(AuthContext);

  useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser');
    if(loggedInUser) {
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
      
    }    
  }, [])
  
  const handleLogin = (email, password) => {
    if (email === 'admin@me.com' && password === '123') {
       setUser('admin');
       setLoggedInUserData(authData?.employees || []);
       localStorage.setItem('loggedInUser' , JSON.stringify({role:'admin'}));
    } else if (authData){
      const employee = authData.employees.find((e) => email === e.email && e.password === password);
      if(employee) {
        setUser('employees');
        setLoggedInUserData(employee);
        localStorage.setItem('loggedInUser', JSON.stringify({role: 'employees',data:employee}));
      } else {
        alert('Invalid Credentials');
      }
    } else {
      alert('Invalid Credentials');
    }
  };

  // Example call
  // handleLogin('user@me.com', '123');

  return (
    <>
      {!user ? <Login handleLogin={handleLogin}/> : null}
      {user === 'admin' ? <AdminDashboard /> : user === 'employees' ? <EmployeeDashboard data={loggedInUserData} /> : null}
    </>
  );
};

export default App;