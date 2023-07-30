var listNews = [
    {
        id: 1,
        title: "tin tức 1",
        content: "Trà thảo dược được coi là một loại thực phẩm chức năng có tác dụng tốt cho sức khỏe. Tuy nhiên, để có...  ",
        img: "../imgs/14_ Am tra 1 coc.png"
    },
    {
        id: 2,
        title: "tin tức 2",
        content: "Trà thảo dược được coi là một loại thực phẩm chức năng có tác dụng tốt cho sức khỏe. Tuy nhiên, để có...  ",
        img: "../imgs/15_ Coc tra 1(1).png"
    },
    {
        id: 3,
        title: "tin tức 3",
        content: "Trà thảo dược được coi là một loại thực phẩm chức năng có tác dụng tốt cho sức khỏe. Tuy nhiên, để có...  ",
        img: "../imgs/16_ Am tra 3 coc.png"
    },
    {
        id: 4,
        title: "tin tức 4",
        content: "Trà thảo dược được coi là một loại thực phẩm chức năng có tác dụng tốt cho sức khỏe. Tuy nhiên, để có...  ",
        img: "../imgs/14_ Am tra 1 coc.png"
    },
    {
        id: 5,
        title: "tin tức 5",
        content: "Trà thảo dược được coi là một loại thực phẩm chức năng có tác dụng tốt cho sức khỏe. Tuy nhiên, để có...  ",
        img: "../imgs/16_ Am tra 3 coc.png"
    },
    {
        id: 6,
        title: "tin tức 6",
        content: "Trà thảo dược được coi là một loại thực phẩm chức năng có tác dụng tốt cho sức khỏe. Tuy nhiên, để có...  ",
        img: "../imgs/15_ Coc tra 1(1).png"
    },
    {
        id: 7,
        title: "tin tức 7",
        content: "Trà thảo dược được coi là một loại thực phẩm chức năng có tác dụng tốt cho sức khỏe. Tuy nhiên, để có...  ",
        img: "../imgs/15_ Coc tra 1(1).png"
    }
    ,
    {
        id: 8,
        title: "tin tức 8",
        content: "Trà thảo dược được coi là một loại thực phẩm chức năng có tác dụng tốt cho sức khỏe. Tuy nhiên, để có...  ",
        img: "../imgs/15_ Coc tra 1(1).png"
    }
];


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
    $('.new-page-conten .list-news').append(view);
}

function setListView(list,search) {
    var count =  list.length;
    $('.new-page-conten .list-news').html('');
    for (i = 0; i < count; i++) {
        let obj = list[i];
        if(obj.title.toLowerCase().includes(search.toLowerCase()) || search ==""){
            setView(obj);
        }
    }
}

function searchItem() {
    // var title = document.getElementById("search").value;
    var title = $('.form-search #search').val();
    setListView(listNews,title);
    // return false;
    // => syntax: $ + ('<selector>') + . + action(param)
}

var pageIndex =1;
var pageSize=3;

function setPageNews(list) {
    var count =  list.length;
    $('.new-page-conten .list-news').html('');
    let start =(pageIndex-1)*pageSize;
    let end =pageIndex*pageSize;
    for (i = start && i < count; i < end && i< count; i++) {
        let obj = list[i];
        setView(obj);
    }
    
}

function setNumberPages(list){
    var countPage
    if(list.length%pageSize ==0)
        countPage = list.length/pageSize;
    else{        
        countPage = Math.round(list.length/pageSize+ 0.5);
    }
    $('.new-page-number').append(`<li class="page" value="0" onclick="changePageNumber(this.value)"><</li>`);
    for (i = 1; i<= countPage; i++) {
        var view = ` <li class="page" value="${i}"  onclick="changePageNumber(this.value)">${i}</li>`;
        $('.new-page-number').append(view);
    }   
    $('.new-page-number').append(`<li class="page" value="99999"  onclick="changePageNumber(this.value)">></li>`);
}

function changePageNumber(val){  
    console.log(val);
    if(val == 0){
        if(pageIndex <=1){
            pageIndex =1
        }else{
            pageIndex--;
        }
    }
    else if(val == 99999){
        if(pageIndex >= listNews.length){
            pageIndex =listNews.length;
        }else{
            pageIndex++;
        }
    }else{
        pageIndex = parseInt(val);
    }
    setPageNews(listNews);
}

setPageNews(listNews);
setNumberPages(listNews);

