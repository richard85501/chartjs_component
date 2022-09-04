import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  // Interaction,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import gradient from 'chartjs-plugin-gradient';
// import {
// CrosshairPlugin,
// Interpolate,
// } from 'chartjs-plugin-crosshair';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

ChartJS.register(gradient);
// ChartJS.register(CrosshairPlugin);
ChartJS.defaults.showLine = true;
// Interaction.modes.interpolate = Interpolate;

const lineChart = (props) => {
  const {
    data,
    responsive, //是否要符合外層寬高
    pointBorderWidth, //點的邊框寬度 *int
    pointBorderColor, //點的邊框顏色 *string
    pointHoverBorderWidth, //點的邊框hover的寬度 *int
    borderColor, //點的邊框顏色 *string
    hoverBorderColor, //點的邊框hover的顏色 *string
    pointRadius, //點的大小 *int
    pointHoverRadius, //點hover的大小 *int
    pointBackgroundColor, //點的顏色 *string
    pointHoverBackgroundColor, //點hover的顏色 *string
    borderWidth, //線的寬度 *int
    backgroundColor, //線之下的面積顏色 *string
    xAxesFontSize, //x軸字體大小 *int
    xAxesGrid, //x軸隔線是否顯示 *boolean
    xAxesGridBorderDash, //x軸格線,虛線格式 *int of array
    yAxesGrid, //y軸隔線是否顯示 *boolean
    yAxesGridBorderDash, //y軸格線,虛線格式 *int of array
    yAxesMax, //y軸最大值 *int
    yAxesStepSize, //y軸每一個值相隔的距離 *int
    yAxesFontSize, //y軸字體大小 *int
  } = props;

  const getValue = (item) => {
    let arr = [];
    data.forEach((target) => arr.push(target[item]));
    return arr;
  };

  //上面線條的數量
  let keys = [];
  Object.keys(data[0]).forEach((item) => {
    if (item === 'dimension') return;
    keys.push(item);
  });

  //x-axis
  let labels = [];
  data.forEach((item, idx) => {
    labels.push(item.dimension);
  });

  let datasets = [];
  keys.forEach((item, idx) => {
    datasets.push({
      label: item,
      data: getValue(item),
      fill: true,
      //point border
      pointBorderWidth: pointBorderWidth ? pointBorderWidth : 0,
      pointBorderColor: pointBorderColor ? pointBorderColor : 'black',
      pointHoverBorderWidth: pointHoverBorderWidth
        ? pointHoverBorderWidth
        : 0,
      borderColor: borderColor ? borderColor : 'black',
      hoverBorderColor: hoverBorderColor ? hoverBorderColor : 'black',
      //point
      pointRadius: pointRadius ? pointRadius : 0,
      pointHoverRadius: pointHoverRadius ? pointHoverRadius : 0,
      pointBackgroundColor: pointBackgroundColor
        ? pointBackgroundColor
        : '#BEBEBE',
      pointHoverBackgroundColor: pointHoverBackgroundColor
        ? pointHoverBackgroundColor
        : '#BEBEBE',

      borderWidth: borderWidth ? borderWidth : 2,
      tension: 0,
      backgroundColor: backgroundColor && backgroundColor,
      //要安裝 npm i chartjs-plugin-gradient
      // plugins: {gradient}
      gradient: !backgroundColor
        ? {
            backgroundColor: {
              axis: 'y',
              colors: {
                0: 'rgba(250, 250, 250, 0)',
                100: 'rgba(110, 106, 106, 1)',
              },
            },
          }
        : null,
    });
  });

  const chartData = {
    labels: labels,
    datasets: datasets,
  };

  /*** */
  // const titleTooltip = (tooltopItems) => {
  //   return tooltopItems[0].raw + '%';
  // };
  // const footer = (tooltipItems) => {
  //   return "因應新型冠狀肺炎疫情升溫，減少外出和";
  // };

  // const afterFooter = () => {
  //   return "流動，降低病毒傳染機會。";
  // };

  const label = (labelsItems) => {
    let label = '';
    console.log('labelsItems', labelsItems);
    if (data) {
      data.forEach((item, idx) => {
        if (labelsItems.dataIndex === idx) {
          label = item.level;
        }
      });
    } else {
      label = '無此資料';
    }

    return label;
  };

  // const labelTextColor = (labelsItems) => {
  //   let color;
  //   if (data) {
  //     data.forEach((item, idx) => {
  //       if (labelsItems.dataIndex === idx) {
  //         if (item.level === '優') {
  //           color = 'rgba(0, 122, 255, 1)';
  //         } else if (item.level === '佳') {
  //           color = 'rgba(88, 86, 214, 1)';
  //         } else if (item.level === '普通') {
  //           color = 'rgba(52, 199, 89, 1)';
  //         } else if (item.level === '差') {
  //           color = 'rgba(255, 149, 0, 1)';
  //         } else if (item.level === '劣') {
  //           color = 'rgba(255, 59, 48, 1)';
  //         }
  //       }
  //     });
  //   } else {
  //     color = '#007AFF';
  //   }
  //   return color;
  // };
  /***** */

  const options = {
    maintainAspectRatio: false,
    responsive: responsive !== null ? responsive : false,
    scales: {
      yAxes: {
        max: yAxesMax ? yAxesMax : 100,
        min: 0,
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
        ticks: {
          font: {
            size: xAxesFontSize ? xAxesFontSize : 8,
          },
          callback: function (val, index) {
            return labels[index];
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
      gradient,
      legend: {
        display: true,
        position: 'top',
        align: 'end',
        labels: {
          font: {
            size: 8, //圖案大小
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
          label: label,
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
    tooltips: { bodyFontSize: 20 },
  };

  return <Line data={chartData} options={options} />;
};

export default lineChart;
