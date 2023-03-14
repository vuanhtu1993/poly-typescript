var sinhvien = {
    name: "Đăng Tuấn",
    grade: 5,
    hometown: "Hà Nội",
    printInfo: function () {
        return "Sinh vi\u00EAn ".concat(this.name, " qu\u00EA qu\u00E1n: ").concat(this.hometown);
    }
};
var sinhvien2 = {
    name: "Anh Dũng",
    grade: 5,
    hometown: "Bắc Giang",
    printInfo: function () {
        return "";
    }
};
// Differences type aliases / interface
// interface User {
//     username: string,
//     password: string,
//     email: string
// }
var LEVEL;
(function (LEVEL) {
    LEVEL[LEVEL["STAFF"] = 0] = "STAFF";
    LEVEL[LEVEL["MANAGER"] = 1] = "MANAGER";
})(LEVEL || (LEVEL = {}));
