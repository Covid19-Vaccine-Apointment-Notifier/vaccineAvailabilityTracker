import { useParams } from "react-router-dom";
import history from "./history";
export const calculateTotal = (user, subject, subjectCategory) => {
  let total = 0;
  if (user && subject && user[subject]) {
    if (
      subject === "residencyStewardship" &&
      subjectCategory &&
      user[subject][subjectCategory]
    ) {
      let marksArray = Object.values(user[subject][subjectCategory]);
      marksArray.forEach(
        (e) => !isNaN(parseFloat(e)) && (total += parseFloat(e))
      );
    } else {
      let marksArray = Object.values(user[subject]);
      marksArray.forEach(
        (e) => !isNaN(parseFloat(e)) && (total += parseFloat(e))
      );
    }
  }
  return total;
};

export const months = Array.from({ length: 12 }, (e, i) => {
  let a = new Date(null, i + 1, null).toLocaleDateString("en", {
    month: "short",
  });
  return new Date(null, i + 1, null).toLocaleDateString("en", {
    month: "short",
  });
});

export const getCookie = (key) => {
  let name = key + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};

export const setCookie = (name, value, days) => {
  let date, expires;
  if (days) {
    date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = `; expires=${date.toGMTString()}`;
  } else {
    expires = "";
  }
  document.cookie = `${name}=${value}${expires}; path=/`;
};

export const logout = () => {
  setCookie("token", "", 0);
  if (window && typeof window !== "undefined") {
    window.location.href = window && window.location.origin;
  }
};

export const prgressDashboardTotal = (user) => {
  let finalUser = [];
  for (let i = 0; i < user.length; i++) {
    let tempObj = JSON.parse(JSON.stringify(user[i]));
    tempObj.onBoardingTotal = calculateTotal(tempObj, "onBoarding");
    tempObj.sessionTotal = calculateTotal(tempObj, "sessions");
    tempObj.paTrainingTotal = calculateTotal(tempObj, "paTraining");
    tempObj.teachingSeminarsTotal = calculateTotal(tempObj, "teachingSeminars");
    tempObj.residencyStewardshipTotal = calculateTotal(
      tempObj,
      "residencyStewardship",
      "cleaningSchedule"
    );
    tempObj.residencyStewardshipTotal += calculateTotal(
      tempObj,
      "residencyStewardship",
      "timelyRentalPayment"
    );
    tempObj.observationsTotal = calculateObsCompleteTotal(tempObj);
    tempObj.totalMarksScored =
      tempObj.onBoardingTotal +
      tempObj.sessionTotal +
      tempObj.paTrainingTotal +
      tempObj.teachingSeminarsTotal +
      tempObj.residencyStewardshipTotal +
      tempObj.observationsTotal;

    finalUser.push(tempObj);
  }
  return finalUser;
};

const observationTotal = (user) => {
  const marksArray = Object.values((user && user.observationSchedule) || false);
  const totalMarks =
    marksArray &&
    marksArray.map((item) => {
      let itemObj = Object.values(item);
      const marks = itemObj && itemObj.map((elem) => Number(elem.marks));
      return marks && marks.reduce((a, b) => a + b, 0);
    });
  return totalMarks && totalMarks.reduce((a, b) => a + b, 0);
};

export const monthWiseTotal = (users) => {
  let finalUser = [];
  for (let i = 0; i < users.length; i++) {
    let tempObj = JSON.parse(JSON.stringify(users[i]));
    if (tempObj && tempObj.observationSchedule) {
      for (let key in tempObj.observationSchedule) {
        if (tempObj.observationSchedule.hasOwnProperty(key)) {
          let mark = 0;
          for (let markKey in tempObj.observationSchedule[key]) {
            if (tempObj.observationSchedule[key].hasOwnProperty(markKey)) {
              mark += Number(tempObj.observationSchedule[key][markKey].marks);
            }
            tempObj.observationSchedule[key].mark = String(mark);
            delete tempObj.marks;
          }
        }
      }
    }
    finalUser.push(tempObj);
  }
  return finalUser;
};

export const formatDate = (date) => {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
};

export const checkRoute = (route, allowedRoutes, user) => {
  if (user.type == "coach") {
    if (allowedRoutes && allowedRoutes.length) {
      let menuItemHit = menuItems.find((i) => route.includes(i.route));
      if (menuItemHit && menuItemHit.name) {
        let routeFound = allowedRoutes.find((r) => r.name == menuItemHit.name);
        if (routeFound && routeFound.routes && routeFound.routes[route]) {
          return true;
        } else {
          history.push("/admin/NotFound");
          window.location.reload();
        }
      } else {
        history.push("/admin/NotFound");
        window.location.reload();
      }
    } else return true;
  } else {
    history.push("/");
    window.location.reload();
    return false;
  }
};

export const allMonthsMapping = {
  January: 1,
  February: 2,
  March: 3,
  April: 4,
  May: 5,
  June: 6,
  July: 7,
  August: 8,
  September: 9,
  October: 10,
  November: 11,
  December: 12,
};

export const monthsJSMapping = {
  0: "January",
  1: "February",
  2: "March",
  3: "April",
  4: "May",
  5: "June",
  6: "July",
  7: "August",
  8: "September",
  9: "October",
  10: "November",
  11: "December",
};

export const allMonths = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const calculateObsProgressTotal = (user, year, month) => {
  if (
    user &&
    user.observationSchedule &&
    user.observationSchedule[year] &&
    user.observationSchedule[year][month]
  ) {
    let dates = Object.values(user.observationSchedule[year][month]);
    let total = 0;
    dates.forEach(
      (e) => !isNaN(parseFloat(e.marks)) && (total += parseFloat(e.marks))
    );
    return total;
  }
  return "-";
};

export const calculateObsCompleteTotal = (user) => {
  let total = 0;
  if (user && user.observationSchedule) {
    let years = Object.keys(user.observationSchedule);
    for (let i = 0; i < years.length; i++) {
      let year = years[i];
      let months = Object.keys(user.observationSchedule[year]);
      for (let j = 0; j < months.length; j++) {
        total += calculateObsProgressTotal(user, year, months[j]);
      }
    }
  }
  return total;
};
