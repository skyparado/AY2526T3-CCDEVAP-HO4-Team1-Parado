
const baseOptions = {
  responsive: true,
  maintainAspectRatio: false,
};


const topSellersCtx = document.getElementById("topSellersChart");
new Chart(topSellersCtx, {
  type: "bar",
  data: {
    labels: ["Anna_S", "Miguel_R", "Sofia_L", "Raj_K", "Liam_T", "Mei_C"],
    datasets: [
      {
        label: "Successful Claims",
        data: [42, 38, 31, 27, 19, 14],
        backgroundColor: "#1e88e5",
        borderRadius: 4,
      },
    ],
  },
  options: {
    ...baseOptions,
    scales: {
      y: {
        beginAtZero: true,
        title: { display: true, text: "Number of Successful Claims" },
      },
      x: {
        title: { display: true, text: "Seller (Username)" },
      },
    },
    plugins: {
      legend: { display: true, position: "top" },
    },
  },
});


const ratingCtx = document.getElementById("ratingChart");
new Chart(ratingCtx, {
  type: "bar",
  data: {
    labels: ["1.0–1.9", "2.0–2.9", "3.0–3.9", "4.0–4.9", "5.0"],
    datasets: [
      {
        label: "Number of Users",
        data: [6, 14, 33, 78, 45],
        backgroundColor: "#43a047",
        borderRadius: 4,
        categoryPercentage: 1.0,
        barPercentage: 1.0,
      },
    ],
  },
  options: {
    ...baseOptions,
    scales: {
      y: {
        beginAtZero: true,
        title: { display: true, text: "Number of Users" },
      },
      x: {
        title: { display: true, text: "Average Rating (stars)" },
      },
    },
    plugins: {
      legend: { display: true, position: "top" },
    },
  },
});

const userGrowthCtx = document.getElementById("userGrowthChart");
new Chart(userGrowthCtx, {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Total Users",
        data: [120, 245, 410, 580, 790, 1050],
        borderColor: "#fb8c00",
        backgroundColor: "rgba(251, 140, 0, 0.15)",
        fill: true,
        tension: 0.35,
        pointBackgroundColor: "#fb8c00",
        pointRadius: 4,
      },
    ],
  },
  options: {
    ...baseOptions,
    scales: {
      y: {
        beginAtZero: true,
        title: { display: true, text: "Cumulative Users" },
      },
      x: {
        title: { display: true, text: "Month" },
      },
    },
    plugins: {
      legend: { display: true, position: "top" },
    },
  },
});
