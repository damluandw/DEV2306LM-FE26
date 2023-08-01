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
];

function sumPrice(list) {
  var sum = 0;
  for (i = 0; i < list.length; i++) {
    sum += parseInt(list[i].price) * parseInt(list[i].quantity);
  }
  $(".total-price").text(Intl.NumberFormat('en-US').format(sum));
}



// $('.item').each(
//     function(){
//         let price = $('.price').attr("data-price");
//         let quantity = $('.quantity-' + val).text();
//         return parseInt(price) * parseInt(quantity);
//     }
// )



function setProductItem(obj) {
  let item = `<div class="item border-1">
                <div class="d-flex justify-between">
                    <div class="image-item w-23">
                        <img class="" src="${obj.img}" alt="">
                    </div>
                    <div class="title-item w-23">
                        <h3>${obj.name}</h3>
                    </div>
                    <div class="price-item w-23">
                        <span id="product-price-${obj.id}" data-price="${obj.price}">${Intl.NumberFormat('en-US').format(obj.price)}</span><span> VNĐ</span>
                    </div>
                    <div class="quantity-item w-23">
                        <button type="button" class="btn-sub sub-${obj.id}" onclick ="subProduct(${obj.id})">-</button>
                        <span id="product-quantity-${obj.id}">${obj.quantity}</span>
                        <button type="button" class="btn-add add-${obj.id} onclick ="addProduct(${obj.id})"">+</button>
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
// function subProduct(id) {
//     var number = listProduct[id].quantity-1;
//     $('product-quantity-'+id).html(number);
// }

// function addProduct(list) {
//     let quantity =$(this).siblings('span').text();
//     quantity= (parseInt(quantity) <1)? parseInt(quantity):parseInt(quantity)-1;
//     $(this).siblings('span').text(quantity);
// }
// function changeQuantity(id){

// }

showListCard(listProduct);
sumPrice(listProduct);

$('.btn-add').click(function(){
    var quantity = $(this).siblings('span').text();
    quantity = parseInt(quantity) + 1;
    $(this).siblings('span').text(quantity);
    sumPrice();
})
$('.btn-sub').click(function(){
    var quantity = $(this).siblings('span').text(); // quantity = 0
    var name = $(this).siblings('span').id();
    console.log(name);
    quantity = (parseInt(quantity) < 1) ? 0 : (parseInt(quantity) - 1) ;
    $(this).siblings('span').text(quantity);
    sumPrice();
})

// btvn: Xây dựng giỏ hàng dựa theo data có sẵn
// chức năng: tính tổng sản phẩm, tăng giảm số lượng theo từng sản phẩm
// chặn trên(không đc thêm quá số lượng sản phẩm)
// khi hiển thị tổng tiền: format giá về dạng 1.000.000
// xoá sản phẩm khỏi giỏ hàng: dùng hàm removeHtml('')
// đảm bảo sau khi tính tiền thì giá phải khớp với giao diện hiện tại
