const dataCart = [
    { 
        id: 1,
        namaToko: "Nastar Store",
        lokasiToko: "Medan",
        isChecked: false,
        produk: [
            {
                id: 1,
                isChecked: false,
                total: 0,
                nama: "Corsair CV450 Power Supply 450 Watt 80 Plus Bronze Certified CV 450",
                gambar: "img/barang.png",
                isDiskon: true,
                hargaDiskon: 699000,
                harga: 659000,
                jumlah: 0,
                stock: 9
            },
            {
                id: 2,
                isChecked: false,
                total: 0,
                nama: "PHILIPS LAMPU LED MYCARE 12W PAKET LED BULB 12 WATT ISI 4 PUTIH",
                gambar: "img/barang2.png",
                isDiskon: false,
                harga: 147000,
                jumlah: 0,
                stock: 16
            }
        ]
    
    },
    { 
        id: 2,
        namaToko: "Grizz Shop",
        lokasiToko: "Bandung",
        isChecked: false,
        produk: [
            {
                id: 1,
                isChecked: false,
                total: 0,
                nama: "AMD RYZEN 5 5600X | Processor AMD AM4 Zen 3 Vermeer 6 Cores 12 Threads",
                gambar: "img/barang3.png",
                isDiskon: false,
                harga: 4629000,
                jumlah: 0,
                stock: 10
            },
            {
                id: 2,
                isChecked: false,
                total: 0,
                nama: "TEAM T-Force Delta RGB (2x8 pc 3200 ) 16GB DDR4 kit 3200MHz - Putih",
                gambar: "img/barang4.png",
                isDiskon: false,
                harga: 1175000,
                jumlah: 0,
                stock: 20
            }
        ]
    
    },
    { 
        id: 3,
        namaToko: "Link Shop",
        lokasiToko: "Jakarta",
        isChecked: false,
        produk: [
            {
                id: 1,
                isChecked: false,
                total: 0,
                nama: "Motherboard MSI B450 Gaming Plus MAX AM4 B450 DDR4 USB3.2 SATA3",
                gambar: "img/barang5.png",
                isDiskon: false,
                harga: 1777000,
                jumlah: 0,
                stock: 8
            },
            {
                id: 2,
                isChecked: false,
                total: 0,
                nama: "Kabel USB Type C to Audio Aux 3.5mm Braided - 1 Meter",
                gambar: "img/barang6.png",
                isDiskon: false,
                harga: 41000,
                jumlah: 0,
                stock: 30
            }
        ]
    
    },
    { 
        id: 4,
        namaToko: "Nano Komputer",
        lokasiToko: "Medan",
        isChecked: false,
        produk: [
            {
                id: 1,
                isChecked: false,
                total: 0,
                nama: "SSD Midasforce 512 Gb - Tanpa Caddy",
                gambar: "img/barang7.png",
                isDiskon: false,
                harga: 695000,
                jumlah: 0,
                stock: 8
            },
            {
                id: 2,
                isChecked: false,
                total: 0,
                nama: "SSD SAMSUNG - SSD 970 EVO PLUS NVME M.2 1TB MZ-V7S1T0B/AM PCIe Gen 3",
                gambar: "img/barang8.png",
                isDiskon: false,
                harga: 2500000,
                jumlah: 0,
                stock: 12
            }
        ]
    
    },
    { 
        id: 5,
        namaToko: "Twist Store",
        lokasiToko: "jakarta",
        isChecked: false,
        produk: [
            {
                id: 1,
                isChecked: false,
                total: 0,
                nama: "Hippo Wired Headset/Handsfree/Earphone Toraz - Stereo Sound - Putih",
                gambar: "img/barang9.png",
                isDiskon: true,
                hargaDiskon:25000,
                harga: 13000,
                jumlah: 0,
                stock: 10
            },
            {
                id: 2,
                isChecked: false,
                total: 0,
                nama: "Face Shield Premium Quality Acrylic Anti-Fog Full Protection",
                gambar: "img/barang10.png",
                isDiskon: true,
                hargaDiskon: 119000,
                harga: 89000,
                jumlah: 0,
                stock: 12
            }
        ]
    
    }
]

const DATA = "DATA";

const initialStoreData = ()=> {
    localStorage.setItem(DATA,JSON.stringify(dataCart));
}

const getDataFromStorage =()=> {
    if(!localStorage.getItem(DATA)) return []; 
    return JSON.parse(localStorage.getItem(DATA))
}

const setDataToStorage = (data)=> {
    localStorage.setItem(DATA,JSON.stringify(data));
}


const deleteItem = (tokoId,barangId) => {
    const data = getDataFromStorage();
    const newData = [...data].map(toko => {
        if(parseInt(tokoId) !== parseInt(toko.id)) return toko
        return {
            ...toko,
            produk: toko.produk.filter(barang => parseInt(barang.id) !== parseInt(barangId))
        }
    });
    setDataToStorage(newData);
    return newData;
}

const deleteToko = id => {
    const data = getDataFromStorage();
    const newData = [...data].filter(toko => {
        return parseInt(toko.id) !== parseInt(id);
    })
    setDataToStorage(newData);
    return newData;
}

const tokoCheckHandler = id => {
    const data = getDataFromStorage();
    const newData = [...data].map(toko => {
        if(parseInt(id) !== parseInt(toko.id)) return toko
        return {
            ...toko,
            isChecked: !toko.isChecked,
            produk: toko.produk.map(barang => {
                return {
                    ...barang,
                    isChecked: !toko.isChecked
                }
            })
        }
    });
    setDataToStorage(newData);
    return newData;
}

const barangCheckHandler = (tokoId,barangId) => {
    const data = getDataFromStorage();
    const newData = [...data].map(toko => {
        if(parseInt(tokoId) !== parseInt(toko.id)) return toko
        return {
            ...toko,
            produk: toko.produk.map(barang => {
                if(parseInt(barang.id) !== parseInt(barangId)) return barang;
                return {
                    ...barang,
                    isChecked: !barang.isChecked
                }
            })
        }
    });
    setDataToStorage(newData);
    return newData;
}

const incrementBarang = (tokoId,barangId)=> {
    const data = getDataFromStorage();
    const newData = [...data].map(toko => {
        if(parseInt(tokoId) !== parseInt(toko.id)) return toko
        return {
            ...toko,
            produk: toko.produk.map(barang => {
                if(parseInt(barang.id) !== parseInt(barangId)) return barang;
                return {
                    ...barang,
                    jumlah: barang.jumlah < barang.stock ? barang.jumlah + 1 : barang.jumlah
                }
            })
        }
    });
    setDataToStorage(newData);
    return newData;
}

const decrementBarang = (tokoId,barangId)=> {
    const data = getDataFromStorage();
    const newData = [...data].map(toko => {
        if(parseInt(tokoId) !== parseInt(toko.id)) return toko
        return {
            ...toko,
            produk: toko.produk.map(barang => {
                if(parseInt(barang.id) !== parseInt(barangId)) return barang;
                return {
                    ...barang,
                    jumlah: barang.jumlah > 0 ? barang.jumlah - 1 : barang.jumlah
                }
            })
        }
    });
    setDataToStorage(newData);
    return newData;
}

const calculateShoping = ()=> {

    let totalBrg = 0;
    let totalHrg = 0;

    const totalBarang = document.querySelectorAll('.total-barang');
    const totalHarga = document.querySelectorAll('.total-harga');
    const buttonBeli = document.querySelector('#buttonBeli');

    const data = getDataFromStorage();
    [...data].forEach(toko => {
        [...toko.produk].forEach(brg => {
            if(brg.isChecked) {
                totalBrg += brg.jumlah
                totalHrg += brg.harga * brg.jumlah
            }
        });
    });

    [...totalBarang].forEach(el => el.innerHTML = totalBrg);
    [...totalHarga].forEach(el => el.innerHTML = totalHrg);

    buttonBeli.disabled = totalBrg === 0;

}

const fullCheckHandler = state => {
    const data = getDataFromStorage();
    const newData = [...data].map(toko => {
        return {
            ...toko,
            isChecked: state,
            produk: toko.produk.map(brg => {
                return {
                    ...brg,
                    isChecked: state
                }
            })
        }
    });
    setDataToStorage(newData);
    return newData;
}

const renderItems = (data)=> {

    const listTokoContainer = document.querySelector('.list-toko');
    listTokoContainer.innerHTML = "";

    const elem = data.map(toko => {
        return `<div class="container-toko" id="${toko.id}">
        <div class="toko">
            <input ${toko.isChecked ? 'checked' : ''} type="checkbox" class="cekboxtoko cekbox" id="checkbox-toko" name="checkBoxToko">
            <label for="checkBoxToko" class="nama-toko">${toko.namaToko}</label>
            <p class="kotaToko">${toko.lokasiToko}</p>
            <img src="img/bin.png" alt="bin" id="delete-toko" class="hapus-toko" >
            
            ${toko.produk.map(produk => {
                
                const diskon = produk.isDiskon ? `<span class="diskon">Rp. ${produk.hargaDiskon}</span>` : ''

                return `<div  class="barang" id="${produk.id}">
                            <input  ${produk.isChecked ? 'checked' : ''} type="checkbox" id="checkbox-barang" class="cekboxbarang cekbox" name="checkBoxBarang">
                            <div class="container-gambar-barang">
                                <img src="${produk.gambar}" alt="1" class="gambar-barang">
                            </div>
                            <div class="nama-harga-barang">
                                <p class="namaBarang">
                                    ${produk.nama}
                                </p>
                                <br>
                                <p class="Rp">${diskon}<span class="harga">Rp ${produk.harga}</span></p>
                                <p class="pSisaStok">Sisa stok <span class="sisa-stok">${produk.stock}</span></p>
                                <div class="addMinus">                                    
                                    <span class="minus" id="btn-min" ><img src="img/minus-deactive.png" alt="minus" width="23px" class="minus-icon"></span>
                                    <span class="totalBarang" id="total-barang">${produk.jumlah}</span>
                                    <span class="plus" id="btn-plus"  ><img src="img/add-active.png" alt="plus" width="23px" class="plus-icon"></span>
                                    <img id="delete-btn" src="img/bin.png" alt="bin" class="hapus-barang" >
                                </div>                         
                            </div>    
                        </div> `
            }).join('')}
                  
        </div>
    </div>`
    }).join('')

    listTokoContainer.innerHTML = elem

    const elementHtml = [...listTokoContainer.children];
    elementHtml.forEach(toko => {   

            toko.querySelector('#checkbox-toko').addEventListener('click',()=> {
                renderItems(tokoCheckHandler(toko.id));
                calculateShoping();
            });

            toko.querySelector('#delete-toko').addEventListener('click',()=> {
                renderItems(deleteToko(toko.id));
                calculateShoping();
            });

            const barang = toko.querySelectorAll('.barang');
            barang.forEach(brg => {
                brg.querySelector('#delete-btn').addEventListener('click',()=> {
                    renderItems(deleteItem(toko.id,brg.id));
                    calculateShoping();
                })
                brg.querySelector('#checkbox-barang').addEventListener('click',()=> {
                    renderItems(barangCheckHandler(toko.id,brg.id));
                    calculateShoping();
                });
                brg.querySelector('#btn-min').addEventListener('click',()=> {
                    renderItems(decrementBarang(toko.id,brg.id));
                    calculateShoping();
                });
                brg.querySelector('#btn-plus').addEventListener('click',()=> {
                    renderItems(incrementBarang(toko.id,brg.id));
                    calculateShoping();
                });
            })

    });

}

window.addEventListener('load',function(e) {
    
    if(!localStorage.getItem(DATA)) {
        initialStoreData();
    }

    renderItems(getDataFromStorage());

    calculateShoping();

    const fullCheck = this.document.querySelector('#fullCheck');
    fullCheck.addEventListener('click',()=> {
        renderItems(fullCheckHandler(fullCheck.checked));
        calculateShoping();
    });

    const deleteAll = this.document.querySelector('.hapus-semua');
    deleteAll.addEventListener('click',()=> {
        setDataToStorage([]);
        renderItems([]);
    });

    const btnReset = this.document.querySelector('#btn-reset');
    btnReset.addEventListener('click',()=> {
        initialStoreData();
        renderItems(getDataFromStorage());
    });

});




//// WOIIII mana kau