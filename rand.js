function bmiCalculator(weight, height) {
  let BMI = weight / (height * height);
  BMI = Math.round(BMI, 1);

  if (BMI < 18.5) {
    return "Your BMI is <" + BMI + ">, so you are underweight.";
  } else if (BMI >= 18.5 && BMI <= 24.9) {
    return "Your BMI is <" + BMI + ">, so you have a normal weight.";
  } else if (BMI > 24.9) {
    return "Your BMI is <" + BMI + ">, so you are overweight.";
  }

}