let min = 50000;
let max = 10000000;

const calcLeftPosition = (value) => value* (min / max) ;

$("#rangeMin").on("input", function (e) {
  const newValue = parseInt(e.target.value);
  console.log(newValue);
  if (newValue > max) return;
  min = newValue;
  $("#thumbMin").css("left", calcLeftPosition(newValue) + "%");
  $("#min").html(newValue);
  $("#line").css({
    left: calcLeftPosition(newValue) + "%",
    right: 100 - calcLeftPosition(max) + "%",
  });
});

$("#rangeMax").on("input", function (e) {
  const newValue = parseInt(e.target.value);
  if (newValue < min) return;
  max = newValue;
  $("#thumbMax").css("left", calcLeftPosition(newValue) + "%");
  $("#max").html(newValue);
  $("#line").css({
    left: calcLeftPosition(min) + "%",
    right: 100 - calcLeftPosition(newValue) + "%",
  });
});
