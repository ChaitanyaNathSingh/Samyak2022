const Darkness = () => {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let totalMinutes = hours * 60 + minutes;

  // testing
  // totalMinutes = 1300;

  // let darkness = totalMinutes > 7 * 60 + 30 && totalMinutes < 19 * 60 + 30 ? false : true;
  let timeIntervals = [
    { start: 4*60, end: 9*60, lower: 0.9, upper: 0.1 },
    { start: 9*60, end: 12*60, lower: 0.1, upper: 0 },
    { start: 12*60, end: 17*60, lower: 0, upper: 0.2 },
    { start: 17*60, end: 19*60, lower: 0.2, upper: 0.4 },
    { start: 19*60, end: 23*60, lower: 0.4, upper: 0.9 },
    { start: 23*60, end: 24*60-1, lower: 0.9, upper: 0.95 },
    { start: 0*60, end: 2*60, lower: 0.95, upper: 1 },
    { start: 2*60, end: 4*60, lower: 1, upper: 0.9 },
  ]
  for(let interval of timeIntervals) {
    if(totalMinutes >= interval.start && totalMinutes < interval.end) {
      return computeZ(interval.start, interval.end, totalMinutes , interval.lower, interval.upper);
    }
  }
};

const computeZ = (a, b, c, x, y) => {
  // console.log("Time Between ", a/60, " and ", b/60);
  // console.log("Opacity Between ", x+" "+y);
  let z = (y - x) * (c - a) / (b - a) + x;
  return z;
}

export { Darkness };

// background brightness
/**
 * 4am to 9am -> 0.9 to 0.1
 * 9am to 12pm -> 0.1 to 0
 * 12pm to 5pm -> 0 to 0.2
 * 5pm to 7pm -> 0.2 to 0.4
 * 7pm to 11pm -> 0.4 to 0.9
 * 11pm to 11:59m -> 0.9 to 0.95
 * 12am to 2am -> 0.95 to 1
 * 2am to 4am -> 1 to 0.9
 */


/**
 * a -> x
 * b -> y
 * c -> z
 */