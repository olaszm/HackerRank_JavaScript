function timeConversion(s) {
  let [h, min, sec] = [...s.split(":")];
  let AMPM = sec.slice(-2);
  sec = sec.substring(0, 2);
  if (AMPM == "AM" && h == "12") {
    return `${"00"}:${min}:${sec}`;
  } else if (AMPM == "PM") {
    return `${parseInt(h % 12) + 12}:${min}:${sec}`;
  } else {
    return `${h}:${min}:${sec}`;
  }
}

timeConversion("07:05:45PM");
timeConversion("12:45:54PM");
