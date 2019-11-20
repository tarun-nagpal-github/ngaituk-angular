export function getTodayDate() {
  var today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  return date;
}

export function getTodaysDate() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0!
  var yyyy = today.getFullYear();
  // debugger;
  return {
    year: yyyy,
    month: mm,
    day: dd
  };
}
