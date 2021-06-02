
$(".first-choice").hide();
$(".VDgaming").hide();
$(".gam3").hide();
$(".Fortnite").hide();
$(".Valorant").hide();

/* This section is for the 'HOMEWORK' button*/
$(".hw").click(function() {
    $(".first-choice").css('display', 'block');
    $("#weclome").hide();
});
$(".St").click(function() {
    $(".Study").show();
});
$(".gaming-choice").click(function() {
    $(".VDgaming").show();
});

/* This section is for 'Gaming' button */
$(".gaming").click(function() {
    $(".gam3").css('display', 'block');
    $("#weclome").hide();
});
$(".nite").dblclick(function() {
    $(".Fortnite").show();
});
$(".rant").click(function() {
    $(".Valorant").show();
});