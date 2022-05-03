function handleClick(e) {
  let index = e.replace(/[^\d]/g,'')-1
  const area = [
    "beijing",
    "tianjin",
    "hebei",
    "neimenggu",
    "liaoning",
    "jilin",
    "heilongjiang",
    "shanghai",
    "jiangsu",
    "zhejiang",
    "anhui",
    "fujian",
    "jiangxi",
    "shandong",
    "henan",
    "hubei",
    "hunan",
    "guangdong",
    "guangxi",
    "hainan",
    "chongqing",
    "sichuan",
    "guizhou",
    "yunnan",
    "tibet",
    "shaanxi",
    "gansu",
    "qinghai",
    "ningxia",
    "xinjiang",
    "hongkong",
    "macao",
    "taiwan",
    "shanxi",
  ];

  (function () {
    $.get("jsondata/" + area[index] + ".json").done(function schoolquery(sinfo) {
      $("#tbody").html("");
      let tbody = document.getElementById("tbody");
      for (let i = 0; i < sinfo.length; i++) {
        let tr = document.createElement("tr");
        let tdname = document.createElement("td");
        let tdtype = document.createElement("td");
        let tdcity = document.createElement("td");
        let tdinfo = document.createElement("td");
        tdname.innerHTML = sinfo[i].schoolname;
        tdtype.innerHTML = sinfo[i].type;
        tdcity.innerHTML = sinfo[i].city;
        tdinfo.innerHTML = sinfo[i].info;
        tr.appendChild(tdname);
        tr.appendChild(tdtype);
        tr.appendChild(tdcity);
        tr.appendChild(tdinfo);
        tbody.appendChild(tr);
      }
    });
  })();
}

function SupendButtonClick(obj) {
  const defaultBGColor = "";
  const changeBGColor = "#5c79f8";
  //清空其它同类按钮选中颜色
  $('input[id^="btn"]').css({"background-color":defaultBGColor,"color":"#232323"}); //按钮原来颜色

  //点击后变色
  $(obj).css({"background-color":changeBGColor,"color":"#fff"});
  handleClick(obj.id)
}
