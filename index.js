// Bài tập tổng hợp ôn với mảng
// Dựa trên layout và đề được cung cấp ở slice số 39, các bạn sẽ hoàn thành các yêu cầu 1,2,3,4,5,7,9,10
var arrSoN = [3, 5, -3, 7, 22, 11, 1, 2.3, 4]

// Đầu tiên dom tới nút thêm số N và xử lí các hành động thêm dữ liệu vào mảng
function themSoNVaoMang() {
    console.log('hello');
    // xử lí lấy dữ liệu người dùng nhập
    var soN = document.getElementById('txt-soN').value * 1;
    arrSoN.push(soN);
    // console.log(arrSoN);
    document.querySelector('.render_arr').innerHTML = arrSoN;
}

document.querySelector('.btn-success').onclick = themSoNVaoMang;
// bài 1
function tinhTongSoDuong() {
    // vòng lặp để duyệt qua từng phần tử có trong mảng
    var tong = 0;
    for (var i = 0; i < arrSoN.length; i++) {
        // kiểm tra các phần tử xem phần tử nào lớn hơn 0
        if (arrSoN[i] > 0) {
            tong += arrSoN[i];
        }
    }
    // console.log(tong);
    document.getElementById('kq1').innerHTML = tong
}
document.getElementById('btn1').onclick = tinhTongSoDuong;
// bài 2
function demSoDuong() {
    var count = 0;
    for (var i = 0; i < arrSoN.length; i++) {
        // kiểm tra các phần tử xem phần tử nào lớn hơn 0
        if (arrSoN[i] > 0) {
            count++;
        }
    }
    document.getElementById('kq2').innerHTML = count
}
document.getElementById('btn2').onclick = demSoDuong;
// bài 3
function timSoNhoNhat() {
    // [4,7,9,11,31],var min = arrSoN[i](4)
    var min = arrSoN[0];
    for (var i = 1; i < arrSoN.length; i++) {
        if (arrSoN[i] < min) {
            min = arrSoN[i];
        }
    }
    // console.log(min);
    document.getElementById('kq3').innerHTML = min

}
document.getElementById('btn3').onclick = timSoNhoNhat;
// bài 4
function timSoDuongNhoNhat() {
    var arrMinDuong = []
    // for (var i = 1; i < arrSoN.length; i++) {

    //     // if (arrSoN[i] < min && arrSoN[i] > 0) {
    //     //     min = arrSoN[i]
    //     // }
    // }
    for (var i = 0; i < arrSoN.length; i++) {
        if (arrSoN[i] > 0) {
            arrMinDuong.push(arrSoN[i])
        }

    }
    console.log(arrMinDuong);
    if (arrMinDuong.length > 0) {
        var min = arrMinDuong[0]

        for (var j = 0; j < arrMinDuong.length; j++) {
            if (arrMinDuong[j] < min) {
                min = arrMinDuong[j]
            }
        }
    } else {
        document.getElementById('kq4').innerHTML = "Không có số dương"

    }
    // sort theo thứ tự tăng dần, nhưng nếu số đầu số âm thì khi chạy vòng lặp thì sẽ không so sánh được, 
    // hoặc nếu cho min hằng số thì nếu mảng không có số mà mảng có thì vô lí
    // arrSoN.sort(CompareFunction)
    // var min = 0
    // for (var i = 1; i < arrSoN.length; i++) {
    //     if (arrSoN[i] < min && arrSoN[i] > 0) {
    //         min = arrSoN[i]
    //     }
    // }
    document.getElementById('kq4').innerHTML = `Số dương nhỏ nhất: ${min}`
}
// function CompareFunction(a, b) {
//     return a - b
// }
document.getElementById('btn4').onclick = timSoDuongNhoNhat;
// bài 5
function timSoChanCuoiCung() {
    var soChan = -1;
    for (var i = arrSoN.length - 1; i >= 0; i--) {
        if (arrSoN[i] % 2 == 0) {
            soChan = arrSoN[i];
            // break giúp thoát khỏi vòng lặp
            break;
        }
    }
    // console.log(soChan);
    document.getElementById('kq5').innerHTML = soChan

}
document.getElementById('btn5').onclick = timSoChanCuoiCung;

// bài 7
function numberAscend() {
    let arrAscend = []
    arrAscend = arrSoN.sort((a, b) => a - b)
    // console.log(arrAscend);
    document.getElementById('kq7').innerHTML = arrAscend

}
document.getElementById('btn7').onclick = numberAscend;

// bài 9 
function demSoNguyen() {
    var count = 0;
    for (let index = 0; index < arrSoN.length; index++) {
        var soNguyen = Number.isInteger(arrSoN[index]);
        if (soNguyen) count++
    }
    document.getElementById('kq9').innerHTML = count
}
document.getElementById('btn9').onclick = demSoNguyen;

// bài 10
function demSoDuongAm() {
    var countDuong = 0;
    var countAm = 0;
    for (let index = 0; index < arrSoN.length; index++) {
        if (arrSoN[index] > 0) { countDuong++ }
        else { countAm++ }
    }
    if (countDuong > countAm) { document.getElementById("kq10").innerHTML = `Số dương > Số âm ` }
    else if (countAm > countDuong) { document.getElementById("kq10").innerHTML = `Số âm > Số dương ` }
    else { document.getElementById("kq10").innerHTML = `Số dương = Số âm ` }
}
document.getElementById('btn10').onclick = demSoDuongAm;

// với mỗi câu hỏi, các bạn sẽ qua bên layout và tạo một nút giúp cho người dùng khi đã thêm đủ các phần tử vào mảng thì sẽ bắt đầu bấm vào các nút để trả về kết quả
