/** Tính tiền lương nhân viên - BÀI 1
 * Khôi 1: Input
 * luong1Ngay, soNgayLam
 *  
 * Khối 2: Các bước xử lý
 *  B1: Khai báo biến:
 * luong1Ngay = 100000;
 * soNgayLam
 *  B2: Lập công thức tính toán 
 *  tienLuong = luong1Ngay * soNgayLam
 * 
 *  B3: hiển thị kết quả => console.log
 * 
 * Khôi 3: Output
 * tienLuong
 * 
 */

function sum1(){

var luong1Ngay = 100000;
var soNgayLam = Number(document.getElementById("songay").value);
var tienLuong = 0;

tienLuong = luong1Ngay * soNgayLam;

console.log("Tiền lương nhân viên: " + tienLuong);
}
document.getElementById("tienluong").onclick = sum1


/** Quy đổi tiền - BÀI 3
 * Khôi 1: Input
 * soTienUSD
 * tyGiaVND
 * Khối 2: Các bước xử lý
 *  B1: Khai báo biến:
 * tyGiaUSD, soTienUSD, tyGiaVND
 * 
 *  B2: Lập công thức tính toán 
 *  soTienVND = soTienUSD*tyGiaVND;
 * 
 *  B3: hiển thị kết quả => console.log
 * 
 * Khôi 3: Output
 * soTienVND
 * 
 */
function sum3(){
var tyGiaVND= 23500;
var soTienUSD= Number(document.getElementById("soTienCanDoi").value);
var soTienVND = 0;

soTienVND = soTienUSD*tyGiaVND;

console.log("Tiền đã quy đổi sang VND: "+soTienVND);
}
document.getElementById("soTienVND").onclick = sum3


/** Tính diện tích, chu vi hình chữ nhật - BÀI 4
 * Khôi 1: Input
 * chieuDai, chieuRong
 *  
 * Khối 2: Các bước xử lý
 *  B1: Khai báo biến:
 * chieuDai, chieuRong
 *  B2: Lập công thức tính toán 
 *  dienTich = chieuDai * chieuRong;
 *  chuVi = (chieuDai + chieuRong)*2;
 *  B3: hiển thị kết quả =>  console.log
 * 
 * Khôi 3: Output
 * dienTich, chuVi
 * 
 */

function sum4DT(){
var chieuDai = Number(document.getElementById("chieuDai").value);
var chieuRong = Number(document.getElementById("chieuRong").value);
var dienTich = 0;
dienTich = chieuDai * chieuRong;

console.log("Diện tích: "+dienTich);
}
document.getElementById("dientich").onclick = sum4DT;

function sum4CV(){
var chieuDai = Number(document.getElementById("chieuDai").value);
var chieuRong = Number(document.getElementById("chieuRong").value);
var chuVi = 0;
chuVi = (chieuDai + chieuRong)*2;

console.log("Chu Vi: "+chuVi);
}
document.getElementById("chuvi").onclick = sum4CV;  





/** Tính tổng 2 ký số - BÀI 5
 * Khôi 1: Input
 * num (giả sử 49)
 *  
 * Khối 2: Các bước xử lý
 *  B1: Khai báo biến
 *  num, ten, unit, total
 *  B2: Lập công thức tính toán 
 * 
 *  Lấy số hàng chục: ten = Math.floor(num/10) => 4
 *  Lấy số hàng đơn vị: unit = num % 10
 * 
 *  B3: hiển thị kết quả =>  console.log
 * 
 * Khôi 3: Output
 * total = ten + unit;
 * 
 */

function sum5(){
var num = Number(document.getElementById("kyso").value);
var ten = 0;
var unit = 0;
var total = 0;

ten = Math.floor(num/10);
unit = num % 10;
total = ten + unit;
console.log("Tổng ký số: "+total);
}
document.getElementById("tongkyso").onclick = sum5;  
