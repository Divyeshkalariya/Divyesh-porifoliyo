$(document).ready(function() {
    $(".my-progress-bar").circularProgress({
        line_width: 20,
        color: "blue",
        starting_position: 0, // 12.00 o' clock position, 25 stands for 3.00 o'clock (clock-wise)
        percent: 0, // percent starts from
        percentage: true,
        text: "html"
    }).circularProgress('animate', 70, 4000);
});
