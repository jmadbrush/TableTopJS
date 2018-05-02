var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/136KE4mRxktNmkjvGv4jDbwyN9Ezpk33Mk0LDf3eOfVI/edit?usp=sharing';

function init() {
  Tabletop.init( { key: public_spreadsheet_url,
                   callback: showInfo,
                   simpleSheet: true } )
}

function showInfo(data, tabletop) {

  var container = document.querySelector(".container");
  container.innerHTML = "";

  var doubles = data.map(function(data){

    var obj = {};
    obj = [data.Language, Number(data.Skill)];
    console.log(data.Language);
    return obj;
  })


  drawChart(doubles);
}


//GOOGLE CHARTS 
// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(init);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart(dataStuff) {

  // Create the data table.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Language');
  data.addColumn('number', 'Skill');

  data.addRows(dataStuff);

  // Set chart options
  var options = {"title":"Joey's Coding Skills",
                 "width":800,
                 "height":800,
                colors: ['#f16529', '#23a1de', '#ec8f6e', '#ffd64e', '#777bb3'],
                pieHole: 0.4
              };

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}
