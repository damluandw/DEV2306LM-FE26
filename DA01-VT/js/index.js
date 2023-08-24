var listProduct = [
  {
    id: "SP01",
    img: "../imgs/sp/sp-kimtien-1.png",
    proName: "Cây Kim Tiền",
    price: "18100000",
    limit: 5,
    proDetail:
      "Cây Vạn Niên Thanh có ý nghĩa phong thủy tăng tài vận cho gia chủ. Người ta quan niệm, trồng vạn niên thanh trong nhà ngày tết mang đến sự sung túc",
  },
  {
    id: "SP02",
    img: "../imgs/sp/sp-kimtien-2.png",
    proName: "Cây Kim Tiền 2",
    price: "18100000",
    limit: 5,
    proDetail:
      "Cây Vạn Niên Thanh có ý nghĩa phong thủy tăng tài vận cho gia chủ. Người ta quan niệm, trồng vạn niên thanh trong nhà ngày tết mang đến sự sung túc",
  },
  {
    id: "SP03",
    img: "../imgs/sp/sp-truong-xuan.png",
    proName: "Cây Trường Xuân",
    price: "18100000",
    limit: 5,
    proDetail:
      "Cây Vạn Niên Thanh có ý nghĩa phong thủy tăng tài vận cho gia chủ. Người ta quan niệm, trồng vạn niên thanh trong nhà ngày tết mang đến sự sung túc",
  },
  {
    id: "SP04",
    img: "../imgs/sp/sp-cay-canh-dep.png",
    proName: "Cây Cảnh Đẹp",
    price: "18100000",
    limit: 5,
    proDetail:
      "Cây Vạn Niên Thanh có ý nghĩa phong thủy tăng tài vận cho gia chủ. Người ta quan niệm, trồng vạn niên thanh trong nhà ngày tết mang đến sự sung túc",
  },
  {
    id: "SP05",
    img: "../imgs/sp/sp-cay-canh-dep.png",
    proName: "Cây Cảnh Đẹp A",
    price: "18100000",
    limit: 5,
    proDetail:
      "Cây Vạn Niên Thanh có ý nghĩa phong thủy tăng tài vận cho gia chủ. Người ta quan niệm, trồng vạn niên thanh trong nhà ngày tết mang đến sự sung túc",
  },
  {
    id: "SP06",
    img: "../imgs/sp/sp-truong-xuan.png",
    proName: "Cây Trường Xuân 2",
    price: "18100000",
    limit: 5,
    proDetail:
      "Cây Vạn Niên Thanh có ý nghĩa phong thủy tăng tài vận cho gia chủ. Người ta quan niệm, trồng vạn niên thanh trong nhà ngày tết mang đến sự sung túc",
  },
  {
    id: "SP07",
    img: "../imgs/sp/sp-kimtien-1.png",
    proName: "Cây Kim Tiền X",
    price: "18100000",
    limit: 5,
    proDetail:
      "Cây Vạn Niên Thanh có ý nghĩa phong thủy tăng tài vận cho gia chủ. Người ta quan niệm, trồng vạn niên thanh trong nhà ngày tết mang đến sự sung túc",
  },
  {
    id: "SP08",
    img: "../imgs/sp/sp-kimtien-2.png",
    proName: "Cây Kim Tiền Y",
    price: "18100000",
    limit: 5,
    proDetail:
      "Cây Vạn Niên Thanh có ý nghĩa phong thủy tăng tài vận cho gia chủ. Người ta quan niệm, trồng vạn niên thanh trong nhà ngày tết mang đến sự sung túc",
  },
];

var listCartSet = [
  {
    id: "SP01",
    img: "../imgs/sp/sp-kimtien-1.png",
    proName: "Cây Kim Tiền",
    price: "18100000",
    quantity: 1,
    limit: 5,
    proDetail:
      "Cây Vạn Niên Thanh có ý nghĩa phong thủy tăng tài vận cho gia chủ. Người ta quan niệm, trồng vạn niên thanh trong nhà ngày tết mang đến sự sung túc",
  },
];
var listCart ;
function setLocal(key, value) {
    localStorage.removeItem(key);
    if (!key || !value) {return;}

    if (typeof value === "object") {
      value = JSON.stringify(value);
    }
    localStorage.setItem(key, value);
}


function getLocal(key){
    listCart = JSON.parse(localStorage.getItem(key));
}
// setLocal("listCarts",listCartSet);
getLocal("listCarts");

function setProductItem(obj, idHTML) {
  let item = `<div class="col-xl-3 col-sm-4 col-6 box-product">
    <div class="item-product">
      <div class="item-top">
        <div class="img-product">
          <img
            class="w-100"
            src="${obj.img}"
            alt="${obj.img}"
          />
        </div>
        <div class="bg-product-hover"></div>
        <div class="product-hover">
          <div class="product-description">
            <p class="product-detail cl-white">
            ${obj.proDetail}
            </p>
            <div
              class="btn-product d-flex justify-content-between"
            >
              <a href="product-detail.html"
                ><button class="btn btn-detail">
                  Chi Tiết
                </button></a
              >
              <a href="#"
                ><button class="btn btn-buy" data-id ="${
                  obj.id
                }" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Mua Ngay</button></a
              >
            </div>
          </div>
        </div>
      </div>
      <div class="title-bottom d-flex justify-center flex-swap">
        <a href="#" class="title-product-item align-center w-100"
          ><h4>${obj.proName}</h4></a
        >
        <span class="product-price cl-green align-center w-100"
          >${Intl.NumberFormat("en-US").format(obj.price)}</span
        >
      </div>
    </div>
  </div>`;
  $(idHTML).append(item);
}

function showListPro(list, idHTML) {
  let count = list.length;
  for (let i = 0; i < count; i++) {
    let obj = list[i];
    setProductItem(obj, idHTML);
  }
}
showListPro(listProduct, "#list-product-hot");

function setCartItem(obj) {
  let item = `<div class="item-cart" id ="item-cart-${obj.id}">
                  <div class="d-flex justify-between">
                      <div class="image-item-cart margin-auto">
                          <img class="w-100" src="${obj.img}" alt="">
                      </div>
                      <div class="title-item-cart margin-auto">
                          <h3>${obj.proName}</h3>
                      </div>
                      <div class="price-item-cart margin-auto">
                          <span id="cart-price-${obj.id}" data-price="${
    obj.price
  }">${Intl.NumberFormat("en-US").format(obj.price)}</span><span> VNĐ</span>
                      </div>
                      <div class="quantity-item-cart margin-auto">
                          <button type="button" class="btn-sub btn sub-${
                            obj.id
                          }" data-id="${obj.id}" onclick="subCart('${
    obj.id
  }')">-</button>
                              <span id="cart-quantity-${obj.id}">${
    obj.quantity
  }</span>
                          <button type="button" class="btn-add btn add-${
                            obj.id
                          }"
                          data-id="${obj.id}" onclick="addCart('${
    obj.id
  }')">+</button>
                      </div>
                      <div class="del-cart margin-auto">
                      <button  type="button" class="btn-del btn" id="del-cart-${
                        obj.id
                      }" data-id="${obj.id}" onclick="delCart('${
    obj.id
  }')"><span><i class="fa-solid fa-trash-can"></i></span></button>
                      </div>
                  </div>
              </div>`;
  $(".modal-body").append(item);
}
function showlistCart(list) {
  let count = list.length;
  for (let i = 0; i < count; i++) {
    let obj = list[i];
    setCartItem(obj);
  }
}
showlistCart(listCart);

function changeQuantity(id, phepTinh) {
  let count = listCart.length;
  for (let i = 0; i < count; i++) {
    if (id == listCart[i].id) {
      let quantity = listCart[i].quantity;
      if (phepTinh == "-") {
        quantity = parseInt(quantity) < 2 ? 1 : parseInt(quantity) - 1;
      } else {
        if (quantity < listCart[i].limit) {
          quantity = parseInt(quantity) + 1;
        }
      }
      listCart[i].quantity = quantity;
      setLocal("listCarts",listCart);
      return quantity;
    }
  } 
}

function subCart(id) {
  let quantity = changeQuantity(id, "-");
  $("#cart-quantity-"+id).text(quantity);
}

function addCart(id) {
  let quantity = changeQuantity(id, "+");
  $("#cart-quantity-"+id).text(quantity);

  // sumPrice(listCart);
}

function delCart(id) {
  listCart = listCart.filter((x) => x.id != id);
  $("#item-cart-" + id).remove();
  setLocal("listCarts",listCart);
  // sumPrice(listCart);
}
// $(".btn-sub").click(function () {
//   let id = $(this).attr("data-id");
//   let quantity = changeQuantity(id, "-");
//   $(this).siblings("span").text(quantity);
// });

$(".btn-buy").click(function () {
  let id = $(this).attr("data-id");
  let objPro = searchPro(listProduct, id);
  let objCart = searchPro(listCart, id);
  if (objCart == null) {
    objPro.quantity = 1;
    objCart = objPro;
    setLocal("listCarts",listCart);
    setCartItem(objCart);
    listCart.push(objCart);
  } else {
    alert("Sản phẩm đã có trong giỏ hàng");
  }
});

function searchPro(list, id) {
  var count = list.length;
  for (let i = 0; i < count; i++) {
    let obj = list[i];
    if (id == obj.id) {
      return obj;
    }
  }
}

