/** Tính tổng 2 ký số
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

// B1
var num = 49;
var ten = 0;
var unit = 0;
var total = 0;

// B2
ten = Math.floor(num/10);
unit = num % 10;
total = ten + unit;
// B3 
console.log("Tổng ký số: "+total);