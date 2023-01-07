import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  width: "30%",
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
    },
  },

  scales: {
    xAxes: [
      {
        barThickness: 13,
      },
    ],
    y: {
      title: {
        display: true,
        text: "NGN",
      },
      ticks: {
        min: 1,
        max: 22,
        stepSize: 1,
      },
      grid: {
        color: "rgba(224, 255, 255, .2)",
      },
    },
    x: {
      title: {
        display: true,
        text: "Year",
      },
      grid: {
        display: false,
      },
    },
  },
};

interface BarChartProps {
  apiData: {
    totalAmountOfMembershipPayments: {};
    totalAnnouncementCount: number;
    totalEventsCount: number;
    totalMembersCount: number;
  };
  label?: string;
}

function BarChart({ apiData, label = "Total Annual income" }: BarChartProps) {
  const labels = Object?.keys(apiData?.totalAmountOfMembershipPayments ?? {});
  // currently this is the only way to shift the bar chart to the left,
  // however the more items you have in the array the more useless it becomes.
  labels.push("", "", "", "", "", "");
  const dataSetFromApi = Object?.values(
    apiData?.totalAmountOfMembershipPayments ?? {}
  );
  const style = getComputedStyle(document.body);
  const primCol = style.getPropertyValue("--color-primaryColor");
  const data = {
    labels,
    datasets: [
      {
        label,
        data: dataSetFromApi.map((data1) => data1),
        backgroundColor: primCol,
        borderRadius: 15,
        borderSkipped: false,
        barThickness: 25,
        datalabels: {
          display: false,
        },
      },
    ],
  };
  // @ts-ignore
  // return <Bar options={options} data={data} />;
  return (
    <div>
      <p className="">helloxs</p>
    </div>
  );
}

export default BarChart;
