import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Dashboard = () => {
    const marksArray = [
        {
          id: 1,
          name: "Student 1",
          phy: Math.floor(Math.random() * 101),
          chem: Math.floor(Math.random() * 101),
          math: Math.floor(Math.random() * 101)
        },
        {
          id: 2,
          name: "Student 2",
          phy: Math.floor(Math.random() * 101),
          chem: Math.floor(Math.random() * 101),
          math: Math.floor(Math.random() * 101)
        },
        {
          id: 3,
          name: "Student 3",
          phy: Math.floor(Math.random() * 101),
          chem: Math.floor(Math.random() * 101),
          math: Math.floor(Math.random() * 101)
        },
        {
          id: 4,
          name: "Student 4",
          phy: Math.floor(Math.random() * 101),
          chem: Math.floor(Math.random() * 101),
          math: Math.floor(Math.random() * 101)
        },
        {
          id: 5,
          name: "Student 5",
          phy: Math.floor(Math.random() * 101),
          chem: Math.floor(Math.random() * 101),
          math: Math.floor(Math.random() * 101)
        },
        {
          id: 6,
          name: "Student 6",
          phy: Math.floor(Math.random() * 101),
          chem: Math.floor(Math.random() * 101),
          math: Math.floor(Math.random() * 101)
        },
        {
          id: 7,
          name: "Student 7",
          phy: Math.floor(Math.random() * 101),
          chem: Math.floor(Math.random() * 101),
          math: Math.floor(Math.random() * 101)
        },
        {
          id: 8,
          name: "Student 8",
          phy: Math.floor(Math.random() * 101),
          chem: Math.floor(Math.random() * 101),
          math: Math.floor(Math.random() * 101)
        },
        {
          id: 9,
          name: "Student 9",
          phy: Math.floor(Math.random() * 101),
          chem: Math.floor(Math.random() * 101),
          math: Math.floor(Math.random() * 101)
        },
        {
          id: 10,
          name: "Student 10",
          phy: Math.floor(Math.random() * 101),
          chem: Math.floor(Math.random() * 101),
          math: Math.floor(Math.random() * 101)
        },
        {
          id: 11,
          name: "Student 11",
          phy: Math.floor(Math.random() * 101),
          chem: Math.floor(Math.random() * 101),
          math: Math.floor(Math.random() * 101)
        },
        {
          id: 12,
          name: "Student 12",
          phy: Math.floor(Math.random() * 101),
          chem: Math.floor(Math.random() * 101),
          math: Math.floor(Math.random() * 101)
        }
      ];
      
    return (
        <div>
            <LineChart
                width={1000}
                height={500}
                data={marksArray}
            >
                <Line dataKey="phy"></Line>
                <Line stroke="#82ca9d"  dataKey="chem"></Line>
                <Line stroke="#8884d8" dataKey="math"></Line>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            </LineChart>
        </div>
    );
};

export default Dashboard;