var listNews = [
  {
    id: 1,
    title: "tin tức 1",
    content:
      "Trà thảo dược được coi là một loại thực phẩm chức năng có tác dụng tốt cho sức khỏe. Tuy nhiên, để có...  ",
    img: "../imgs/14_ Am tra 1 coc.png",
  },
  {
    id: 2,
    title: "tin tức 12",
    content:
      "Trà thảo dược được coi là một loại thực phẩm chức năng có tác dụng tốt cho sức khỏe. Tuy nhiên, để có...  ",
    img: "../imgs/15_ Coc tra 1(1).png",
  },
  {
    id: 3,
    title: "tin tức 13",
    content:
      "Trà thảo dược được coi là một loại thực phẩm chức năng có tác dụng tốt cho sức khỏe. Tuy nhiên, để có...  ",
    img: "../imgs/16_ Am tra 3 coc.png",
  },
  {
    id: 4,
    title: "tin tức 14",
    content:
      "Trà thảo dược được coi là một loại thực phẩm chức năng có tác dụng tốt cho sức khỏe. Tuy nhiên, để có...  ",
    img: "../imgs/14_ Am tra 1 coc.png",
  },
  {
    id: 5,
    title: "tin tức 5",
    content:
      "Trà thảo dược được coi là một loại thực phẩm chức năng có tác dụng tốt cho sức khỏe. Tuy nhiên, để có...  ",
    img: "../imgs/16_ Am tra 3 coc.png",
  },
  {
    id: 6,
    title: "tin tức 6",
    content:
      "Trà thảo dược được coi là một loại thực phẩm chức năng có tác dụng tốt cho sức khỏe. Tuy nhiên, để có...  ",
    img: "../imgs/15_ Coc tra 1(1).png",
  },
  {
    id: 7,
    title: "tin tức 7",
    content:
      "Trà thảo dược được coi là một loại thực phẩm chức năng có tác dụng tốt cho sức khỏe. Tuy nhiên, để có...  ",
    img: "../imgs/15_ Coc tra 1(1).png",
  },
  {
    id: 8,
    title: "tin tức 8",
    content:
      "Trà thảo dược được coi là một loại thực phẩm chức năng có tác dụng tốt cho sức khỏe. Tuy nhiên, để có...  ",
    img: "../imgs/15_ Coc tra 1(1).png",
  },
];
// var listTemp;

var pages = {
  pageIndex: 1,
  pageSize: 3,
  searchTitle: "",
};

function getCountPage(list) {
  if (list.length % pages.pageSize == 0) return list.length / pages.pageSize;
  else {
    return Math.round(list.length / pages.pageSize + 0.5);
  }
}

function setViewNumberPages(list) {
  let countPage = getCountPage(list);
  $(".new-page-number").html(``);
  $(".new-page-number").append(
    `<li class="page" value="0" id="page0" onclick="changePageNumber(0)"><</li>`
  );
  for (let page = 1; page <= countPage; page++) {
    let view = ` <li class="page" value="${page}"  id="page${page}"  onclick="changePageNumber(${page})">${page}</li>`;
    $(".new-page-number").append(view);
  }
  $(".new-page-number").append(
    `<li class="page" value="99999" id="page99999" onclick="changePageNumber(99999)">></li>`
  );
}

function setView(obj) {
  var view = `<div class="news-item">
                    <div class="news-img">
                        <img class="w-100" src="${obj.img}" alt="img">
                    </div>
                    <div class="new-conten">
                        <h3 class="new-title">
                        ${obj.title}
                        </h3>
                        <p class="news-content">
                        ${obj.content}
                        </p>
                    </div>
                </div>`;
  $(".new-page-conten .list-news").append(view);
}

function getListView(list) {
  let count = list.length;
  var listTmp = [];
  // $('.new-page-conten .list-news').html('');
  for (let i = 0; i < count; i++) {
    let obj = list[i];
    if (
      obj.title.toLowerCase().includes(pages.searchTitle.toLowerCase()) ||
      pages.searchTitle == ""
    ) {
      listTmp.push(obj);
    }
  }
  return listTmp;
}

function searchItem() {
  pages.searchTitle = $("#search").val();
  viewPages(listNews);
}

function checkPage(maxPage) {
  if (pages.pageIndex < 1) {
    pages.pageInde = 1;
  } else if (pages.pageIndex > maxPage) {
    pages.pageIndex = maxPage;
  }
}
function setPageNews(list) {
  let maxPage = getCountPage(list);
  checkPage(maxPage);
  let count = list.length;
  $(".new-page-conten .list-news").html("");
  let start = (pages.pageIndex - 1) * pages.pageSize;
  let end = pages.pageIndex * pages.pageSize;
  for (i = start; i < end && i < count; i++) {
    let obj = list[i];
    setView(obj);
  }
}

function changePageNumber(val) {
  if (val == 0) {
    pages.pageIndex--;
  } else if (val == 99999) {
    pages.pageIndex++;
  } else {
    pages.pageIndex = parseInt(val);
  }
  viewPages();
}

function cssChoicePage(val) {
  $(".new-page-number .page.selected").removeClass(".selected");
  $(".new-page-number .page#page" + val).addClass("selected");
}

function choicePageSize(obj) {
  pages.pageSize = obj.value;
  viewPages();
}

function viewPages() {
  let listTemp = getListView(listNews);
  setPageNews(listTemp);
  setViewNumberPages(listTemp);
  cssChoicePage(pages.pageIndex);
}
viewPages(listNews);
