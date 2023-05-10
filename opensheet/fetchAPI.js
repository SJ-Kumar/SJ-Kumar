fetch(
  "https://opensheet.elk.sh/1o5t26He2DzTweYeleXOGiDjlU4Jkx896f95VUHVgS8U/Test+Sheet"
)
  .then((res) => res.json())
  .then((data) => {
    data.forEach((row) => {
      // Do something with each row here.
    });
  });
