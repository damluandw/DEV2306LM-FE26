changPrice();
function changPrice() {
  $("#slider-range").slider({
    range: true,
    min: 0,
    max: 1000000,
    values: [0, 200000],
    slide: function (event, ui) {
      $("#amount").val(" Từ " + ui.values[0] + " đến " + ui.values[1]);
      // dataFilter = data.filter(
      //   (x) =>
      //     x.product.PRICE_NEW >= ui.values[0] &&
      //     x.product.PRICE_NEW <= ui.values[1]
      // );
      // updatePageCount(dataFilter.length, pageSize);
      // setPagination(dataFilter.length, 1);
      // setPagingDataHtml(pageSize, 1);
    },
  });

  $("#amount").val(
    "Từ " +
      $("#slider-range").slider("values", 0) +
      " đến " +
      $("#slider-range").slider("values", 1)
  );
}
// Format number: 50000 -> 50,000
// function formatNumber(num) {
//   return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
// }
// function changeUnit() {
//   $(document).on("change", 'select[name="khoiluong"]', function () {
//     let price = $(this).attr("data-price");
//     let minUnit = $(this).attr("data-unit");
//     let val = parseInt($(this).val());
//     let row = ` <p class="m-0">${formatNumber(
//       price * (val / minUnit)
//     )}<span>VND</span>  </p>`;
//     $(".items[data-id=" + $(this).attr("data-id") + "] .price-sp").html(row);
//   });
// }
// changeUnit();
