$(document).ready(function(){
    $("form").submit(function(){
        var values = [$("#first_name").val(), $("#last_name").val(), $("#email").val(), $("#contact").val()];
        var markup = "<tr><td>" + values[0] + "</td><td>" + values[1] + "</td><td>" + values[2] + "</td><td>" + values[3] + "</td></tr>";
        $("table tbody").append(markup);
        return false;
    });
});