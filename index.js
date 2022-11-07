document.getElementById("btnTax").onclick = function(){
    var name = document.getElementById("Name2").value;
    var year = document.getElementById("Salary").value - 4e6 -  16e5 * document.getElementById("User").value;
    var total = 0;


    if( year > 0 && year <= 6e7){
        total = (0.5 * year);
    }else if(year > 6e7 && year <= 12e7)
     {
       total = 0.1 * year;
    }else if(year > 12e7 && year <=21e7){
        total =  0.15 * year;
    }else if(year > 21e7 && year <= 384e6 ){
        total = 0.2 * year;
    }else if(year > 384e6 && year <= 624e6 ){
        total = 0.25 * year;
    }else if(year > 624e6 && year <= 96e7){
        total = 0.3 * year;
    }else if(year > 96e7){
        total = 0.35 * year;
    }else{
        alert("Số tiền thu nhập không hợp lệ");
    }
    (total = new Intl.NumberFormat("vn-VN").format(total)),
    total = "Họ tên: " + name + "; Tiền thuế thu nhập cá nhân: " + total + " VND";

    document.getElementById("txtTax").innerHTML = total;

}