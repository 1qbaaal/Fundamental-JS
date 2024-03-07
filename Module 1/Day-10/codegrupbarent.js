let products = [
  { name: "asus", price: 20000000 },
  { name: "lenovo", price: 15000000 },
  { name: "acer", price: 10000000 }
]

let showAllData = '';

while (true) {
  const menu = Number(prompt(`1. Search\n2. Sort\n3. Update\n4. Logout`))
  if (menu == 1) {
      let menu1 = prompt(`Input search products: `)
      if (menu1 == products[0]["name"]) {
          alert(`Nama Produk: ${products[0]["name"]}\nHarga : ${products[0]["price"].toLocaleString("id-ID", { style: "currency", currency: "IDR" })}`)
      } else if (menu1 == products[1]["name1"]) {
          alert(`Nama Produk: ${products[1]["name"]}\nHarga : ${products[1]["price"].toLocaleString("id-ID", { style: "currency", currency: "IDR" })}`)
      } else if (menu1 == products[2]["name"]) {
          alert(`Nama Produk: ${products[2]["name"]}\nHarga : ${products[2]["price"].toLocaleString("id-ID", { style: "currency", currency: "IDR" })}`)
      }
  } else if (menu == 2) {
      let menu2 = Number(prompt(`1. Name\n2. Price\nInput :  `))
      if (menu2 == 1) {
          let menu2Name = Number(prompt(`1. ASC\n2. DESC\nInput :  `))
          if (menu2Name == 1) {
              let showNameAsc = '';
              sortedProductsNameAsc = products.sort((a, b) => a.name.localeCompare(b.name));
              for (let product of sortedProductsNameAsc) {
                  showNameAsc += `Nama Produk : ${product["name"]}, Harga Produk: ${product["price"].toLocaleString("id-ID", { style: "currency", currency: "IDR" })}\n`
              }
              alert(showNameAsc)
          } else if (menu2Name == 2) {
              let showNameDesc = '';
              sortedProductsNameDesc = products.sort((a, b) => b.name.localeCompare(a.name))
              for (let product of sortedProductsNameDesc) {
                  showNameDesc += `Nama Produk : ${product["name"]}, Harga Produk: ${product["price"].toLocaleString("id-ID", { style: "currency", currency: "IDR" })}\n`
              }
              alert(showNameDesc)
          }
      } else if (menu2 == 2) {
          let menu2Name = Number(prompt(`1. ASC\n2. DESC\nInput :  `))
          if (menu2Name == 1) {
              let showPriceAsc = '';
              sortedProductsPriceAsc = products.sort((a, b) => a.price - b.price);
              for (let product of sortedProductsPriceAsc) {
                  showPriceAsc += `Nama Produk : ${product["name"]}, Harga Produk: ${product["price"].toLocaleString("id-ID", { style: "currency", currency: "IDR" })}\n`
              }
              alert(showPriceAsc)
          } else if (menu2Name == 2) {
              let showPriceDesc = '';
              sortedProductsPriceDesc = products.sort((a, b) => b.price - a.price);
              for (let product of sortedProductsPriceDesc) {
                  showPriceDesc += `Nama Produk : ${product["name"]}, Harga Produk: ${product["price"].toLocaleString("id-ID", { style: "currency", currency: "IDR" })}\n`
              }
              alert(showPriceDesc)
          }
      }
  } else if (menu == 3) {
      for (let product of products) {
          showAllData += `${product.name}: ${product.price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })} \n`
      }
      let menu3 = prompt(`${showAllData}\nInput Product to Update: `)
      if (menu3 == products[0]["name"]) {
          let menu3Option = Number(prompt(`1. Name\n2. Price\nInput :  `))
          if (menu3Option == 1) {
              let menu3OptionName1 = prompt(`Input New Name : `)
              products[0]["name"] = menu3OptionName1
              alert(`Produk Ter-Update\nNama Produk: ${products[0]["name"]}\nHarga : ${products[0]["price"].toLocaleString("id-ID", { style: "currency", currency: "IDR" })}`)
              break;
          } else if (menu3Option == 2) {
              let menu3OptionPrice1 = Number(prompt(`Input New Price : `))
              products[0]["price"] = menu3OptionPrice1
              alert(`Produk Ter-Update\nNama Produk: ${products[0]["name"]}\nHarga : ${products[0]["price"].toLocaleString("id-ID", { style: "currency", currency: "IDR" })}`)
              break;
          }
      } else if (menu3 == products[1]["name"]) {
          let menu3Option = Number(prompt(`1. Name\n2. Price\nInput :  `))
          if (menu3Option == 1) {
              let menu3OptionName2 = prompt(`Input New Name : `)
              products[1]["name"] = menu3OptionName2
              alert(`Produk Ter-Update\nNama Produk: ${products[1]["name"]}\nHarga : ${products[1]["price"].toLocaleString("id-ID", { style: "currency", currency: "IDR" })}`)
              break;
          } else if (menu3Option == 2) {
              let menu3OptionPrice2 = Number(prompt(`Input New Price : `))
              products[1]["price"] = menu3OptionPrice2
              alert(`Produk Ter-Update\nNama Produk: ${products[1]["name"]}\nHarga : ${products[1]["price"].toLocaleString("id-ID", { style: "currency", currency: "IDR" })}`)
              break;
          }
      } else if (menu3 == products[2]["name"]) {
          let menu3Option = Number(prompt(`1. Name\n2. Price\nInput :  `))
          if (menu3Option == 1) {
              let menu3OptionName3 = prompt(`Input New Name : `)
              products[2]["name"] = menu3OptionName3
              alert(`Produk Ter-Update\nNama Produk: ${products[2]["name"]}\nHarga : ${products[2]["price"].toLocaleString("id-ID", { style: "currency", currency: "IDR" })}`)
              break;
          } else if (menu3Option == 2) {
              let menu3OptionPrice3 = Number(prompt(`Input New Price : `))
              products[2]["price"] = menu3OptionPrice3
              alert(`Produk Ter-Update\nNama Produk: ${products[2]["name"]}\nHarga : ${products[2]["price"].toLocaleString("id-ID", { style: "currency", currency: "IDR" })}`)
              break;
          }
      }
  } else if (menu == 4) {
      break;
  }
}