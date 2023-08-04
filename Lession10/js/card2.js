var listProduct = [
  {
    id: "sp1",
    img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSwqZPt6_1vv0-1d8kinSuJRuMyAv0HPwgP_r_avs09w2Afg7X-lNBqsgkC8IN15x_zxwEfHEHcDxHvZb9OusONCCZQxZNPB8Mn4TiCMu9YjO7lQ3t6Jd9u&usqp=CAc",
    name: "Sản phẩm 1",
    price: 2000000,
    quantity: 1,
    limit: 10,
  },
  {
    id: "sp2",
    img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSwqZPt6_1vv0-1d8kinSuJRuMyAv0HPwgP_r_avs09w2Afg7X-lNBqsgkC8IN15x_zxwEfHEHcDxHvZb9OusONCCZQxZNPB8Mn4TiCMu9YjO7lQ3t6Jd9u&usqp=CAc",
    name: "Sản phẩm 2",
    price: 3000000,
    quantity: 2,
    limit: 3,
  },
  {
    id: "sp3",
    img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSwqZPt6_1vv0-1d8kinSuJRuMyAv0HPwgP_r_avs09w2Afg7X-lNBqsgkC8IN15x_zxwEfHEHcDxHvZb9OusONCCZQxZNPB8Mn4TiCMu9YjO7lQ3t6Jd9u&usqp=CAc",
    name: "Sản phẩm 3",
    price: 4000000,
    quantity: 4,
    limit: 5,
  },
];

function sumPrice(list) {
  var sum = 0;
  for (i = 0; i < list.length; i++) {
    sum += parseInt(list[i].price) * parseInt(list[i].quantity);
  }
  $(".total-price").text(Intl.NumberFormat("en-US").format(sum));
}

// $('.item').each(
//     function(){
//         let price = $('.price').attr("data-price");
//         let quantity = $('.quantity-' + val).text();
//         return parseInt(price) * parseInt(quantity);
//     }
// )

function setProductItem(obj) {
  let item = `<div class="item border-1" id ="item-${obj.id}">
                <div class="d-flex justify-between">
                    <div class="image-item w-23">
                        <img class="" src="${obj.img}" alt="">
                    </div>
                    <div class="title-item w-23">
                        <h3>${obj.name}</h3>
                    </div>
                    <div class="price-item w-23">
                        <span id="product-price-${obj.id}" data-price="${
    obj.price
  }">${Intl.NumberFormat("en-US").format(obj.price)}</span><span> VNĐ</span>
                    </div>
                    <div class="quantity-item w-23">
                        <button type="button" class="btn-sub sub-${
                          obj.id
                        }" >-</button>
                            <span id="product-quantity-${obj.id}">${
    obj.quantity
  }</span>
                        <button type="button" class="btn-add add-${
                          obj.id
                        }">+</button>
                    </div>
                    <div class="del-pro">
                    <button type="button" class="btn-del" id="del-pro-${
                      obj.id
                    }" ><span><i class="fa-solid fa-trash-can"></i></span></button>
                    </div>
                </div>
            </div>`;
  $(".list-item").append(item);
}

function showListCard(list) {
  let count = list.length;
  // $('.new-page-conten .list-news').html('');
  for (let i = 0; i < count; i++) {
    let obj = list[i];
    setProductItem(obj);
  }
}

showListCard(listProduct);
sumPrice(listProduct);

function changeQuantity(id, phepTinh) {
  let count = listProduct.length;
  for (let i = 0; i < count; i++) {
    if (id == listProduct[i].id) {
      let quantity = listProduct[i].quantity;
      if (phepTinh == "-") {
        quantity = parseInt(quantity) < 2 ? 1 : parseInt(quantity) - 1;
      } else {
        if (quantity < listProduct[i].limit) {
          quantity = parseInt(quantity) + 1;
        } 
      }
      listProduct[i].quantity = quantity;
      return quantity;
    }
  }
}

$(".btn-sub").click(function () {  
  let name = $(this).siblings("span").attr("id");
  let id = name.substring("product-quantity-".length, name.length);
  let quantity =changeQuantity(id, "-");
  $(this).siblings("span").text(quantity);
  sumPrice(listProduct);
});

$(".btn-add").click(function () {
  let name = $(this).siblings("span").attr("id");
  let id = name.substring("product-quantity-".length, name.length);
  let quantity =changeQuantity(id, "+");
  $(this).siblings("span").text(quantity);
  sumPrice(listProduct);
});
$(".btn-del").click(function () {
  let name = $(this).attr("id");
  let id = name.substring("del-pro-".length, name.length);
  listProduct = listProduct.filter((x) => x.id != id);
  $("#item-" + id).remove();
  sumPrice(listProduct);
});

// btvn: Xây dựng giỏ hàng dựa theo data có sẵn
// chức năng: tính tổng sản phẩm, tăng giảm số lượng theo từng sản phẩm
// chặn trên(không đc thêm quá số lượng sản phẩm)
// khi hiển thị tổng tiền: format giá về dạng 1.000.000
// xoá sản phẩm khỏi giỏ hàng: dùng hàm removeHtml('')
// đảm bảo sau khi tính tiền thì giá phải khớp với giao diện hiện tại
