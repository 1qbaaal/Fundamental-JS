// 1. Buat Jenis Kendaraan yang dapat melalui tol -> Mobil, Truck, Bus
// 2. Buat prompt gate dari awal kita masuk tol -> Surabaya, Solo, Semarang, Palimanan, Cikopo atau sebaliknya
// 3. Buat Gate keluar tol 
// 4. Biaya Tol yang telah dilalui


// let gateIn = prompt('Input Your Gate In:')
// let gateOut = prompt('Input Your Gate Out:')

function JenisMobil(car){
let vehicle = 'Input Your vehicle:\n1. Car\n2. Bus\n3. Truck';
let input = prompt(vehicle)

if( input == 1){
  this.gateIn()
}else if(input == 2){
  this.gateIn()
}else if( input == 3){
  this.gateIn()
}
}

gateIn(car){
  let text = 'Input Your Gerbang Masuk:';
  let input1 = prompt(text)
}



gerbangKeluar()

priceTol() 




console.log(JenisMobil('1.Mobil', '2. Bus', '3.Truck'))

let gateSurSol = [
  {car:'mobil', price: 275500},
  {car:'bus', price: 290000},
  {car:'truck', price: 310500}
]

let gateSolSem = [
  {car:'mobil', price: 22500},
  {car:'bus', price: 31500},
  {car:'truck', price: 28000}
]

let gateSemPali= [
  {car:'mobil', price: 250000},
  {car:'bus', price: 275000},
  {car:'truck', price: 255000}
]

let gateCipali = [
  {car:'mobil', price: 275500},
  {car:'bus', price: 290000},
  {car:'truck', price: 310500}
]