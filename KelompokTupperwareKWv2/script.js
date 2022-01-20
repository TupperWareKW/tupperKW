let fullChecked = document.querySelector(".fullCheck")
// let divToko = document.querySelector('.container-toko')

// bagian web storage

const CACHE_KEY = "data_cart"
const storageHarga = "data harga"


const produk = ''

const dataCart = [
    { 
        id: 1,
        namaToko: "Nastar Store",
        lokasiToko: "Medan",
        produk: [
            {
                id: 1,
                nama: "Corsair CV450 Power Supply 450 Watt 80 Plus Bronze Certified CV 450",
                gambar: "img/barang.png",
                harga: 659000,
                jumlah: 1,
                stock: 9
            },
            {
                id: 2,
                nama: "PHILIPS LAMPU LED MYCARE 12W PAKET LED BULB 12 WATT ISI 4 PUTIH",
                gambar: "img/barang2.png",
                harga: 147000,
                jumlah: 1,
                stock: 16
            }
        ]
    
    },
    { 
        id: 2,
        namaToko: "Grizz Shop",
        lokasiToko: "Bandung",
        produk: [
            {
                id: 1,
                nama: "AMD RYZEN 5 5600X | Processor AMD AM4 Zen 3 Vermeer 6 Cores 12 Threads",
                gambar: "img/barang3.png",
                harga: 4629000,
                jumlah: 1,
                stock: 10
            },
            {
                id: 2,
                nama: "TEAM T-Force Delta RGB (2x8 pc 3200 ) 16GB DDR4 kit 3200MHz - Putih",
                gambar: "img/barang4.png",
                harga: 1175000,
                jumlah: 1,
                stock: 20
            }
        ]
    
    },
    { 
        id: 3,
        namaToko: "Link Shop",
        lokasiToko: "Jakarta",
        produk: [
            {
                id: 1,
                nama: "Motherboard MSI B450 Gaming Plus MAX AM4 B450 DDR4 USB3.2 SATA3",
                gambar: "img/barang5.png",
                harga: 1777000,
                jumlah: 1,
                stock: 8
            },
            {
                id: 2,
                nama: "Kabel USB Type C to Audio Aux 3.5mm Braided - 1 Meter",
                gambar: "img/barang6.png",
                harga: 41000,
                jumlah: 1,
                stock: 30
            }
        ]
    
    },
    { 
        id: 4,
        namaToko: "Nano Komputer",
        lokasiToko: "Medan",
        produk: [
            {
                id: 1,
                nama: "SSD Midasforce 512 Gb - Tanpa Caddy",
                gambar: "img/barang7.png",
                harga: 695000,
                jumlah: 1,
                stock: 8
            },
            {
                id: 2,
                nama: "SSD SAMSUNG - SSD 970 EVO PLUS NVME M.2 1TB MZ-V7S1T0B/AM PCIe Gen 3",
                gambar: "img/barang8.png",
                harga: 2500000,
                jumlah: 1,
                stock: 12
            }
        ]
    
    },
    { 
        id: 5,
        namaToko: "Twist Store",
        lokasiToko: "jakarta",
        produk: [
            {
                id: 1,
                nama: "Hippo Wired Headset/Handsfree/Earphone Toraz - Stereo Sound - Putih",
                gambar: "img/barang9.png",
                harga: 13000,
                jumlah: 1,
                stock: 10
            },
            {
                id: 2,
                nama: "Face Shield Premium Quality Acrylic Anti-Fog Full Protection",
                gambar: "img/barang10.png",
                harga: 89000,
                jumlah: 1,
                stock: 12
            }
        ]
    
    }
]

function putHargaBarang(totalHarga) {
    localStorage.setItem(storageHarga,totalHarga)
}

function checkForStorage() {
    return typeof(Storage) !== "undefined"
}

// fungsi input data ke dalam web storage
function putDataCart(data) {
    if(checkForStorage()) {
        let userData = []
        if(localStorage.getItem(CACHE_KEY) === null) {
            userData.unshift(data)
            localStorage.setItem(CACHE_KEY, JSON.stringify(userData))
            // userData = []
        }else {
            userData = JSON.parse(localStorage.getItem(CACHE_KEY))
        }
        // userData.unshift(data)

        // localStorage.setItem(CACHE_KEY, JSON.stringify(userData))
    }
}

function getDataCart() {
    if (checkForStorage()){
        return JSON.parse(localStorage.getItem(CACHE_KEY))
    }else {
        []
    }
}

function renderDataCart() {
    let listDataCart = getDataCart()
    let x = 0; let x1 =1;
    let y = 0
    let x2 = 0; let x3 = 0
    for(let i = 0; i < dataCart.length; i++){
        document.getElementsByClassName('nama-toko')[i].innerHTML=listDataCart[0][y].namaToko
        document.getElementsByClassName('kotaToko')[i].innerHTML = listDataCart[0][y].lokasiToko        
        y+=1              
    }

    for (let j = 0; j < 5; j++){
        document.getElementsByClassName('gambar-barang')[x].setAttribute('src',listDataCart[0][x2].gambarProduk1)
        document.getElementsByClassName('namaBarang')[x].innerHTML = listDataCart[0][x2].namaProduk1
        document.getElementsByClassName('harga')[x].innerHTML = listDataCart[0][x2].hargaProduk1
        document.getElementsByClassName('sisa-stok')[x].innerHTML = listDataCart[0][x2].totalStok1
        document.getElementsByClassName('totalBarang')[x].innerHTML = listDataCart[0][x2].jumlahItem1
        x+=2; x2 +=1
    }

    for (let k = 0; k < 5; k++){
        document.getElementsByClassName('gambar-barang')[x1].setAttribute('src',listDataCart[0][x3].gambarProduk2)
        document.getElementsByClassName('namaBarang')[x1].innerHTML = listDataCart[0][x3].namaProduk2
        document.getElementsByClassName('harga')[x1].innerHTML = listDataCart[0][x3].hargaProduk2
        document.getElementsByClassName('sisa-stok')[x1].innerHTML = listDataCart[0][x3].totalStok2
        document.getElementsByClassName('totalBarang')[x1].innerHTML = listDataCart[0][x3].jumlahItem2
        x3 +=1; x1 +=2
    }
    
}

function deleteItems(id) {
    const itemsStorage = localStorage.getItem(CACHE_KEY)
    const newItem = [...JSON.parse(itemsStorage)].filter(function (item) {
        return item.id !== id
    })

    localStorage.setItem(CACHE_KEY, JSON.stringify(newItem))
}

putDataCart(dataCart)
// renderDataCart()

// ---------- akhir web storage ------------

function bodyOnClick(){
    var nast = 0
    var totalHarga = 0
    var barangCek = document.getElementsByClassName('harga')
    var lisBarang = document.getElementsByClassName('cekboxbarang')
    var buttonBuy = document.getElementById('buttonBeli')
    var totalBarang = document.getElementsByClassName('totalBarang')
    let barang = document.getElementsByClassName('barang')
    for ( let i = 0; i < lisBarang.length; i++ ) {        
        if(lisBarang[i].checked == true && window.getComputedStyle(barang[i]).display != 'none') {            
            buttonBuy.disabled = false            
            // nast +=1  
            totalHarga += parseInt(barangCek[i].textContent) * parseInt(totalBarang[i].textContent)            
            nast += parseInt(totalBarang[i].textContent)          
            
        }else {
            buttonBuy.disabled = true
        }
        if(nast > 0)
            buttonBuy.disabled = false        
    }
    putHargaBarang(totalHarga)
    buttonBuy.innerText = `Beli (${nast})`
    document.getElementById('totalBarang').innerText = nast
    document.getElementsByClassName('totalHarga')[0].innerText = localStorage.getItem(storageHarga)
    document.getElementsByClassName('totalHarga')[1].innerText = totalHarga
    
}


function fullCheck() {    
    if(fullChecked.checked == true){
        for(let items of document.getElementsByClassName("cekbox")){
            items.checked = true
        }            
    }else {
        for(let items of document.getElementsByClassName("cekbox")){
            items.checked = false
        }
    }
}

function storeChecked() {
    let storeCheck = document.getElementsByClassName('cekboxtoko')
    let itemCheck =document.getElementsByClassName('cekboxbarang')
    if (storeCheck[0].checked == true){
        itemCheck[0].checked = true
        itemCheck[1].checked = true
    }else {
        itemCheck[0].checked = false
        itemCheck[1].checked = false
    }
    if (storeCheck[1].checked == true){
        itemCheck[2].checked = true
        itemCheck[3].checked = true
    }else {
        itemCheck[2].checked = false
        itemCheck[3].checked = false
    }
    if (storeCheck[2].checked == true){
        itemCheck[4].checked = true
        itemCheck[5].checked = true
    }else {
        itemCheck[4].checked = false
        itemCheck[5].checked = false
    }
    if (storeCheck[3].checked == true){
        itemCheck[6].checked = true
        itemCheck[7].checked = true
    }else {
        itemCheck[6].checked = false
        itemCheck[7].checked = false
    }
    if (storeCheck[4].checked == true){
        itemCheck[8].checked = true
        itemCheck[9].checked = true
    }else {
        itemCheck[8].checked = false
        itemCheck[9].checked = false
    }

}


function hapusSemua() {
    let toko = document.getElementsByClassName('toko')
    let barang = document.getElementsByClassName('barang')
    for (let i of toko){
        i.style.display = 'none'
    }
    for (let j of barang ) {
        j.style.display = 'none'
    }
}

function hapusToko(a) {
    let toko = document.getElementsByClassName('container-toko')
    toko[a-1].style.display = 'none'    
    for (let i = 0; i< 2; i++){
        toko[a-1].getElementsByClassName('barang')[i].style.display = 'none'        
    }
    
}

function hapusBarang(a) {
    let barang = document.getElementsByClassName('barang')
    barang[a-1].style.display = 'none'
    deleteItems(a)    
}

function increment(a) {
    var totalBarang = document.getElementsByClassName('totalBarang')
    var sisaStok = document.getElementsByClassName('sisa-stok')
    var y = parseInt(sisaStok[a].textContent)
    var x = parseInt(totalBarang[a].textContent)    
    if(y >= 1){
        y-=1
        x+=1;
        sisaStok[a].innerText = y
        totalBarang[a].innerText = x
    }   
}

function decrement(a) {
    var totalBarang = document.getElementsByClassName('totalBarang')
    var sisaStok = document.getElementsByClassName('sisa-stok')
    var y = parseInt(sisaStok[a].textContent)
    var x = parseInt(totalBarang[a].textContent)
    if(x != 1 ){
        x-=1
        y+=1
        sisaStok[a].innerText = y
        totalBarang[a].innerText = x
    }
}