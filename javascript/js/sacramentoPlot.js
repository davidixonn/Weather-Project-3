let sacramentoYear = [2013,2014,2015,2016,2017,
                  2018,2019,2020,2021,2022];
let sacramentoDailyAvgTemp = [
  65.091503268,
  64.6602739726,
  64.0493150685,
  62.8606557377,
  62.901369863,
  62.0739726027,
  62.4684931507,
  63.9316939891,
  62.6493150685,
  63.1260273973
];
let sacramentoDailyMaxTemp = [
  79.339869281,
  77.4301369863,
  77.0876712329,
  75.3142076503,
  75.3123287671,
  75.1452054795,
  74.6684931507,
  77.631147541,
  75.7479452055,
  76.9671232877
];
let sacramentoDailyMinTemp = [
  50.2875816993,
  51.3753424658,
  50.5315068493,
  49.9590163934,
  49.9863013699,
  48.4712328767,
  49.7945205479,
  49.7322404372,
  49.095890411,
  48.7917808219
];

// Display the default plot
function init() {
  let trace1 = {
    x: sacramentoYear,
    y: sacramentoDailyAvgTemp,
    type: "line",
  };
  
  let layout = {
    title: 'Sacramento, California Average Yearly Temperature (\u00B0F)',
    xaxis: {
      title: 'Year'
    },
    yaxis: {
      title: 'Temperature'
    }
  };
  
  let data = [trace1];
  
  Plotly.newPlot("sacramentoLine", data, layout);
};

let trace1 = {
  x: sacramentoYear,
  y: sacramentoDailyAvgTemp,
  type: "line",
  name: 'Average Daily Average Temp'
};
let trace2 = {
  x: sacramentoYear,
  y: sacramentoDailyMaxTemp,
  type: "line",
  name: 'Average Daily Max Temp'
};
let trace3 = {
  x: sacramentoYear,
  y: sacramentoDailyMinTemp,
  type: "line",
  name: 'Average Daily Min Temp'
};


// On change to the DOM, call getData()
d3.selectAll("#selDataset").on("change", getData);

// Function called by DOM changes
function getData() {
  let dropdownMenu = d3.select("#selDataset");
  // Assign the value of the dropdown menu option to a letiable
  let dataset = dropdownMenu.property("value");
  let layout = {
    title: 'Sacramento, California Average Yearly Temperature (\u00B0F)',
    xaxis: {
      title: 'Year'
    },
    yaxis: {
      title: 'Temperature'
    }
  };
  if (dataset == 'avgDailyMaxTemp') {
      data = [trace2];
  }
  else if (dataset == 'avgDailyMinTemp') {
      data = [trace3];
  }
  else if (dataset == 'avgDailyAvgTemp') {
    data = [trace1];
  }
  else if (dataset == 'allAvg') {
    data = [trace1,trace2,trace3];
  }
// Call function to update the chart
  Plotly.newPlot("sacramentoLine", data, layout);
}

init();
