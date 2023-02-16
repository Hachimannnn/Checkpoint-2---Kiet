const menu = ["rau xào" , "thịt luộc" , "gà rán"];
window.localStorage.setItem('menu', JSON.stringify(menu));

let menu_after = JSON.parse(localStorage.getItem("menu"));

let choose = prompt("Nhập 1 trong 4 kí tự: C,R,U,D");
switch(choose) {
    case "C":
        let C = prompt("Mời người dùng nhập vào món ăn muốn thêm vào menu");
        if(C != null){
            menu_after.push(C);
            localStorage.setItem("menu", JSON.stringify(menu_after));
        }
        else {
            break;
        }
    break;
    case "R":
        let R = menu.join();
        alert(R);
    break;
    case "U":
        let U = prompt("Mời người dùng nhập vào tên món muốn update");
        if(U != null){
            menu_after.splice(menu_after.indexOf(U), 1);
            let U1 = prompt("Mời người dùng nhập vào tên giống món ăn mới");
                if(U1 != null){
                    menu_after.push(U1);
                    localStorage.setItem("menu", JSON.stringify(menu_after));
                }
                else {
                    break;
                }
        }
        else {
            break;
        }
    break;
    case "D":
        let D = prompt("Mời người dùng nhập vào tên món muốn Delete");
        if(D != null) {
            menu_after.splice(menu_after.indexOf(D), 1);
            localStorage.setItem("menu", JSON.stringify(menu_after));
        }
        else {
            break;
        }
    break;
    default:
        break;
}
