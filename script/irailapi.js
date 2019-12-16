let customHeaders = new Headers();
customHeaders.append("Accept", "application/json");

let email = {},
  password = {},
  signInButton;

URI = "https://api.irail.be";
var MyDateString = "";
var SelfMadeTrainObject = {};
var AftelTijd = "";
var interval1;
var interval2;
var interval3;

const init = function () {
  // getLocation();
  let DefaultStation = "Kortrijk";
  getLiveBoard(DefaultStation);

  getDate();
  changeStation();
};

const changeStation = function () {
  const selectElement = document.querySelector('.js-dropdown');
  selectElement.addEventListener('change', (event) => {
    ChosenStation = event.target.value;
    MyDateString = "";
    AftelTijd = "";
    SelfMadeTrainObject = {};
    getLiveBoard(ChosenStation);
  });

}

function getDate() {
  var MyDate = new Date();

  MyDateString =
    ("0" + MyDate.getDate()).slice(-2) +
    ("0" + (MyDate.getMonth() + 1)).slice(-2) +
    MyDate.getFullYear()
      .toString()
      .substr(2);

  console.log(MyDateString);
}

/* #region Progressbars */
function progressBar1(countDownDate) {
  var now = Math.round(new Date().getTime() / 1000)
  var startDate = Math.floor(new Date(now - 15 * 60));

  const progressBar = document.getElementById('myBar-1');
  const endDate = countDownDate;

  let totalTime = endDate - startDate;
  let progress = now - startDate;
  let percentage = (progress / totalTime) * 100;
  console.log(percentage);
  if (percentage < 90) {
    progressBar.style.width = `${percentage * 2}%`;
  }
  else if (percentage > 90 & percentage < 100) {
    progressBar.style.width = `${100 * 2}%`;

  }
  else if (percentage > 100) {
    progressBar.style.width = `${100 * 2}%`;
    progressBar.style.display = `none`;
  }

}

function progressBar2(countDownDate) {
  var now = Math.round(new Date().getTime() / 1000)
  var startDate = Math.floor(new Date(now - 15 * 60));

  const progressBar = document.getElementById('myBar-2');
  const endDate = countDownDate;

  let totalTime = endDate - startDate;
  let progress = now - startDate;
  let percentage = (progress / totalTime) * 100;
  console.log(percentage);
  if (percentage < 90) {
    progressBar.style.width = `${percentage * 2}%`;
  }
  else if (percentage > 90 & percentage < 100) {
    progressBar.style.width = `${100 * 2}%`;

  }
  else if (percentage > 100) {
    progressBar.style.width = `${100 * 2}%`;
    progressBar.style.display = `none`;
  }

}

function progressBar3(countDownDate) {
  var now = Math.round(new Date().getTime() / 1000)
  var startDate = Math.floor(new Date(now - 15 * 60));

  const progressBar = document.getElementById('myBar-3');
  const endDate = countDownDate;

  let totalTime = endDate - startDate;
  let progress = now - startDate;
  let percentage = (progress / totalTime) * 100;
  console.log(percentage);
  if (percentage < 90) {
    progressBar.style.width = `${percentage * 2}%`;
  }
  else if (percentage > 90 & percentage < 100) {
    progressBar.style.width = `${100 * 2}%`;

  }
  else if (percentage > 100) {
    progressBar.style.width = `${100 * 2}%`;
    progressBar.style.display = `none`;
  }

}

function progressBar4(countDownDate) {
  var now = Math.round(new Date().getTime() / 1000)
  var startDate = Math.floor(new Date(now - 15 * 60));

  const progressBar = document.getElementById('myBar-4');
  const endDate = countDownDate;

  let totalTime = endDate - startDate;
  let progress = now - startDate;
  let percentage = (progress / totalTime) * 100;
  console.log(percentage);
  if (percentage < 90) {
    progressBar.style.width = `${percentage * 2}%`;
  }
  else if (percentage > 90 & percentage < 100) {
    progressBar.style.width = `${100 * 2}%`;

  }
  else if (percentage > 100) {
    progressBar.style.width = `${100 * 2}%`;
    progressBar.style.display = `none`;
  }

}

function progressBar5(countDownDate) {
  var now = Math.round(new Date().getTime() / 1000)
  var startDate = Math.floor(new Date(now - 15 * 60));

  const progressBar = document.getElementById('myBar-5');
  const endDate = countDownDate;

  let totalTime = endDate - startDate;
  let progress = now - startDate;
  let percentage = (progress / totalTime) * 100;
  console.log(percentage);
  if (percentage < 90) {
    progressBar.style.width = `${percentage * 2}%`;
  }
  else if (percentage > 90 & percentage < 100) {
    progressBar.style.width = `${100 * 2}%`;

  }
  else if (percentage > 100) {
    progressBar.style.width = `${100 * 2}%`;
    progressBar.style.display = `none`;
  }

}

function progressBar6(countDownDate) {
  var now = Math.round(new Date().getTime() / 1000)
  var startDate = Math.floor(new Date(now - 15 * 60));

  const progressBar = document.getElementById('myBar-6');
  const endDate = countDownDate;

  let totalTime = endDate - startDate;
  let progress = now - startDate;
  let percentage = (progress / totalTime) * 100;
  console.log(percentage);
  if (percentage < 90) {
    progressBar.style.width = `${percentage * 2}%`;
  }
  else if (percentage > 90 & percentage < 100) {
    progressBar.style.width = `${100 * 2}%`;

  }
  else if (percentage > 100) {
    progressBar.style.width = `${100 * 2}%`;
    progressBar.style.display = `none`;
  }

}

/* #endregion */

/* #region countdown*/
function countDown1() {
  // Set the date we're counting down to7
  // for (var addobject of dataArrayTijdStamp) {
  var countDownDate = SelfMadeTrainObject.realtime[0];
  console.log(countDownDate);

  // Update the count down every 1 second


  // Get today's date and time
  var now = Math.round(new Date().getTime() / 1000);

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var hours = Math.floor((distance % (60 * 60 * 24)) / (60 * 60));
  var minutes = (Math.floor((distance % (60 * 60)) / (60)) < 10 ? '0' : '') + Math.floor((distance % (60 * 60)) / (60));
  var seconds = (Math.floor((distance % (60))) < 10 ? '0' : '') + Math.floor((distance % (60)));

  // Display the result in the element with id="demo"
  AftelTijd = hours + "h " + minutes + "min " + seconds + "sec ";

  document.getElementById("js-timer-1").innerHTML = AftelTijd;
  console.log(AftelTijd);

  // If the count down is finished, write some text
  if (distance < 0) {
    // clearInterval(interval);
    AftelTijd = "Trein vertrokken";
    document.getElementById("js-timer-1").innerHTML = AftelTijd;
    console.log("Expired")
  }
  progressBar1(countDownDate);


}

function countDown2() {
  // Set the date we're counting down to7
  // for (var addobject of dataArrayTijdStamp) {
  var countDownDate = SelfMadeTrainObject.realtime[1];
  console.log(countDownDate);

  // Get today's date and time
  var now = Math.round(new Date().getTime() / 1000);
  console.log(now);

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var hours = Math.floor((distance % (60 * 60 * 24)) / (60 * 60));
  var minutes = (Math.floor((distance % (60 * 60)) / (60)) < 10 ? '0' : '') + Math.floor((distance % (60 * 60)) / (60));
  var seconds = (Math.floor((distance % (60))) < 10 ? '0' : '') + Math.floor((distance % (60)));

  // Display the result in the element with id="demo"
  AftelTijd = hours + "h " + minutes + "min " + seconds + "sec ";
  document.getElementById("js-timer-2").innerHTML = AftelTijd;
  console.log(AftelTijd);

  // If the count down is finished, write some text
  if (distance < 0) {
    // clearInterval(interval);
    AftelTijd = "Trein vertrokken";
    document.getElementById("js-timer-2").innerHTML = AftelTijd;
    console.log("Expired")
  }
  progressBar2(countDownDate);

}

function countDown3() {
  // Set the date we're counting down to7
  // for (var addobject of dataArrayTijdStamp) {
  var countDownDate = SelfMadeTrainObject.realtime[2];
  console.log(countDownDate);

  // Get today's date and time
  var now = Math.round(new Date().getTime() / 1000);
  console.log(now);

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var hours = Math.floor((distance % (60 * 60 * 24)) / (60 * 60));
  var minutes = (Math.floor((distance % (60 * 60)) / (60)) < 10 ? '0' : '') + Math.floor((distance % (60 * 60)) / (60));
  var seconds = (Math.floor((distance % (60))) < 10 ? '0' : '') + Math.floor((distance % (60)));

  // Display the result in the element with id="demo"
  AftelTijd = hours + "h " + minutes + "min " + seconds + "sec ";
  document.getElementById("js-timer-3").innerHTML = AftelTijd;
  console.log(AftelTijd);

  // If the count down is finished, write some text
  if (distance < 0) {
    // clearInterval(interval);
    AftelTijd = "Trein vertrokken";
    document.getElementById("js-timer-3").innerHTML = AftelTijd;
    console.log("Expired")
  }
  progressBar3(countDownDate);
}

function countDown4() {
  // Set the date we're counting down to7
  // for (var addobject of dataArrayTijdStamp) {
  var countDownDate = SelfMadeTrainObject.realtime[3];
  console.log(countDownDate);

  // Get today's date and time
  var now = Math.round(new Date().getTime() / 1000);
  console.log(now);

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var hours = Math.floor((distance % (60 * 60 * 24)) / (60 * 60));
  var minutes = (Math.floor((distance % (60 * 60)) / (60)) < 10 ? '0' : '') + Math.floor((distance % (60 * 60)) / (60));
  var seconds = (Math.floor((distance % (60))) < 10 ? '0' : '') + Math.floor((distance % (60)));

  // Display the result in the element with id="demo"
  AftelTijd = hours + "h " + minutes + "min " + seconds + "sec ";
  document.getElementById("js-timer-4").innerHTML = AftelTijd;
  console.log(AftelTijd);

  // If the count down is finished, write some text
  if (distance < 0) {
    // clearInterval(interval);
    AftelTijd = "Trein vertrokken";
    document.getElementById("js-timer-4").innerHTML = AftelTijd;
    console.log("Expired")
  }
  progressBar4(countDownDate);
}

function countDown5() {
  // Set the date we're counting down to7
  // for (var addobject of dataArrayTijdStamp) {
  var countDownDate = SelfMadeTrainObject.realtime[4];
  console.log(countDownDate);

  // Get today's date and time
  var now = Math.round(new Date().getTime() / 1000);
  console.log(now);

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var hours = Math.floor((distance % (60 * 60 * 24)) / (60 * 60));
  var minutes = (Math.floor((distance % (60 * 60)) / (60)) < 10 ? '0' : '') + Math.floor((distance % (60 * 60)) / (60));
  var seconds = (Math.floor((distance % (60))) < 10 ? '0' : '') + Math.floor((distance % (60)));

  // Display the result in the element with id="demo"
  AftelTijd = hours + "h " + minutes + "min " + seconds + "sec ";
  document.getElementById("js-timer-5").innerHTML = AftelTijd;
  console.log(AftelTijd);

  // If the count down is finished, write some text
  if (distance < 0) {
    // clearInterval(interval);
    AftelTijd = "Trein vertrokken";
    document.getElementById("js-timer-5").innerHTML = AftelTijd;
    console.log("Expired")
  }
  progressBar5(countDownDate);
}


function countDown6() {
  // Set the date we're counting down to7
  // for (var addobject of dataArrayTijdStamp) {
  var countDownDate = SelfMadeTrainObject.realtime[5];
  console.log(countDownDate);

  // Get today's date and time
  var now = Math.round(new Date().getTime() / 1000);
  console.log(now);

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var hours = Math.floor((distance % (60 * 60 * 24)) / (60 * 60));
  var minutes = (Math.floor((distance % (60 * 60)) / (60)) < 10 ? '0' : '') + Math.floor((distance % (60 * 60)) / (60));
  var seconds = (Math.floor((distance % (60))) < 10 ? '0' : '') + Math.floor((distance % (60)));

  // Display the result in the element with id="demo"
  AftelTijd = hours + "h " + minutes + "min " + seconds + "sec ";
  document.getElementById("js-timer-6").innerHTML = AftelTijd;
  console.log(AftelTijd);

  // If the count down is finished, write some text
  if (distance < 0) {
    // clearInterval(interval);
    AftelTijd = "Trein vertrokken";
    document.getElementById("js-timer-6").innerHTML = AftelTijd;
    console.log("Expired")
  }
  progressBar6(countDownDate);
}

/* #endregion*/

const showHtml = function (queryStation, dataArrayEndStation, dataArrayTijd, dataArrayDelays, dataArraySpoor) {
  // console.log(InfoStations);
  let counter = 0;
  let html = "";
  for (const station of InfoStations) {
    // console.log(station);
    html += `<div class="c-dashboard__item u-x-span-2-bp3">
        <div class="c-item">
          <p class="js-location">Van ${queryStation} naar ${dataArrayEndStation[counter]}</p>
          <p class="js-currenthour">Vertrekt om ${dataArrayTijd[counter]}</p>
          <p class="js-vertraging">met ${dataArrayDelays[counter] / 60} min vertraging</p>
        </div>
            </div >
  <div class="c-dashboard__item u-x-span-1-bp3">
    <p class="js-spoor">Spoor ${dataArraySpoor[counter]}</p>
    <p class="js-timer" id="js-timer-${counter + 1}">hier tijd</p>
  </div>
  <div class="c-dashboard__item_train u-x-span-3-bp3">
    <div class="c-track" id="c-progress">
      <svg class="c-track__train" id="myBar-${counter + 1}" style="width: 0%;">
        <use xlink: href="#svg-train"></use>
                    </svg>
  </div>
            
        </div>`;

    counter += 1;
    if (counter == 6) {
      break;
    }
    console.log(html);
  }
  document.querySelector(".js-main").innerHTML = html;
  console.log("toegevoegd aan queryselector");

}


let showResultLiveBoard = function (queryResponse) {
  // Zorg dat de juiste locatie weergegeven wordt, volgens wat je uit de API terug krijgt.
  let queryStation = queryResponse.station;
  // console.log(queryStation);
  InfoStations = queryResponse.departures.departure;

  dataArrayTijd = [];
  for (var addobject of InfoStations) {
    // console.log(tijd.time);
    let timestamp = addobject.time;
    let MyTrainTime = new Date(timestamp * 1000);
    Hour = (MyTrainTime.getHours() < 10 ? '0' : '') + MyTrainTime.getHours();
    Minute = (MyTrainTime.getMinutes() < 10 ? '0' : '') + MyTrainTime.getMinutes();
    NewTrainTime = Hour.toString() + ":" + Minute.toString();
    dataArrayTijd.push(NewTrainTime);
  }

  dataArrayTijdStamp = [];
  for (var addobject of InfoStations) {
    // console.log(tijd.time);
    let timestamp = addobject.time;
    dataArrayTijdStamp.push(timestamp);
  }

  dataArrayTrajects = [];
  for (var addobject of InfoStations) {
    // console.log(tijd.time);
    let CurrentTrain = addobject.vehicle;
    dataArrayTrajects.push(CurrentTrain);
  }

  dataArraySpoor = [];
  for (var addobject of InfoStations) {
    let CurrentTrain = addobject.platform;
    dataArraySpoor.push(CurrentTrain);
  }

  dataArrayDelays = [];
  for (var addobject of InfoStations) {
    // console.log(tijd.time);
    let CurrentTrain = addobject.delay;
    dataArrayDelays.push(CurrentTrain);
  }

  dataArrayTotalTijdStamp = [];
  for (var addobject of InfoStations) {
    // console.log(tijd.time);
    let timestamp = parseInt(addobject.time);
    let delay = parseInt(addobject.delay);
    let realtime = timestamp + delay;
    dataArrayTotalTijdStamp.push(realtime);
  }

  dataArrayEndStation = [];
  for (var addobject of InfoStations) {
    // console.log(tijd.time);
    let CurrentTrain = addobject.station;
    dataArrayEndStation.push(CurrentTrain);
  }

  SelfMadeTrainObject.tijd = dataArrayTijd;
  SelfMadeTrainObject.tijdstamp = dataArrayTijdStamp;
  SelfMadeTrainObject.currentstation = queryStation;
  SelfMadeTrainObject.trainid = dataArrayTrajects;
  SelfMadeTrainObject.spoor = dataArraySpoor;
  SelfMadeTrainObject.delays = dataArrayDelays;
  SelfMadeTrainObject.realtime = dataArrayTotalTijdStamp;
  SelfMadeTrainObject.endstation = dataArrayEndStation;
  console.log(SelfMadeTrainObject);
  console.log("---------" + dataArrayTijdStamp + dataArrayDelays);
  showHtml(queryStation, dataArrayEndStation, dataArrayTijd, dataArrayDelays, dataArraySpoor);
  // countDown1(SelfMadeTrainObject);
  interval1 = setInterval(countDown1, 1000);
  interval2 = setInterval(countDown2, 1000);
  interval3 = setInterval(countDown3, 1000);
  interval4 = setInterval(countDown4, 1000);
  interval5 = setInterval(countDown5, 1000);
  interval6 = setInterval(countDown6, 1000);
};



/* #region getLiveBoard + fetchdata */

let getLiveBoard = async function (ChosenStation) {
  // Eerst bouwen we onze url op
  const SERVER_ENDPOINT = `${URI}/liveboard/?station=${ChosenStation}&arrdep=departure&lang=en&format=json&fast=false&alerts=false`;
  // Met de fetch API proberen we de data op te halen.
  const response = await fetch(SERVER_ENDPOINT, { headers: customHeaders });
  const queryResponse = await response.json();
  // console.log(queryResponse);
  // console.log(queryResponse.departures.departure);
  dataArray = [];
  for (const object of queryResponse.departures.departure) {
    // console.log(object);
    dataArray.push(object.station);
  }
  // console.log(dataArray);
  showResultLiveBoard(queryResponse);
};



const fetchData = function (url) {
  fetch(url, { headers: customHeaders })
    .then(r => r.json())
    .then(data => data);
};

/* #endregion */



/* #region OldTrainInfo */
// let showResultTrainInfo = function (queryResponseTrainInfo) {
//   // Zorg dat de juiste locatie weergegeven wordt, volgens wat je uit de API terug krijgt.
//   dataArrayTrainInfoStation = [];
//   for (const object of queryResponseTrainInfo.stops.stop) {
//     // console.log(object);
//     dataArrayTrainInfoStation.push(object.station);
//   }
//   dataArrayTrainInfoTime = [];
//   for (const object of queryResponseTrainInfo.stops.stop) {
//     // console.log(object);
//     dataArrayTrainInfoTime.push(object.time);
//   }

//   //startstation
//   let queryStartStation = dataArrayTrainInfoStation[0];


//   let starttimestamp = dataArrayTrainInfoTime[0];
//   var MyTrainStartTime = new Date(starttimestamp * 1000);
//   Hour = new Date(MyTrainStartTime).getHours();
//   Minute = new Date(MyTrainStartTime).getMinutes();
//   console.log(Hour.toString() + ":" + Minute.toString());


//   //endstation
//   let queryEndStation = dataArrayTrainInfoStation.slice(-1)[0];
//   console.log(queryEndStation);


//   let endtimestamp = dataArrayTrainInfoTime.slice(-1)[0];
//   var MyTrainEndTime = new Date(endtimestamp * 1000);
//   Hour = new Date(MyTrainEndTime).getHours();
//   Minute = new Date(MyTrainEndTime).getMinutes();
//   console.log(Hour.toString() + ":" + Minute.toString());

// };

// let getTrainInfo = async function (date) {
//   // Eerst bouwen we onze url op
//   CurrentTrain = SelfMadeTrainObject.trainid;
//   dataArrayTrajecten = [];
//   for (const alltrajects in CurrentTrain) {
//     const SERVER_ENDPOINT = `${URI}/vehicle/?id=${CurrentTrain[alltrajects]}&date=${date}&fast=false&format=json&lang=en&alerts=false`;
//     // Met de fetch API proberen we de data op te halen.
//     const response = await fetch(SERVER_ENDPOINT, { headers: customHeaders });
//     const queryResponseTrainInfo = await response.json();
//     console.log(queryResponseTrainInfo);
//     dataArrayTrajecten = CurrentTrain[alltrajects.vehicle];
//     console.log(CurrentTrain[alltrajects.vehicle]);
//   }

//   console.log(SelfMadeTrainObject);

// };
/* #endregion */

/* #region Position */
// arrayLatitude = [50.911054, 50.824506, 50.85586];
// arrayLongtitude = [3.987524, 3.264549, 3.314008];
// // hoe de juiste lat en long paren bij elkaar houden?
// // bv iemand kan bij in lat dichter bij een 1ste station staan en in long bij een 2de station

// var CurrentLatitude = 0;
// var CurrentLongtitude = 0;

// function getLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(showPosition);
//   } else {
//     document.querySelector(".js-geolocation").innerHTML =
//       "Geolocation is not supported by this browser.";
//   }
// }

// function showPosition(position) {
//   // console.log("latidude " + position.coords.latitude);
//   // console.log("longtitude " + position.coords.longitude);
//   CurrentLatitude = position.coords.latitude;
//   CurrentLongtitude = position.coords.longitude;
//   ClosestStation();
// }

// function closestPosition(num, arr) {
//   var mid;
//   var lo = 0;
//   var hi = arr.length - 1;
//   while (hi - lo > 1) {
//     mid = Math.floor((lo + hi) / 2);
//     if (arr[mid] < num) {
//       lo = mid;
//     } else {
//       hi = mid;
//     }
//   }
//   if (num - arr[lo] <= arr[hi] - num) {
//     return arr[lo];
//   }
//   return arr[hi];
// }

// function ClosestStation() {
//   console.log(CurrentLatitude);
//   console.log(CurrentLongtitude);
//   console.log(closestPosition(CurrentLatitude, arrayLatitude));
//   console.log(closestPosition(CurrentLongtitude, arrayLongtitude));
// }

/* #endregion */



document.addEventListener("DOMContentLoaded", function () {
  console.info("domcontentloaded");
  init();
});