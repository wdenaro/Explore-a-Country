/* 
	This Class defines the values that are returned from the _restcountries.eu_ API
	using the following URL parameters - WHERE 'AND' is the country of Andorra:
		https://restcountries.eu/rest/v2/alpha/AND?fields=alpha3Code;name;capital;subregion;population;area;borders;flag;
*/ 

export class FullCountry {
	alpha3Code: string;
	name: string;
	capital: string;
	subregion: string;
	population: number;
	area: number;
	borders: string[];
	flag: string;
}