/** Quy đổi tiền
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

// B1
var tyGiaVND= 23500;
var soTienUSD= 50;
var soTienVND =0;
// B2
soTienVND = soTienUSD*tyGiaVND;

// B3
console.log("Tiền đã quy đổi sang VND: "+soTienVND);