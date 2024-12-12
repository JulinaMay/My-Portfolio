// hou voor alle dieren bij dat er 0 dieren in de dierentuin zitten

// maak de dieren verplaatsbaar (draggable)

/*
    zorg dat wanneer er een dier losgelaten (gedropt) wordt:

      - er wordt bekeken of het dier in de dierentuin is losgelaten
      - er wordt bekeken of het dier wel op de goede plaats is losgelaten
      - zo niet: laat een boodschap zien: ('Hier kan ' + dier X + ' niet geplaatst worden')
      - wel op de goede plaats?
            - tel 1 op bij het aantal dieren van deze soort
            - en zorg ervoor dat de informatie over het aantal dieren ververst wordt
*/
$(document).ready(function () {
  let mijnDieren = {leeuw:0, aap:0, giraffe:0, pinguin:0, slang:0};
  let totaal = 0;

  $(".drag").draggable({
    helper: "clone",
    revert: true,
  });

  $('body').droppable({
    greedy:false,
    drop: function (event, ui) {
    alert("staat niet in het goede vakje")
    
    }
  });
  
  $(".drop").droppable({
    greedy:true,
    drop: function (event, ui) {
       let dropId = $(this).attr('id');
       let dragId = ui.draggable.attr('id');

       if (dropId === 'drop_' + dragId) {
         console.log("ja " + dragId + " staat in " + "het juiste vakje ");
         mijnDieren[dragId]++;
         totaal++;
         $("#totaal").html(totaal);
         $("#aantal_leeuw").html(mijnDieren["leeuw"]);
         $("#aantal_slang").html(mijnDieren["slang"]);
         $("#aantal_aap").html(mijnDieren["aap"]);
         $("#aantal_pinguin").html(mijnDieren["pinguin"]);
         $("#aantal_giraffe").html(mijnDieren["giraffe"]);
       } else {
        alert ("nee " + dragId + " staat niet in het goede vakje ");
       }
    }
  });
});