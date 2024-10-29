import React from 'react'
import UsageOverview from './UsageOverview'
const AverageRedemptionRate = () => {
    const chartData = {
        labels: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
        datasets: [
          {
            label: "Revenue",
            data: [10000, 40000, 20000, 50000, 60000, 40000, 20000],
            borderColor: "#3b82f6", // Blue line
            tension: 0, // Curved line
            pointRadius: 5, // Dot size
            pointBackgroundColor: "#3b82f6", // Dot color
          },
        ],
      };
    
      const chartOptions = {
        responsive: true,
        maintainAspectRatio: false, // Prevents fixed aspect ratio to allow full width
        plugins: {
          legend: {display: false}, // Hide legend
          tooltip: {
            enabled: true, // Disable tooltips completely
          },
        },
        scales: {
          x: {
            grid: {display: false}, // Hide vertical grid lines
          },
          y: {
            beginAtZero: true,
            ticks: {stepSize: 10000}, // Control y-axis steps
            grid: {color: "#e5e7eb"}, // Light gray grid lines
          },
        },
      };
  return (
    <>
        <UsageOverview
        title="Average Product Redemption Rate"
        value="75,000"
        valueLabel="per week"
        chartData={chartData}
        chartOptions={chartOptions}
        selectOptions={["This Week", "Last Week"]}
      />
    </>
  )
}

export default AverageRedemptionRate
