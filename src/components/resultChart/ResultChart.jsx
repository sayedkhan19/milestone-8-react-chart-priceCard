import React from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const resultData = [
    {
      "id": 1,
      "name": "Student 1",
      "Math": 85,
      "Science": 10,
      "English": 88,
      "History": 75
    },
    {
      "id": 2,
      "name": "Student 2",
      "Math": 78,
      "Science": 82,
      "English": 80,
      "History": 85
    },
    {
      "id": 3,
      "name": "Student 3",
      "Math": 92,
      "Science": 88,
      "English": 94,
      "History": 89
    },
    {
      "id": 4,
      "name": "Student 4",
      "Math": 67,
      "Science": 72,
      "English": 70,
      "History": 65
    },
    {
      "id": 5,
      "name": "Student 5",
      "Math": 89,
      "Science": 91,
      "English": 85,
      "History": 88
    },
    {
      "id": 6,
      "name": "Student 6",
      "Math": 75,
      "Science": 78,
      "English": 74,
      "History": 70
    },
    {
      "id": 7,
      "name": "Student 7",
      "Math": 95,
      "Science": 92,
      "English": 90,
      "History": 93
    },
    {
      "id": 8,
      "name": "Student 8",
      "Math": 81,
      "Science": 85,
      "English": 82,
      "History": 80
    },
    {
      "id": 9,
      "name": "Student 9",
      "Math": 88,
      "Science": 84,
      "English": 87,
      "History": 79
    },
    {
      "id": 10,
      "name": "Student 10",
      "Math": 73,
      "Science": 76,
      "English": 78,
      "History": 75
    }
  ];

const ResultChart = () => {
    return (
        <div className='mt-8'>
            <LineChart width={600} height={400} data={resultData}>
                <XAxis></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Line dataKey="Math" stroke='red'> </Line>
                <Line dataKey={'Science'} stroke='black'></Line>
            </LineChart>
        </div>
    );
};

export default ResultChart;