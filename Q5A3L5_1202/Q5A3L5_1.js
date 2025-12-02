$(document).ready(function()
{
    $("#load_data").click(function()
{
    $("#area").html("");

    $("#area"),append("<h2>TOKAJ HEGYALJA EGYETEM</h2>");

    $.getJSON("Q5A3L5_orarend2.js", function(data)
{
    $("#area").append("<b>Cím:</b>");
    $("#area").append("&nbsp;" + data.cím["irányítószám"]);
    $("#area").append("&nbsp;" + data.cím["város"]);
    $("#area").append("&nbsp;" + data.cím["utca"] + "<br><br>");

    $("#area").append("<b>Telefonszám:</b><br><ul>");

    for (let i = 0; i < data["telefonszám"].length; i++ )
    {
        $("#area").append("<li>" + data["telefonszám"][i].típus + ":&nbsp;" + data["telefonszám"][i].szám + "</li>");
    }
    $("#area").append("</ul><br><b>THE, PTI Órarend 2025 ősz</b><br><br>");

    for(let i = 0; i < data.ora.length; i++)
    {
        $("#area").append("<b>Tárgy:</b>&nbsp;" + data.ora[i].targy + "<br><br>");

        $("#area").append("<b>Időpont:</b><br>&nbsp;Nap:&nbsp;" + data.ora[i].idopont.nap + "<br>&nbsp;Tól:&nbsp;" + data.ora[i].idopont.tol + "<br>&nbsp;Ig:&nbsp;" + data.ora[i].idopont.ig + "<br><br>");

        $("#area").append("<b>Helyszín:</b>&nbsp;" + data.ora[i].helyszín + "<br><br>");

        $("#area").append("<b>Oktató:</b>&nbsp;" + data.ora[i].oktato + "<br><br>");

        $("#area").append("<b>Szak:</b>&nbsp;" + data.ora[i].szak + "<br><br>");

        $("#area").append("<b>Típus:</b>&nbsp;" + data.ora[i].típus + "<br><br>");

        $("#area").append("<br>");
    }
});
});
});