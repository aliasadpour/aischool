function saveUnit(unit){

let units = JSON.parse(localStorage.getItem("units")) || [];

units.push(unit);

localStorage.setItem(
"units",
JSON.stringify(units)
);

}



function getUnits(){

return JSON.parse(
localStorage.getItem("units")
) || [];

}



function deleteUnit(id){

let units=getUnits();

units=units.filter(
item=>item.id!==id
);

localStorage.setItem(
"units",
JSON.stringify(units)
);

}