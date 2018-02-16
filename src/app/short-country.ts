/* 
	This Class defines the variables that are returned from the _restcountries.eu_ API
	using the following URL parameters to fetch ALL county names and alpha codes:
		https://restcountries.eu/rest/v2/all?fields=alpha3Code;name;
*/ 

export interface ShortCountry {
	alpha3Code: string;
	name: string;
}