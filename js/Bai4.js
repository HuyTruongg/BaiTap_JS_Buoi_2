/** Tính diện tích, chu vi hình chữ nhật
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

// B1
var chieuDai = 15;
var chieuRong = 12;
var dienTich = 0;
var chuVi = 0;
// B2
dienTich = chieuDai * chieuRong;
chuVi = (chieuDai + chieuRong)*2;

// B3
console.log("Diện tích: "+dienTich);
console.log("Chu Vi: "+chuVi);