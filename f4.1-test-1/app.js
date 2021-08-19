// bài 1: Cho 1 chuỗi str_input. Viết chương trình đảo ngược chuỗi và in ra kết quả. (2đ)
// let strInput = prompt('Nhập 1 chuỗi: ');

// let arrInput = strInput.split('');

// for (let i = 0; i < arrInput.length / 2; i++) {
//     console.log(arrInput[i]);
//     let temp = arrInput[i];
//     arrInput[i] = arrInput[arrInput.length - 1 - i];
//     arrInput[arrInput.length - 1 - i] = temp;
// }

// alert(`Chuỗi đảo ngược: ${arrInput.join('')}`);


// bài 2: Viết 1 chương trình với đầu vào là 1 chuỗi ký tự và in ra chuỗi đó với các ký tự đầu của chữ mỗi chữ được viết hoa. (2đ)
// let strInput = prompt('Nhập 1 chuỗi: ');

// let arrInput = strInput.split('');

// console.log(arrInput);

// if (arrInput[0] != ' ') {
//     arrInput[0] = arrInput[0].toUpperCase();
// }

// for (let i = 1; i < arrInput.length; i++) {

//     if (arrInput[i - 1] === ' ' && arrInput[i] != ' ') {
//         arrInput[i] = arrInput[i].toUpperCase();
//     }
// }

// alert(`Chuỗi viết hoa chữ cái đầu: ${arrInput.join('')}`);

// bài 3: Viết một chương trình xóa các phần tử trùng của một mảng và in ra kết quả. (2đ)
// let arr = [1,2,3,3,4,5,4,4,4,5,5];
// let arr = ['one','two','three','one','one','four','five','four','five', 'five'];
// console.log(...arr);

// for (let i = 1; i < arr.length; i++) { 
//     for (let j = 0; j < i; j++) {
//         if (arr[i] === arr[j]) {
//             arr.splice(i, 1);
//             i--;
//             break;
//         }
//     }
// }
// console.log('Mảng sau khi rút gọn:');
// console.log(...arr);

// bài 4: Tạo dữ liệu của 3 nhân viên Future Academy(gồm tên, tuổi, mức lương, chức vụ). 
// Xây dựng chương trình quản lý nhân viên với các chức năng (Read, Create, Update, Delete). (2đ)
// let employees = [
//     { 
//         id: 1,
//         name: 'Linh',
//         age: 20,
//         salary: 2200,
//         job: 'Engineer'
//     },
//     { 
//         id: 2,
//         name: 'Toàn',
//         age: 25,
//         salary: 2500,
//         job: 'Teaching'
//     },
//     { 
//         id: 3,
//         name: 'Thắng',
//         age: 30,
//         salary: 2000,
//         job: 'Assistant'
//     },
// ];

// let isLoop = true;
// while (isLoop) {
//     let userInput = prompt('Nhập yêu cầu C/R/U/D/E (create, read, update, delete, exit): ');

//     switch (userInput.trim().toUpperCase()) {
//         case 'C': {
//             let name = prompt('Enter name: ');
//             let age = Number(prompt('Enter age: '));
//             let salary = Number(prompt('Enter salary: '));
//             let job = prompt('Enter job: ');
//             let id = employees.length + 1;
//             let employee = {
//                 id,
//                 name,
//                 age,
//                 salary,
//                 job,
//             };
//             employees.push(employee);
//             break;
//         }
//         case 'R': {
//             let employeesOutput = '';
//             for(let employee of employees) {
//                 employeesOutput += `id: ${employee.id},    name: ${employee.name},    age: ${employee.age}    salary: ${employee.salary},     job: ${employee.job}\n`;
//             }
//             alert(employeesOutput);
//             break;
//         }
//         case 'U': {
//             let id = Number(prompt('Enter id of employee you want to update: '));
//             let index = -1;
//             for (let employee of employees) {
//                 if (id === employee.id) {
//                     index = employees.indexOf(employee);
//                 }
//             }
//             if (index !== -1) {
//                 let newName = prompt('Enter name : ');
//                 employees[index].name = newName;
//                 let newAge = Number(prompt('Enter age : '));
//                 employees[index].age = newAge;
//                 let newSalary = Number(prompt('Enter salary : '));
//                 employees[index].salary = newSalary;
//                 let newJob = prompt('Enter job : ');
//                 employees[index].job = newJob;
//                 alert('Update successfully.');
//             } else {
//                 alert('Not found this employee.');
//             }
//             break;
//         }
//         case 'D': {
//             let id = Number(prompt('Enter id of employee you want to delete: '));
//             let index = -1;
//             for (let employee of employees) {
//                 if (id === employee.id) {
//                     index = employees.indexOf(employee);
//                 }
//             }
//             if (index !== -1) {
//                 employees.splice(index, 1);
//                 alert('Delete successfully.');
//             } else {
//                 alert('Not found this employee.');
//             }
//             break;
//         }
//         case 'E': {
//             isLoop = false;
//             break;
//         }
//         default: {
//             break;
//         }
//     }
// }

// bài 5: Viết chương trình cho phép người dùng nhập vào ngày tháng năm. (2đ)
// A, Kiểm tra xem ngày tháng năm đó có hợp lệ hay không (1đ)
// B, Nếu ngày tháng năm đó hợp lệ thì đưa thêm thông tin về ngày tiếp theo (1đ)
let day = Number(prompt('Enter day'));
let month = Number(prompt('Enter month'));
let year = Number(prompt('Enter year'));

function isLeapYear(year) {
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);

}

function isValidDate(day, month, year) {

    if (day < 1 || month < 1 || year < 1) {
        return false;
    }

    switch (month) {
        case 2: {
            if (isLeapYear(year)) {
                if (day >= 1 && day <= 29) {
                    return true;
                } else {
                    return false;
                }
            } else {
                if (day >= 1 && day <= 28) {
                    return true;
                } else {
                    return false;
                }
            }
            break;
        }
        case 1: 
        case 3: 
        case 5: 
        case 7: 
        case 8: 
        case 10: 
        case 12: {
            if (day >= 1 && day <= 31) {
                return true;
            } else {
                return false;
            }
            break;
        }
        case 4: 
        case 6: 
        case 9: 
        case 11: {
            if (day >= 1 && day <= 30) {
                return true;
            } else {
                return false;
            }
            break;
        }
        default: 
            return false;
    }
}

if (isValidDate(day, month, year)) {
    alert(`${day}/${month}/${year} là ngày hợp lệ`);
} else {
    alert(`${day}/${month}/${year} là ngày không hợp lệ`);
}
