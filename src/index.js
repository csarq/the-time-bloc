function updateTime() {
  //singapore
  const singaporeElement = document.querySelector("#singapore");
  if (singaporeElement) {
    const singaporeDateElement =
      singaporeElement.querySelector(".date-display");
    const singaporeTimeElement =
      singaporeElement.querySelector(".time-display");
    singaporeDateElement.innerHTML = moment()
      .tz("Asia/Singapore")
      .format("Do [of] MMMM[,] YYYY");
    singaporeTimeElement.innerHTML = moment()
      .tz("Asia/Singapore")
      .format("HH[:]mm[:]ss");
  }

  //london
  const londonElement = document.querySelector("#london");
  if (londonElement) {
    const londonDateElement = londonElement.querySelector(".date-display");
    const londonTimeElement = londonElement.querySelector(".time-display");
    londonDateElement.innerHTML = moment()
      .tz("Europe/london")
      .format("Do [of] MMMM[,] YYYY");
    londonTimeElement.innerHTML = moment()
      .tz("Europe/london")
      .format("HH[:]mm[:]ss");
  }

  //new york
  const newyorkElement = document.querySelector("#new-york");
  if (newyorkElement) {
    const newyorkDateElement = newyorkElement.querySelector(".date-display");
    const newyorkTimeElement = newyorkElement.querySelector(".time-display");
    newyorkDateElement.innerHTML = moment()
      .tz("America/New_York")
      .format("Do [of] MMMM[,] YYYY");
    newyorkTimeElement.innerHTML = moment()
      .tz("America/New_York")
      .format("HH[:]mm[:]ss");
  }
}

function updateCity(event) {
  const selectedOption = event.target;
  let cityTimeZone = event.target.value;
  let cityName = selectedOption.selectedOptions[0].textContent;
  console.log(event.target.selectedOptions[0].textContent);
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
    cityName = cityTimeZone.replace("_", " ").split("/")[1];
  }
  const cityTime = moment().tz(cityTimeZone);
  const clockGridElement = document.querySelector("#clock-grid");
  clockGridElement.innerHTML = `
  <div class="clock-card box">
          <div class="city-name">
        ${cityName}
        </div>
        <div class="time-display">
        ${cityTime.format("HH[:]mm[:]ss")}
        </div>
        <div class="date-display">${cityTime.format(
          "Do [of] MMMM[,] YYYY"
        )}</div>
      </div>
      <a href="/" class="clock-card box">Back to preset clocks</a>
      </div>
  `;
}

updateTime();
setInterval(updateTime, 1000);

const citiesSelectElement = document.querySelector("#city-select");
citiesSelectElement.addEventListener("change", updateCity);
