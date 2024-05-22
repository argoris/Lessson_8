import React, { useState } from "react";
import Card from "../Card/Card";

// const myArray = [
//   "apple",
//   "banana",
//   "cherry",
//   "date",
//   "elderberry",
//   "fig",
//   "grape",
//   "honeydew",
//   "kiwi",
//   "lemon",
//   "mango",
//   "nectarine",
//   "orange",
//   "peach",
//   "quince",
// ];

const users = [
  {
    id: 1,
    name: "John Doe",
    age: 32,
    email: "john@example.com",
    city: "New York",
    isVisible: true,
    gender: "male",
    isAllowed: true,
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 27,
    email: "jane@example.com",
    city: "London",
    isVisible: false,
    gender: "female",
    isAllowed: false,
  },
  {
    id: 3,
    name: "Michael Johnson",
    age: 45,
    email: "michael@example.com",
    city: "Paris",
    isVisible: true,
    gender: "male",
    isAllowed: true,
  },
  {
    id: 4,
    name: "Emily Williams",
    age: 19,
    email: "emily@example.com",
    city: "Tokyo",
    isVisible: false,
    gender: "female",
    isAllowed: true,
  },
  {
    id: 5,
    name: "David Brown",
    age: 38,
    email: "david@example.com",
    city: "Sydney",
    isVisible: true,
    gender: "male",
    isAllowed: false,
  },
  {
    id: 6,
    name: "Sarah Davis",
    age: 29,
    email: "sarah@example.com",
    city: "Berlin",
    isVisible: false,
    gender: "female",
    isAllowed: true,
  },
  {
    id: 7,
    name: "Christopher Miller",
    age: 51,
    email: "chris@example.com",
    city: "Moscow",
    isVisible: true,
    gender: "male",
    isAllowed: false,
  },
  {
    id: 8,
    name: "Jessica Wilson",
    age: 24,
    email: "jessica@example.com",
    city: "Madrid",
    isVisible: true,
    gender: "female",
    isAllowed: true,
  },
  {
    id: 9,
    name: "Matthew Anderson",
    age: 37,
    email: "matthew@example.com",
    city: "Rome",
    isVisible: false,
    gender: "male",
    isAllowed: false,
  },
  {
    id: 10,
    name: "Ashley Thompson",
    age: 31,
    email: "ashley@example.com",
    city: "Toronto",
    isVisible: false,
    gender: "female",
    isAllowed: true,
  },
  {
    id: 11,
    name: "Daniel Taylor",
    age: 42,
    email: "daniel@example.com",
    city: "Vancouver",
    isVisible: true,
    gender: "male",
    isAllowed: false,
  },
  {
    id: 12,
    name: "Sophia Martinez",
    age: 26,
    email: "sophia@example.com",
    city: "Montreal",
    isVisible: true,
    gender: "female",
    isAllowed: true,
  },
  {
    id: 13,
    name: "William Hernandez",
    age: 49,
    email: "william@example.com",
    city: "Mexico City",
    isVisible: false,
    gender: "male",
    isAllowed: false,
  },
  {
    id: 14,
    name: "Olivia Gonzalez",
    age: 35,
    email: "james@example.com",
    city: "São Paulo",
    isVisible: true,
    gender: "female",
    isAllowed: true,
  },
  {
    id: 15,
    name: "James Rodriguez",
    age: 22,
    email: "olivia@example.com",
    city: "Buenos Aires",
    isVisible: false,
    gender: "male",
    isAllowed: false,
  },
];

const Content = () => {
    const [filterData, setFilterData] = useState('male') 
    const filteredData = users.filter((item => item.gender === filterData));

  return (
    <div>
        <div>
            <button onClick={()=>{setFilterData('male')}}>male</button>
            <button onClick={()=>{setFilterData("female");}}>female</button>
        </div>
       { 
       users.length > 17 ? <div>Занадто довгий масив</div> :
        <ul>
            {
                // users.map((value, index) => <Card key={index} value={value} />)
                filteredData.map(
                (item => item.isVisible && item.isAllowed && <Card key={item.id} value={item} />
                ))
            }
        </ul>
       }
    </div>
  );
};

export default Content;




//! >= Тернарний оператор
