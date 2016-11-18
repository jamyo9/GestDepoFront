$(function () {

    /*
     * LINE CHART
     * ----------
     */
    //LINE randomly generated data

    var positions = [];
    //var cos = [];
    for (var i = 0; i < 20; i++) {
      positions.push([i, i]);
      //cos.push([i, Math.cos(i)]);
    }
    var line_data1 = {
      data: positions,
      color: "#3c8dbc"
    };
    /*
    var line_data2 = {
      data: cos,
      color: "#00c0ef"
    };
    */
    $.plot("#line-chart", [line_data1/*, line_data2*/], {
      grid: {
        hoverable: true,
        borderColor: "#f3f3f3",
        borderWidth: 1,
        tickColor: "#f3f3f3"
      },
      series: {
        shadowSize: 0,
        lines: {
          show: true
        },
        points: {
          show: true
        }
      },
      lines: {
        fill: false,
        color: ["#3c8dbc", "#f56954"]
      },
      yaxis: {
        show: true,
      },
      xaxis: {
        show: true
      }
    });
    //Initialize tooltip on hover
    $('<div class="tooltip-inner" id="line-chart-tooltip"></div>').css({
      position: "absolute",
      display: "none",
      opacity: 0.8
    }).appendTo("body");
    $("#line-chart").bind("plothover", function (event, pos, item) {

      if (item) {
        var x = item.datapoint[0].toFixed(2),
            y = item.datapoint[1].toFixed(2);

        $("#line-chart-tooltip").html(item.series.label + " of " + x + " = " + y)
            .css({top: item.pageY + 5, left: item.pageX + 5})
            .fadeIn(200);
      } else {
        $("#line-chart-tooltip").hide();
      }

    });

    /*
     * DONUT CHART
     * -----------
     */

    var donutData = [
      {label: "Wins", data: 15, color: "#3c8dbc"},
      {label: "Loses", data: 2, color: "#0073b7"},
      {label: "Draws", data: 3, color: "#00c0ef"}
    ];
    $.plot("#donut-chart", donutData, {
      series: {
        pie: {
          show: true,
          radius: 1,
          innerRadius: 0.5,
          label: {
            show: true,
            radius: 2 / 3,
            formatter: labelFormatter,
            threshold: 0.1
          }
        }
      },
      legend: {
        show: false
      }
    });
    /*
     * END DONUT CHART
     */

    /*
    * Custom Label formatter
    * ----------------------
    */
    function labelFormatter(label, series) {
        return '<div style="font-size:13px; text-align:center; padding:2px; color: #fff; font-weight: 600;">'
                + label + '<br>' + series.data[0][1] + '</div>';
    }

    $("#calendar").datepicker();
});