const CLEAR_HEX = '#f7b733'
const RAIN_HEX = '#005BEA'
const SNOW_HEX = '#00d2ff'
const STORM_HEX = '#616161'
const CLOUD_HEX = '#544d7a'
const DRIZZLE_HEX = '#076585'
const MIST_HEX = '#3CD3AD'


export const weatherConditions = {
    c1000: {
		code : 1000,
	    day : "Sunny",
		night : "Clear",
        iosday: 'ios-sunny',
        mdday: 'md-sunny',
        iosnight: 'ios-moon',
		mdnight: 'md-moon',
		subtitle: "There ain't a cloud in sight",
		color: CLEAR_HEX
	},
	c1003: {
		code : 1003,
		day : "Partly cloudy",
		night : "Partly cloudy",
		iosday: 'ios-cloudy',
        mdday: 'md-cloudy',
        iosnight: 'ios-cloudy-night',
		mdnight: 'md-cloudy-night',
		subtitle: "Only partly",
		color: CLOUD_HEX
	},
	c1006: {
		code : 1006,
		day : "Cloudy",
		night : "Cloudy",
		iosday: 'ios-cloudy',
        mdday: 'md-cloudy',
        iosnight: 'ios-cloudy-night',
		mdnight: 'md-cloudy-night',
		subtitle: "Like flying sheep",
		color: CLOUD_HEX
	},
	c1009: {
		code : 1009,
		day : "Overcast",
		night : "Overcast",
		iosday: 'ios-cloudy',
        mdday: 'md-cloudy',
        iosnight: 'ios-cloudy-night',
		mdnight: 'md-cloudy-night',
		subtitle: "Where did the sun go?",
		color: CLOUD_HEX
	},
	c1030: {
		code : 1030,
		day : "Mist",
		night : "Mist",
		iosday: 'ios-cloudy',
        mdday: 'md-cloudy',
        iosnight: 'ios-cloudy-night',
		mdnight: 'md-cloudy-night',
		subtitle: "Low visibility and also very spooky",
		color: MIST_HEX
	},
	c1063: {
		code : 1063,
		day : "Patchy rain possible",
		night : "Patchy rain possible",
		iosday: 'ios-rainy',
        mdday: 'md-rainy',
        iosnight: 'ios-rainy',
		mdnight: 'md-rainy',
		subtitle: "Umbrella recommended",
		color: RAIN_HEX
	},
	c1066: {
		code : 1066,
		day : "Patchy snow possible",
	    night : "Patchy snow possible",
		iosday: 'ios-snow',
        mdday: 'md-snow',
        iosnight: 'ios-snow',
		mdnight: 'md-snow',
		subtitle: 'Do you want to build a snowman?',
		color: SNOW_HEX
	},
	c1069: {
		code : 1069,
		day : "Patchy sleet possible",
		night : "Patchy sleet possible",
		iosday: 'ios-snow',
        mdday: 'md-snow',
        iosnight: 'ios-snow',
		mdnight: 'md-snow',
		subtitle: "Rain mixed with snow",
		color: SNOW_HEX
	},
	c1072: {
		code : 1072,
		day : "Patchy freezing drizzle possible",
		night : "Patchy freezing drizzle possible",
		iosday: 'ios-rainy',
        mdday: 'md-rainy',
        iosnight: 'ios-rainy',
		mdnight: 'md-rainy',
		subtitle: 'Like rain, but way worse',
		color: DRIZZLE_HEX
	},
	c1087: {
		code : 1087,
		day : "Thundery outbreaks possible",
		night : "Thundery outbreaks possible",
		iosday: 'ios-thunderstorm',
        mdday: 'md-thunderstorm',
        iosnight: 'ios-thunderstorm',
		mdnight: 'md-thunderstorm',
		subtitle: 'Thunderbolt and lightning. Very very frightening',
		color: STORM_HEX
	},
	c1114: {
		code : 1114,
		day : "Blowing snow",
		night : "Blowing snow",
		iosday: 'ios-snow',
        mdday: 'md-snow',
        iosnight: 'ios-snow',
		mdnight: 'md-snow',
		subtitle: 'Windy and snowy at the same time',
		color: SNOW_HEX
	},
	c1117: {
		code : 1117,
		day : "Blizzard",
		night : "Blizzard",
		iosday: 'ios-snow',
        mdday: 'md-snow',
        iosnight: 'ios-snow',
		mdnight: 'md-snow',
		subtitle: 'Stay home and warm up',
		color: SNOW_HEX
	},
	c1135: {
		code : 1135,
		day : "Fog",
		night : "Fog",
		iosday: 'ios-cloudy',
        mdday: 'md-cloudy',
        iosnight: 'ios-cloudy-night',
		mdnight: 'md-cloudy-night',
		subtitle: "I can't see!",
		color: MIST_HEX
	},
	c1147: {
		code : 1147,
	    day : "Freezing fog",
		night : "Freezing fog",
		iosday: 'ios-cloudy',
        mdday: 'md-cloudy',
        iosnight: 'ios-cloudy-night',
		mdnight: 'md-cloudy-night',
		subtitle: 'Fog, but worse!',
		color: MIST_HEX
	},
	c1150: {
		code : 1150,
		day : "Patchy light drizzle",
		night : "Patchy light drizzle",
		iosday: 'ios-rainy',
        mdday: 'md-rainy',
        iosnight: 'ios-rainy',
		mdnight: 'md-rainy',
		subtitle: 'Like rain, but slightly better',
		color: DRIZZLE_HEX
	},
	c1153: {
		code : 1153,
		day : "Light drizzle",
		night : "Light drizzle",
		iosday: 'ios-rainy',
        mdday: 'md-rainy',
        iosnight: 'ios-rainy',
		mdnight: 'md-rainy',
		subtitle: 'Like rain, but slightly better',
		color: DRIZZLE_HEX
	},
	c1168: {
		code : 1168,
		day : "Freezing drizzle",
		night : "Freezing drizzle",
		iosday: 'ios-rainy',
        mdday: 'md-rainy',
        iosnight: 'ios-rainy',
		mdnight: 'md-rainy',
		subtitle: 'Like rain, but colder',
		color: DRIZZLE_HEX
	},
	c1171: {
		code : 1171,
		day : "Heavy freezing drizzle",
		night : "Heavy freezing drizzle",
		iosday: 'ios-rainy',
        mdday: 'md-rainy',
        iosnight: 'ios-rainy',
		mdnight: 'md-rainy',
		subtitle: 'Like rain, but way colder',
		color: DRIZZLE_HEX
	},
	c1180: {
		code : 1180,
		day : "Patchy light rain",
		night : "Patchy light rain",
		iosday: 'ios-rainy',
        mdday: 'md-rainy',
        iosnight: 'ios-rainy',
		mdnight: 'md-rainy',
		subtitle: 'Raining, but only a litte',
		color: RAIN_HEX
	},
	c1183: {
		code : 1183,
		day : "Light rain",
		night : "Light rain",
		iosday: 'ios-rainy',
        mdday: 'md-rainy',
        iosnight: 'ios-rainy',
		mdnight: 'md-rainy',
		subtitle: 'Raining, but only lightly',
		color: RAIN_HEX
	},
	c1186: {
		code : 1186,
		day : "Moderate rain at times",
		night : "Moderate rain at times",
		iosday: 'ios-rainy',
        mdday: 'md-rainy',
        iosnight: 'ios-rainy',
		mdnight: 'md-rainy',
		subtitle: 'Umbrellas recommended',
		color: RAIN_HEX
	},
	c1189: {
		code : 1189,
		day : "Moderate rain",
		night : "Moderate rain",
		iosday: 'ios-rainy',
        mdday: 'md-rainy',
        iosnight: 'ios-rainy',
		mdnight: 'md-rainy',
		subtitle: 'Umbrellas recommended',
		color: RAIN_HEX
	},
	c1192: {
		code : 1192,
		day : "Heavy rain at times",
		night : "Heavy rain at times",
		iosday: 'ios-rainy',
        mdday: 'md-rainy',
        iosnight: 'ios-rainy',
		mdnight: 'md-rainy',
		subtitle: 'Umbrellas recommended',
		color: RAIN_HEX
	},
	c1195: {
		code : 1195,
		day : "Heavy rain",
		night : "Heavy rain",
		iosday: 'ios-rainy',
        mdday: 'md-rainy',
        iosnight: 'ios-rainy',
		mdnight: 'md-rainy',
		subtitle: 'Umbrellas recommended',
		color: RAIN_HEX
	},
	c1198: {
		code : 1198,
		day : "Light freezing rain",
		night : "Light freezing rain",
		iosday: 'ios-rainy',
        mdday: 'md-rainy',
        iosnight: 'ios-rainy',
		mdnight: 'md-rainy',
		subtitle: 'Umbrellas recommended',
		color: RAIN_HEX
	},
	c1201: {
		code : 1201,
		day : "Moderate or heavy freezing rain",
		night : "Moderate or heavy freezing rain",
		iosday: 'ios-rainy',
        mdday: 'md-rainy',
        iosnight: 'ios-rainy',
		mdnight: 'md-rainy',
		subtitle: 'Umbrellas recommended',
		color: RAIN_HEX
	},
	c1204: {
		code : 1204,
		day : "Light sleet",
		night : "Light sleet",
		iosday: 'ios-snow',
        mdday: 'md-snow',
        iosnight: 'ios-snow',
		mdnight: 'md-snow',
		subtitle: "It's raining AND snowing!",
		color: SNOW_HEX
	},
	c1207: {
		code : 1207,
		day : "Moderate or heavy sleet",
		night : "Moderate or heavy sleet",
		iosday: 'ios-snow',
        mdday: 'md-snow',
        iosnight: 'ios-snow',
		mdnight: 'md-snow',
		subtitle: "It's raining AND snowing!",
		color: SNOW_HEX
	},
	c1210: {
		code : 1210,
		day : "Patchy light snow",
		night : "Patchy light snow",
		iosday: 'ios-snow',
        mdday: 'md-snow',
        iosnight: 'ios-snow',
		mdnight: 'md-snow',
		subtitle: 'Winter is here',
		color: SNOW_HEX
	},
	c1213: {
		code : 1213,
		day : "Light snow",
		night : "Light snow",
		iosday: 'ios-snow',
        mdday: 'md-snow',
        iosnight: 'ios-snow',
		mdnight: 'md-snow',
		subtitle: 'Do you want to build a snowman?',
		color: SNOW_HEX
	},
	c1216: {
		code : 1216,
		day : "Patchy moderate snow",
		night : "Patchy moderate snow",
		iosday: 'ios-snow',
        mdday: 'md-snow',
        iosnight: 'ios-snow',
		mdnight: 'md-snow',
		subtitle: 'Do you want to build a snowman?',
		color: SNOW_HEX
	},
	c1219: {
		code : 1219,
		day : "Moderate snow",
		night : "Moderate snow",
		iosday: 'ios-snow',
        mdday: 'md-snow',
        iosnight: 'ios-snow',
		mdnight: 'md-snow',
		subtitle: 'Do you want to build a snowman?',
		color: SNOW_HEX
	},
	c1222: {
		code : 1222,
	    day : "Patchy heavy snow",
		night : "Patchy heavy snow",
		iosday: 'ios-snow',
        mdday: 'md-snow',
        iosnight: 'ios-snow',
		mdnight: 'md-snow',
		subtitle: 'Too heavy for snowmen-building',
		color: SNOW_HEX
	},
	c1225: {
		code : 1225,
		day : "Heavy snow",
		night : "Heavy snow",
		iosday: 'ios-snow',
        mdday: 'md-snow',
        iosnight: 'ios-snow',
		mdnight: 'md-snow',
		subtitle: 'Too heavy for snowmen-building',
		color: SNOW_HEX

	},
	c1237: {
		code : 1237,
		day : "Ice pellets",
		night : "Ice pellets",
		iosday: 'ios-snow',
        mdday: 'md-snow',
        iosnight: 'ios-snow',
		mdnight: 'md-snow',
		subtitle: "It's raining ice!",
		color: SNOW_HEX
	},
	c1240: {
		code : 1240,
	    day : "Light rain shower",
		night : "Light rain shower",
		iosday: 'ios-rainy',
        mdday: 'md-rainy',
        iosnight: 'ios-rainy',
		mdnight: 'md-rainy',
		subtitle: "Tis' only a little rain",
		color: RAIN_HEX
	},
	c1243: {
		code : 1243,
		day : "Moderate or heavy rain shower",
		night : "Moderate or heavy rain shower",
		iosday: 'ios-rainy',
        mdday: 'md-rainy',
        iosnight: 'ios-rainy',
		mdnight: 'md-rainy',
		subtitle: 'Umbrellas recommended. Or a raincoat',
		color: RAIN_HEX
	},
	c1246: {
		code : 1246,
		day : "Torrential rain shower",
		night : "Torrential rain shower",
		iosday: 'ios-rainy',
        mdday: 'md-rainy',
        iosnight: 'ios-rainy',
		mdnight: 'md-rainy',
		subtitle: 'Umbrellas recommended. Or a raincoat',
		color: RAIN_HEX
	},
	c1249: {
		code : 1249,
		day : "Light sleet showers",
		night : "Light sleet showers",
		iosday: 'ios-snow',
        mdday: 'md-snow',
        iosnight: 'ios-snow',
		mdnight: 'md-snow',
		subtitle: "It's raining AND snowing!",
		color: SNOW_HEX
	},
	c1252: {
		code : 1252,
		day : "Moderate or heavy sleet showers",
		night : "Moderate or heavy sleet showers",
		iosday: 'ios-snow',
        mdday: 'md-snow',
        iosnight: 'ios-snow',
		mdnight: 'md-snow',
		subtitle: "It's raining AND snowing!",
		color: SNOW_HEX
	},
	c1255: {
		code : 1255,
		day : "Light snow showers",
		night : "Light snow showers",
		iosday: 'ios-snow',
        mdday: 'md-snow',
        iosnight: 'ios-snow',
		mdnight: 'md-snow',
		subtitle: "It's raining AND snowing!",
		color: SNOW_HEX
	},
	c1258: {
		code : 1258,
		day : "Moderate or heavy snow showers",
		night : "Moderate or heavy snow showers",
		iosday: 'ios-snow',
        mdday: 'md-snow',
        iosnight: 'ios-snow',
		mdnight: 'md-snow',
		subtitle: "It's raining AND snowing!",
		color: SNOW_HEX
	},
	c1261: {
		code : 1261,
		day : "Light showers of ice pellets",
		night : "Light showers of ice pellets",
		iosday: 'ios-snow',
        mdday: 'md-snow',
        iosnight: 'ios-snow',
		mdnight: 'md-snow',
		subtitle: "It's raining ice!",
		color: SNOW_HEX
	},
	c1264: {
		code : 1264,
		day : "Moderate or heavy showers of ice pellets",
		night : "Moderate or heavy showers of ice pellets",
		iosday: 'ios-snow',
        mdday: 'md-snow',
        iosnight: 'ios-snow',
		mdnight: 'md-snow',
		subtitle: "It's raining ice!",
		color: SNOW_HEX
	},
	c1273: {
		code : 1273,
		day : "Patchy light rain with thunder",
		night : "Patchy light rain with thunder",
		iosday: 'ios-thunderstorm',
        mdday: 'md-thunderstorm',
        iosnight: 'ios-thunderstorm',
		mdnight: 'md-thunderstorm',
		subtitle: 'Thunderbolt and lightning. Very very frightening',
		color: STORM_HEX
	},
	c1276: {
		code : 1276,
		day : "Moderate or heavy rain with thunder",
		night : "Moderate or heavy rain with thunder",
		iosday: 'ios-thunderstorm',
        mdday: 'md-thunderstorm',
        iosnight: 'ios-thunderstorm',
		mdnight: 'md-thunderstorm',
		subtitle: 'Thunderbolt and lightning. Very very frightening',
		color: STORM_HEX
	},
	c1279: {
		code : 1279,
		day : "Patchy light snow with thunder",
		night : "Patchy light snow with thunder",
		iosday: 'ios-thunderstorm',
        mdday: 'md-thunderstorm',
        iosnight: 'ios-thunderstorm',
		mdnight: 'md-thunderstorm',
		subtitle: 'Thunderbolt and lightning. Very very frightening',
		color: STORM_HEX
	},
	c1282: {
		code : 1282,
		day : "Moderate or heavy snow with thunder",
		night : "Moderate or heavy snow with thunder",
		iosday: 'ios-thunderstorm',
        mdday: 'md-thunderstorm',
        iosnight: 'ios-thunderstorm',
		mdnight: 'md-thunderstorm',		
		subtitle: 'Thunderbolt and lightning. Very very frightening',
		color: STORM_HEX
	}
  };