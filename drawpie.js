function handleChoose(index) {
  const choice = [
    "2020年文科",
    "2019年文科",
    "2018年文科",
    "2020年理科",
    "2019年理科",
    "2018年理科",
  ];

  const filename = [
    "2020wen",
    "2019wen",
    "2018wen",
    "2020li",
    "2019li",
    "2018li",
  ];

  // 绘制图表
  let myChart = echarts.init(document.getElementById("showChart"));
  let option = {
    title: {
      show: false,
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)",
    },
    calculable: true,
    // color: ["#893448", "#d95850", "#eb8146", "#ffb248", "#f2d643", "#ebdba4"],
    color: ["#FF8C00", "#fad859", "#98fb98", "#00bfff"],
    // color: [
    //   "#5470c6",
    //   "#91cc75",
    //   "#fac858",
    //   "#ee6666",
    //   "#73c0de",
    //   "#3ba272",
    //   "#fc8452",
    //   "#9a60b4",
    //   "#ea7ccc",
    // ],
    series: [
      {
        name: "该分段对应院校数量",
        type: "pie",
        radius: ["20%", "60%"],
        center: ["50%", "50%"],
        itemStyle: {
          borderColor: "#fff",
          borderWidth: 1,
        },
        label: {
          edgeDistance: 10,
          textStyle: {
            fontSize: 16,
          },
        },
        data: [],
      },
    ],
  };

  myChart.showLoading();

  // 异步加载数据
  $.get("jsondata/" + filename[index] + ".json").done(function (data) {
    myChart.hideLoading();
    myChart.setOption({
      series: [
        {
          data: data,
        },
      ],
    });
  });
  myChart.setOption(option);
}
