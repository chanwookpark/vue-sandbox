function addContact(name, mobile, home = "없음", address = "없음", email = "없음") {
    var str = `name=${name}, mobile=${mobile}, home=${home}, address=${address}, email=${email}`;

    console.log(str);
}

addContact('홍길동', '010-0000-1111');
addContact(('이몽룡', '010-1111-2222', '02-2323-2222', '서울시'));