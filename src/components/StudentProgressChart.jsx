// StudentProgressChart.js

import React from 'react';
import { Bar } from 'react-chartjs-2';
import { LinearScale, CategoryScale } from 'chart.js';

LinearScale.id = 'linear';
CategoryScale.id = 'category';

const StudentProgressChart = ({ students, progressData }) => {
  const studentNames = students.map(student => student.name);
//   const progressData = students.map(student => student.progress);

  const data = {
    labels: studentNames,
    datasets: [
      {
        label: 'Progress',
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.4)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: progressData,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        type: 'linear',
        beginAtZero: true,
        max: 100,
      },
    },
  };

  return (
    <div>
      <h2>Student Progress Chart</h2>
      <div style={{ height: '400px' }}>
  <Bar data={data} options={options} />
</div>
    </div>
  );
};

export default StudentProgressChart;
