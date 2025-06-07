function updateTime() {
  //singapore
  const singaporeElement = document.querySelector("#singapore");
  const singaporeDateElement = singaporeElement.querySelector(".date-display");
  const singaporeTimeElement = singaporeElement.querySelector(".time-display");
  singaporeDateElement.innerHTML = moment()
    .tz("Asia/Singapore")
    .format("Do [of] MMMM[,] YYYY");
  singaporeTimeElement.innerHTML = moment()
    .tz("Asia/Singapore")
    .format("HH[:]mm[:]ss");

  //london
  const londonElement = document.querySelector("#london");
  const londonDateElement = londonElement.querySelector(".date-display");
  const londonTimeElement = londonElement.querySelector(".time-display");
  londonDateElement.innerHTML = moment()
    .tz("Europe/london")
    .format("Do [of] MMMM[,] YYYY");
  londonTimeElement.innerHTML = moment()
    .tz("Europe/london")
    .format("HH[:]mm[:]ss");

  //new york
  const newyorkElement = document.querySelector("#new-york");
  const newyorkDateElement = newyorkElement.querySelector(".date-display");
  const newyorkTimeElement = newyorkElement.querySelector(".time-display");
  newyorkDateElement.innerHTML = moment()
    .tz("America/New_York")
    .format("Do [of] MMMM[,] YYYY");
  newyorkTimeElement.innerHTML = moment()
    .tz("America/New_York")
    .format("HH[:]mm[:]ss");
}

updateTime();
setInterval(updateTime, 1000);
