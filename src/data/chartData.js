export const userGrowthData = {
labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
datasets: [
  {
    label: "Users Growth",
    data: [400, 800, 600, 1200, 1500, 1700, 123, 1122],
    borderColor: "rgba(37, 99, 235, 1)",
    backgroundColor: "rgba(37, 99, 235, 0.3)",
    tension: 0.4, // smooth line
    fill: true,
  },
]
};

export const userGrowthOptions = {
  responsive: true,
  plugins: {
    legend: { position: "top" },
    title: { display: true, text: "📈 User Growth Over Months" },
  },
};

export const productCategoryData = {
  labels: ["Electronics", "Computers", "Accessories", "Fashion", "Books"],
  datasets: [
    {
      label: "Products per Category",
      data: [50, 30, 40, 60, 80],
      backgroundColor: [
        "rgba(37, 99, 235, 0.7)",
        "rgba(16, 185, 129, 0.7)",
        "rgba(251, 191, 36, 0.7)",
        "rgba(239, 68, 68, 0.7)",
        "rgba(107, 33, 168, 0.7)",
      ],
      borderColor: "white",
      borderWidth: 2,
    },
  ],
};

export const productCategoryOptions = {
  responsive: true,
  plugins: {
    legend: { position: "right" },
    title: { display: true, text: "📊 Products per Category" },
  },
};

