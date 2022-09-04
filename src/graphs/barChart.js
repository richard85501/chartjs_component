import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const BarChart = (props) => {
  const {
    data,
    responsive, //是否要符合外層寬高 *boolean
    colorList, //傳入bar的顏色 *string of array ["black","red"]
    stacked, //是否為堆疊柱狀圖 *boolean
    indexAxis, //是否為水平柱狀圖 *string => x|y
    xAxesFontSize, //x軸字體大小 *int
    yAxesFontSize, //y軸字體大小 *int
    borderWidth, //柱子體的border *int
    borderColor, //柱子體border的顏色 *int
    borderRadius, //柱狀體的radius *int 預設2
    barPercentage, //柱狀體的寬度 *int
    yAxesMax, //y軸最大值 *int
    yAxesStepSize, //y軸每一個值相隔的距離 *int
    yAxesGrid, //y軸隔線是否顯示 *boolean
    yAxesGridBorderDash, //y軸格線,虛線格式 *int of array
    xAxesGrid, //x軸隔線是否顯示 *boolean
    xAxesGridBorderDash, //x軸格線,虛線格式 *int of array
  } = props;

  //   const fakeValue = [NaN];

  const getValue = (item) => {
    let arr = [];
    data.forEach((target) => arr.push(target[item]));
    return arr;
  };

  const presetColor = [
    'rgba(0, 0, 0, 0.911)',
    'rgba(0, 0, 0, 0.1)',
    'rgba(0, 0, 0, 0.2)',
    'rgba(0, 0, 0, 0.3)',
    'rgba(0, 0, 0, 0.4)',
    'rgba(0, 0, 0, 0.5)',
    'rgba(0, 0, 0, 0.6)',
  ];

  //x-axis
  let labels = [];
  data.forEach((item) => {
    labels.push(item.dimension);
  });

  //上面柱狀體的數量
  let keys = [];
  Object.keys(data[0]).forEach((item) => {
    if (item === 'dimension') return;
    keys.push(item);
  });

  let datasets = [];
  //[
  //     {
  //       label: 'value',
  //       data: [55, 33, 99, 66, 87, 88, 99, 66, 33],
  //       //   data: [55, 88],
  //       backgroundColor: [
  //         'rgba(255, 255, 255, 0.6)',
  //         'rgba(255, 255, 255, 0.6)',
  //         'rgba(255, 255, 255, 0.6)',
  //       ],
  //       borderWidth: 1,
  //     },
  //     {
  //       label: 'value1',
  //       data: [55, 33, 99, 66, 87, 88, 99, 66, 33],
  //       //   data: [55, 88],
  //       backgroundColor: [
  //         'rgba(255, 255, 255, 0.6)',
  //         'rgba(255, 255, 255, 0.6)',
  //         'rgba(255, 255, 255, 0.6)',
  //       ],
  //       borderWidth: 1,
  //     }
  //]

  keys.forEach((item, idx) => {
    datasets.push({
      label: item,
      data: getValue(item),
      backgroundColor: colorList ? colorList[idx] : presetColor[idx],
      borderWidth: borderWidth ? borderWidth : 0,
      borderColor: borderColor ? borderColor : 'black',
      borderRadius: borderRadius ? borderRadius : 2,
      barPercentage: barPercentage ? barPercentage : 0.7,
    });
  });

  const material = {
    labels: labels,
    datasets: datasets,
  };

  const options = {
    maintainAspectRatio: false,
    responsive: responsive !== null ? responsive : false,
    indexAxis: indexAxis ? indexAxis : 'x',
    scales: {
      yAxes: {
        max: yAxesMax ? yAxesMax : null,
        min: 0,
        stacked: stacked ? stacked : false,
        ticks: {
          beginAtZero: true,
          stepSize: yAxesStepSize ? yAxesStepSize : 25,
          font: {
            size: yAxesFontSize ? yAxesFontSize : 6,
          },
          callback: function (value) {
            return value;
          },
        },
        grid: {
          display: yAxesGrid ? yAxesGrid : false,
          borderDash: yAxesGridBorderDash
            ? yAxesGridBorderDash
            : [4, 4],
        },
      },
      xAxes: {
        stacked: stacked ? stacked : false,
        ticks: {
          font: {
            size: xAxesFontSize ? xAxesFontSize : 8,
          },
        },
        grid: {
          display: xAxesGrid ? xAxesGrid : false,
          borderDash: xAxesGridBorderDash
            ? xAxesGridBorderDash
            : [4, 4],
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
        align: 'end',
        labels: {
          font: {
            size: 8,
            family: null,
            weight: null,
            lineHeight: null,
          },
          usePointStyle: true,
        },
      },
      tooltip: {
        displayColors: false,
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

  return <Bar data={material} options={options} />;
};

export default BarChart;
