function setMainProImg(obj, idHTML) {
  let item = `<div class="single-item">
                    <img
                      class="img-product"
                      src="${obj.img}"
                      alt="${obj.img}"
                    />
               </div>`;
  $(idHTML).append(item);
}

function setMainProRight(obj) {
  let item = `<div class="name-product box-1">
                <h2>${obj.proName}</h2>
              </div>
              <ul class="box-2">
                <li><span class="fw-bold">Mã sản phẩm:</span> SP01</li>
                <li><span class="fw-bold">Tình trạng:</span> Còn hàng</li>
              </ul>
              <div class="box-3">
                <div class="d-flex">
                  <div class="col-3">Giá bán:</div>
                  <div class="col-2">Số lượng:</div>
                </div>
                <div class="d-flex">
                  <div class="col-3 fw-bold product-price">${Intl.NumberFormat("en-US").format(obj.price)} đ</div>
                  <div class="col-2 fw-bold product-quatity">
                    <input type="number" value="01" />
                  </div>
                  <div class="col-3 fw-bold">
                    <button class="btn bg-green btn-pro-buy btn-buy"
                    data-id ="${
                      obj.id
                    }" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                      <span
                        ><i class="fa-solid fa-cart-shopping cl-white"></i></span
                      ><span class="cl-white" >ĐẶT HÀNG</span>
                    </button>
                  </div>
                </div>
              </div>
              <div class="product-description-short box-4">
                <span class="fw-bold">MÔ TẢ NGẮN</span><br />
                <p class="product-description">
                ${obj.proDetail}
                </p>
              </div>
              <div class="box-5 product-tags">
                <span class="fw-bold">Tags:</span>
                <a href="#">cây bím tóc</a>
                <a href="#">cây kim ngân</a>
                <a href="#">giá kim ngân</a>
                <a href="#">kim ngan</a>
              </div>
              <div class="box-6 d-flex">
                <button class="btn btn-like">
                  <span><i class="fa-solid fa-thumbs-up cl-white"></i></span>
                  <span class="tilte-btn cl-white">Thích 251</span>
                </button>
                <button class="btn tilte-btn btn-share">
                  <span class="tilte-btn cl-white">Chia sẻ</span>
                </button>
                <button class="btn btn-tweet">
                  <span><i class="fa-brands fa-twitter cl-white"></i></span>
                  <span class="cl-white">Tweet</span>
                </button>
                <button class="btn btn-google-plus">
                  <span><i class="fa-brands fa-google-plus-g"></i></span>
                </button>
              </div>`;
  $(".product-right").append(item);
}

var objProMain = {
  id: "SP01",
  imgs: [
    { img: "../imgs/sp/sp-kimtien-1.png" },
    { img: "../imgs/sp/sp-kimtien-2.png" },
    { img: "../imgs/sp/sp-kimtien-1.png" },
    { img: "../imgs/sp/sp-kimtien-2.png" },
    { img: "../imgs/sp/sp-kimtien-1.png" },
    { img: "../imgs/sp/sp-kimtien-1.png" },
  ],
  proName: "Cây Kim Tiền",
  price: "18100000",
  limit: 5,
  proDetail:
    "Cây Vạn Niên Thanh có ý nghĩa phong thủy tăng tài vận cho gia chủ. Người ta quan niệm, trồng vạn niên thanh trong nhà ngày tết mang đến sự sung túc. Cây Vạn Niên Thanh có ý nghĩa phong thủy tăng tài vận cho gia chủ. Người ta quan niệm, trồng vạn niên thanh trong nhà ngày tết mang đến sự sung túc",
};

function showMainProImgs(idHTML) {
  let count = objProMain.imgs.length;
  for (let i = 0; i < count; i++) {
    let obj = objProMain.imgs[i];
    setMainProImg(obj, idHTML);
  }
}

function showMainPro() {
  showMainProImgs(".img-product-top");
  showMainProImgs(".img-product-bottom");
  setMainProRight(objProMain);
}

showMainPro();

$(".slider-for").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: ".slider-nav",
});
$(".slider-nav").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: ".slider-for",
  dots: false,
  arrows: false,
  centerMode: true,
  focusOnSelect: true,
});

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
  {
    id: "SP09",
    img: "../imgs/sp/sp-kimtien-1.png",
    proName: "Cây Kim Tiền C",
    price: "18100000",
    limit: 5,
    proDetail:
      "Cây Vạn Niên Thanh có ý nghĩa phong thủy tăng tài vận cho gia chủ. Người ta quan niệm, trồng vạn niên thanh trong nhà ngày tết mang đến sự sung túc",
  },
  {
    id: "SP010",
    img: "../imgs/sp/sp-kimtien-2.png",
    proName: "Cây Kim Tiền 2D",
    price: "18100000",
    limit: 5,
    proDetail:
      "Cây Vạn Niên Thanh có ý nghĩa phong thủy tăng tài vận cho gia chủ. Người ta quan niệm, trồng vạn niên thanh trong nhà ngày tết mang đến sự sung túc",
  },
  {
    id: "SP011",
    img: "../imgs/sp/sp-truong-xuan.png",
    proName: "Cây Trường XuânE",
    price: "18100000",
    limit: 5,
    proDetail:
      "Cây Vạn Niên Thanh có ý nghĩa phong thủy tăng tài vận cho gia chủ. Người ta quan niệm, trồng vạn niên thanh trong nhà ngày tết mang đến sự sung túc",
  },
  {
    id: "SP012",
    img: "../imgs/sp/sp-cay-canh-dep.png",
    proName: "Cây Cảnh Đẹp F",
    price: "18100000",
    limit: 5,
    proDetail:
      "Cây Vạn Niên Thanh có ý nghĩa phong thủy tăng tài vận cho gia chủ. Người ta quan niệm, trồng vạn niên thanh trong nhà ngày tết mang đến sự sung túc",
  },
  {
    id: "SP013",
    img: "../imgs/sp/sp-cay-canh-dep.png",
    proName: "Cây Cảnh Đẹp A",
    price: "18100000",
    limit: 5,
    proDetail:
      "Cây Vạn Niên Thanh có ý nghĩa phong thủy tăng tài vận cho gia chủ. Người ta quan niệm, trồng vạn niên thanh trong nhà ngày tết mang đến sự sung túc",
  },
  {
    id: "SP014",
    img: "../imgs/sp/sp-truong-xuan.png",
    proName: "Cây Trường Xuân 2 G",
    price: "18100000",
    limit: 5,
    proDetail:
      "Cây Vạn Niên Thanh có ý nghĩa phong thủy tăng tài vận cho gia chủ. Người ta quan niệm, trồng vạn niên thanh trong nhà ngày tết mang đến sự sung túc",
  },
  {
    id: "SP015",
    img: "../imgs/sp/sp-kimtien-1.png",
    proName: "Cây Kim Tiền X",
    price: "18100000",
    limit: 5,
    proDetail:
      "Cây Vạn Niên Thanh có ý nghĩa phong thủy tăng tài vận cho gia chủ. Người ta quan niệm, trồng vạn niên thanh trong nhà ngày tết mang đến sự sung túc",
  },
  {
    id: "SP016",
    img: "../imgs/sp/sp-kimtien-2.png",
    proName: "Cây Kim Tiền Y",
    price: "18100000",
    limit: 5,
    proDetail:
      "Cây Vạn Niên Thanh có ý nghĩa phong thủy tăng tài vận cho gia chủ. Người ta quan niệm, trồng vạn niên thanh trong nhà ngày tết mang đến sự sung túc",
  },
  {
    id: "SP17",
    img: "../imgs/sp/sp-kimtien-2.png",
    proName: "Cây Kim Tiền Y",
    price: "18100000",
    limit: 5,
    proDetail:
      "Cây Vạn Niên Thanh có ý nghĩa phong thủy tăng tài vận cho gia chủ. Người ta quan niệm, trồng vạn niên thanh trong nhà ngày tết mang đến sự sung túc",
  },
  {
    id: "SP18",
    img: "../imgs/sp/sp-kimtien-1.png",
    proName: "Cây Kim Tiền",
    price: "18100000",
    limit: 5,
    proDetail:
      "Cây Vạn Niên Thanh có ý nghĩa phong thủy tăng tài vận cho gia chủ. Người ta quan niệm, trồng vạn niên thanh trong nhà ngày tết mang đến sự sung túc",
  },
  {
    id: "SP019",
    img: "../imgs/sp/sp-kimtien-2.png",
    proName: "Cây Kim Tiền 2",
    price: "18100000",
    limit: 5,
    proDetail:
      "Cây Vạn Niên Thanh có ý nghĩa phong thủy tăng tài vận cho gia chủ. Người ta quan niệm, trồng vạn niên thanh trong nhà ngày tết mang đến sự sung túc",
  },
  {
    id: "SP020",
    img: "../imgs/sp/sp-truong-xuan.png",
    proName: "Cây Trường Xuân",
    price: "18100000",
    limit: 5,
    proDetail:
      "Cây Vạn Niên Thanh có ý nghĩa phong thủy tăng tài vận cho gia chủ. Người ta quan niệm, trồng vạn niên thanh trong nhà ngày tết mang đến sự sung túc",
  },
  {
    id: "SP021",
    img: "../imgs/sp/sp-cay-canh-dep.png",
    proName: "Cây Cảnh Đẹp",
    price: "18100000",
    limit: 5,
    proDetail:
      "Cây Vạn Niên Thanh có ý nghĩa phong thủy tăng tài vận cho gia chủ. Người ta quan niệm, trồng vạn niên thanh trong nhà ngày tết mang đến sự sung túc",
  },
  {
    id: "SP022",
    img: "../imgs/sp/sp-cay-canh-dep.png",
    proName: "Cây Cảnh Đẹp A",
    price: "18100000",
    limit: 5,
    proDetail:
      "Cây Vạn Niên Thanh có ý nghĩa phong thủy tăng tài vận cho gia chủ. Người ta quan niệm, trồng vạn niên thanh trong nhà ngày tết mang đến sự sung túc",
  },
  {
    id: "SP023",
    img: "../imgs/sp/sp-truong-xuan.png",
    proName: "Cây Trường Xuân 2",
    price: "18100000",
    limit: 5,
    proDetail:
      "Cây Vạn Niên Thanh có ý nghĩa phong thủy tăng tài vận cho gia chủ. Người ta quan niệm, trồng vạn niên thanh trong nhà ngày tết mang đến sự sung túc",
  },
  {
    id: "SP024",
    img: "../imgs/sp/sp-kimtien-1.png",
    proName: "Cây Kim Tiền X",
    price: "18100000",
    limit: 5,
    proDetail:
      "Cây Vạn Niên Thanh có ý nghĩa phong thủy tăng tài vận cho gia chủ. Người ta quan niệm, trồng vạn niên thanh trong nhà ngày tết mang đến sự sung túc",
  },
  {
    id: "SP025",
    img: "../imgs/sp/sp-kimtien-2.png",
    proName: "Cây Kim Tiền Y",
    price: "18100000",
    limit: 5,
    proDetail:
      "Cây Vạn Niên Thanh có ý nghĩa phong thủy tăng tài vận cho gia chủ. Người ta quan niệm, trồng vạn niên thanh trong nhà ngày tết mang đến sự sung túc",
  },
];

function setProductItem(obj, idHTML) {
  let item = `<div class="box-product">
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
                  <a href="#"
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
showListPro(listProduct, ".slide-products");

$(".slide-products").slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  // dots: false,
  // arrows: false,
});

$(".product-relate .slick-arrow").html("");
$(".product-relate .slick-prev").html(
  '<span><i class="fa-solid fa-angle-left"></i></span>'
);
$(".product-relate .slick-next").html(
  '<span><i class="fa-solid fa-angle-right"></i></span>'
);

$(".tabs-product .nav-link").click(function () {
  $(this).addClass("cl-black");
  $(this).removeClass("cl-white");
  $(this).parent().siblings(".nav-item").children().removeClass("cl-black");
  $(this).parent().siblings(".nav-item").children().addClass("cl-white");
});

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
var listCart;
function setLocal(key, value) {
  localStorage.removeItem(key);
  if (!key || !value) {
    return;
  }

  if (typeof value === "object") {
    value = JSON.stringify(value);
  }
  localStorage.setItem(key, value);
}

function getLocal(key) {
  listCart = JSON.parse(localStorage.getItem(key));
}
// setLocal("listCarts",listCartSet);
getLocal("listCarts");

function setCartItem(obj) {
  let item = `<div class="item-cart" id ="item-cart-${obj.id}">
                  <div class="row">
                      <div class="image-item-cart margin-auto col-2">
                          <img class="w-100" src="${obj.img}" alt="">
                      </div>
                      <div class="title-item-cart margin-auto col-4">
                          <h3>${obj.proName}</h3>
                      </div>
                      <div class= "price-item-cart margin-auto col-3">
                          <span id="cart-price-${obj.id}" data-price="${
    obj.price
  }">${Intl.NumberFormat("en-US").format(obj.price)}</span><span> VNĐ</span>
                      </div>
                      <div class="quantity-item-cart margin-auto col-2">
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
                      <div class="del-cart margin-auto col-1">
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
      setLocal("listCarts", listCart);
      return quantity;
    }
  }
}

function subCart(id) {
  let quantity = changeQuantity(id, "-");
  $("#cart-quantity-" + id).text(quantity);
}

function addCart(id) {
  let quantity = changeQuantity(id, "+");
  $("#cart-quantity-" + id).text(quantity);

  // sumPrice(listCart);
}

function delCart(id) {
  listCart = listCart.filter((x) => x.id != id);
  $("#item-cart-" + id).remove();
  setLocal("listCarts", listCart);
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
    setLocal("listCarts", listCart);
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
