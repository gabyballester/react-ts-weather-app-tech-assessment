export interface ApiCoord {
  lon: number;
  lat: number;
}

export interface ApiWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface ApiMain {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

export interface ApiWind {
  speed: number;
  deg: number;
}

export interface ApiClouds {
  all: number;
}

export interface ApiSys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export interface ApiWeatherResponse {
  coord: ApiCoord;
  weather: ApiWeather[];
  main: ApiMain;
  wind: ApiWind;
  clouds: ApiClouds;
  dt: number;
  sys: ApiSys;
  id: number;
  name: string;
  cod: number;
}

export interface Weather {
  icon: string;
  description: string;
  temperature: number;
  temp_min: number;
  temp_max: number;
}
