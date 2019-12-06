let customHeaders = new Headers();
customHeaders.append("Accept", "application/json");

URI = "https://api.irail.be";
var MyDateString = "";
var SelfMadeTrainObject = {};
var AftelTijd = "";


// https://www.w3schools.com/howto/howto_js_countdown.asp

const init = function () {
  // getLocation();
  getLiveBoard();

  getDate();
};

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


function progressBar(dataArrayTijdStamp) {
  var now = Math.round(new Date().getTime() / 1000)
  var startDate = Math.floor(new Date(now - 15 * 60));

  const progressBar = document.getElementById('myBar');
  const endDate = dataArrayTijdStamp[0];

  let totalTime = endDate - startDate;
  let progress = now - startDate;
  let percentage = (progress / totalTime) * 100;
  console.log(percentage);
  if (percentage < 90) {
    progressBar.style.width = `${percentage}%`;
  }
  else if (percentage > 90 & percentage < 100) {
    progressBar.style.width = `${100}%`;

  }
  else if (percentage > 100) {
    progressBar.style.width = `${100}%`;
    progressBar.style.backgroundColor = `red`;
  }

}

function countDown(dataArrayTijdStamp) {
  // Set the date we're counting down to7
  // for (var addobject of dataArrayTijdStamp) {
  var countDownDate = dataArrayTijdStamp[0];
  console.log(countDownDate);

  // Update the count down every 1 second
  var interval = setInterval(function () {

    // Get today's date and time
    var now = Math.round(new Date().getTime() / 1000);
    console.log(now);

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var hours = Math.floor((distance % (60 * 60 * 24)) / (60 * 60));
    var minutes = Math.floor((distance % (60 * 60)) / (60));
    var seconds = Math.floor((distance % (60)));

    // Display the result in the element with id="demo"
    AftelTijd = hours + "h " + minutes + "min " + seconds + "sec ";
    document.getElementById("js-timer").innerHTML = AftelTijd;
    console.log(AftelTijd);

    // If the count down is finished, write some text
    if (distance < 0) {
      // clearInterval(interval);
      AftelTijd = "Trein vertrokken";
      document.getElementById("js-timer").innerHTML = AftelTijd;
      console.log("Expired")
    }
    progressBar(dataArrayTijdStamp);
  }, 1000);

}

const showHtml = function (queryStation, dataArrayEndStation, dataArrayTijd) {
  // console.log(InfoStations);
  let counter = 0;
  for (const station of InfoStations) {
    // console.log(station);
    html = `<div class="c-dashboard__item">
            <p class="">Tijd tot trein vertrekt</p>
            <p class="js-timer" id="js-timer">hier tijd</p>
        </div>
        <div class="c-dashboard__item">
            <p class="js-location">${queryStation}</p>
            <p class="js-currenthour">${dataArrayTijd[counter]}</p>
        </div>
        <div class="c-dashboard__item">
            <p class="js-endstation">${dataArrayEndStation[counter]}</p>
        </div>
        <div class="c-dashboard__item u-x-span-3-bp3">
            <div class="c-progress" id="c-progress">
              <div class="c-bar" id="myBar">
              </div>
            </div>
        </div>`;
    document.querySelector(".js-main").innerHTML += html;
    counter += 1;
    if (counter == 6) {
      break;
    }
  }

}
// delay: 60 = 60 seconden vertraging

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
    Hour = MyTrainTime.getHours();
    Minute = MyTrainTime.getMinutes();
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

  dataArrayDelays = [];
  for (var addobject of InfoStations) {
    // console.log(tijd.time);
    let CurrentTrain = addobject.delay;
    dataArrayDelays.push(CurrentTrain);
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
  SelfMadeTrainObject.delays = dataArrayDelays;
  SelfMadeTrainObject.endstation = dataArrayEndStation;
  console.log(SelfMadeTrainObject);
  showHtml(queryStation, dataArrayEndStation, dataArrayTijd);
  countDown(dataArrayTijdStamp);
};

let getLiveBoard = async function () {
  // Eerst bouwen we onze url op
  const SERVER_ENDPOINT = `${URI}/liveboard/?station=Kortrijk&arrdep=departure&lang=en&format=json&fast=false&alerts=false`;
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


const fetchData = function (url) {
  fetch(url, { headers: customHeaders })
    .then(r => r.json())
    .then(data => data);
};



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
