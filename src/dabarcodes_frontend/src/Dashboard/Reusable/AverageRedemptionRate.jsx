import React from 'react'
import UsageOverview from './UsageOverview'
const AverageRedemptionRate = () => {
    const chartData = {
        labels: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
        datasets: [
          {
            label: "Revenue",
            data: [10000, 40000, 20000, 50000, 60000, 40000, 20000],
            borderColor: "#3b82f6",
            tension: 0, 
            pointRadius: 5,
            pointBackgroundColor: "#3b82f6", 
          },
        ],
      };
    
      const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {display: false}, 
          tooltip: {
            enabled: true,
          },
        },
        scales: {
          x: {
            grid: {display: false}, 
          },
          y: {
            beginAtZero: true,
            ticks: {stepSize: 10000},
            grid: {color: "#e5e7eb"},
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
