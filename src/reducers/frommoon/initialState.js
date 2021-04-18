const initialState = 
{ 
 star: [
   { 
     starSize : 200,
     starName : 'Algol',
     starColor : 'starColor1',
     tNom      : 3000 
   },
 ],
 planets: [
   {
     id : 1,
     name : 'Mercury',
     orbit : 1,
     radius   : 1,//  это номер орбиты
     img      : 1,
     size     : 50,
     // velocity : 0.001,
     tNom     : 3000,// номинальный период обращения базовой планеты в секундах/оборот
   },
   { 
     id : 2,
     name : 'Venus',
     orbit : 2,
     radius : 25,
     img    : 2,
     size   : 70,
     // velocity : 0.01,
     tNom: 3000,
   },
   { 
     id : 3,
     name : 'Eath',
     orbit : 3,
     radius : 50,
     img    : 3,
     size   : 20,
     // velocity : 0.05,
     tNom : 3000,
   },
   { 
     id : 4,
     name : 'Mars',
     orbit : 9,
     radius :125,
     img    : 4,
     size   : 50,
     // velocity : 0.05,
     tNom : 300,
   },

 ],
 ships: [
   {
     name: 'fighter',
     size   : 100,
     img    : 1,
     posX     : 100,
     posY     : 600,
     id: 1,
     radius : 150,
     velocity : 50,
     selected: false,
   },
   {
     name: 'havyFighter',
     size   : 100,
     img    : 2,
     posX     : 600,
     posY     : 200,
     id: 2,
     radius : 150,
     velocity : 150,
     selected: false,
   },
   {
     name: 'dragonFighter',
     size   : 100,
     img    : 3,
     posX     : 400,
     posY     : 100,
     id: 3,
     radius :350,
     velocity : 130,
     selected: false,
   },
 
 ],
 stations: [
   {
     name: 'Weapon Station',
     id: 1,
     radius : 150,
     img    : 1,
     size   : 200,
     velocity : 50,
     posX     : 200,
     posY     : 400,
     selected: false,

   },
   {
     name: 'Medical Station',
     id: 2,
     radius : 150,
     img    : 2,
     size   : 200,
     velocity : 50,
     posX     : 1200,
     posY     : 100,
     selected: false,

   },
 
 ]
}

 export default initialState;