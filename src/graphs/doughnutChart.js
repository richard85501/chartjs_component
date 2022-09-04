import React from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const doughnutChart = (props) => {
  const { responsive, borderColor, data } = props;
  const getValue = (item) => {
    let arr = [];
    data.forEach((target) => arr.push(target[item]));
    return arr;
  };

  //上面資料的數量
  let keys = [];
  Object.keys(data[0]).forEach((item) => {
    if (item === 'dimension') return;
    keys.push(item);
  });

  //label的數量
  let labels = [];
  data.forEach((item) => {
    labels.push(item.dimension);
  });

  let datasets = [];
  keys.forEach((item) => {
    datasets.push({
      data: getValue(item),
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: borderColor ? borderColor : '#fff',
      borderWidth: 1,
    });
  });

  let material = {
    labels: labels,
    datasets: datasets,
  };

  const options = {
    maintainAspectRatio: false,
    responsive: responsive !== null ? responsive : false,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        align: 'end',
        labels: {
          font: {
            size: 6,
            family: null,
            weight: null,
            lineHeight: null,
          },
          usePointStyle: true,
        },
      },
      tooltip: {
        displayColors: false,
        callbacks: {
          // title: titleTooltip,
          // labelTextColor: labelTextColor,
          // label: label,
          // footer: footer,
          // afterFooter: afterFooter
        },
        bodyFont: { size: 8 },
        backgroundColor: '#000',
        yAlign: 'bottom',
        padding: 8,

        titleFont: { size: 8 },
        titleColor: 'white',

        footFont: { size: 14 },
        footerColor: 'black',
        footerFont: { weight: '400' },
        footerSpacing: 10,
        caretSize: 0,
      },
    },
  };

  return <Doughnut data={material} options={options} />;
};

export default doughnutChart;
