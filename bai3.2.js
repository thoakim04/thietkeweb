function tinhtong() {
    var so1 = parseFloat(document.getElementById("txt_so1_cong").value);
    var so2 = parseFloat(document.getElementById("txt_so2_cong").value);
    var ketqua = so1 + so2;
    document.getElementById("txt_ketquatong").value = ketqua;
    var phepcong = so1 + " + " + so2 + " = " + ketqua;
    document.getElementById("txt_phepcong").textContent = phepcong;
    document.getElementById("txt_phepcong").classList.add("red-text");
}

function tinhhieu() {
    var so1 = parseFloat(document.getElementById("txt_so1_tru").value);
    var so2 = parseFloat(document.getElementById("txt_so2_tru").value);
    var ketqua = so1 - so2;
    document.getElementById("txt_ketquahieu").value = ketqua;
    var phepcong = so1 + " - " + so2 + " = " + ketqua;
    document.getElementById("txt_pheptru").textContent = phepcong;
    document.getElementById("txt_pheptru").classList.add("red-text");
}

function tinhtich() {
    var so1 = parseFloat(document.getElementById("txt_so1_nhan").value);
    var so2 = parseFloat(document.getElementById("txt_so2_nhan").value);
    var ketqua = so1 * so2;
    document.getElementById("txt_ketquanhan").value = ketqua;
    var phepcong = so1 + " * " + so2 + " = " + ketqua;
    document.getElementById("txt_phepnhan").textContent = phepcong;
    document.getElementById("txt_phepnhan").classList.add("red-text");
}

function tinhthuong() {
    var so1 = parseFloat(document.getElementById("txt_so1_chia").value);
    var so2 = parseFloat(document.getElementById("txt_so2_chia").value);
    var ketqua = so1 / so2;
    document.getElementById("txt_ketquachia").value = ketqua;
    var phepcong = so1 + " / " + so2 + " = " + ketqua;
    document.getElementById("txt_phepchia").textContent = phepcong;
    document.getElementById("txt_phepchia").classList.add("red-text");
}