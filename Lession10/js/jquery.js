var listSinhVien = [
  {
    studentId: "SV001",
    studentName: "Nguyễn Văn A",
    age: 20,
    sex: true,
    birthDate: "2002-04-23",
    birthPlace: "HN",
    adress: "25, Vũ Ngọc Phan",
  },
  {
    studentId: "SV002",
    studentName: "Nguyễn Văn B",
    age: 21,
    sex: false,
    birthDate: "2001-09-09",
    birthPlace: "ĐN",
    adress: "1, Ngô Quyền",
  },
  {
    studentId: "SV003",
    studentName: "Nguyễn Văn C",
    age: 19,
    sex: true,
    birthDate: "2003-07-07",
    birthPlace: "HCM",
    adress: "1,Lý Tự Trọng",
  },
  {
    studentId: "SV004",
    studentName: "Nguyễn Văn D",
    age: 29,
    sex: false,
    birthDate: "2005-07-07",
    birthPlace: "HCM",
    adress: "1,Lý Tự Trọng",
  },
];
// var obj_sv = {
//   studentId: "",
//   studentName: "",
//   age: 0,
//   sex: false,
//   birthDate: "",
//   birthPlace: "",
//   adress: "",
// };
// var listSinhVien;

function setData() {
  localStorage.setItem("listSV", [
    {
      studentId: "SV001",
      studentName: "Nguyễn Văn A",
      age: 20,
      sex: true,
      birthDate: "2002-04-23",
      birthPlace: "HN",
      adress: "25, Vũ Ngọc Phan",
    },
    {
      studentId: "SV002",
      studentName: "Nguyễn Văn B",
      age: 21,
      sex: false,
      birthDate: "2001-09-09",
      birthPlace: "ĐN",
      adress: "1, Ngô Quyền",
    },
    {
      studentId: "SV003",
      studentName: "Nguyễn Văn C",
      age: 19,
      sex: true,
      birthDate: "2003-07-07",
      birthPlace: "HCM",
      adress: "1,Lý Tự Trọng",
    },
    {
      studentId: "SV004",
      studentName: "Nguyễn Văn D",
      age: 29,
      sex: false,
      birthDate: "2005-07-07",
      birthPlace: "HCM",
      adress: "1,Lý Tự Trọng",
    },
  ]);
}
function getData() {
  listSinhVien = localStorage.getItem("listSV");
}

function setData(stt, obj) {
  let item = `<tr id="item-${obj.studentId}">
  <td>${stt}</td>
  <td>${obj.studentId}</td>
  <td>${obj.studentName}</td>
  <td>${obj.age}</td>
  <td>${obj.sex == true ? "Nam" : "Nữ"}</td>
  <td>
    <button type="button" class="btn bg-orangered" onclick="xemSinhVien('${
      obj.studentId
    }')">Xem</button>
    <button type="button" class="btn bg-orangered-yellow" onclick="suaSinhVien('${
      obj.studentId
    }')">Sửa</button>
    <button type="button" class="btn bg--blue-green" onclick="xoaSinhVien('${
      obj.studentId
    }')">Xóa</button>
  </td>
</tr>`;
  $("tbody.list-item").append(item);
}

function showSinhVien(list) {
  let count = list.length;
  for (let i = 0; i < count; i++) {
    let obj = list[i];
    setData(i + 1, obj);
  }
}

function formatDateLoad(pattern, strDate) {
  pattern = pattern.toLowerCase();
  var date = strDate.substring(8, 10);
  var month = strDate.substring(5, 7);
  var year = strDate.substring(0, 4);
  var result = "";

  switch (pattern) {
    case "mm/dd/yy":
      result = month + "/" + date + "/" + year.substr(2);
      break;

    case "mm/dd/yyyy":
      result = month + "/" + date + "/" + year;
      break;
    case "dd/mm/yyyy":
      result = date + "/" + month + "/" + year;
      break;

    case "yy/mm/dd":
      result = year.substr(2) + "/" + month + "/" + date;
      break;

    case "yyyy-mm-dd":
      result = year + "-" + month + "-" + date;
      break;

    case "dd-mmm-yy":
      result =
        date +
        "-" +
        monthNames[strDate.getMonth()].substr(3) +
        "-" +
        year.substr(2);
      break;

    case "mmm d, yyyy":
      result = strDate.toLocaleDateString("en-us", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
      break;
  }
  console.log(result);
  return result;
}

function loadFormNhap() {
  $("#ma-sv").val("");
  $("#ten-sv").val("");
  $("#tuoi-sv").val(0);
  $("#gioi-tinh").val("");
  $("#ngay-sinh").val("");
  $("#noi-sinh").val("");
  $("#dia-chi").val("");
  $(".box-right tr span").removeClass("actived");
}

function themSinhVien() {
  loadFormNhap();
  $("#save-sv").css({ display: "block" });
}

function timKiemID(id) {
  let count = listSinhVien.length;
  for (i = 0; i < count; i++) {
    if (id == listSinhVien[i].studentId) {
      let obj = listSinhVien[i];
      return obj;
    }
  }
  return null;
}

function loadSinhVien(stId) {
  $("#ma-sv").val(stId);
  obj_sv = timKiemID(stId);
  $("#ten-sv").val(obj_sv.studentName);
  $("#tuoi-sv").val(obj_sv.age);
  $("#gioi-tinh").val(obj_sv.sex == true ? "Nam" : "Nữ");
  $("#ngay-sinh").val(formatDateLoad("dd/mm/yyyy", obj_sv.birthDate));
  $("#noi-sinh").val(obj_sv.birthPlace);
  $("#dia-chi").val(obj_sv.adress);
  $(".box-right tr span").removeClass("actived");
}

function xemSinhVien(stId) {
  loadSinhVien(stId);
  $(".box-right input").prop("readonly", true);
  $("#save-sv").css({ display: "none" });
}

function suaSinhVien(stId) {
  $(".box-right input").prop("readonly", false);
  loadSinhVien(stId);
  $("#save-sv").css({ display: "block" });
}

function xoaSinhVien(stId) {
  for (i = 0; i < listSinhVien.length; i++) {
    if (stId == listSinhVien[i].studentId) {
      listSinhVien = listSinhVien.filter((x) => x.studentId != stId);
      $("#item-" + stId).remove();
    }
  }
}

$(".box-right input").focusout(function () {
  let val = $(this).val();
  if (val == "") {
    $(this).siblings("span").html("Thông tin không được để trống");
    $(this).siblings("span").addClass("actived");
    return;
  }
  let AttrID = $(this).attr("id");
  let check = true;
  switch (AttrID) {
    case "tuoi-sv":
      debugger;
      check = validateAge(val);
      break;
    case "gioi-tinh":
      check = validateSex(val);
      break;
    case "ngay-sinh":
      check = validateDatetime();
      break;
  }
  if (check) {
    $(this).siblings("span").removeClass("actived");
  } else {
    $(this).siblings("span").addClass("actived");
  }
});

function validateDatetime(strDate) {
  // let count = strDate.length;
  // let date = strDate.substring(8, 10);
  // let month = strDate.substring(5, 7);
  // let year = strDate.substring(0, 4);
  // let kytu5 = strDate.substring(4, 5);
  // let kytu7 = strDate.substring(4, 5);
  // let check = true;
  // if(count != 10 && count !=0){
  //   $("#ngay-sinh").siblings("span").html("Sai thông tin định dạng");
  //   $("#ngay-sinh").siblings("span").addClass("actived");
  //   check = false;
  // }

  // if(kytu5!= "/" && kytu7 != "/"){
  //   check = false;
  // }
  // else if()

  var currVal = strDate;
  if (currVal == "") check = false;

  //Declare Regex
  var rxDatePattern = /^((0?[1-9]|1[012])[/](0?[1-9]|[12][0-9]|3[01])[/](19|20)?[0-9]{2})*$/;
  var dtArray = currVal.match(rxDatePattern); // is format OK?

  if (dtArray == null) check = false;
  if (!check) {
    $("#ngay-sinh").siblings("span").html("Sai thông tin định dạng");
    $("#ngay-sinh").siblings("span").addClass("actived");
    return check;
  }
  //Checks for mm/dd/yyyy format.
  dtDay = dtArray[1];
  dtMonth = dtArray[3];
  dtYear = dtArray[5];

  if (dtMonth < 1 || dtMonth > 12) check = false;
  else if (dtDay < 1 || dtDay > 31) check = false;
  else if (
    (dtMonth == 4 || dtMonth == 6 || dtMonth == 9 || dtMonth == 11) &&
    dtDay == 31
  )
    check = false;
  else if (dtMonth == 2) {
    var isleap = dtYear % 4 == 0 && (dtYear % 100 != 0 || dtYear % 400 == 0);
    if (dtDay > 29 || (dtDay == 29 && !isleap)) check = false;
  }
  if (!check) {
    $("#ngay-sinh").siblings("span").html("Sai thông tin định dạng");
    $("#ngay-sinh").siblings("span").addClass("actived");
    return check;
  }
  return true;
}

function validateSex(value) {
  value = value.toLowerCase();
  let check = value == "nam" || value == "nu" || value == "nữ" ? true : false;
  if (!check) {
    $(this).siblings("span").html("Vui lòng nhập lại giới tính");
  }
  return check;
}




function validateAge(value) {
  let val = parseInt(value);
  if ((val) => 10 && val <= 60) {
    return true;
  } else {
    $(this).siblings("span").html("Vui lòng nhập lại giới tính");
    return false;
  }
}

function checkBlank() {
  let check = true;
  if (formThongTin.masv.value == "") {
    $("#ma-sv").siblings("span").addClass("actived");
    check = false;
  } else {
    $("#ma-sv").siblings("span").removeClass("actived");
  }
  if (formThongTin.tensv.value == "") {
    $("#ten-sv").siblings("span").addClass("actived");
    check = false;
  } else {
    $("#ten-sv").siblings("span").removeClass("actived");
  }
  if (
    formThongTin.tuoisv.value == "" ||
    validateAge(formThongTin.tuoisv.value)
  ) {
    $("#tuoi-sv").siblings("span").addClass("actived");
    check = false;
  } else {
    $("#tuoi-sv").siblings("span").removeClass("actived");
  }
  if (
    formThongTin.gioitinh.value == "" ||
    validateSex(formThongTin.gioitinh.value)
  ) {
    $("#gioi-tinh").siblings("span").addClass("actived");
    check = false;
  } else {
    $("#gioi-tinh").siblings("span").removeClass("actived");
  }
  if (formThongTin.noisinh.value == "") {
    $("#noi-sinh").siblings("span").addClass("actived");
    check = false;
  } else {
    $("#noi-sinh").siblings("span").removeClass("actived");
  }
  if (formThongTin.diachi.value == "") {
    $("#dia-chi").siblings("span").addClass("actived");
    check = false;
  } else {
    $("#dia-chi").siblings("span").removeClass("actived");
  }
  return check;
}

function saveSinhVien() {
  if (checkBlank()) {
    let obj = {
      studentId: formThongTin.masv.value,
      studentName: formThongTin.tensv.value,
      age: parseInt(formThongTin.tuoisv.value),
      sex: formThongTin.gioitinh.value.toLowerCase() == "nam" ? 0 : 1,
      birthDate: formThongTin.ngaysinh.value,
      birthPlace: formThongTin.noisinh.value,
      adress: formThongTin.diachi.value,
    };
    if (timKiemID(formThongTin.masv.value) == null) {
      listSinhVien.push(obj);
      setData(listSinhVien.length, obj);
    } else {
      update(obj);
      $("tbody.list-item").html("");
      showSinhVien(listSinhVien);
    }
    loadFormNhap();
  }
}

function update(obj) {
  let count = listSinhVien.length;
  for (i = 0; i < count; i++) {
    if (obj.studentId == listSinhVien[i].studentId) {
      listSinhVien[i] = obj;
    }
  }
}

showSinhVien(listSinhVien);
