$(function () {
  $("form").on("submit", function (e) {
    e.preventDefault();
    const novaTarefa = $("#A").val();
    const novoItem = $('<li class="">' + novaTarefa + "</li>");
    $(novoItem).appendTo("ul");
    $("#A").val("");
    $("ul").on("click", "li", function () {
      $(this).addClass("strike");
    });
    $("ul").on("dblclick", "li", function () {
      $(this).removeClass("strike");
    });
  });
});
