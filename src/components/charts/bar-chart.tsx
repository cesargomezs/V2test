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
    <div className="bar-chart-container">
      <Bar data={data} options={options} className="bar-chart" />
      {/* <p className="bar-chart-description">
      This bar chart shows the average for each month, with data obtained from a JSON file.
      </p> */
      }
      <br></br>
      <p className="psectiondescription">
      <strong>January :</strong> Assess & Benchmark, Objective: Understand current performance and identify key areas for improvement.
     - Conduct time studies and map workflow.
     - Measure baseline KPIs (e.g., orders picked/hour, order accuracy).
      </p>
      <br></br>
      <p className="psectiondescription">
      <strong>February :</strong> Design & Plan, Objective: Develop a detailed plan to optimize the warehouse layout and processes.
     - Redesign layout for optimal flow (receiving, storage, picking, packing).
     - Implement new storage solutions (e.g., shelving, racking).
      </p>  
      <br></br>    
      <p className="psectiondescription">
      <strong>March :</strong> Implement & Train, Objective: Execute the design plan and train employees on new processes.
     - Reorganize warehouse according to new layout.
      - Install new storage solutions and equipment.  
      </p>
      <br></br>
      <p className="psectiondescription">
      <strong>April :</strong> Optimize & Monitor, Objective: Fine-tune processes and monitor performance.
     - Analyze initial performance data against baseline KPIs.
     - Identify any remaining bottlenecks or issues.          

      </p>
      <br></br>
      <p className="psectiondescription">
      <strong>May :</strong> Review & Sustain, Objective: Ensure long-term sustainability of improvements.
      - Conduct a comprehensive review of the project outcomes.
      - Compare final KPIs against initial benchmarks.
      </p>
      <br></br>
      <p className="psectiondescription">
      <strong>June :</strong> Celebrate & Reflect, Objective: Acknowledge achievements and reflect on the project.
      - Host a celebration event for the team.
      - Share success stories and lessons learned with the organization.
      </p>
      <br></br>
      <p className="psectiondescription">
      <strong>July :</strong> Plan for Future Improvements, Objective: Set the stage for ongoing enhancements.
      - Review the project outcomes and identify areas for future focus.
      - Develop a roadmap for future warehouse improvements.
      </p>
      <br></br>
      <p className="psectiondescription">
      <strong>August :</strong> Knowledge Sharing & Training, Objective: Share knowledge and train new employees.
      - Create training materials based on the project outcomes.
      - Conduct training sessions for new employees on improved processes.
      </p>
      <br></br>
      <br/>
      <p className="psectiondescription">
      <strong>September :</strong> Evaluate & Adjust, Objective: Evaluate the effectiveness of the improvements.
      - Conduct a thorough evaluation of the implemented changes.
      - Gather feedback from employees on the new processes.
      </p>  
      <br></br>
      <p className="psectiondescription">
      <strong>October :</strong> Celebrate Milestones, Objective: Recognize achievements and celebrate milestones.
      - Host a milestone celebration event for the team.
      - Share success stories and achievements with the organization.
      </p>
      <br></br>
      <p className="psectiondescription">
      <strong>November :</strong> Plan for Year-End Review, Objective: Prepare for the year-end review and planning
      - Review the project outcomes and performance metrics.
      - Gather feedback from employees on the overall project.
      </p>
      <br></br>
      <p className="psectiondescription">
      <strong>December :</strong> Year-End Review & Planning, Objective: Conduct a comprehensive year-end review and plan for the next year.
      - Conduct a year-end review meeting with the team.
      - Present the project outcomes and performance metrics.
      </p> 
      <br></br>
    </div>
  );
};

export default BarChart;