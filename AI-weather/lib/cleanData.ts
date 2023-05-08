const cleanData = (data: Root, city: string) => {
  const { current_weather, timezone, hourly, hourly_units } = data;

  const { temperature, windspeed, weathercode, time, winddirection } =
    current_weather;

  const {
    temperature_2m,
    snowfall,
    rain,
    precipitation_probability,
    relativehumidity_2m,
    uv_index,
  } = hourly;

  return {
    current_weather: {
      temperature,
      windspeed,
      weathercode,
      time,
      winddirection,
    },

    hourly: {
      temperature_2m: temperature_2m.slice(0, 24),
      snowfall: snowfall.slice(0, 24),
      rain: rain.slice(0, 24),
      precipitation_probability: precipitation_probability.slice(0, 24),
      relativehumidity_2m: relativehumidity_2m.slice(0, 24),
      uv_index: uv_index.slice(0, 24),
    },
    timezone,
    city,
    hourly_units,
  };
};

export default cleanData;
