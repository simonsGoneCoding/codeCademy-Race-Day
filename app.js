let raceNumber = Math.floor(Math.random() * 1000);
let earlyRegister = false;
let runnerAge = 21;

if (runnerAge > 18) {
  raceNumber += 1000;
}

if (runnerAge > 18 && earlyRegister) {
  console.log(`Race will start at 9:30, your number is: ${raceNumber}`);
} else if (runnerAge > 18 && !earlyRegister) {
  console.log(`Race will start at 11:00, your number is: ${raceNumber}`);
} else if (runnerAge < 18) {
  console.log(`Race will start at 12:00, your number is: ${raceNumber}`);
} else {
  console.log("Please see registration desk...");
}
