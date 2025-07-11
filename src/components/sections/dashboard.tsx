import BarChart from "@/components/charts/bar-chart";

import Chart, { CategoryScale } from 'chart.js/auto';

Chart.register(CategoryScale);

const Dashboard = () => {
  return (
    <section id="dashboard">
      <h2>Dashboard</h2>
      <BarChart />
    </section>
  );
};

export default Dashboard;
