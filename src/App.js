import styles from './App.module.scss';

import LineChart from './graphs/lineChart.js';
import BarChart from './graphs/barChart.js';
import LineBarChart from './graphs/lineBarChart';
import PieChart from './graphs/pieChart.js';
import DoughnutChart from './graphs/doughnutChart.js';

function App() {
  let multipleData = [
    { 金額: '55', value1: '2', dimension: '9/1' },
    { 金額: '66', value1: '3', dimension: '9/2' },
    { 金額: '22', value1: '40', dimension: '9/3' },
    { 金額: '33', value1: '5', dimension: '9/4' },
    { 金額: '77', value1: '6', dimension: '9/5' },
    { 金額: '53', value1: '25', dimension: '9/6' },
    { 金額: '7', value1: '8', dimension: '9/7' },
    { 金額: '9', value1: '26', dimension: '9/8' },
    { 金額: '43', value1: '9', dimension: '9/9' },
  ];

  let singleData = [
    { value: '55', dimension: '9/1' },
    { value: '66', dimension: '9/2' },
    { value: '22', dimension: '9/3' },
    { value: '33', dimension: '9/4' },
    { value: '77', dimension: '9/5' },
    { value: '53', dimension: '9/6' },
    { value: '7', dimension: '9/7' },
    { value: '9', dimension: '9/8' },
    { value: '43', dimension: '9/9' },
  ];

  let pieChartData = [
    { value: '30', dimension: '進貨單' },
    { value: '80', dimension: '退貨單' },
  ];

  let TESTData = [
    { 金額: 305, 營業額: 222, 自訂區間: '55', dimension: '9/1' },
    { 金額: 250, 營業額: 850, 自訂區間: '66', dimension: '9/2' },
    { 金額: 440, 營業額: 2000, 自訂區間: '22', dimension: '9/3' },
    { 金額: 221, 營業額: 987, 自訂區間: '33', dimension: '9/4' },
    { 金額: 1026, 營業額: 156, 自訂區間: '77', dimension: '9/5' },
    { 金額: 2489, 營業額: 741, 自訂區間: '53', dimension: '9/6' },
    { 金額: 955, 營業額: 632, 自訂區間: '7', dimension: '9/7' },
    { 金額: 752, 營業額: 500, 自訂區間: '9', dimension: '9/8' },
    { 金額: 625, 營業額: 805, 自訂區間: '43', dimension: '9/9' },
  ];

  let colorList = [
    '#CEFFCE',
    '#F1E1FF',
    '#FFD2D2',
    '#D2E9FF',
    '#C4E1E1',
    '#66B3FF',
    '#FF8F59',
  ];

  return (
    <div className={styles.App}>
      <div className={styles.container}>
        <div className={styles.unitWrapper}>
          <div className={styles.title}>多重折線圖</div>
          <div className={styles.chartWrapper}>
            <LineChart data={multipleData} responsive={true} />
          </div>
        </div>
        <div className={styles.unitWrapper}>
          <div className={styles.title}>折線圖(預設)</div>
          <div className={styles.chartWrapper}>
            <LineChart data={singleData} responsive={true} />
          </div>
        </div>
        <div className={styles.unitWrapper}>
          <div className={styles.title}>柱狀圖(預設)</div>
          <div className={styles.chartWrapper}>
            <BarChart data={multipleData} responsive={true} />
          </div>
        </div>
        <div className={styles.unitWrapper}>
          <div className={styles.title}>直線長條圖(預設)</div>
          <div className={styles.chartWrapper}>
            <LineBarChart
              data={TESTData}
              responsive={true}
              colorList={colorList}
              lineBorderColor={'pink'}
              pointRadius={2}
            />
          </div>
        </div>
        <div className={styles.unitWrapper}>
          <div className={styles.title}>堆疊柱狀圖</div>
          <div className={styles.chartWrapper}>
            <BarChart
              data={TESTData}
              responsive={true}
              colorList={colorList}
              stacked={true}
            />
          </div>
        </div>
        <div className={styles.unitWrapper}>
          <div className={styles.title}>水平柱狀圖</div>
          <div className={styles.chartWrapper}>
            <BarChart
              data={multipleData}
              responsive={true}
              indexAxis={'y'}
            />
          </div>
        </div>
        <div className={styles.unitWrapper}>
          <div className={styles.title}>圓餅圖(預設)</div>
          <div className={styles.chartWrapper}>
            <PieChart data={pieChartData} responsive={true} />
          </div>
        </div>
        <div className={styles.unitWrapper}>
          <div className={styles.title}>環圈圖(預設)</div>
          <div className={styles.chartWrapper}>
            <DoughnutChart data={singleData} responsive={true} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
