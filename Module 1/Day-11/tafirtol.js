let rute = ["surabaya", "ruastoll", "solo", "RuasToll", "semarang", "RuasToll","palimanan", "RuasToll", "cikopo"]
let price = [0, [275500, 290000, 310500], 0, [22500, 28000, 31500], 0, [250000, 255000, 275000], 0, [275500, 290000, 310500], 0]

const vehicleType = Number(prompt('1. Car\n2. Bus\n3. Truck')) - 1;
let masuk = prompt("gate masuK:").toLowerCase() //"surabaya" 
let keluar = prompt('Gate Keluar:').toLowerCase() //semarang

let total = 0; //0 ~ 4

if (masuk > keluar){
  let temp = masuk;
  masuk = keluar;
  keluar = temp;
}

for( let i = rute.indexOf(masuk); i <= rute.indexOf(keluar); i++){
    if(price[i] === 'object'){
      total += price[i][vehicleType]
    }    
}

alert(`${total}`)


//input kendaraan
//let kendaraan = prompt("input kendaraan: 1,2,3")
// kendaraan = '1' '2' '3'


//tol masuk => titik awal => index awal => rute.indexOf(masuk)
//tol keluar => titik akhir => index terakhir => rute.indexOf(keluar)