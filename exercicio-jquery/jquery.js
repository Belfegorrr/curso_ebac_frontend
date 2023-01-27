$(function () {
  $("form").on("submit", function (e) {
    e.preventDefault();
    const novaTarefa = $("#A").val();
    const novoItem = $('<li>'+ novaTarefa +'</li>');
    $(novoItem).appendTo("ul");
    $("#A").val("");
    $("li").on("click", function () {
      $(this).toggleClass("strike");
    });
  });
});
