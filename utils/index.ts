export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "3901eccdecmsh1e3d3f88c927c78p19d996jsn32781c993070",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const response = await fetch("https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla", { headers: headers });
  //the second parameter in fetch(headers in this case) sends out additional info for your api

  const result = await response.json();

  return result;
}
