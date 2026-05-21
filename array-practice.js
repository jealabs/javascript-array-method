// const data_produk = [
//     {
//         id: 1,
//         nama: "makanan",
//         harga: 1200000,
//         stock: 0
//     },
//     {
//         id: 2,
//         nama: "minuman",
//         harga: 800000,
//         stock: 10
//     },
//     {
//         id: 3,
//         nama: "pakaian",
//         harga: 1800000,
//         stock: 20
//     }
// ]
// console.log("1",data_produk.map(data => data.nama))
// console.log("2",data_produk.filter(data => data.stock > 0))
// console.log("3",data_produk.find(data => data.nama === "minuman"))

const sekolah = [
    {
        id: 1,
        nama: "anisa",
        nilai: 90,
        lulus: true
    },
    {
        id: 2,
        nama: "akmal",
        nilai: 75,
        lulus: true
    },
    {
        id: 3,
        nama: "aldi",
        nilai: 60,
        lulus: false
    }
]
console.log("1",sekolah.filter(data => data.lulus))
console.log("2",sekolah.map(data => `Nama = ${data.nama}, Nilai = ${data.nilai}`))
console.log("3",sekolah.find(data => data.nilai > 80))

