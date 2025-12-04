$(document).ready(function () {

    $("#load-data").click(function () {

        $("#area").html("");
        $("#area").append("<h2>TOKAJ HEGYALJA EGYETEM</h2>");

        $.getJSON("Q5A3L5_orarend1.js", function (data) {

            // CÍM
            $("#area").append("<b>Cím:</b> " +
                data.cim.iranyitoszam + " " +
                data.cim.varos + ", " +
                data.cim.utca + "<br><br>");

            // TELEFONSZÁMOK
            $("#area").append("<b>Telefonszám:</b><br><ul>");
            for (let i = 0; i < data.telefonszam.length; i++) {
                $("#area").append("<li>" +
                    data.telefonszam[i].tipus + ": " +
                    data.telefonszam[i].szam +
                    "</li>");
            }
            $("#area").append("</ul><br>");

            $("#area").append("<b>THE, PTI Órarend 2025 ősz</b><br><br>");

            // ÓRAREND
            for (let i = 0; i < data.ora.length; i++) {

                $("#area").append("<b>Tárgy:</b> " + data.ora[i].targy + "<br>");
                $("#area").append("<b>Időpont:</b><br>Nap: " +
                    data.ora[i].idopont.nap +
                    "<br>Tól: " + data.ora[i].idopont.tol +
                    "<br>Ig: " + data.ora[i].idopont.ig + "<br><br>");

                $("#area").append("<b>Helyszín:</b> " + data.ora[i].helyszin + "<br>");
                $("#area").append("<b>Oktató:</b> " + data.ora[i].oktato + "<br>");
                $("#area").append("<b>Szak:</b> " + data.ora[i].szak + "<br>");
                $("#area").append("<b>Típus:</b> " + data.ora[i].tipus + "<br><br>");
            }

        });

    });

});
