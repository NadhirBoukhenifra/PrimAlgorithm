// $(document).ready(function(){
$(function () {
  $('[data-toggle="tooltip"]').tooltip();

  $("#numberOfVerticesButton").click(function(){
    // numberOfVertices = $('#numberOfVerticesField').val();
    // alert("The paragraph was clicked." + numberOfVertices);
    var plus = $('#numberOfVerticesField').val();
    plus++;
    console.log(plus);
    $.session.set('numberOfVertices', plus);
  });
  $("#fillVerticesButton").click(function(){
    // numberOfVertices = $('#numberOfVerticesField').val();
    // alert("The paragraph was clicked." + numberOfVertices);
    var first = 64;
    var second = 65;
    for (var i = 1; i < $.session.get('numberOfVertices'); i++) {
        first++;

      for (var j = 1; j < $.session.get('numberOfVertices'); j++) {
        second++;
        $.session.set(String.fromCharCode(first)+String.fromCharCode(second), $('#'+String.fromCharCode(first)+String.fromCharCode(second)).val());
        $.session.set(String.fromCharCode(second)+String.fromCharCode(first), $('#'+String.fromCharCode(second)+String.fromCharCode(first)).val());
      }
      second = 65;
    }

    /* var plus = $('#numberOfVerticesField').val();
    plus++;
    console.log(plus);
    $.session.set('numberOfVertices', plus); */
  });
  /*
  $("#" +  String.fromCharCode(65) + String.fromCharCode(66)).on("input", function() {
    $("#" +  String.fromCharCode(66) + String.fromCharCode(65)).val(this.value);
  });
  $("#" +  String.fromCharCode(66) + String.fromCharCode(65)).on("input", function() {
    $("#" +  String.fromCharCode(65) + String.fromCharCode(66)).val(this.value);
  }); */
  /* $("#" +  String.fromCharCode(65) + String.fromCharCode(66)).on("input", function() {
    $("#" +  String.fromCharCode(66) + String.fromCharCode(65)).val(this.value); // A a B
  });
  $("#" +  String.fromCharCode(66) + String.fromCharCode(65)).on("input", function() {
    $("#" +  String.fromCharCode(65) + String.fromCharCode(66)).val(this.value); // B a A
  })

  $("#" +  String.fromCharCode(65) + String.fromCharCode(67)).on("input", function() {
    $("#" +  String.fromCharCode(67) + String.fromCharCode(65)).val(this.value); // A a C
  });
  $("#" +  String.fromCharCode(67) + String.fromCharCode(65)).on("input", function() {
    $("#" +  String.fromCharCode(65) + String.fromCharCode(67)).val(this.value); // C a A
  })

  $("#" +  String.fromCharCode(65) + String.fromCharCode(68)).on("input", function() {
    $("#" +  String.fromCharCode(68) + String.fromCharCode(65)).val(this.value); // A a D
  });
  $("#" +  String.fromCharCode(68) + String.fromCharCode(65)).on("input", function() {
    $("#" +  String.fromCharCode(65) + String.fromCharCode(68)).val(this.value); // D a A
  })

  $("#" +  String.fromCharCode(66) + String.fromCharCode(67)).on("input", function() {
    $("#" +  String.fromCharCode(67) + String.fromCharCode(66)).val(this.value); // B a C
  });
  $("#" +  String.fromCharCode(67) + String.fromCharCode(66)).on("input", function() {
    $("#" +  String.fromCharCode(66) + String.fromCharCode(67)).val(this.value); // C a B
  })

  $("#" +  String.fromCharCode(66) + String.fromCharCode(68)).on("input", function() {
    $("#" +  String.fromCharCode(68) + String.fromCharCode(66)).val(this.value); // B a D
  });
  $("#" +  String.fromCharCode(68) + String.fromCharCode(66)).on("input", function() {
    $("#" +  String.fromCharCode(66) + String.fromCharCode(68)).val(this.value); // D a B
  })

  $("#" +  String.fromCharCode(67) + String.fromCharCode(68)).on("input", function() {
    $("#" +  String.fromCharCode(68) + String.fromCharCode(67)).val(this.value); // C a D
  });
  $("#" +  String.fromCharCode(68) + String.fromCharCode(67)).on("input", function() {
    $("#" +  String.fromCharCode(67) + String.fromCharCode(68)).val(this.value); // D a C
  }) */

  /*
  AA AA
  AB BA
  AC CA
  AD Da
     BC CB
     BD DB
        CD DC
   */

  $("#" +  String.fromCharCode(65) + String.fromCharCode(66)).on("input", function() {
    $("#" +  String.fromCharCode(66) + String.fromCharCode(65)).val(this.value);
  });

  $("#" +  String.fromCharCode(66) + String.fromCharCode(65)).on("input", function() {
    $("#" +  String.fromCharCode(65) + String.fromCharCode(66)).val(this.value);
  });

  $("#" +  String.fromCharCode(65) + String.fromCharCode(67)).on("input", function() {
    $("#" +  String.fromCharCode(67) + String.fromCharCode(65)).val(this.value);
  });

  $("#" +  String.fromCharCode(67) + String.fromCharCode(65)).on("input", function() {
    $("#" +  String.fromCharCode(65) + String.fromCharCode(67)).val(this.value);
  });

  $("#" +  String.fromCharCode(65) + String.fromCharCode(68)).on("input", function() {
    $("#" +  String.fromCharCode(68) + String.fromCharCode(65)).val(this.value);
  });

  $("#" +  String.fromCharCode(68) + String.fromCharCode(65)).on("input", function() {
    $("#" +  String.fromCharCode(65) + String.fromCharCode(68)).val(this.value);
  });

  $("#" +  String.fromCharCode(65) + String.fromCharCode(69)).on("input", function() {
    $("#" +  String.fromCharCode(69) + String.fromCharCode(65)).val(this.value);
  });

  $("#" +  String.fromCharCode(69) + String.fromCharCode(65)).on("input", function() {
    $("#" +  String.fromCharCode(65) + String.fromCharCode(69)).val(this.value);
  });

  $("#" +  String.fromCharCode(65) + String.fromCharCode(70)).on("input", function() {
    $("#" +  String.fromCharCode(70) + String.fromCharCode(65)).val(this.value);
  });

  $("#" +  String.fromCharCode(70) + String.fromCharCode(65)).on("input", function() {
    $("#" +  String.fromCharCode(65) + String.fromCharCode(70)).val(this.value);
  });

  $("#" +  String.fromCharCode(65) + String.fromCharCode(71)).on("input", function() {
    $("#" +  String.fromCharCode(71) + String.fromCharCode(65)).val(this.value);
  });

  $("#" +  String.fromCharCode(71) + String.fromCharCode(65)).on("input", function() {
    $("#" +  String.fromCharCode(65) + String.fromCharCode(71)).val(this.value);
  });

  $("#" +  String.fromCharCode(65) + String.fromCharCode(72)).on("input", function() {
    $("#" +  String.fromCharCode(72) + String.fromCharCode(65)).val(this.value);
  });

  $("#" +  String.fromCharCode(72) + String.fromCharCode(65)).on("input", function() {
    $("#" +  String.fromCharCode(65) + String.fromCharCode(72)).val(this.value);
  });

  $("#" +  String.fromCharCode(65) + String.fromCharCode(73)).on("input", function() {
    $("#" +  String.fromCharCode(73) + String.fromCharCode(65)).val(this.value);
  });

  $("#" +  String.fromCharCode(73) + String.fromCharCode(65)).on("input", function() {
    $("#" +  String.fromCharCode(65) + String.fromCharCode(73)).val(this.value);
  });

  $("#" +  String.fromCharCode(65) + String.fromCharCode(74)).on("input", function() {
    $("#" +  String.fromCharCode(74) + String.fromCharCode(65)).val(this.value);
  });

  $("#" +  String.fromCharCode(74) + String.fromCharCode(65)).on("input", function() {
    $("#" +  String.fromCharCode(65) + String.fromCharCode(74)).val(this.value);
  });

  $("#" +  String.fromCharCode(65) + String.fromCharCode(75)).on("input", function() {
    $("#" +  String.fromCharCode(75) + String.fromCharCode(65)).val(this.value);
  });

  $("#" +  String.fromCharCode(75) + String.fromCharCode(65)).on("input", function() {
    $("#" +  String.fromCharCode(65) + String.fromCharCode(75)).val(this.value);
  });

  $("#" +  String.fromCharCode(65) + String.fromCharCode(76)).on("input", function() {
    $("#" +  String.fromCharCode(76) + String.fromCharCode(65)).val(this.value);
  });

  $("#" +  String.fromCharCode(76) + String.fromCharCode(65)).on("input", function() {
    $("#" +  String.fromCharCode(65) + String.fromCharCode(76)).val(this.value);
  });

  $("#" +  String.fromCharCode(65) + String.fromCharCode(77)).on("input", function() {
    $("#" +  String.fromCharCode(77) + String.fromCharCode(65)).val(this.value);
  });

  $("#" +  String.fromCharCode(77) + String.fromCharCode(65)).on("input", function() {
    $("#" +  String.fromCharCode(65) + String.fromCharCode(77)).val(this.value);
  });

  $("#" +  String.fromCharCode(65) + String.fromCharCode(78)).on("input", function() {
    $("#" +  String.fromCharCode(78) + String.fromCharCode(65)).val(this.value);
  });

  $("#" +  String.fromCharCode(78) + String.fromCharCode(65)).on("input", function() {
    $("#" +  String.fromCharCode(65) + String.fromCharCode(78)).val(this.value);
  });

  $("#" +  String.fromCharCode(65) + String.fromCharCode(79)).on("input", function() {
    $("#" +  String.fromCharCode(79) + String.fromCharCode(65)).val(this.value);
  });

  $("#" +  String.fromCharCode(79) + String.fromCharCode(65)).on("input", function() {
    $("#" +  String.fromCharCode(65) + String.fromCharCode(79)).val(this.value);
  });

  $("#" +  String.fromCharCode(65) + String.fromCharCode(80)).on("input", function() {
    $("#" +  String.fromCharCode(80) + String.fromCharCode(65)).val(this.value);
  });

  $("#" +  String.fromCharCode(80) + String.fromCharCode(65)).on("input", function() {
    $("#" +  String.fromCharCode(65) + String.fromCharCode(80)).val(this.value);
  });

  $("#" +  String.fromCharCode(65) + String.fromCharCode(81)).on("input", function() {
    $("#" +  String.fromCharCode(81) + String.fromCharCode(65)).val(this.value);
  });

  $("#" +  String.fromCharCode(81) + String.fromCharCode(65)).on("input", function() {
    $("#" +  String.fromCharCode(65) + String.fromCharCode(81)).val(this.value);
  });

  $("#" +  String.fromCharCode(65) + String.fromCharCode(82)).on("input", function() {
    $("#" +  String.fromCharCode(82) + String.fromCharCode(65)).val(this.value);
  });

  $("#" +  String.fromCharCode(82) + String.fromCharCode(65)).on("input", function() {
    $("#" +  String.fromCharCode(65) + String.fromCharCode(82)).val(this.value);
  });

  $("#" +  String.fromCharCode(65) + String.fromCharCode(83)).on("input", function() {
    $("#" +  String.fromCharCode(83) + String.fromCharCode(65)).val(this.value);
  });

  $("#" +  String.fromCharCode(83) + String.fromCharCode(65)).on("input", function() {
    $("#" +  String.fromCharCode(65) + String.fromCharCode(83)).val(this.value);
  });

  $("#" +  String.fromCharCode(65) + String.fromCharCode(84)).on("input", function() {
    $("#" +  String.fromCharCode(84) + String.fromCharCode(65)).val(this.value);
  });

  $("#" +  String.fromCharCode(84) + String.fromCharCode(65)).on("input", function() {
    $("#" +  String.fromCharCode(65) + String.fromCharCode(84)).val(this.value);
  });

  $("#" +  String.fromCharCode(65) + String.fromCharCode(85)).on("input", function() {
    $("#" +  String.fromCharCode(85) + String.fromCharCode(65)).val(this.value);
  });

  $("#" +  String.fromCharCode(85) + String.fromCharCode(65)).on("input", function() {
    $("#" +  String.fromCharCode(65) + String.fromCharCode(85)).val(this.value);
  });

  $("#" +  String.fromCharCode(65) + String.fromCharCode(86)).on("input", function() {
    $("#" +  String.fromCharCode(86) + String.fromCharCode(65)).val(this.value);
  });

  $("#" +  String.fromCharCode(86) + String.fromCharCode(65)).on("input", function() {
    $("#" +  String.fromCharCode(65) + String.fromCharCode(86)).val(this.value);
  });

  $("#" +  String.fromCharCode(65) + String.fromCharCode(87)).on("input", function() {
    $("#" +  String.fromCharCode(87) + String.fromCharCode(65)).val(this.value);
  });

  $("#" +  String.fromCharCode(87) + String.fromCharCode(65)).on("input", function() {
    $("#" +  String.fromCharCode(65) + String.fromCharCode(87)).val(this.value);
  });

  $("#" +  String.fromCharCode(65) + String.fromCharCode(88)).on("input", function() {
    $("#" +  String.fromCharCode(88) + String.fromCharCode(65)).val(this.value);
  });

  $("#" +  String.fromCharCode(88) + String.fromCharCode(65)).on("input", function() {
    $("#" +  String.fromCharCode(65) + String.fromCharCode(88)).val(this.value);
  });

  $("#" +  String.fromCharCode(66) + String.fromCharCode(67)).on("input", function() {
    $("#" +  String.fromCharCode(67) + String.fromCharCode(66)).val(this.value);
  });

  $("#" +  String.fromCharCode(67) + String.fromCharCode(66)).on("input", function() {
    $("#" +  String.fromCharCode(66) + String.fromCharCode(67)).val(this.value);
  });

  $("#" +  String.fromCharCode(66) + String.fromCharCode(68)).on("input", function() {
    $("#" +  String.fromCharCode(68) + String.fromCharCode(66)).val(this.value);
  });

  $("#" +  String.fromCharCode(68) + String.fromCharCode(66)).on("input", function() {
    $("#" +  String.fromCharCode(66) + String.fromCharCode(68)).val(this.value);
  });

  $("#" +  String.fromCharCode(66) + String.fromCharCode(69)).on("input", function() {
    $("#" +  String.fromCharCode(69) + String.fromCharCode(66)).val(this.value);
  });

  $("#" +  String.fromCharCode(69) + String.fromCharCode(66)).on("input", function() {
    $("#" +  String.fromCharCode(66) + String.fromCharCode(69)).val(this.value);
  });

  $("#" +  String.fromCharCode(66) + String.fromCharCode(70)).on("input", function() {
    $("#" +  String.fromCharCode(70) + String.fromCharCode(66)).val(this.value);
  });

  $("#" +  String.fromCharCode(70) + String.fromCharCode(66)).on("input", function() {
    $("#" +  String.fromCharCode(66) + String.fromCharCode(70)).val(this.value);
  });

  $("#" +  String.fromCharCode(66) + String.fromCharCode(71)).on("input", function() {
    $("#" +  String.fromCharCode(71) + String.fromCharCode(66)).val(this.value);
  });

  $("#" +  String.fromCharCode(71) + String.fromCharCode(66)).on("input", function() {
    $("#" +  String.fromCharCode(66) + String.fromCharCode(71)).val(this.value);
  });

  $("#" +  String.fromCharCode(66) + String.fromCharCode(72)).on("input", function() {
    $("#" +  String.fromCharCode(72) + String.fromCharCode(66)).val(this.value);
  });

  $("#" +  String.fromCharCode(72) + String.fromCharCode(66)).on("input", function() {
    $("#" +  String.fromCharCode(66) + String.fromCharCode(72)).val(this.value);
  });

  $("#" +  String.fromCharCode(66) + String.fromCharCode(73)).on("input", function() {
    $("#" +  String.fromCharCode(73) + String.fromCharCode(66)).val(this.value);
  });

  $("#" +  String.fromCharCode(73) + String.fromCharCode(66)).on("input", function() {
    $("#" +  String.fromCharCode(66) + String.fromCharCode(73)).val(this.value);
  });

  $("#" +  String.fromCharCode(66) + String.fromCharCode(74)).on("input", function() {
    $("#" +  String.fromCharCode(74) + String.fromCharCode(66)).val(this.value);
  });

  $("#" +  String.fromCharCode(74) + String.fromCharCode(66)).on("input", function() {
    $("#" +  String.fromCharCode(66) + String.fromCharCode(74)).val(this.value);
  });

  $("#" +  String.fromCharCode(66) + String.fromCharCode(75)).on("input", function() {
    $("#" +  String.fromCharCode(75) + String.fromCharCode(66)).val(this.value);
  });

  $("#" +  String.fromCharCode(75) + String.fromCharCode(66)).on("input", function() {
    $("#" +  String.fromCharCode(66) + String.fromCharCode(75)).val(this.value);
  });

  $("#" +  String.fromCharCode(66) + String.fromCharCode(76)).on("input", function() {
    $("#" +  String.fromCharCode(76) + String.fromCharCode(66)).val(this.value);
  });

  $("#" +  String.fromCharCode(76) + String.fromCharCode(66)).on("input", function() {
    $("#" +  String.fromCharCode(66) + String.fromCharCode(76)).val(this.value);
  });

  $("#" +  String.fromCharCode(66) + String.fromCharCode(77)).on("input", function() {
    $("#" +  String.fromCharCode(77) + String.fromCharCode(66)).val(this.value);
  });

  $("#" +  String.fromCharCode(77) + String.fromCharCode(66)).on("input", function() {
    $("#" +  String.fromCharCode(66) + String.fromCharCode(77)).val(this.value);
  });

  $("#" +  String.fromCharCode(66) + String.fromCharCode(78)).on("input", function() {
    $("#" +  String.fromCharCode(78) + String.fromCharCode(66)).val(this.value);
  });

  $("#" +  String.fromCharCode(78) + String.fromCharCode(66)).on("input", function() {
    $("#" +  String.fromCharCode(66) + String.fromCharCode(78)).val(this.value);
  });

  $("#" +  String.fromCharCode(66) + String.fromCharCode(79)).on("input", function() {
    $("#" +  String.fromCharCode(79) + String.fromCharCode(66)).val(this.value);
  });

  $("#" +  String.fromCharCode(79) + String.fromCharCode(66)).on("input", function() {
    $("#" +  String.fromCharCode(66) + String.fromCharCode(79)).val(this.value);
  });

  $("#" +  String.fromCharCode(66) + String.fromCharCode(80)).on("input", function() {
    $("#" +  String.fromCharCode(80) + String.fromCharCode(66)).val(this.value);
  });

  $("#" +  String.fromCharCode(80) + String.fromCharCode(66)).on("input", function() {
    $("#" +  String.fromCharCode(66) + String.fromCharCode(80)).val(this.value);
  });

  $("#" +  String.fromCharCode(66) + String.fromCharCode(81)).on("input", function() {
    $("#" +  String.fromCharCode(81) + String.fromCharCode(66)).val(this.value);
  });

  $("#" +  String.fromCharCode(81) + String.fromCharCode(66)).on("input", function() {
    $("#" +  String.fromCharCode(66) + String.fromCharCode(81)).val(this.value);
  });

  $("#" +  String.fromCharCode(66) + String.fromCharCode(82)).on("input", function() {
    $("#" +  String.fromCharCode(82) + String.fromCharCode(66)).val(this.value);
  });

  $("#" +  String.fromCharCode(82) + String.fromCharCode(66)).on("input", function() {
    $("#" +  String.fromCharCode(66) + String.fromCharCode(82)).val(this.value);
  });

  $("#" +  String.fromCharCode(66) + String.fromCharCode(83)).on("input", function() {
    $("#" +  String.fromCharCode(83) + String.fromCharCode(66)).val(this.value);
  });

  $("#" +  String.fromCharCode(83) + String.fromCharCode(66)).on("input", function() {
    $("#" +  String.fromCharCode(66) + String.fromCharCode(83)).val(this.value);
  });

  $("#" +  String.fromCharCode(66) + String.fromCharCode(84)).on("input", function() {
    $("#" +  String.fromCharCode(84) + String.fromCharCode(66)).val(this.value);
  });

  $("#" +  String.fromCharCode(84) + String.fromCharCode(66)).on("input", function() {
    $("#" +  String.fromCharCode(66) + String.fromCharCode(84)).val(this.value);
  });

  $("#" +  String.fromCharCode(66) + String.fromCharCode(85)).on("input", function() {
    $("#" +  String.fromCharCode(85) + String.fromCharCode(66)).val(this.value);
  });

  $("#" +  String.fromCharCode(85) + String.fromCharCode(66)).on("input", function() {
    $("#" +  String.fromCharCode(66) + String.fromCharCode(85)).val(this.value);
  });

  $("#" +  String.fromCharCode(66) + String.fromCharCode(86)).on("input", function() {
    $("#" +  String.fromCharCode(86) + String.fromCharCode(66)).val(this.value);
  });

  $("#" +  String.fromCharCode(86) + String.fromCharCode(66)).on("input", function() {
    $("#" +  String.fromCharCode(66) + String.fromCharCode(86)).val(this.value);
  });

  $("#" +  String.fromCharCode(66) + String.fromCharCode(87)).on("input", function() {
    $("#" +  String.fromCharCode(87) + String.fromCharCode(66)).val(this.value);
  });

  $("#" +  String.fromCharCode(87) + String.fromCharCode(66)).on("input", function() {
    $("#" +  String.fromCharCode(66) + String.fromCharCode(87)).val(this.value);
  });

  $("#" +  String.fromCharCode(66) + String.fromCharCode(88)).on("input", function() {
    $("#" +  String.fromCharCode(88) + String.fromCharCode(66)).val(this.value);
  });

  $("#" +  String.fromCharCode(88) + String.fromCharCode(66)).on("input", function() {
    $("#" +  String.fromCharCode(66) + String.fromCharCode(88)).val(this.value);
  });

  $("#" +  String.fromCharCode(67) + String.fromCharCode(68)).on("input", function() {
    $("#" +  String.fromCharCode(68) + String.fromCharCode(67)).val(this.value);
  });

  $("#" +  String.fromCharCode(68) + String.fromCharCode(67)).on("input", function() {
    $("#" +  String.fromCharCode(67) + String.fromCharCode(68)).val(this.value);
  });

  $("#" +  String.fromCharCode(67) + String.fromCharCode(69)).on("input", function() {
    $("#" +  String.fromCharCode(69) + String.fromCharCode(67)).val(this.value);
  });

  $("#" +  String.fromCharCode(69) + String.fromCharCode(67)).on("input", function() {
    $("#" +  String.fromCharCode(67) + String.fromCharCode(69)).val(this.value);
  });

  $("#" +  String.fromCharCode(67) + String.fromCharCode(70)).on("input", function() {
    $("#" +  String.fromCharCode(70) + String.fromCharCode(67)).val(this.value);
  });

  $("#" +  String.fromCharCode(70) + String.fromCharCode(67)).on("input", function() {
    $("#" +  String.fromCharCode(67) + String.fromCharCode(70)).val(this.value);
  });

  $("#" +  String.fromCharCode(67) + String.fromCharCode(71)).on("input", function() {
    $("#" +  String.fromCharCode(71) + String.fromCharCode(67)).val(this.value);
  });

  $("#" +  String.fromCharCode(71) + String.fromCharCode(67)).on("input", function() {
    $("#" +  String.fromCharCode(67) + String.fromCharCode(71)).val(this.value);
  });

  $("#" +  String.fromCharCode(67) + String.fromCharCode(72)).on("input", function() {
    $("#" +  String.fromCharCode(72) + String.fromCharCode(67)).val(this.value);
  });

  $("#" +  String.fromCharCode(72) + String.fromCharCode(67)).on("input", function() {
    $("#" +  String.fromCharCode(67) + String.fromCharCode(72)).val(this.value);
  });

  $("#" +  String.fromCharCode(67) + String.fromCharCode(73)).on("input", function() {
    $("#" +  String.fromCharCode(73) + String.fromCharCode(67)).val(this.value);
  });

  $("#" +  String.fromCharCode(73) + String.fromCharCode(67)).on("input", function() {
    $("#" +  String.fromCharCode(67) + String.fromCharCode(73)).val(this.value);
  });

  $("#" +  String.fromCharCode(67) + String.fromCharCode(74)).on("input", function() {
    $("#" +  String.fromCharCode(74) + String.fromCharCode(67)).val(this.value);
  });

  $("#" +  String.fromCharCode(74) + String.fromCharCode(67)).on("input", function() {
    $("#" +  String.fromCharCode(67) + String.fromCharCode(74)).val(this.value);
  });

  $("#" +  String.fromCharCode(67) + String.fromCharCode(75)).on("input", function() {
    $("#" +  String.fromCharCode(75) + String.fromCharCode(67)).val(this.value);
  });

  $("#" +  String.fromCharCode(75) + String.fromCharCode(67)).on("input", function() {
    $("#" +  String.fromCharCode(67) + String.fromCharCode(75)).val(this.value);
  });

  $("#" +  String.fromCharCode(67) + String.fromCharCode(76)).on("input", function() {
    $("#" +  String.fromCharCode(76) + String.fromCharCode(67)).val(this.value);
  });

  $("#" +  String.fromCharCode(76) + String.fromCharCode(67)).on("input", function() {
    $("#" +  String.fromCharCode(67) + String.fromCharCode(76)).val(this.value);
  });

  $("#" +  String.fromCharCode(67) + String.fromCharCode(77)).on("input", function() {
    $("#" +  String.fromCharCode(77) + String.fromCharCode(67)).val(this.value);
  });

  $("#" +  String.fromCharCode(77) + String.fromCharCode(67)).on("input", function() {
    $("#" +  String.fromCharCode(67) + String.fromCharCode(77)).val(this.value);
  });

  $("#" +  String.fromCharCode(67) + String.fromCharCode(78)).on("input", function() {
    $("#" +  String.fromCharCode(78) + String.fromCharCode(67)).val(this.value);
  });

  $("#" +  String.fromCharCode(78) + String.fromCharCode(67)).on("input", function() {
    $("#" +  String.fromCharCode(67) + String.fromCharCode(78)).val(this.value);
  });

  $("#" +  String.fromCharCode(67) + String.fromCharCode(79)).on("input", function() {
    $("#" +  String.fromCharCode(79) + String.fromCharCode(67)).val(this.value);
  });

  $("#" +  String.fromCharCode(79) + String.fromCharCode(67)).on("input", function() {
    $("#" +  String.fromCharCode(67) + String.fromCharCode(79)).val(this.value);
  });

  $("#" +  String.fromCharCode(67) + String.fromCharCode(80)).on("input", function() {
    $("#" +  String.fromCharCode(80) + String.fromCharCode(67)).val(this.value);
  });

  $("#" +  String.fromCharCode(80) + String.fromCharCode(67)).on("input", function() {
    $("#" +  String.fromCharCode(67) + String.fromCharCode(80)).val(this.value);
  });

  $("#" +  String.fromCharCode(67) + String.fromCharCode(81)).on("input", function() {
    $("#" +  String.fromCharCode(81) + String.fromCharCode(67)).val(this.value);
  });

  $("#" +  String.fromCharCode(81) + String.fromCharCode(67)).on("input", function() {
    $("#" +  String.fromCharCode(67) + String.fromCharCode(81)).val(this.value);
  });

  $("#" +  String.fromCharCode(67) + String.fromCharCode(82)).on("input", function() {
    $("#" +  String.fromCharCode(82) + String.fromCharCode(67)).val(this.value);
  });

  $("#" +  String.fromCharCode(82) + String.fromCharCode(67)).on("input", function() {
    $("#" +  String.fromCharCode(67) + String.fromCharCode(82)).val(this.value);
  });

  $("#" +  String.fromCharCode(67) + String.fromCharCode(83)).on("input", function() {
    $("#" +  String.fromCharCode(83) + String.fromCharCode(67)).val(this.value);
  });

  $("#" +  String.fromCharCode(83) + String.fromCharCode(67)).on("input", function() {
    $("#" +  String.fromCharCode(67) + String.fromCharCode(83)).val(this.value);
  });

  $("#" +  String.fromCharCode(67) + String.fromCharCode(84)).on("input", function() {
    $("#" +  String.fromCharCode(84) + String.fromCharCode(67)).val(this.value);
  });

  $("#" +  String.fromCharCode(84) + String.fromCharCode(67)).on("input", function() {
    $("#" +  String.fromCharCode(67) + String.fromCharCode(84)).val(this.value);
  });

  $("#" +  String.fromCharCode(67) + String.fromCharCode(85)).on("input", function() {
    $("#" +  String.fromCharCode(85) + String.fromCharCode(67)).val(this.value);
  });

  $("#" +  String.fromCharCode(85) + String.fromCharCode(67)).on("input", function() {
    $("#" +  String.fromCharCode(67) + String.fromCharCode(85)).val(this.value);
  });

  $("#" +  String.fromCharCode(67) + String.fromCharCode(86)).on("input", function() {
    $("#" +  String.fromCharCode(86) + String.fromCharCode(67)).val(this.value);
  });

  $("#" +  String.fromCharCode(86) + String.fromCharCode(67)).on("input", function() {
    $("#" +  String.fromCharCode(67) + String.fromCharCode(86)).val(this.value);
  });

  $("#" +  String.fromCharCode(67) + String.fromCharCode(87)).on("input", function() {
    $("#" +  String.fromCharCode(87) + String.fromCharCode(67)).val(this.value);
  });

  $("#" +  String.fromCharCode(87) + String.fromCharCode(67)).on("input", function() {
    $("#" +  String.fromCharCode(67) + String.fromCharCode(87)).val(this.value);
  });

  $("#" +  String.fromCharCode(67) + String.fromCharCode(88)).on("input", function() {
    $("#" +  String.fromCharCode(88) + String.fromCharCode(67)).val(this.value);
  });

  $("#" +  String.fromCharCode(88) + String.fromCharCode(67)).on("input", function() {
    $("#" +  String.fromCharCode(67) + String.fromCharCode(88)).val(this.value);
  });

  $("#" +  String.fromCharCode(68) + String.fromCharCode(69)).on("input", function() {
    $("#" +  String.fromCharCode(69) + String.fromCharCode(68)).val(this.value);
  });

  $("#" +  String.fromCharCode(69) + String.fromCharCode(68)).on("input", function() {
    $("#" +  String.fromCharCode(68) + String.fromCharCode(69)).val(this.value);
  });

  $("#" +  String.fromCharCode(68) + String.fromCharCode(70)).on("input", function() {
    $("#" +  String.fromCharCode(70) + String.fromCharCode(68)).val(this.value);
  });

  $("#" +  String.fromCharCode(70) + String.fromCharCode(68)).on("input", function() {
    $("#" +  String.fromCharCode(68) + String.fromCharCode(70)).val(this.value);
  });

  $("#" +  String.fromCharCode(68) + String.fromCharCode(71)).on("input", function() {
    $("#" +  String.fromCharCode(71) + String.fromCharCode(68)).val(this.value);
  });

  $("#" +  String.fromCharCode(71) + String.fromCharCode(68)).on("input", function() {
    $("#" +  String.fromCharCode(68) + String.fromCharCode(71)).val(this.value);
  });

  $("#" +  String.fromCharCode(68) + String.fromCharCode(72)).on("input", function() {
    $("#" +  String.fromCharCode(72) + String.fromCharCode(68)).val(this.value);
  });

  $("#" +  String.fromCharCode(72) + String.fromCharCode(68)).on("input", function() {
    $("#" +  String.fromCharCode(68) + String.fromCharCode(72)).val(this.value);
  });

  $("#" +  String.fromCharCode(68) + String.fromCharCode(73)).on("input", function() {
    $("#" +  String.fromCharCode(73) + String.fromCharCode(68)).val(this.value);
  });

  $("#" +  String.fromCharCode(73) + String.fromCharCode(68)).on("input", function() {
    $("#" +  String.fromCharCode(68) + String.fromCharCode(73)).val(this.value);
  });

  $("#" +  String.fromCharCode(68) + String.fromCharCode(74)).on("input", function() {
    $("#" +  String.fromCharCode(74) + String.fromCharCode(68)).val(this.value);
  });

  $("#" +  String.fromCharCode(74) + String.fromCharCode(68)).on("input", function() {
    $("#" +  String.fromCharCode(68) + String.fromCharCode(74)).val(this.value);
  });

  $("#" +  String.fromCharCode(68) + String.fromCharCode(75)).on("input", function() {
    $("#" +  String.fromCharCode(75) + String.fromCharCode(68)).val(this.value);
  });

  $("#" +  String.fromCharCode(75) + String.fromCharCode(68)).on("input", function() {
    $("#" +  String.fromCharCode(68) + String.fromCharCode(75)).val(this.value);
  });

  $("#" +  String.fromCharCode(68) + String.fromCharCode(76)).on("input", function() {
    $("#" +  String.fromCharCode(76) + String.fromCharCode(68)).val(this.value);
  });

  $("#" +  String.fromCharCode(76) + String.fromCharCode(68)).on("input", function() {
    $("#" +  String.fromCharCode(68) + String.fromCharCode(76)).val(this.value);
  });

  $("#" +  String.fromCharCode(68) + String.fromCharCode(77)).on("input", function() {
    $("#" +  String.fromCharCode(77) + String.fromCharCode(68)).val(this.value);
  });

  $("#" +  String.fromCharCode(77) + String.fromCharCode(68)).on("input", function() {
    $("#" +  String.fromCharCode(68) + String.fromCharCode(77)).val(this.value);
  });

  $("#" +  String.fromCharCode(68) + String.fromCharCode(78)).on("input", function() {
    $("#" +  String.fromCharCode(78) + String.fromCharCode(68)).val(this.value);
  });

  $("#" +  String.fromCharCode(78) + String.fromCharCode(68)).on("input", function() {
    $("#" +  String.fromCharCode(68) + String.fromCharCode(78)).val(this.value);
  });

  $("#" +  String.fromCharCode(68) + String.fromCharCode(79)).on("input", function() {
    $("#" +  String.fromCharCode(79) + String.fromCharCode(68)).val(this.value);
  });

  $("#" +  String.fromCharCode(79) + String.fromCharCode(68)).on("input", function() {
    $("#" +  String.fromCharCode(68) + String.fromCharCode(79)).val(this.value);
  });

  $("#" +  String.fromCharCode(68) + String.fromCharCode(80)).on("input", function() {
    $("#" +  String.fromCharCode(80) + String.fromCharCode(68)).val(this.value);
  });

  $("#" +  String.fromCharCode(80) + String.fromCharCode(68)).on("input", function() {
    $("#" +  String.fromCharCode(68) + String.fromCharCode(80)).val(this.value);
  });

  $("#" +  String.fromCharCode(68) + String.fromCharCode(81)).on("input", function() {
    $("#" +  String.fromCharCode(81) + String.fromCharCode(68)).val(this.value);
  });

  $("#" +  String.fromCharCode(81) + String.fromCharCode(68)).on("input", function() {
    $("#" +  String.fromCharCode(68) + String.fromCharCode(81)).val(this.value);
  });

  $("#" +  String.fromCharCode(68) + String.fromCharCode(82)).on("input", function() {
    $("#" +  String.fromCharCode(82) + String.fromCharCode(68)).val(this.value);
  });

  $("#" +  String.fromCharCode(82) + String.fromCharCode(68)).on("input", function() {
    $("#" +  String.fromCharCode(68) + String.fromCharCode(82)).val(this.value);
  });

  $("#" +  String.fromCharCode(68) + String.fromCharCode(83)).on("input", function() {
    $("#" +  String.fromCharCode(83) + String.fromCharCode(68)).val(this.value);
  });

  $("#" +  String.fromCharCode(83) + String.fromCharCode(68)).on("input", function() {
    $("#" +  String.fromCharCode(68) + String.fromCharCode(83)).val(this.value);
  });

  $("#" +  String.fromCharCode(68) + String.fromCharCode(84)).on("input", function() {
    $("#" +  String.fromCharCode(84) + String.fromCharCode(68)).val(this.value);
  });

  $("#" +  String.fromCharCode(84) + String.fromCharCode(68)).on("input", function() {
    $("#" +  String.fromCharCode(68) + String.fromCharCode(84)).val(this.value);
  });

  $("#" +  String.fromCharCode(68) + String.fromCharCode(85)).on("input", function() {
    $("#" +  String.fromCharCode(85) + String.fromCharCode(68)).val(this.value);
  });

  $("#" +  String.fromCharCode(85) + String.fromCharCode(68)).on("input", function() {
    $("#" +  String.fromCharCode(68) + String.fromCharCode(85)).val(this.value);
  });

  $("#" +  String.fromCharCode(68) + String.fromCharCode(86)).on("input", function() {
    $("#" +  String.fromCharCode(86) + String.fromCharCode(68)).val(this.value);
  });

  $("#" +  String.fromCharCode(86) + String.fromCharCode(68)).on("input", function() {
    $("#" +  String.fromCharCode(68) + String.fromCharCode(86)).val(this.value);
  });

  $("#" +  String.fromCharCode(68) + String.fromCharCode(87)).on("input", function() {
    $("#" +  String.fromCharCode(87) + String.fromCharCode(68)).val(this.value);
  });

  $("#" +  String.fromCharCode(87) + String.fromCharCode(68)).on("input", function() {
    $("#" +  String.fromCharCode(68) + String.fromCharCode(87)).val(this.value);
  });

  $("#" +  String.fromCharCode(68) + String.fromCharCode(88)).on("input", function() {
    $("#" +  String.fromCharCode(88) + String.fromCharCode(68)).val(this.value);
  });

  $("#" +  String.fromCharCode(88) + String.fromCharCode(68)).on("input", function() {
    $("#" +  String.fromCharCode(68) + String.fromCharCode(88)).val(this.value);
  });

  $("#" +  String.fromCharCode(69) + String.fromCharCode(70)).on("input", function() {
    $("#" +  String.fromCharCode(70) + String.fromCharCode(69)).val(this.value);
  });

  $("#" +  String.fromCharCode(70) + String.fromCharCode(69)).on("input", function() {
    $("#" +  String.fromCharCode(69) + String.fromCharCode(70)).val(this.value);
  });

  $("#" +  String.fromCharCode(69) + String.fromCharCode(71)).on("input", function() {
    $("#" +  String.fromCharCode(71) + String.fromCharCode(69)).val(this.value);
  });

  $("#" +  String.fromCharCode(71) + String.fromCharCode(69)).on("input", function() {
    $("#" +  String.fromCharCode(69) + String.fromCharCode(71)).val(this.value);
  });

  $("#" +  String.fromCharCode(69) + String.fromCharCode(72)).on("input", function() {
    $("#" +  String.fromCharCode(72) + String.fromCharCode(69)).val(this.value);
  });

  $("#" +  String.fromCharCode(72) + String.fromCharCode(69)).on("input", function() {
    $("#" +  String.fromCharCode(69) + String.fromCharCode(72)).val(this.value);
  });

  $("#" +  String.fromCharCode(69) + String.fromCharCode(73)).on("input", function() {
    $("#" +  String.fromCharCode(73) + String.fromCharCode(69)).val(this.value);
  });

  $("#" +  String.fromCharCode(73) + String.fromCharCode(69)).on("input", function() {
    $("#" +  String.fromCharCode(69) + String.fromCharCode(73)).val(this.value);
  });

  $("#" +  String.fromCharCode(69) + String.fromCharCode(74)).on("input", function() {
    $("#" +  String.fromCharCode(74) + String.fromCharCode(69)).val(this.value);
  });

  $("#" +  String.fromCharCode(74) + String.fromCharCode(69)).on("input", function() {
    $("#" +  String.fromCharCode(69) + String.fromCharCode(74)).val(this.value);
  });

  $("#" +  String.fromCharCode(69) + String.fromCharCode(75)).on("input", function() {
    $("#" +  String.fromCharCode(75) + String.fromCharCode(69)).val(this.value);
  });

  $("#" +  String.fromCharCode(75) + String.fromCharCode(69)).on("input", function() {
    $("#" +  String.fromCharCode(69) + String.fromCharCode(75)).val(this.value);
  });

  $("#" +  String.fromCharCode(69) + String.fromCharCode(76)).on("input", function() {
    $("#" +  String.fromCharCode(76) + String.fromCharCode(69)).val(this.value);
  });

  $("#" +  String.fromCharCode(76) + String.fromCharCode(69)).on("input", function() {
    $("#" +  String.fromCharCode(69) + String.fromCharCode(76)).val(this.value);
  });

  $("#" +  String.fromCharCode(69) + String.fromCharCode(77)).on("input", function() {
    $("#" +  String.fromCharCode(77) + String.fromCharCode(69)).val(this.value);
  });

  $("#" +  String.fromCharCode(77) + String.fromCharCode(69)).on("input", function() {
    $("#" +  String.fromCharCode(69) + String.fromCharCode(77)).val(this.value);
  });

  $("#" +  String.fromCharCode(69) + String.fromCharCode(78)).on("input", function() {
    $("#" +  String.fromCharCode(78) + String.fromCharCode(69)).val(this.value);
  });

  $("#" +  String.fromCharCode(78) + String.fromCharCode(69)).on("input", function() {
    $("#" +  String.fromCharCode(69) + String.fromCharCode(78)).val(this.value);
  });

  $("#" +  String.fromCharCode(69) + String.fromCharCode(79)).on("input", function() {
    $("#" +  String.fromCharCode(79) + String.fromCharCode(69)).val(this.value);
  });

  $("#" +  String.fromCharCode(79) + String.fromCharCode(69)).on("input", function() {
    $("#" +  String.fromCharCode(69) + String.fromCharCode(79)).val(this.value);
  });

  $("#" +  String.fromCharCode(69) + String.fromCharCode(80)).on("input", function() {
    $("#" +  String.fromCharCode(80) + String.fromCharCode(69)).val(this.value);
  });

  $("#" +  String.fromCharCode(80) + String.fromCharCode(69)).on("input", function() {
    $("#" +  String.fromCharCode(69) + String.fromCharCode(80)).val(this.value);
  });

  $("#" +  String.fromCharCode(69) + String.fromCharCode(81)).on("input", function() {
    $("#" +  String.fromCharCode(81) + String.fromCharCode(69)).val(this.value);
  });

  $("#" +  String.fromCharCode(81) + String.fromCharCode(69)).on("input", function() {
    $("#" +  String.fromCharCode(69) + String.fromCharCode(81)).val(this.value);
  });

  $("#" +  String.fromCharCode(69) + String.fromCharCode(82)).on("input", function() {
    $("#" +  String.fromCharCode(82) + String.fromCharCode(69)).val(this.value);
  });

  $("#" +  String.fromCharCode(82) + String.fromCharCode(69)).on("input", function() {
    $("#" +  String.fromCharCode(69) + String.fromCharCode(82)).val(this.value);
  });

  $("#" +  String.fromCharCode(69) + String.fromCharCode(83)).on("input", function() {
    $("#" +  String.fromCharCode(83) + String.fromCharCode(69)).val(this.value);
  });

  $("#" +  String.fromCharCode(83) + String.fromCharCode(69)).on("input", function() {
    $("#" +  String.fromCharCode(69) + String.fromCharCode(83)).val(this.value);
  });

  $("#" +  String.fromCharCode(69) + String.fromCharCode(84)).on("input", function() {
    $("#" +  String.fromCharCode(84) + String.fromCharCode(69)).val(this.value);
  });

  $("#" +  String.fromCharCode(84) + String.fromCharCode(69)).on("input", function() {
    $("#" +  String.fromCharCode(69) + String.fromCharCode(84)).val(this.value);
  });

  $("#" +  String.fromCharCode(69) + String.fromCharCode(85)).on("input", function() {
    $("#" +  String.fromCharCode(85) + String.fromCharCode(69)).val(this.value);
  });

  $("#" +  String.fromCharCode(85) + String.fromCharCode(69)).on("input", function() {
    $("#" +  String.fromCharCode(69) + String.fromCharCode(85)).val(this.value);
  });

  $("#" +  String.fromCharCode(69) + String.fromCharCode(86)).on("input", function() {
    $("#" +  String.fromCharCode(86) + String.fromCharCode(69)).val(this.value);
  });

  $("#" +  String.fromCharCode(86) + String.fromCharCode(69)).on("input", function() {
    $("#" +  String.fromCharCode(69) + String.fromCharCode(86)).val(this.value);
  });

  $("#" +  String.fromCharCode(69) + String.fromCharCode(87)).on("input", function() {
    $("#" +  String.fromCharCode(87) + String.fromCharCode(69)).val(this.value);
  });

  $("#" +  String.fromCharCode(87) + String.fromCharCode(69)).on("input", function() {
    $("#" +  String.fromCharCode(69) + String.fromCharCode(87)).val(this.value);
  });

  $("#" +  String.fromCharCode(69) + String.fromCharCode(88)).on("input", function() {
    $("#" +  String.fromCharCode(88) + String.fromCharCode(69)).val(this.value);
  });

  $("#" +  String.fromCharCode(88) + String.fromCharCode(69)).on("input", function() {
    $("#" +  String.fromCharCode(69) + String.fromCharCode(88)).val(this.value);
  });

  $("#" +  String.fromCharCode(70) + String.fromCharCode(71)).on("input", function() {
    $("#" +  String.fromCharCode(71) + String.fromCharCode(70)).val(this.value);
  });

  $("#" +  String.fromCharCode(71) + String.fromCharCode(70)).on("input", function() {
    $("#" +  String.fromCharCode(70) + String.fromCharCode(71)).val(this.value);
  });

  $("#" +  String.fromCharCode(70) + String.fromCharCode(72)).on("input", function() {
    $("#" +  String.fromCharCode(72) + String.fromCharCode(70)).val(this.value);
  });

  $("#" +  String.fromCharCode(72) + String.fromCharCode(70)).on("input", function() {
    $("#" +  String.fromCharCode(70) + String.fromCharCode(72)).val(this.value);
  });

  $("#" +  String.fromCharCode(70) + String.fromCharCode(73)).on("input", function() {
    $("#" +  String.fromCharCode(73) + String.fromCharCode(70)).val(this.value);
  });

  $("#" +  String.fromCharCode(73) + String.fromCharCode(70)).on("input", function() {
    $("#" +  String.fromCharCode(70) + String.fromCharCode(73)).val(this.value);
  });

  $("#" +  String.fromCharCode(70) + String.fromCharCode(74)).on("input", function() {
    $("#" +  String.fromCharCode(74) + String.fromCharCode(70)).val(this.value);
  });

  $("#" +  String.fromCharCode(74) + String.fromCharCode(70)).on("input", function() {
    $("#" +  String.fromCharCode(70) + String.fromCharCode(74)).val(this.value);
  });

  $("#" +  String.fromCharCode(70) + String.fromCharCode(75)).on("input", function() {
    $("#" +  String.fromCharCode(75) + String.fromCharCode(70)).val(this.value);
  });

  $("#" +  String.fromCharCode(75) + String.fromCharCode(70)).on("input", function() {
    $("#" +  String.fromCharCode(70) + String.fromCharCode(75)).val(this.value);
  });

  $("#" +  String.fromCharCode(70) + String.fromCharCode(76)).on("input", function() {
    $("#" +  String.fromCharCode(76) + String.fromCharCode(70)).val(this.value);
  });

  $("#" +  String.fromCharCode(76) + String.fromCharCode(70)).on("input", function() {
    $("#" +  String.fromCharCode(70) + String.fromCharCode(76)).val(this.value);
  });

  $("#" +  String.fromCharCode(70) + String.fromCharCode(77)).on("input", function() {
    $("#" +  String.fromCharCode(77) + String.fromCharCode(70)).val(this.value);
  });

  $("#" +  String.fromCharCode(77) + String.fromCharCode(70)).on("input", function() {
    $("#" +  String.fromCharCode(70) + String.fromCharCode(77)).val(this.value);
  });

  $("#" +  String.fromCharCode(70) + String.fromCharCode(78)).on("input", function() {
    $("#" +  String.fromCharCode(78) + String.fromCharCode(70)).val(this.value);
  });

  $("#" +  String.fromCharCode(78) + String.fromCharCode(70)).on("input", function() {
    $("#" +  String.fromCharCode(70) + String.fromCharCode(78)).val(this.value);
  });

  $("#" +  String.fromCharCode(70) + String.fromCharCode(79)).on("input", function() {
    $("#" +  String.fromCharCode(79) + String.fromCharCode(70)).val(this.value);
  });

  $("#" +  String.fromCharCode(79) + String.fromCharCode(70)).on("input", function() {
    $("#" +  String.fromCharCode(70) + String.fromCharCode(79)).val(this.value);
  });

  $("#" +  String.fromCharCode(70) + String.fromCharCode(80)).on("input", function() {
    $("#" +  String.fromCharCode(80) + String.fromCharCode(70)).val(this.value);
  });

  $("#" +  String.fromCharCode(80) + String.fromCharCode(70)).on("input", function() {
    $("#" +  String.fromCharCode(70) + String.fromCharCode(80)).val(this.value);
  });

  $("#" +  String.fromCharCode(70) + String.fromCharCode(81)).on("input", function() {
    $("#" +  String.fromCharCode(81) + String.fromCharCode(70)).val(this.value);
  });

  $("#" +  String.fromCharCode(81) + String.fromCharCode(70)).on("input", function() {
    $("#" +  String.fromCharCode(70) + String.fromCharCode(81)).val(this.value);
  });

  $("#" +  String.fromCharCode(70) + String.fromCharCode(82)).on("input", function() {
    $("#" +  String.fromCharCode(82) + String.fromCharCode(70)).val(this.value);
  });

  $("#" +  String.fromCharCode(82) + String.fromCharCode(70)).on("input", function() {
    $("#" +  String.fromCharCode(70) + String.fromCharCode(82)).val(this.value);
  });

  $("#" +  String.fromCharCode(70) + String.fromCharCode(83)).on("input", function() {
    $("#" +  String.fromCharCode(83) + String.fromCharCode(70)).val(this.value);
  });

  $("#" +  String.fromCharCode(83) + String.fromCharCode(70)).on("input", function() {
    $("#" +  String.fromCharCode(70) + String.fromCharCode(83)).val(this.value);
  });

  $("#" +  String.fromCharCode(70) + String.fromCharCode(84)).on("input", function() {
    $("#" +  String.fromCharCode(84) + String.fromCharCode(70)).val(this.value);
  });

  $("#" +  String.fromCharCode(84) + String.fromCharCode(70)).on("input", function() {
    $("#" +  String.fromCharCode(70) + String.fromCharCode(84)).val(this.value);
  });

  $("#" +  String.fromCharCode(70) + String.fromCharCode(85)).on("input", function() {
    $("#" +  String.fromCharCode(85) + String.fromCharCode(70)).val(this.value);
  });

  $("#" +  String.fromCharCode(85) + String.fromCharCode(70)).on("input", function() {
    $("#" +  String.fromCharCode(70) + String.fromCharCode(85)).val(this.value);
  });

  $("#" +  String.fromCharCode(70) + String.fromCharCode(86)).on("input", function() {
    $("#" +  String.fromCharCode(86) + String.fromCharCode(70)).val(this.value);
  });

  $("#" +  String.fromCharCode(86) + String.fromCharCode(70)).on("input", function() {
    $("#" +  String.fromCharCode(70) + String.fromCharCode(86)).val(this.value);
  });

  $("#" +  String.fromCharCode(70) + String.fromCharCode(87)).on("input", function() {
    $("#" +  String.fromCharCode(87) + String.fromCharCode(70)).val(this.value);
  });

  $("#" +  String.fromCharCode(87) + String.fromCharCode(70)).on("input", function() {
    $("#" +  String.fromCharCode(70) + String.fromCharCode(87)).val(this.value);
  });

  $("#" +  String.fromCharCode(70) + String.fromCharCode(88)).on("input", function() {
    $("#" +  String.fromCharCode(88) + String.fromCharCode(70)).val(this.value);
  });

  $("#" +  String.fromCharCode(88) + String.fromCharCode(70)).on("input", function() {
    $("#" +  String.fromCharCode(70) + String.fromCharCode(88)).val(this.value);
  });

  $("#" +  String.fromCharCode(71) + String.fromCharCode(72)).on("input", function() {
    $("#" +  String.fromCharCode(72) + String.fromCharCode(71)).val(this.value);
  });

  $("#" +  String.fromCharCode(72) + String.fromCharCode(71)).on("input", function() {
    $("#" +  String.fromCharCode(71) + String.fromCharCode(72)).val(this.value);
  });

  $("#" +  String.fromCharCode(71) + String.fromCharCode(73)).on("input", function() {
    $("#" +  String.fromCharCode(73) + String.fromCharCode(71)).val(this.value);
  });

  $("#" +  String.fromCharCode(73) + String.fromCharCode(71)).on("input", function() {
    $("#" +  String.fromCharCode(71) + String.fromCharCode(73)).val(this.value);
  });

  $("#" +  String.fromCharCode(71) + String.fromCharCode(74)).on("input", function() {
    $("#" +  String.fromCharCode(74) + String.fromCharCode(71)).val(this.value);
  });

  $("#" +  String.fromCharCode(74) + String.fromCharCode(71)).on("input", function() {
    $("#" +  String.fromCharCode(71) + String.fromCharCode(74)).val(this.value);
  });

  $("#" +  String.fromCharCode(71) + String.fromCharCode(75)).on("input", function() {
    $("#" +  String.fromCharCode(75) + String.fromCharCode(71)).val(this.value);
  });

  $("#" +  String.fromCharCode(75) + String.fromCharCode(71)).on("input", function() {
    $("#" +  String.fromCharCode(71) + String.fromCharCode(75)).val(this.value);
  });

  $("#" +  String.fromCharCode(71) + String.fromCharCode(76)).on("input", function() {
    $("#" +  String.fromCharCode(76) + String.fromCharCode(71)).val(this.value);
  });

  $("#" +  String.fromCharCode(76) + String.fromCharCode(71)).on("input", function() {
    $("#" +  String.fromCharCode(71) + String.fromCharCode(76)).val(this.value);
  });

  $("#" +  String.fromCharCode(71) + String.fromCharCode(77)).on("input", function() {
    $("#" +  String.fromCharCode(77) + String.fromCharCode(71)).val(this.value);
  });

  $("#" +  String.fromCharCode(77) + String.fromCharCode(71)).on("input", function() {
    $("#" +  String.fromCharCode(71) + String.fromCharCode(77)).val(this.value);
  });

  $("#" +  String.fromCharCode(71) + String.fromCharCode(78)).on("input", function() {
    $("#" +  String.fromCharCode(78) + String.fromCharCode(71)).val(this.value);
  });

  $("#" +  String.fromCharCode(78) + String.fromCharCode(71)).on("input", function() {
    $("#" +  String.fromCharCode(71) + String.fromCharCode(78)).val(this.value);
  });

  $("#" +  String.fromCharCode(71) + String.fromCharCode(79)).on("input", function() {
    $("#" +  String.fromCharCode(79) + String.fromCharCode(71)).val(this.value);
  });

  $("#" +  String.fromCharCode(79) + String.fromCharCode(71)).on("input", function() {
    $("#" +  String.fromCharCode(71) + String.fromCharCode(79)).val(this.value);
  });

  $("#" +  String.fromCharCode(71) + String.fromCharCode(80)).on("input", function() {
    $("#" +  String.fromCharCode(80) + String.fromCharCode(71)).val(this.value);
  });

  $("#" +  String.fromCharCode(80) + String.fromCharCode(71)).on("input", function() {
    $("#" +  String.fromCharCode(71) + String.fromCharCode(80)).val(this.value);
  });

  $("#" +  String.fromCharCode(71) + String.fromCharCode(81)).on("input", function() {
    $("#" +  String.fromCharCode(81) + String.fromCharCode(71)).val(this.value);
  });

  $("#" +  String.fromCharCode(81) + String.fromCharCode(71)).on("input", function() {
    $("#" +  String.fromCharCode(71) + String.fromCharCode(81)).val(this.value);
  });

  $("#" +  String.fromCharCode(71) + String.fromCharCode(82)).on("input", function() {
    $("#" +  String.fromCharCode(82) + String.fromCharCode(71)).val(this.value);
  });

  $("#" +  String.fromCharCode(82) + String.fromCharCode(71)).on("input", function() {
    $("#" +  String.fromCharCode(71) + String.fromCharCode(82)).val(this.value);
  });

  $("#" +  String.fromCharCode(71) + String.fromCharCode(83)).on("input", function() {
    $("#" +  String.fromCharCode(83) + String.fromCharCode(71)).val(this.value);
  });

  $("#" +  String.fromCharCode(83) + String.fromCharCode(71)).on("input", function() {
    $("#" +  String.fromCharCode(71) + String.fromCharCode(83)).val(this.value);
  });

  $("#" +  String.fromCharCode(71) + String.fromCharCode(84)).on("input", function() {
    $("#" +  String.fromCharCode(84) + String.fromCharCode(71)).val(this.value);
  });

  $("#" +  String.fromCharCode(84) + String.fromCharCode(71)).on("input", function() {
    $("#" +  String.fromCharCode(71) + String.fromCharCode(84)).val(this.value);
  });

  $("#" +  String.fromCharCode(71) + String.fromCharCode(85)).on("input", function() {
    $("#" +  String.fromCharCode(85) + String.fromCharCode(71)).val(this.value);
  });

  $("#" +  String.fromCharCode(85) + String.fromCharCode(71)).on("input", function() {
    $("#" +  String.fromCharCode(71) + String.fromCharCode(85)).val(this.value);
  });

  $("#" +  String.fromCharCode(71) + String.fromCharCode(86)).on("input", function() {
    $("#" +  String.fromCharCode(86) + String.fromCharCode(71)).val(this.value);
  });

  $("#" +  String.fromCharCode(86) + String.fromCharCode(71)).on("input", function() {
    $("#" +  String.fromCharCode(71) + String.fromCharCode(86)).val(this.value);
  });

  $("#" +  String.fromCharCode(71) + String.fromCharCode(87)).on("input", function() {
    $("#" +  String.fromCharCode(87) + String.fromCharCode(71)).val(this.value);
  });

  $("#" +  String.fromCharCode(87) + String.fromCharCode(71)).on("input", function() {
    $("#" +  String.fromCharCode(71) + String.fromCharCode(87)).val(this.value);
  });

  $("#" +  String.fromCharCode(71) + String.fromCharCode(88)).on("input", function() {
    $("#" +  String.fromCharCode(88) + String.fromCharCode(71)).val(this.value);
  });

  $("#" +  String.fromCharCode(88) + String.fromCharCode(71)).on("input", function() {
    $("#" +  String.fromCharCode(71) + String.fromCharCode(88)).val(this.value);
  });

  $("#" +  String.fromCharCode(72) + String.fromCharCode(73)).on("input", function() {
    $("#" +  String.fromCharCode(73) + String.fromCharCode(72)).val(this.value);
  });

  $("#" +  String.fromCharCode(73) + String.fromCharCode(72)).on("input", function() {
    $("#" +  String.fromCharCode(72) + String.fromCharCode(73)).val(this.value);
  });

  $("#" +  String.fromCharCode(72) + String.fromCharCode(74)).on("input", function() {
    $("#" +  String.fromCharCode(74) + String.fromCharCode(72)).val(this.value);
  });

  $("#" +  String.fromCharCode(74) + String.fromCharCode(72)).on("input", function() {
    $("#" +  String.fromCharCode(72) + String.fromCharCode(74)).val(this.value);
  });

  $("#" +  String.fromCharCode(72) + String.fromCharCode(75)).on("input", function() {
    $("#" +  String.fromCharCode(75) + String.fromCharCode(72)).val(this.value);
  });

  $("#" +  String.fromCharCode(75) + String.fromCharCode(72)).on("input", function() {
    $("#" +  String.fromCharCode(72) + String.fromCharCode(75)).val(this.value);
  });

  $("#" +  String.fromCharCode(72) + String.fromCharCode(76)).on("input", function() {
    $("#" +  String.fromCharCode(76) + String.fromCharCode(72)).val(this.value);
  });

  $("#" +  String.fromCharCode(76) + String.fromCharCode(72)).on("input", function() {
    $("#" +  String.fromCharCode(72) + String.fromCharCode(76)).val(this.value);
  });

  $("#" +  String.fromCharCode(72) + String.fromCharCode(77)).on("input", function() {
    $("#" +  String.fromCharCode(77) + String.fromCharCode(72)).val(this.value);
  });

  $("#" +  String.fromCharCode(77) + String.fromCharCode(72)).on("input", function() {
    $("#" +  String.fromCharCode(72) + String.fromCharCode(77)).val(this.value);
  });

  $("#" +  String.fromCharCode(72) + String.fromCharCode(78)).on("input", function() {
    $("#" +  String.fromCharCode(78) + String.fromCharCode(72)).val(this.value);
  });

  $("#" +  String.fromCharCode(78) + String.fromCharCode(72)).on("input", function() {
    $("#" +  String.fromCharCode(72) + String.fromCharCode(78)).val(this.value);
  });

  $("#" +  String.fromCharCode(72) + String.fromCharCode(79)).on("input", function() {
    $("#" +  String.fromCharCode(79) + String.fromCharCode(72)).val(this.value);
  });

  $("#" +  String.fromCharCode(79) + String.fromCharCode(72)).on("input", function() {
    $("#" +  String.fromCharCode(72) + String.fromCharCode(79)).val(this.value);
  });

  $("#" +  String.fromCharCode(72) + String.fromCharCode(80)).on("input", function() {
    $("#" +  String.fromCharCode(80) + String.fromCharCode(72)).val(this.value);
  });

  $("#" +  String.fromCharCode(80) + String.fromCharCode(72)).on("input", function() {
    $("#" +  String.fromCharCode(72) + String.fromCharCode(80)).val(this.value);
  });

  $("#" +  String.fromCharCode(72) + String.fromCharCode(81)).on("input", function() {
    $("#" +  String.fromCharCode(81) + String.fromCharCode(72)).val(this.value);
  });

  $("#" +  String.fromCharCode(81) + String.fromCharCode(72)).on("input", function() {
    $("#" +  String.fromCharCode(72) + String.fromCharCode(81)).val(this.value);
  });

  $("#" +  String.fromCharCode(72) + String.fromCharCode(82)).on("input", function() {
    $("#" +  String.fromCharCode(82) + String.fromCharCode(72)).val(this.value);
  });

  $("#" +  String.fromCharCode(82) + String.fromCharCode(72)).on("input", function() {
    $("#" +  String.fromCharCode(72) + String.fromCharCode(82)).val(this.value);
  });

  $("#" +  String.fromCharCode(72) + String.fromCharCode(83)).on("input", function() {
    $("#" +  String.fromCharCode(83) + String.fromCharCode(72)).val(this.value);
  });

  $("#" +  String.fromCharCode(83) + String.fromCharCode(72)).on("input", function() {
    $("#" +  String.fromCharCode(72) + String.fromCharCode(83)).val(this.value);
  });

  $("#" +  String.fromCharCode(72) + String.fromCharCode(84)).on("input", function() {
    $("#" +  String.fromCharCode(84) + String.fromCharCode(72)).val(this.value);
  });

  $("#" +  String.fromCharCode(84) + String.fromCharCode(72)).on("input", function() {
    $("#" +  String.fromCharCode(72) + String.fromCharCode(84)).val(this.value);
  });

  $("#" +  String.fromCharCode(72) + String.fromCharCode(85)).on("input", function() {
    $("#" +  String.fromCharCode(85) + String.fromCharCode(72)).val(this.value);
  });

  $("#" +  String.fromCharCode(85) + String.fromCharCode(72)).on("input", function() {
    $("#" +  String.fromCharCode(72) + String.fromCharCode(85)).val(this.value);
  });

  $("#" +  String.fromCharCode(72) + String.fromCharCode(86)).on("input", function() {
    $("#" +  String.fromCharCode(86) + String.fromCharCode(72)).val(this.value);
  });

  $("#" +  String.fromCharCode(86) + String.fromCharCode(72)).on("input", function() {
    $("#" +  String.fromCharCode(72) + String.fromCharCode(86)).val(this.value);
  });

  $("#" +  String.fromCharCode(72) + String.fromCharCode(87)).on("input", function() {
    $("#" +  String.fromCharCode(87) + String.fromCharCode(72)).val(this.value);
  });

  $("#" +  String.fromCharCode(87) + String.fromCharCode(72)).on("input", function() {
    $("#" +  String.fromCharCode(72) + String.fromCharCode(87)).val(this.value);
  });

  $("#" +  String.fromCharCode(72) + String.fromCharCode(88)).on("input", function() {
    $("#" +  String.fromCharCode(88) + String.fromCharCode(72)).val(this.value);
  });

  $("#" +  String.fromCharCode(88) + String.fromCharCode(72)).on("input", function() {
    $("#" +  String.fromCharCode(72) + String.fromCharCode(88)).val(this.value);
  });

  $("#" +  String.fromCharCode(73) + String.fromCharCode(74)).on("input", function() {
    $("#" +  String.fromCharCode(74) + String.fromCharCode(73)).val(this.value);
  });

  $("#" +  String.fromCharCode(74) + String.fromCharCode(73)).on("input", function() {
    $("#" +  String.fromCharCode(73) + String.fromCharCode(74)).val(this.value);
  });

  $("#" +  String.fromCharCode(73) + String.fromCharCode(75)).on("input", function() {
    $("#" +  String.fromCharCode(75) + String.fromCharCode(73)).val(this.value);
  });

  $("#" +  String.fromCharCode(75) + String.fromCharCode(73)).on("input", function() {
    $("#" +  String.fromCharCode(73) + String.fromCharCode(75)).val(this.value);
  });

  $("#" +  String.fromCharCode(73) + String.fromCharCode(76)).on("input", function() {
    $("#" +  String.fromCharCode(76) + String.fromCharCode(73)).val(this.value);
  });

  $("#" +  String.fromCharCode(76) + String.fromCharCode(73)).on("input", function() {
    $("#" +  String.fromCharCode(73) + String.fromCharCode(76)).val(this.value);
  });

  $("#" +  String.fromCharCode(73) + String.fromCharCode(77)).on("input", function() {
    $("#" +  String.fromCharCode(77) + String.fromCharCode(73)).val(this.value);
  });

  $("#" +  String.fromCharCode(77) + String.fromCharCode(73)).on("input", function() {
    $("#" +  String.fromCharCode(73) + String.fromCharCode(77)).val(this.value);
  });

  $("#" +  String.fromCharCode(73) + String.fromCharCode(78)).on("input", function() {
    $("#" +  String.fromCharCode(78) + String.fromCharCode(73)).val(this.value);
  });

  $("#" +  String.fromCharCode(78) + String.fromCharCode(73)).on("input", function() {
    $("#" +  String.fromCharCode(73) + String.fromCharCode(78)).val(this.value);
  });

  $("#" +  String.fromCharCode(73) + String.fromCharCode(79)).on("input", function() {
    $("#" +  String.fromCharCode(79) + String.fromCharCode(73)).val(this.value);
  });

  $("#" +  String.fromCharCode(79) + String.fromCharCode(73)).on("input", function() {
    $("#" +  String.fromCharCode(73) + String.fromCharCode(79)).val(this.value);
  });

  $("#" +  String.fromCharCode(73) + String.fromCharCode(80)).on("input", function() {
    $("#" +  String.fromCharCode(80) + String.fromCharCode(73)).val(this.value);
  });

  $("#" +  String.fromCharCode(80) + String.fromCharCode(73)).on("input", function() {
    $("#" +  String.fromCharCode(73) + String.fromCharCode(80)).val(this.value);
  });

  $("#" +  String.fromCharCode(73) + String.fromCharCode(81)).on("input", function() {
    $("#" +  String.fromCharCode(81) + String.fromCharCode(73)).val(this.value);
  });

  $("#" +  String.fromCharCode(81) + String.fromCharCode(73)).on("input", function() {
    $("#" +  String.fromCharCode(73) + String.fromCharCode(81)).val(this.value);
  });

  $("#" +  String.fromCharCode(73) + String.fromCharCode(82)).on("input", function() {
    $("#" +  String.fromCharCode(82) + String.fromCharCode(73)).val(this.value);
  });

  $("#" +  String.fromCharCode(82) + String.fromCharCode(73)).on("input", function() {
    $("#" +  String.fromCharCode(73) + String.fromCharCode(82)).val(this.value);
  });

  $("#" +  String.fromCharCode(73) + String.fromCharCode(83)).on("input", function() {
    $("#" +  String.fromCharCode(83) + String.fromCharCode(73)).val(this.value);
  });

  $("#" +  String.fromCharCode(83) + String.fromCharCode(73)).on("input", function() {
    $("#" +  String.fromCharCode(73) + String.fromCharCode(83)).val(this.value);
  });

  $("#" +  String.fromCharCode(73) + String.fromCharCode(84)).on("input", function() {
    $("#" +  String.fromCharCode(84) + String.fromCharCode(73)).val(this.value);
  });

  $("#" +  String.fromCharCode(84) + String.fromCharCode(73)).on("input", function() {
    $("#" +  String.fromCharCode(73) + String.fromCharCode(84)).val(this.value);
  });

  $("#" +  String.fromCharCode(73) + String.fromCharCode(85)).on("input", function() {
    $("#" +  String.fromCharCode(85) + String.fromCharCode(73)).val(this.value);
  });

  $("#" +  String.fromCharCode(85) + String.fromCharCode(73)).on("input", function() {
    $("#" +  String.fromCharCode(73) + String.fromCharCode(85)).val(this.value);
  });

  $("#" +  String.fromCharCode(73) + String.fromCharCode(86)).on("input", function() {
    $("#" +  String.fromCharCode(86) + String.fromCharCode(73)).val(this.value);
  });

  $("#" +  String.fromCharCode(86) + String.fromCharCode(73)).on("input", function() {
    $("#" +  String.fromCharCode(73) + String.fromCharCode(86)).val(this.value);
  });

  $("#" +  String.fromCharCode(73) + String.fromCharCode(87)).on("input", function() {
    $("#" +  String.fromCharCode(87) + String.fromCharCode(73)).val(this.value);
  });

  $("#" +  String.fromCharCode(87) + String.fromCharCode(73)).on("input", function() {
    $("#" +  String.fromCharCode(73) + String.fromCharCode(87)).val(this.value);
  });

  $("#" +  String.fromCharCode(73) + String.fromCharCode(88)).on("input", function() {
    $("#" +  String.fromCharCode(88) + String.fromCharCode(73)).val(this.value);
  });

  $("#" +  String.fromCharCode(88) + String.fromCharCode(73)).on("input", function() {
    $("#" +  String.fromCharCode(73) + String.fromCharCode(88)).val(this.value);
  });

  $("#" +  String.fromCharCode(74) + String.fromCharCode(75)).on("input", function() {
    $("#" +  String.fromCharCode(75) + String.fromCharCode(74)).val(this.value);
  });

  $("#" +  String.fromCharCode(75) + String.fromCharCode(74)).on("input", function() {
    $("#" +  String.fromCharCode(74) + String.fromCharCode(75)).val(this.value);
  });

  $("#" +  String.fromCharCode(74) + String.fromCharCode(76)).on("input", function() {
    $("#" +  String.fromCharCode(76) + String.fromCharCode(74)).val(this.value);
  });

  $("#" +  String.fromCharCode(76) + String.fromCharCode(74)).on("input", function() {
    $("#" +  String.fromCharCode(74) + String.fromCharCode(76)).val(this.value);
  });

  $("#" +  String.fromCharCode(74) + String.fromCharCode(77)).on("input", function() {
    $("#" +  String.fromCharCode(77) + String.fromCharCode(74)).val(this.value);
  });

  $("#" +  String.fromCharCode(77) + String.fromCharCode(74)).on("input", function() {
    $("#" +  String.fromCharCode(74) + String.fromCharCode(77)).val(this.value);
  });

  $("#" +  String.fromCharCode(74) + String.fromCharCode(78)).on("input", function() {
    $("#" +  String.fromCharCode(78) + String.fromCharCode(74)).val(this.value);
  });

  $("#" +  String.fromCharCode(78) + String.fromCharCode(74)).on("input", function() {
    $("#" +  String.fromCharCode(74) + String.fromCharCode(78)).val(this.value);
  });

  $("#" +  String.fromCharCode(74) + String.fromCharCode(79)).on("input", function() {
    $("#" +  String.fromCharCode(79) + String.fromCharCode(74)).val(this.value);
  });

  $("#" +  String.fromCharCode(79) + String.fromCharCode(74)).on("input", function() {
    $("#" +  String.fromCharCode(74) + String.fromCharCode(79)).val(this.value);
  });

  $("#" +  String.fromCharCode(74) + String.fromCharCode(80)).on("input", function() {
    $("#" +  String.fromCharCode(80) + String.fromCharCode(74)).val(this.value);
  });

  $("#" +  String.fromCharCode(80) + String.fromCharCode(74)).on("input", function() {
    $("#" +  String.fromCharCode(74) + String.fromCharCode(80)).val(this.value);
  });

  $("#" +  String.fromCharCode(74) + String.fromCharCode(81)).on("input", function() {
    $("#" +  String.fromCharCode(81) + String.fromCharCode(74)).val(this.value);
  });

  $("#" +  String.fromCharCode(81) + String.fromCharCode(74)).on("input", function() {
    $("#" +  String.fromCharCode(74) + String.fromCharCode(81)).val(this.value);
  });

  $("#" +  String.fromCharCode(74) + String.fromCharCode(82)).on("input", function() {
    $("#" +  String.fromCharCode(82) + String.fromCharCode(74)).val(this.value);
  });

  $("#" +  String.fromCharCode(82) + String.fromCharCode(74)).on("input", function() {
    $("#" +  String.fromCharCode(74) + String.fromCharCode(82)).val(this.value);
  });

  $("#" +  String.fromCharCode(74) + String.fromCharCode(83)).on("input", function() {
    $("#" +  String.fromCharCode(83) + String.fromCharCode(74)).val(this.value);
  });

  $("#" +  String.fromCharCode(83) + String.fromCharCode(74)).on("input", function() {
    $("#" +  String.fromCharCode(74) + String.fromCharCode(83)).val(this.value);
  });

  $("#" +  String.fromCharCode(74) + String.fromCharCode(84)).on("input", function() {
    $("#" +  String.fromCharCode(84) + String.fromCharCode(74)).val(this.value);
  });

  $("#" +  String.fromCharCode(84) + String.fromCharCode(74)).on("input", function() {
    $("#" +  String.fromCharCode(74) + String.fromCharCode(84)).val(this.value);
  });

  $("#" +  String.fromCharCode(74) + String.fromCharCode(85)).on("input", function() {
    $("#" +  String.fromCharCode(85) + String.fromCharCode(74)).val(this.value);
  });

  $("#" +  String.fromCharCode(85) + String.fromCharCode(74)).on("input", function() {
    $("#" +  String.fromCharCode(74) + String.fromCharCode(85)).val(this.value);
  });

  $("#" +  String.fromCharCode(74) + String.fromCharCode(86)).on("input", function() {
    $("#" +  String.fromCharCode(86) + String.fromCharCode(74)).val(this.value);
  });

  $("#" +  String.fromCharCode(86) + String.fromCharCode(74)).on("input", function() {
    $("#" +  String.fromCharCode(74) + String.fromCharCode(86)).val(this.value);
  });

  $("#" +  String.fromCharCode(74) + String.fromCharCode(87)).on("input", function() {
    $("#" +  String.fromCharCode(87) + String.fromCharCode(74)).val(this.value);
  });

  $("#" +  String.fromCharCode(87) + String.fromCharCode(74)).on("input", function() {
    $("#" +  String.fromCharCode(74) + String.fromCharCode(87)).val(this.value);
  });

  $("#" +  String.fromCharCode(74) + String.fromCharCode(88)).on("input", function() {
    $("#" +  String.fromCharCode(88) + String.fromCharCode(74)).val(this.value);
  });

  $("#" +  String.fromCharCode(88) + String.fromCharCode(74)).on("input", function() {
    $("#" +  String.fromCharCode(74) + String.fromCharCode(88)).val(this.value);
  });

  $("#" +  String.fromCharCode(75) + String.fromCharCode(76)).on("input", function() {
    $("#" +  String.fromCharCode(76) + String.fromCharCode(75)).val(this.value);
  });

  $("#" +  String.fromCharCode(76) + String.fromCharCode(75)).on("input", function() {
    $("#" +  String.fromCharCode(75) + String.fromCharCode(76)).val(this.value);
  });

  $("#" +  String.fromCharCode(75) + String.fromCharCode(77)).on("input", function() {
    $("#" +  String.fromCharCode(77) + String.fromCharCode(75)).val(this.value);
  });

  $("#" +  String.fromCharCode(77) + String.fromCharCode(75)).on("input", function() {
    $("#" +  String.fromCharCode(75) + String.fromCharCode(77)).val(this.value);
  });

  $("#" +  String.fromCharCode(75) + String.fromCharCode(78)).on("input", function() {
    $("#" +  String.fromCharCode(78) + String.fromCharCode(75)).val(this.value);
  });

  $("#" +  String.fromCharCode(78) + String.fromCharCode(75)).on("input", function() {
    $("#" +  String.fromCharCode(75) + String.fromCharCode(78)).val(this.value);
  });

  $("#" +  String.fromCharCode(75) + String.fromCharCode(79)).on("input", function() {
    $("#" +  String.fromCharCode(79) + String.fromCharCode(75)).val(this.value);
  });

  $("#" +  String.fromCharCode(79) + String.fromCharCode(75)).on("input", function() {
    $("#" +  String.fromCharCode(75) + String.fromCharCode(79)).val(this.value);
  });

  $("#" +  String.fromCharCode(75) + String.fromCharCode(80)).on("input", function() {
    $("#" +  String.fromCharCode(80) + String.fromCharCode(75)).val(this.value);
  });

  $("#" +  String.fromCharCode(80) + String.fromCharCode(75)).on("input", function() {
    $("#" +  String.fromCharCode(75) + String.fromCharCode(80)).val(this.value);
  });

  $("#" +  String.fromCharCode(75) + String.fromCharCode(81)).on("input", function() {
    $("#" +  String.fromCharCode(81) + String.fromCharCode(75)).val(this.value);
  });

  $("#" +  String.fromCharCode(81) + String.fromCharCode(75)).on("input", function() {
    $("#" +  String.fromCharCode(75) + String.fromCharCode(81)).val(this.value);
  });

  $("#" +  String.fromCharCode(75) + String.fromCharCode(82)).on("input", function() {
    $("#" +  String.fromCharCode(82) + String.fromCharCode(75)).val(this.value);
  });

  $("#" +  String.fromCharCode(82) + String.fromCharCode(75)).on("input", function() {
    $("#" +  String.fromCharCode(75) + String.fromCharCode(82)).val(this.value);
  });

  $("#" +  String.fromCharCode(75) + String.fromCharCode(83)).on("input", function() {
    $("#" +  String.fromCharCode(83) + String.fromCharCode(75)).val(this.value);
  });

  $("#" +  String.fromCharCode(83) + String.fromCharCode(75)).on("input", function() {
    $("#" +  String.fromCharCode(75) + String.fromCharCode(83)).val(this.value);
  });

  $("#" +  String.fromCharCode(75) + String.fromCharCode(84)).on("input", function() {
    $("#" +  String.fromCharCode(84) + String.fromCharCode(75)).val(this.value);
  });

  $("#" +  String.fromCharCode(84) + String.fromCharCode(75)).on("input", function() {
    $("#" +  String.fromCharCode(75) + String.fromCharCode(84)).val(this.value);
  });

  $("#" +  String.fromCharCode(75) + String.fromCharCode(85)).on("input", function() {
    $("#" +  String.fromCharCode(85) + String.fromCharCode(75)).val(this.value);
  });

  $("#" +  String.fromCharCode(85) + String.fromCharCode(75)).on("input", function() {
    $("#" +  String.fromCharCode(75) + String.fromCharCode(85)).val(this.value);
  });

  $("#" +  String.fromCharCode(75) + String.fromCharCode(86)).on("input", function() {
    $("#" +  String.fromCharCode(86) + String.fromCharCode(75)).val(this.value);
  });

  $("#" +  String.fromCharCode(86) + String.fromCharCode(75)).on("input", function() {
    $("#" +  String.fromCharCode(75) + String.fromCharCode(86)).val(this.value);
  });

  $("#" +  String.fromCharCode(75) + String.fromCharCode(87)).on("input", function() {
    $("#" +  String.fromCharCode(87) + String.fromCharCode(75)).val(this.value);
  });

  $("#" +  String.fromCharCode(87) + String.fromCharCode(75)).on("input", function() {
    $("#" +  String.fromCharCode(75) + String.fromCharCode(87)).val(this.value);
  });

  $("#" +  String.fromCharCode(75) + String.fromCharCode(88)).on("input", function() {
    $("#" +  String.fromCharCode(88) + String.fromCharCode(75)).val(this.value);
  });

  $("#" +  String.fromCharCode(88) + String.fromCharCode(75)).on("input", function() {
    $("#" +  String.fromCharCode(75) + String.fromCharCode(88)).val(this.value);
  });

  $("#" +  String.fromCharCode(76) + String.fromCharCode(77)).on("input", function() {
    $("#" +  String.fromCharCode(77) + String.fromCharCode(76)).val(this.value);
  });

  $("#" +  String.fromCharCode(77) + String.fromCharCode(76)).on("input", function() {
    $("#" +  String.fromCharCode(76) + String.fromCharCode(77)).val(this.value);
  });

  $("#" +  String.fromCharCode(76) + String.fromCharCode(78)).on("input", function() {
    $("#" +  String.fromCharCode(78) + String.fromCharCode(76)).val(this.value);
  });

  $("#" +  String.fromCharCode(78) + String.fromCharCode(76)).on("input", function() {
    $("#" +  String.fromCharCode(76) + String.fromCharCode(78)).val(this.value);
  });

  $("#" +  String.fromCharCode(76) + String.fromCharCode(79)).on("input", function() {
    $("#" +  String.fromCharCode(79) + String.fromCharCode(76)).val(this.value);
  });

  $("#" +  String.fromCharCode(79) + String.fromCharCode(76)).on("input", function() {
    $("#" +  String.fromCharCode(76) + String.fromCharCode(79)).val(this.value);
  });

  $("#" +  String.fromCharCode(76) + String.fromCharCode(80)).on("input", function() {
    $("#" +  String.fromCharCode(80) + String.fromCharCode(76)).val(this.value);
  });

  $("#" +  String.fromCharCode(80) + String.fromCharCode(76)).on("input", function() {
    $("#" +  String.fromCharCode(76) + String.fromCharCode(80)).val(this.value);
  });

  $("#" +  String.fromCharCode(76) + String.fromCharCode(81)).on("input", function() {
    $("#" +  String.fromCharCode(81) + String.fromCharCode(76)).val(this.value);
  });

  $("#" +  String.fromCharCode(81) + String.fromCharCode(76)).on("input", function() {
    $("#" +  String.fromCharCode(76) + String.fromCharCode(81)).val(this.value);
  });

  $("#" +  String.fromCharCode(76) + String.fromCharCode(82)).on("input", function() {
    $("#" +  String.fromCharCode(82) + String.fromCharCode(76)).val(this.value);
  });

  $("#" +  String.fromCharCode(82) + String.fromCharCode(76)).on("input", function() {
    $("#" +  String.fromCharCode(76) + String.fromCharCode(82)).val(this.value);
  });

  $("#" +  String.fromCharCode(76) + String.fromCharCode(83)).on("input", function() {
    $("#" +  String.fromCharCode(83) + String.fromCharCode(76)).val(this.value);
  });

  $("#" +  String.fromCharCode(83) + String.fromCharCode(76)).on("input", function() {
    $("#" +  String.fromCharCode(76) + String.fromCharCode(83)).val(this.value);
  });

  $("#" +  String.fromCharCode(76) + String.fromCharCode(84)).on("input", function() {
    $("#" +  String.fromCharCode(84) + String.fromCharCode(76)).val(this.value);
  });

  $("#" +  String.fromCharCode(84) + String.fromCharCode(76)).on("input", function() {
    $("#" +  String.fromCharCode(76) + String.fromCharCode(84)).val(this.value);
  });

  $("#" +  String.fromCharCode(76) + String.fromCharCode(85)).on("input", function() {
    $("#" +  String.fromCharCode(85) + String.fromCharCode(76)).val(this.value);
  });

  $("#" +  String.fromCharCode(85) + String.fromCharCode(76)).on("input", function() {
    $("#" +  String.fromCharCode(76) + String.fromCharCode(85)).val(this.value);
  });

  $("#" +  String.fromCharCode(76) + String.fromCharCode(86)).on("input", function() {
    $("#" +  String.fromCharCode(86) + String.fromCharCode(76)).val(this.value);
  });

  $("#" +  String.fromCharCode(86) + String.fromCharCode(76)).on("input", function() {
    $("#" +  String.fromCharCode(76) + String.fromCharCode(86)).val(this.value);
  });

  $("#" +  String.fromCharCode(76) + String.fromCharCode(87)).on("input", function() {
    $("#" +  String.fromCharCode(87) + String.fromCharCode(76)).val(this.value);
  });

  $("#" +  String.fromCharCode(87) + String.fromCharCode(76)).on("input", function() {
    $("#" +  String.fromCharCode(76) + String.fromCharCode(87)).val(this.value);
  });

  $("#" +  String.fromCharCode(76) + String.fromCharCode(88)).on("input", function() {
    $("#" +  String.fromCharCode(88) + String.fromCharCode(76)).val(this.value);
  });

  $("#" +  String.fromCharCode(88) + String.fromCharCode(76)).on("input", function() {
    $("#" +  String.fromCharCode(76) + String.fromCharCode(88)).val(this.value);
  });

  $("#" +  String.fromCharCode(77) + String.fromCharCode(78)).on("input", function() {
    $("#" +  String.fromCharCode(78) + String.fromCharCode(77)).val(this.value);
  });

  $("#" +  String.fromCharCode(78) + String.fromCharCode(77)).on("input", function() {
    $("#" +  String.fromCharCode(77) + String.fromCharCode(78)).val(this.value);
  });

  $("#" +  String.fromCharCode(77) + String.fromCharCode(79)).on("input", function() {
    $("#" +  String.fromCharCode(79) + String.fromCharCode(77)).val(this.value);
  });

  $("#" +  String.fromCharCode(79) + String.fromCharCode(77)).on("input", function() {
    $("#" +  String.fromCharCode(77) + String.fromCharCode(79)).val(this.value);
  });

  $("#" +  String.fromCharCode(77) + String.fromCharCode(80)).on("input", function() {
    $("#" +  String.fromCharCode(80) + String.fromCharCode(77)).val(this.value);
  });

  $("#" +  String.fromCharCode(80) + String.fromCharCode(77)).on("input", function() {
    $("#" +  String.fromCharCode(77) + String.fromCharCode(80)).val(this.value);
  });

  $("#" +  String.fromCharCode(77) + String.fromCharCode(81)).on("input", function() {
    $("#" +  String.fromCharCode(81) + String.fromCharCode(77)).val(this.value);
  });

  $("#" +  String.fromCharCode(81) + String.fromCharCode(77)).on("input", function() {
    $("#" +  String.fromCharCode(77) + String.fromCharCode(81)).val(this.value);
  });

  $("#" +  String.fromCharCode(77) + String.fromCharCode(82)).on("input", function() {
    $("#" +  String.fromCharCode(82) + String.fromCharCode(77)).val(this.value);
  });

  $("#" +  String.fromCharCode(82) + String.fromCharCode(77)).on("input", function() {
    $("#" +  String.fromCharCode(77) + String.fromCharCode(82)).val(this.value);
  });

  $("#" +  String.fromCharCode(77) + String.fromCharCode(83)).on("input", function() {
    $("#" +  String.fromCharCode(83) + String.fromCharCode(77)).val(this.value);
  });

  $("#" +  String.fromCharCode(83) + String.fromCharCode(77)).on("input", function() {
    $("#" +  String.fromCharCode(77) + String.fromCharCode(83)).val(this.value);
  });

  $("#" +  String.fromCharCode(77) + String.fromCharCode(84)).on("input", function() {
    $("#" +  String.fromCharCode(84) + String.fromCharCode(77)).val(this.value);
  });

  $("#" +  String.fromCharCode(84) + String.fromCharCode(77)).on("input", function() {
    $("#" +  String.fromCharCode(77) + String.fromCharCode(84)).val(this.value);
  });

  $("#" +  String.fromCharCode(77) + String.fromCharCode(85)).on("input", function() {
    $("#" +  String.fromCharCode(85) + String.fromCharCode(77)).val(this.value);
  });

  $("#" +  String.fromCharCode(85) + String.fromCharCode(77)).on("input", function() {
    $("#" +  String.fromCharCode(77) + String.fromCharCode(85)).val(this.value);
  });

  $("#" +  String.fromCharCode(77) + String.fromCharCode(86)).on("input", function() {
    $("#" +  String.fromCharCode(86) + String.fromCharCode(77)).val(this.value);
  });

  $("#" +  String.fromCharCode(86) + String.fromCharCode(77)).on("input", function() {
    $("#" +  String.fromCharCode(77) + String.fromCharCode(86)).val(this.value);
  });

  $("#" +  String.fromCharCode(77) + String.fromCharCode(87)).on("input", function() {
    $("#" +  String.fromCharCode(87) + String.fromCharCode(77)).val(this.value);
  });

  $("#" +  String.fromCharCode(87) + String.fromCharCode(77)).on("input", function() {
    $("#" +  String.fromCharCode(77) + String.fromCharCode(87)).val(this.value);
  });

  $("#" +  String.fromCharCode(77) + String.fromCharCode(88)).on("input", function() {
    $("#" +  String.fromCharCode(88) + String.fromCharCode(77)).val(this.value);
  });

  $("#" +  String.fromCharCode(88) + String.fromCharCode(77)).on("input", function() {
    $("#" +  String.fromCharCode(77) + String.fromCharCode(88)).val(this.value);
  });

  $("#" +  String.fromCharCode(78) + String.fromCharCode(79)).on("input", function() {
    $("#" +  String.fromCharCode(79) + String.fromCharCode(78)).val(this.value);
  });

  $("#" +  String.fromCharCode(79) + String.fromCharCode(78)).on("input", function() {
    $("#" +  String.fromCharCode(78) + String.fromCharCode(79)).val(this.value);
  });

  $("#" +  String.fromCharCode(78) + String.fromCharCode(80)).on("input", function() {
    $("#" +  String.fromCharCode(80) + String.fromCharCode(78)).val(this.value);
  });

  $("#" +  String.fromCharCode(80) + String.fromCharCode(78)).on("input", function() {
    $("#" +  String.fromCharCode(78) + String.fromCharCode(80)).val(this.value);
  });

  $("#" +  String.fromCharCode(78) + String.fromCharCode(81)).on("input", function() {
    $("#" +  String.fromCharCode(81) + String.fromCharCode(78)).val(this.value);
  });

  $("#" +  String.fromCharCode(81) + String.fromCharCode(78)).on("input", function() {
    $("#" +  String.fromCharCode(78) + String.fromCharCode(81)).val(this.value);
  });

  $("#" +  String.fromCharCode(78) + String.fromCharCode(82)).on("input", function() {
    $("#" +  String.fromCharCode(82) + String.fromCharCode(78)).val(this.value);
  });

  $("#" +  String.fromCharCode(82) + String.fromCharCode(78)).on("input", function() {
    $("#" +  String.fromCharCode(78) + String.fromCharCode(82)).val(this.value);
  });

  $("#" +  String.fromCharCode(78) + String.fromCharCode(83)).on("input", function() {
    $("#" +  String.fromCharCode(83) + String.fromCharCode(78)).val(this.value);
  });

  $("#" +  String.fromCharCode(83) + String.fromCharCode(78)).on("input", function() {
    $("#" +  String.fromCharCode(78) + String.fromCharCode(83)).val(this.value);
  });

  $("#" +  String.fromCharCode(78) + String.fromCharCode(84)).on("input", function() {
    $("#" +  String.fromCharCode(84) + String.fromCharCode(78)).val(this.value);
  });

  $("#" +  String.fromCharCode(84) + String.fromCharCode(78)).on("input", function() {
    $("#" +  String.fromCharCode(78) + String.fromCharCode(84)).val(this.value);
  });

  $("#" +  String.fromCharCode(78) + String.fromCharCode(85)).on("input", function() {
    $("#" +  String.fromCharCode(85) + String.fromCharCode(78)).val(this.value);
  });

  $("#" +  String.fromCharCode(85) + String.fromCharCode(78)).on("input", function() {
    $("#" +  String.fromCharCode(78) + String.fromCharCode(85)).val(this.value);
  });

  $("#" +  String.fromCharCode(78) + String.fromCharCode(86)).on("input", function() {
    $("#" +  String.fromCharCode(86) + String.fromCharCode(78)).val(this.value);
  });

  $("#" +  String.fromCharCode(86) + String.fromCharCode(78)).on("input", function() {
    $("#" +  String.fromCharCode(78) + String.fromCharCode(86)).val(this.value);
  });

  $("#" +  String.fromCharCode(78) + String.fromCharCode(87)).on("input", function() {
    $("#" +  String.fromCharCode(87) + String.fromCharCode(78)).val(this.value);
  });

  $("#" +  String.fromCharCode(87) + String.fromCharCode(78)).on("input", function() {
    $("#" +  String.fromCharCode(78) + String.fromCharCode(87)).val(this.value);
  });

  $("#" +  String.fromCharCode(78) + String.fromCharCode(88)).on("input", function() {
    $("#" +  String.fromCharCode(88) + String.fromCharCode(78)).val(this.value);
  });

  $("#" +  String.fromCharCode(88) + String.fromCharCode(78)).on("input", function() {
    $("#" +  String.fromCharCode(78) + String.fromCharCode(88)).val(this.value);
  });

  $("#" +  String.fromCharCode(79) + String.fromCharCode(80)).on("input", function() {
    $("#" +  String.fromCharCode(80) + String.fromCharCode(79)).val(this.value);
  });

  $("#" +  String.fromCharCode(80) + String.fromCharCode(79)).on("input", function() {
    $("#" +  String.fromCharCode(79) + String.fromCharCode(80)).val(this.value);
  });

  $("#" +  String.fromCharCode(79) + String.fromCharCode(81)).on("input", function() {
    $("#" +  String.fromCharCode(81) + String.fromCharCode(79)).val(this.value);
  });

  $("#" +  String.fromCharCode(81) + String.fromCharCode(79)).on("input", function() {
    $("#" +  String.fromCharCode(79) + String.fromCharCode(81)).val(this.value);
  });

  $("#" +  String.fromCharCode(79) + String.fromCharCode(82)).on("input", function() {
    $("#" +  String.fromCharCode(82) + String.fromCharCode(79)).val(this.value);
  });

  $("#" +  String.fromCharCode(82) + String.fromCharCode(79)).on("input", function() {
    $("#" +  String.fromCharCode(79) + String.fromCharCode(82)).val(this.value);
  });

  $("#" +  String.fromCharCode(79) + String.fromCharCode(83)).on("input", function() {
    $("#" +  String.fromCharCode(83) + String.fromCharCode(79)).val(this.value);
  });

  $("#" +  String.fromCharCode(83) + String.fromCharCode(79)).on("input", function() {
    $("#" +  String.fromCharCode(79) + String.fromCharCode(83)).val(this.value);
  });

  $("#" +  String.fromCharCode(79) + String.fromCharCode(84)).on("input", function() {
    $("#" +  String.fromCharCode(84) + String.fromCharCode(79)).val(this.value);
  });

  $("#" +  String.fromCharCode(84) + String.fromCharCode(79)).on("input", function() {
    $("#" +  String.fromCharCode(79) + String.fromCharCode(84)).val(this.value);
  });

  $("#" +  String.fromCharCode(79) + String.fromCharCode(85)).on("input", function() {
    $("#" +  String.fromCharCode(85) + String.fromCharCode(79)).val(this.value);
  });

  $("#" +  String.fromCharCode(85) + String.fromCharCode(79)).on("input", function() {
    $("#" +  String.fromCharCode(79) + String.fromCharCode(85)).val(this.value);
  });

  $("#" +  String.fromCharCode(79) + String.fromCharCode(86)).on("input", function() {
    $("#" +  String.fromCharCode(86) + String.fromCharCode(79)).val(this.value);
  });

  $("#" +  String.fromCharCode(86) + String.fromCharCode(79)).on("input", function() {
    $("#" +  String.fromCharCode(79) + String.fromCharCode(86)).val(this.value);
  });

  $("#" +  String.fromCharCode(79) + String.fromCharCode(87)).on("input", function() {
    $("#" +  String.fromCharCode(87) + String.fromCharCode(79)).val(this.value);
  });

  $("#" +  String.fromCharCode(87) + String.fromCharCode(79)).on("input", function() {
    $("#" +  String.fromCharCode(79) + String.fromCharCode(87)).val(this.value);
  });

  $("#" +  String.fromCharCode(79) + String.fromCharCode(88)).on("input", function() {
    $("#" +  String.fromCharCode(88) + String.fromCharCode(79)).val(this.value);
  });

  $("#" +  String.fromCharCode(88) + String.fromCharCode(79)).on("input", function() {
    $("#" +  String.fromCharCode(79) + String.fromCharCode(88)).val(this.value);
  });

  $("#" +  String.fromCharCode(80) + String.fromCharCode(81)).on("input", function() {
    $("#" +  String.fromCharCode(81) + String.fromCharCode(80)).val(this.value);
  });

  $("#" +  String.fromCharCode(81) + String.fromCharCode(80)).on("input", function() {
    $("#" +  String.fromCharCode(80) + String.fromCharCode(81)).val(this.value);
  });

  $("#" +  String.fromCharCode(80) + String.fromCharCode(82)).on("input", function() {
    $("#" +  String.fromCharCode(82) + String.fromCharCode(80)).val(this.value);
  });

  $("#" +  String.fromCharCode(82) + String.fromCharCode(80)).on("input", function() {
    $("#" +  String.fromCharCode(80) + String.fromCharCode(82)).val(this.value);
  });

  $("#" +  String.fromCharCode(80) + String.fromCharCode(83)).on("input", function() {
    $("#" +  String.fromCharCode(83) + String.fromCharCode(80)).val(this.value);
  });

  $("#" +  String.fromCharCode(83) + String.fromCharCode(80)).on("input", function() {
    $("#" +  String.fromCharCode(80) + String.fromCharCode(83)).val(this.value);
  });

  $("#" +  String.fromCharCode(80) + String.fromCharCode(84)).on("input", function() {
    $("#" +  String.fromCharCode(84) + String.fromCharCode(80)).val(this.value);
  });

  $("#" +  String.fromCharCode(84) + String.fromCharCode(80)).on("input", function() {
    $("#" +  String.fromCharCode(80) + String.fromCharCode(84)).val(this.value);
  });

  $("#" +  String.fromCharCode(80) + String.fromCharCode(85)).on("input", function() {
    $("#" +  String.fromCharCode(85) + String.fromCharCode(80)).val(this.value);
  });

  $("#" +  String.fromCharCode(85) + String.fromCharCode(80)).on("input", function() {
    $("#" +  String.fromCharCode(80) + String.fromCharCode(85)).val(this.value);
  });

  $("#" +  String.fromCharCode(80) + String.fromCharCode(86)).on("input", function() {
    $("#" +  String.fromCharCode(86) + String.fromCharCode(80)).val(this.value);
  });

  $("#" +  String.fromCharCode(86) + String.fromCharCode(80)).on("input", function() {
    $("#" +  String.fromCharCode(80) + String.fromCharCode(86)).val(this.value);
  });

  $("#" +  String.fromCharCode(80) + String.fromCharCode(87)).on("input", function() {
    $("#" +  String.fromCharCode(87) + String.fromCharCode(80)).val(this.value);
  });

  $("#" +  String.fromCharCode(87) + String.fromCharCode(80)).on("input", function() {
    $("#" +  String.fromCharCode(80) + String.fromCharCode(87)).val(this.value);
  });

  $("#" +  String.fromCharCode(80) + String.fromCharCode(88)).on("input", function() {
    $("#" +  String.fromCharCode(88) + String.fromCharCode(80)).val(this.value);
  });

  $("#" +  String.fromCharCode(88) + String.fromCharCode(80)).on("input", function() {
    $("#" +  String.fromCharCode(80) + String.fromCharCode(88)).val(this.value);
  });

  $("#" +  String.fromCharCode(81) + String.fromCharCode(82)).on("input", function() {
    $("#" +  String.fromCharCode(82) + String.fromCharCode(81)).val(this.value);
  });

  $("#" +  String.fromCharCode(82) + String.fromCharCode(81)).on("input", function() {
    $("#" +  String.fromCharCode(81) + String.fromCharCode(82)).val(this.value);
  });

  $("#" +  String.fromCharCode(81) + String.fromCharCode(83)).on("input", function() {
    $("#" +  String.fromCharCode(83) + String.fromCharCode(81)).val(this.value);
  });

  $("#" +  String.fromCharCode(83) + String.fromCharCode(81)).on("input", function() {
    $("#" +  String.fromCharCode(81) + String.fromCharCode(83)).val(this.value);
  });

  $("#" +  String.fromCharCode(81) + String.fromCharCode(84)).on("input", function() {
    $("#" +  String.fromCharCode(84) + String.fromCharCode(81)).val(this.value);
  });

  $("#" +  String.fromCharCode(84) + String.fromCharCode(81)).on("input", function() {
    $("#" +  String.fromCharCode(81) + String.fromCharCode(84)).val(this.value);
  });

  $("#" +  String.fromCharCode(81) + String.fromCharCode(85)).on("input", function() {
    $("#" +  String.fromCharCode(85) + String.fromCharCode(81)).val(this.value);
  });

  $("#" +  String.fromCharCode(85) + String.fromCharCode(81)).on("input", function() {
    $("#" +  String.fromCharCode(81) + String.fromCharCode(85)).val(this.value);
  });

  $("#" +  String.fromCharCode(81) + String.fromCharCode(86)).on("input", function() {
    $("#" +  String.fromCharCode(86) + String.fromCharCode(81)).val(this.value);
  });

  $("#" +  String.fromCharCode(86) + String.fromCharCode(81)).on("input", function() {
    $("#" +  String.fromCharCode(81) + String.fromCharCode(86)).val(this.value);
  });

  $("#" +  String.fromCharCode(81) + String.fromCharCode(87)).on("input", function() {
    $("#" +  String.fromCharCode(87) + String.fromCharCode(81)).val(this.value);
  });

  $("#" +  String.fromCharCode(87) + String.fromCharCode(81)).on("input", function() {
    $("#" +  String.fromCharCode(81) + String.fromCharCode(87)).val(this.value);
  });

  $("#" +  String.fromCharCode(81) + String.fromCharCode(88)).on("input", function() {
    $("#" +  String.fromCharCode(88) + String.fromCharCode(81)).val(this.value);
  });

  $("#" +  String.fromCharCode(88) + String.fromCharCode(81)).on("input", function() {
    $("#" +  String.fromCharCode(81) + String.fromCharCode(88)).val(this.value);
  });

  $("#" +  String.fromCharCode(82) + String.fromCharCode(83)).on("input", function() {
    $("#" +  String.fromCharCode(83) + String.fromCharCode(82)).val(this.value);
  });

  $("#" +  String.fromCharCode(83) + String.fromCharCode(82)).on("input", function() {
    $("#" +  String.fromCharCode(82) + String.fromCharCode(83)).val(this.value);
  });

  $("#" +  String.fromCharCode(82) + String.fromCharCode(84)).on("input", function() {
    $("#" +  String.fromCharCode(84) + String.fromCharCode(82)).val(this.value);
  });

  $("#" +  String.fromCharCode(84) + String.fromCharCode(82)).on("input", function() {
    $("#" +  String.fromCharCode(82) + String.fromCharCode(84)).val(this.value);
  });

  $("#" +  String.fromCharCode(82) + String.fromCharCode(85)).on("input", function() {
    $("#" +  String.fromCharCode(85) + String.fromCharCode(82)).val(this.value);
  });

  $("#" +  String.fromCharCode(85) + String.fromCharCode(82)).on("input", function() {
    $("#" +  String.fromCharCode(82) + String.fromCharCode(85)).val(this.value);
  });

  $("#" +  String.fromCharCode(82) + String.fromCharCode(86)).on("input", function() {
    $("#" +  String.fromCharCode(86) + String.fromCharCode(82)).val(this.value);
  });

  $("#" +  String.fromCharCode(86) + String.fromCharCode(82)).on("input", function() {
    $("#" +  String.fromCharCode(82) + String.fromCharCode(86)).val(this.value);
  });

  $("#" +  String.fromCharCode(82) + String.fromCharCode(87)).on("input", function() {
    $("#" +  String.fromCharCode(87) + String.fromCharCode(82)).val(this.value);
  });

  $("#" +  String.fromCharCode(87) + String.fromCharCode(82)).on("input", function() {
    $("#" +  String.fromCharCode(82) + String.fromCharCode(87)).val(this.value);
  });

  $("#" +  String.fromCharCode(82) + String.fromCharCode(88)).on("input", function() {
    $("#" +  String.fromCharCode(88) + String.fromCharCode(82)).val(this.value);
  });

  $("#" +  String.fromCharCode(88) + String.fromCharCode(82)).on("input", function() {
    $("#" +  String.fromCharCode(82) + String.fromCharCode(88)).val(this.value);
  });

  $("#" +  String.fromCharCode(83) + String.fromCharCode(84)).on("input", function() {
    $("#" +  String.fromCharCode(84) + String.fromCharCode(83)).val(this.value);
  });

  $("#" +  String.fromCharCode(84) + String.fromCharCode(83)).on("input", function() {
    $("#" +  String.fromCharCode(83) + String.fromCharCode(84)).val(this.value);
  });

  $("#" +  String.fromCharCode(83) + String.fromCharCode(85)).on("input", function() {
    $("#" +  String.fromCharCode(85) + String.fromCharCode(83)).val(this.value);
  });

  $("#" +  String.fromCharCode(85) + String.fromCharCode(83)).on("input", function() {
    $("#" +  String.fromCharCode(83) + String.fromCharCode(85)).val(this.value);
  });

  $("#" +  String.fromCharCode(83) + String.fromCharCode(86)).on("input", function() {
    $("#" +  String.fromCharCode(86) + String.fromCharCode(83)).val(this.value);
  });

  $("#" +  String.fromCharCode(86) + String.fromCharCode(83)).on("input", function() {
    $("#" +  String.fromCharCode(83) + String.fromCharCode(86)).val(this.value);
  });

  $("#" +  String.fromCharCode(83) + String.fromCharCode(87)).on("input", function() {
    $("#" +  String.fromCharCode(87) + String.fromCharCode(83)).val(this.value);
  });

  $("#" +  String.fromCharCode(87) + String.fromCharCode(83)).on("input", function() {
    $("#" +  String.fromCharCode(83) + String.fromCharCode(87)).val(this.value);
  });

  $("#" +  String.fromCharCode(83) + String.fromCharCode(88)).on("input", function() {
    $("#" +  String.fromCharCode(88) + String.fromCharCode(83)).val(this.value);
  });

  $("#" +  String.fromCharCode(88) + String.fromCharCode(83)).on("input", function() {
    $("#" +  String.fromCharCode(83) + String.fromCharCode(88)).val(this.value);
  });

  $("#" +  String.fromCharCode(84) + String.fromCharCode(85)).on("input", function() {
    $("#" +  String.fromCharCode(85) + String.fromCharCode(84)).val(this.value);
  });

  $("#" +  String.fromCharCode(85) + String.fromCharCode(84)).on("input", function() {
    $("#" +  String.fromCharCode(84) + String.fromCharCode(85)).val(this.value);
  });

  $("#" +  String.fromCharCode(84) + String.fromCharCode(86)).on("input", function() {
    $("#" +  String.fromCharCode(86) + String.fromCharCode(84)).val(this.value);
  });

  $("#" +  String.fromCharCode(86) + String.fromCharCode(84)).on("input", function() {
    $("#" +  String.fromCharCode(84) + String.fromCharCode(86)).val(this.value);
  });

  $("#" +  String.fromCharCode(84) + String.fromCharCode(87)).on("input", function() {
    $("#" +  String.fromCharCode(87) + String.fromCharCode(84)).val(this.value);
  });

  $("#" +  String.fromCharCode(87) + String.fromCharCode(84)).on("input", function() {
    $("#" +  String.fromCharCode(84) + String.fromCharCode(87)).val(this.value);
  });

  $("#" +  String.fromCharCode(84) + String.fromCharCode(88)).on("input", function() {
    $("#" +  String.fromCharCode(88) + String.fromCharCode(84)).val(this.value);
  });

  $("#" +  String.fromCharCode(88) + String.fromCharCode(84)).on("input", function() {
    $("#" +  String.fromCharCode(84) + String.fromCharCode(88)).val(this.value);
  });

  $("#" +  String.fromCharCode(85) + String.fromCharCode(86)).on("input", function() {
    $("#" +  String.fromCharCode(86) + String.fromCharCode(85)).val(this.value);
  });

  $("#" +  String.fromCharCode(86) + String.fromCharCode(85)).on("input", function() {
    $("#" +  String.fromCharCode(85) + String.fromCharCode(86)).val(this.value);
  });

  $("#" +  String.fromCharCode(85) + String.fromCharCode(87)).on("input", function() {
    $("#" +  String.fromCharCode(87) + String.fromCharCode(85)).val(this.value);
  });

  $("#" +  String.fromCharCode(87) + String.fromCharCode(85)).on("input", function() {
    $("#" +  String.fromCharCode(85) + String.fromCharCode(87)).val(this.value);
  });

  $("#" +  String.fromCharCode(85) + String.fromCharCode(88)).on("input", function() {
    $("#" +  String.fromCharCode(88) + String.fromCharCode(85)).val(this.value);
  });

  $("#" +  String.fromCharCode(88) + String.fromCharCode(85)).on("input", function() {
    $("#" +  String.fromCharCode(85) + String.fromCharCode(88)).val(this.value);
  });

  $("#" +  String.fromCharCode(86) + String.fromCharCode(87)).on("input", function() {
    $("#" +  String.fromCharCode(87) + String.fromCharCode(86)).val(this.value);
  });

  $("#" +  String.fromCharCode(87) + String.fromCharCode(86)).on("input", function() {
    $("#" +  String.fromCharCode(86) + String.fromCharCode(87)).val(this.value);
  });

  $("#" +  String.fromCharCode(86) + String.fromCharCode(88)).on("input", function() {
    $("#" +  String.fromCharCode(88) + String.fromCharCode(86)).val(this.value);
  });

  $("#" +  String.fromCharCode(88) + String.fromCharCode(86)).on("input", function() {
    $("#" +  String.fromCharCode(86) + String.fromCharCode(88)).val(this.value);
  });

  $("#" +  String.fromCharCode(87) + String.fromCharCode(88)).on("input", function() {
    $("#" +  String.fromCharCode(88) + String.fromCharCode(87)).val(this.value);
  });

  $("#" +  String.fromCharCode(88) + String.fromCharCode(87)).on("input", function() {
    $("#" +  String.fromCharCode(87) + String.fromCharCode(88)).val(this.value);
  });

});
