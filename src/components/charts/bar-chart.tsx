import { Bar } from 'react-chartjs-2';
import '@/styles/charts/bar-chart.css';
  import all from  '@/components/data/labels.json';



const samples = JSON.stringify(all);
const parsedSamples = JSON.parse(samples);

const labelsjson: unknown[] = [];
const valuesjson: unknown[] = [];

if (Array.isArray(parsedSamples) && parsedSamples.length > 0) {
  parsedSamples.forEach(elemento => {
    labelsjson.push(elemento.labels);
    valuesjson.push(elemento.value);
  });
}

const data = {
  labels: labelsjson,
  datasets: [
    {
      label: 'Quarterly and Monthly compliance 100%',
      backgroundColor: ['rgba(255,99,132,0.2)', 'rgba(132,99,255,0.2)', 'rgba(130,255,90,0.2)'],
      borderColor: ['rgba(255,99,132,1)', 'rgba(132,99,255,1)', 'rgba(130,130,99,1)'],
      borderWidth: 1,
      hoverBackgroundColor: ['rgba(255,99,132,0.4)', 'rgba(132,99,255,0.4)', 'rgba(132,255,99,0.4)'],
      hoverBorderColor: ['rgba(255,99,132,1)', 'rgba(132,99,255,1)', 'rgba(99,255,132,1)'],
      data: valuesjson,
    },
  ],
};

const options = {
  scales: {
    y: {
      title: {
        display: true,
        text: 'Monthly compliance 100%',
      },
      beginAtZero: true,
    },
    x: {
      title: {
        display: true,
        text: 'Month',
      },
    },
  },
};

const BarChart = () => {
  return (
    <>
      <div className="bar-chart-container">
        <Bar data={data} options={options} className="bar-chart" />
      </div>
    </>
  );
};

export default BarChart;