const dataSiswa = [
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

console.log("1",dataSiswa.filter(data => data.lulus))
console.log("2",dataSiswa.map(data => `Nama = ${data.nama}, Nilai = ${data.nilai}`))
console.log("3",dataSiswa.find(data => data.nilai > 80))