import "./App.css";
import Card from "./components/Card/Card";
import { useState } from "react";
import Component from "./components/Card/Components";
import AdminPanel from "./components/Pages/AdminPanel/AdminPanel";
import UserPanel from "./components/Pages/UserPanel/UserPanel";
import GuestPanel from "./components/Pages/GuestPanel/GuestPanel";
import Button from "./components/Button/Button";

const myArray = [
  "apple",
  "banana",
  "cherry",
  "date",
  "elderberry",
  "fig",
  "grape",
  "honeydew",
  "kiwi",
  "lemon",
  "mango",
  "nectarine",
  "orange",
  "peach",
  "quince",
];

const users = [
  { name: "John Doe", age: 32, email: "john@example.com", city: "New York" },
  { name: "Jane Smith", age: 27, email: "jane@example.com", city: "London" },
  {
    name: "Michael Johnson",
    age: 45,
    email: "michael@example.com",
    city: "Paris",
  },
  {
    name: "Emily Williams",
    age: 19,
    email: "emily@example.com",
    city: "Tokyo",
  },
  { name: "David Brown", age: 38, email: "david@example.com", city: "Sydney" },
  { name: "Sarah Davis", age: 29, email: "sarah@example.com", city: "Berlin" },
  {
    name: "Christopher Miller",
    age: 51,
    email: "chris@example.com",
    city: "Moscow",
  },
  {
    name: "Jessica Wilson",
    age: 24,
    email: "jessica@example.com",
    city: "Madrid",
  },
  {
    name: "Matthew Anderson",
    age: 37,
    email: "matthew@example.com",
    city: "Rome",
  },
  {
    name: "Ashley Thompson",
    age: 31,
    email: "ashley@example.com",
    city: "Toronto",
  },
  {
    name: "Daniel Taylor",
    age: 42,
    email: "daniel@example.com",
    city: "Vancouver",
  },
  {
    name: "Sophia Martinez",
    age: 26,
    email: "sophia@example.com",
    city: "Montreal",
  },
  {
    name: "William Hernandez",
    age: 49,
    email: "william@example.com",
    city: "Mexico City",
  },
  {
    name: "Olivia Gonzalez",
    age: 22,
    email: "olivia@example.com",
    city: "Buenos Aires",
  },
  {
    name: "James Rodriguez",
    age: 35,
    email: "james@example.com",
    city: "São Paulo",
  },
];

const data = [3, 1, 2, 4, 5]

function App() {
  // const [isLoading, setIsLoggedIn] = useState(false);
  // const [test, useTest] = useState()
  // function f(){
  //   setIsLoggedIn(false);
  // }

  // return (
  //   <div className="App">
  //     <div>
  //       Рендеринг списку елементів з певним масивом даних
  //       <ul>
  //         {myArray.map((value, index) => (
  //           <li key={index}>{value}</li>
  //         ))}
  //       </ul>
  //     </div>
  //     <div>
  //       1Рендеринг списку компонентів на основі масиву даних. 2Умовний рендеринг на основі значень змінних.
  //       <button onClick={()=>{setIsLoggedIn(!isLoading);}}>{isLoading ? 'Вийти' : 'Увійти'}</button>
  //       {isLoading ? users.map((item) => (
  //         <Card value={item} key={item.email} />
  //       )): <div style={{color: 'red'}}>Увійдіть в мережу!</div>}
  //     </div>
  //     <div>
  //       <Component/>
  //     </div>
  //   </div>
  // );


  // const userType = 'user'
  const [userType, setUserTYpe] = useState("guest");
  // const [activeButton, setActiveButton] = useState('')

  function renderUserType(params) {
      // eslint-disable-next-line default-case
      switch (userType) {
      case 'admin':{
        return <AdminPanel/>
      }
      case 'user':{
        return <UserPanel/>
      }
      case 'guest':{
        return<GuestPanel/>
      }
    }
  }
  return(
    <div>
      <div>
        <Button>Baton</Button>
        <Button>Baton</Button>
        <button className={userType === 'user' ? 'button' : ''} onClick={()=>{setUserTYpe('user')}}>User</button>
        <button className={userType === 'admin' ? 'button' : ''} onClick={()=>{setUserTYpe('admin')}}>Admin</button>
        <button className={userType === 'guest' ? 'button' : ''} onClick={()=>{setUserTYpe("guest");}}>Guest</button>
      </div>
     {renderUserType()}
     <ul>
        {
          data.sort().map((item, index) =>(
            <li key={index}>
              {item}
            </li>
          ))
        }
     </ul>
     <Component/>
    </div>
    
  )
}

export default App;

//! Три правила умовного рендерингу
//! numder1 ? true : false   Перший принцип умовного ренберингу
//! numder1 && true          && Гвард оператор. Прки змінна не буде true доти не буде виводитися true
//! number1 || test          || Дефолтний оператор, Дає значення по дкфолту. Якщо number буде false ми будемо виводити test, яущо true то виведеться true
