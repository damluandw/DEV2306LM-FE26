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
  
  var listCardSet = [
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
  var listCard ;
  function setLocal(key, value) {
      localStorage.removeItem(key);
      if (!key || !value) {return;}
  
      if (typeof value === "object") {
        value = JSON.stringify(value);
      }
      localStorage.setItem(key, value);
  }
  
  
  function getLocal(key){
      listCard = JSON.parse(localStorage.getItem(key));
  }
  // setLocal("listCards",listCardSet);
  getLocal("listCards");
  
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
  showListPro(listProduct, "#list-product-hot");
  
  function setCardItem(obj) {
    let item = `<div class="item-card" id ="item-card-${obj.id}">
                    <div class="d-flex justify-between">
                        <div class="image-item-card margin-auto">
                            <img class="w-100" src="${obj.img}" alt="">
                        </div>
                        <div class="title-item-card margin-auto">
                            <h3>${obj.proName}</h3>
                        </div>
                        <div class="price-item-card margin-auto">
                            <span id="card-price-${obj.id}" data-price="${
      obj.price
    }">${Intl.NumberFormat("en-US").format(obj.price)}</span><span> VNĐ</span>
                        </div>
                        <div class="quantity-item-card margin-auto">
                            <button type="button" class="btn-sub btn sub-${
                              obj.id
                            }" data-id="${obj.id}" onclick="subCard('${
      obj.id
    }')">-</button>
                                <span id="card-quantity-${obj.id}">${
      obj.quantity
    }</span>
                            <button type="button" class="btn-add btn add-${
                              obj.id
                            }"
                            data-id="${obj.id}" onclick="addCard('${
      obj.id
    }')">+</button>
                        </div>
                        <div class="del-card margin-auto">
                        <button  type="button" class="btn-del btn" id="del-card-${
                          obj.id
                        }" data-id="${obj.id}" onclick="delCard('${
      obj.id
    }')"><span><i class="fa-solid fa-trash-can"></i></span></button>
                        </div>
                    </div>
                </div>`;
    $(".modal-body").append(item);
  }
  function showListCard(list) {
    let count = list.length;
    for (let i = 0; i < count; i++) {
      let obj = list[i];
      setCardItem(obj);
    }
  }
  showListCard(listCard);
  
  function changeQuantity(id, phepTinh) {
    let count = listCard.length;
    for (let i = 0; i < count; i++) {
      if (id == listCard[i].id) {
        let quantity = listCard[i].quantity;
        if (phepTinh == "-") {
          quantity = parseInt(quantity) < 2 ? 1 : parseInt(quantity) - 1;
        } else {
          if (quantity < listCard[i].limit) {
            quantity = parseInt(quantity) + 1;
          }
        }
        listCard[i].quantity = quantity;
        setLocal("listCards",listCard);
        return quantity;
      }
    } 
  }
  
  function subCard(id) {
    let quantity = changeQuantity(id, "-");
    $("#card-quantity-"+id).text(quantity);
  }
  
  function addCard(id) {
    let quantity = changeQuantity(id, "+");
    $("#card-quantity-"+id).text(quantity);
  
    // sumPrice(listCard);
  }
  
  function delCard(id) {
    listCard = listCard.filter((x) => x.id != id);
    $("#item-card-" + id).remove();
    setLocal("listCards",listCard);
    // sumPrice(listCard);
  }
  // $(".btn-sub").click(function () {
  //   let id = $(this).attr("data-id");
  //   let quantity = changeQuantity(id, "-");
  //   $(this).siblings("span").text(quantity);
  // });
  
  $(".btn-buy").click(function () {
    let id = $(this).attr("data-id");
    let objPro = searchPro(listProduct, id);
    let objCard = searchPro(listCard, id);
    if (objCard == null) {
      objPro.quantity = 1;
      objCard = objPro;
      setLocal("listCards",listCard);
      setCardItem(objCard);
      listCard.push(objCard);
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
  
  
  