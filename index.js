$(document).ready(function () {
  $("nav").find("li").on("click", "a", function () {
      $('.navbar-collapse.in').collapse('hide');
  });
});
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
            <span class="navbar-toggler-icon"></span>
        </button>
