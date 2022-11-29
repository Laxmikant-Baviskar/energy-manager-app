function Calculate(){
    var suggestions = [];

        //appliance[ac]
    var acNo = document.getElementById("ac").value;
    var acHour = document.getElementById("acHour").value;
    var acPower = 1700;
    var acMaxPower = 25000;
    var totalAcHour = acNo * acPower;
    var acday = totalAcHour * acHour;
    var acMonth = acday * 30/1000;

    //appliance[Tv]
    var tvNo = document.getElementById("tv").value;
    var tvHour = document.getElementById("tvHour").value;
    var tvPower = 70;
    var tvMaxPower = 350;
    var totaltvHour = tvNo * tvPower;
    var tvday = totaltvHour * tvHour;
    var tvMonth = tvday * 30/1000;

    //appliance[fridge]
    var fridgeNo = document.getElementById("fridge").value;
    var fridgeHour = document.getElementById("fridgeHour").value;
    var fridgePower = 250;
    var fridgeMaxPower = 6000;
    var totalfridgeHour = fridgeNo * fridgePower;
    var fridgeday = totalfridgeHour * fridgeHour;
    var fridgeMonth = fridgeday * 30/1000;

    //appliance[WashingMachine]
    var wmNo = document.getElementById("wm").value;
    var wmHour = document.getElementById("wmHour").value;
    var wmPower = 255;
    var wmMaxPower = 600;
    var totalwmHour = wmNo * wmPower;
    var wmday = totalwmHour * wmHour;
    var wmMonth = wmday * 30/1000;

    //appliance[geyser]
    var geyserNo = document.getElementById("geyser").value;
    var geyserHour = document.getElementById("geyserHour").value;
    var geyserPower = 2000;
    var geyserMaxPower = 6000;
    var totalgeyserHour = geyserNo * geyserPower;
    var geyserday = totalgeyserHour * geyserHour;
    var geyserMonth = geyserday * 30/1000;

    //appliance[microwave]
    var microNo = document.getElementById("micro").value;
    var microHour = document.getElementById("microHour").value;
    var microPower = 2500;
    var microMaxPower = 5000;
    var totalmicroHour = microNo * microPower;
    var microday = totalmicroHour * microHour;
    var microMonth = microday * 30/1000;

    //appliance[comp]
    var compNo = document.getElementById("comp").value;
    var compHour = document.getElementById("compHour").value;
    var compPower = 1500;
    var compMaxPower = 6000;
    var totalcompHour = compNo * compPower;
    var compday = totalcompHour * compHour;
    var compMonth = compday * 30/1000;

    //appliance[bulb]
    var blbNo = document.getElementById("blb").value;
    var blbHour = document.getElementById("blbHour").value;
    var blbPower = 10;
    var blbMaxPower = 950;
    var totalblbHour = blbNo * blbPower;
    var blbday = totalblbHour * blbHour;
    var blbMonth = blbday * 30/1000;

    //appliance[fans]
    var fansNo = document.getElementById("fans").value;
    var fansHour = document.getElementById("fansHour").value;
    var fansPower = 35;
    var fansMaxPower = 5000;
    var totalfansHour = fansNo * fansPower;
    var fansday = totalfansHour * fansHour;
    var fansMonth = fansday * 30/1000;

    //appliance[Induction cooker]
    var icNo = document.getElementById("ic").value;
    var icHour = document.getElementById("icHour").value;
    var icPower = 1900;
    var icMaxPower = 6000;
    var totalicHour = icNo * icPower;
    var icday = totalicHour * icHour;
    var icMonth = icday * 30/1000;

    //appliance[tubeLight]
    var tubeNo = document.getElementById("tube").value;
    var tubeHour = document.getElementById("tubeHour").value;
    var tubePower = 15;
    var tubeMaxPower = 1000;
    var totaltubeHour = tubeNo * tubePower;
    var tubeday = totaltubeHour * tubeHour;
    var tubeMonth = tubeday * 30/1000;


    var elRate = document.getElementById("elRate").value;
    var totalUsage = 0;

    document.getElementById("acday").innerHTML = acday/1000;
    document.getElementById("acMonth").innerHTML = (acday/1000)*30;
    document.getElementById("acmnSpnt").innerHTML = (acday/1000)*30*elRate;

    totalUsage += (acday/1000)*30;

    if (acday > acMaxPower) {
        suggestions.push("You should Decrease the Usage of A/c or you should buy an Ac with more efficient power usage ")
    };

    document.getElementById("tvday").innerHTML = tvday/1000;
    document.getElementById("tvMonth").innerHTML = (tvday/1000)*30;
    document.getElementById("tvmnSpnt").innerHTML = (tvday/1000)*30*elRate;

    totalUsage += (tvday/1000)*30;

    if (tvday > tvMaxPower) {
        suggestions.push("You should Decrease the Usage of TV or you should buy a Tv with more efficient power usage ")
    };

    document.getElementById("fridgeday").innerHTML = fridgeday/1000;
    document.getElementById("fridgeMonth").innerHTML = (fridgeday/1000)*30;
    document.getElementById("fridgemnSpnt").innerHTML = (fridgeday/1000)*30*elRate;

    totalUsage += (fridgeday/1000)*30;

    if (fridgeday > fridgeMaxPower) {
        suggestions.push("You should Decrease the Usage of fridge or you should buy a fridge with more efficient power usage ")
    };

    document.getElementById("wmday").innerHTML = wmday/1000;
    document.getElementById("wmMonth").innerHTML = (wmday/1000)*30;
    document.getElementById("wmmnSpnt").innerHTML = (wmday/1000)*30*elRate;

    totalUsage += (wmday/1000)*30;

    if (wmday > wmMaxPower) {
        suggestions.push("You should Decrease the Usage of Washing Machine or you should buy a washing Machine with more efficient power usage ")
    };

    document.getElementById("geyserday").innerHTML = geyserday/1000;
    document.getElementById("geyserMonth").innerHTML = (geyserday/1000)*30;
    document.getElementById("geysermnSpnt").innerHTML = (geyserday/1000)*30*elRate;

    totalUsage += (geyserday/1000)*30;


    if (geyserday > geyserMaxPower) {
        suggestions.push("You should Decrease the Usage of Geyser or you should buy a geyser with more efficient power usage ")
    };

    document.getElementById("microday").innerHTML = microday/1000;
    document.getElementById("microMonth").innerHTML = (microday/1000)*30;
    document.getElementById("micromnSpnt").innerHTML = (microday/1000)*30*elRate;

    totalUsage += (microday/1000)*30;

    if (microday > microMaxPower) {
        suggestions.push("You should Decrease the Usage of Microwave or you should buy a Microwave with more efficient power usage ")
    };

    document.getElementById("compday").innerHTML = compday/1000;
    document.getElementById("compMonth").innerHTML = (compday/1000)*30;
    document.getElementById("compmnSpnt").innerHTML = (compday/1000)*30*elRate;

    totalUsage += (compday/1000)*30;

    if (compday > compMaxPower) {
        suggestions.push("You should Decrease the Usage of computer or you should buy a computer with more efficient power usage ")
    };
    
    document.getElementById("blbday").innerHTML = blbday/1000;
    document.getElementById("blbMonth").innerHTML = (blbday/1000)*30;
    document.getElementById("blbmnSpnt").innerHTML = (blbday/1000)*30*elRate;

    totalUsage += (blbday/1000)*30;

    if (blbday > blbMaxPower) {
        suggestions.push("You should Turn off the bulbs when not in use or use the bulbs which are more power efficient ")
    };

    document.getElementById("fanday").innerHTML = fansday/1000;
    document.getElementById("fanMonth").innerHTML = (fansday/1000)*30;
    document.getElementById("fanmnSpnt").innerHTML = (fansday/1000)*30*elRate;

    totalUsage += (fansday/1000)*30;


    if (fansday > fansMaxPower) {
        suggestions.push("You should Turn off the fans when not in use or use the fans which are more power efficient ")
    };

    document.getElementById("icday").innerHTML = icday/1000;
    document.getElementById("icMonth").innerHTML = (icday/1000)*30;
    document.getElementById("icmnSpnt").innerHTML = (icday/1000)*30*elRate;

    totalUsage += (icday/1000)*30;


    if (icday > icMaxPower) {
        suggestions.push("You should Decrease the Usage of Induction cooker or you should buy an Induction cookerwith more efficient power usage")
    };

    document.getElementById("tubeday").innerHTML = tubeday/1000;
    document.getElementById("tubeMonth").innerHTML = (tubeday/1000)*30;
    document.getElementById("tubemnSpnt").innerHTML = (tubeday/1000)*30*elRate;

    totalUsage += (tubeday/1000)*30;


    if (tubeday > tubeMaxPower) {
        suggestions.push("Turn off the tubelights when not in use or use the Tubes which are more power efficient ")
    };

    



    if (suggestions.length == 0) {
        document.getElementById("sgst").innerHTML = "You dont need any suggestions, you are using electricity wisely! ⚡"
    } else {
        document.getElementById("sgst").innerHTML = suggestions.join("<br>") + "</p> Rest is well 😊</p>";
    }

    //Now begins the code for calculating total expenses and usage.... 
    document.getElementById("ttlpwr").innerHTML = "Total electricity usage (in kilowatt) : " + totalUsage;
    document.getElementById("emCost").innerHTML = "Estimated bill amount : " + totalUsage * elRate;
    
    if (elRate == 0) {
        alert("Please enter the Price of electricity")
    }
    
        // var appliances = ["1","2","3"]
        var appliances2 = ["A/c","tv","fridge","Washing-Machine","Geyser","Microwave","Computer","Bulb","fans","Induction-Cooker","Tubelight"];
        var values = [acMonth,tvMonth,fridgeMonth,wmMonth,geyserMonth,microMonth,compMonth,blbMonth,fansMonth,icMonth,tubeMonth];
        var color = ["#f0f01a","#0000ff","#25D086","#ff0000","#ffffff","#00ffff","#8080ff","#408080","#ff0080","#804040","#008040"]
        new Chart("chart", {
            type: "pie",
            data: {
              labels: appliances2,
              datasets: [{
                backgroundColor: color,
                data: values
              }]
            },
            options: {
              title: {
                display: true,
                text: "Graphical representation of your Electricity usage per appliance 📊"
              }
            }
          });
         document.getElementById("scr").style.display = "block";

    }


function Calculate(){
    var suggestions = [];

        //appliance[ac]
    var acNo = document.getElementById("ac").value;
    var acHour = document.getElementById("acHour").value;
    var acPower = 1500;
    var acMaxPower = 23000;
    var totalAcHour = acNo * acPower;
    var acday = totalAcHour * acHour;
    var acMonth = acday * 30/1000;

    //appliance[Tv]
    var tvNo = document.getElementById("tv").value;
    var tvHour = document.getElementById("tvHour").value;
    var tvPower = 70;
    var tvMaxPower = 350;
    var totaltvHour = tvNo * tvPower;
    var tvday = totaltvHour * tvHour;
    var tvMonth = tvday * 30/1000;

    //appliance[fridge]
    var fridgeNo = document.getElementById("fridge").value;
    var fridgeHour = document.getElementById("fridgeHour").value;
    var fridgePower = 250;
    var fridgeMaxPower = 6000;
    var totalfridgeHour = fridgeNo * fridgePower;
    var fridgeday = totalfridgeHour * fridgeHour;
    var fridgeMonth = fridgeday * 30/1000;

    //appliance[WashingMachine]
    var wmNo = document.getElementById("wm").value;
    var wmHour = document.getElementById("wmHour").value;
    var wmPower = 255;
    var wmMaxPower = 600;
    var totalwmHour = wmNo * wmPower;
    var wmday = totalwmHour * wmHour;
    var wmMonth = wmday * 30/1000;

    //appliance[geyser]
    var geyserNo = document.getElementById("geyser").value;
    var geyserHour = document.getElementById("geyserHour").value;
    var geyserPower = 2000;
    var geyserMaxPower = 6000;
    var totalgeyserHour = geyserNo * geyserPower;
    var geyserday = totalgeyserHour * geyserHour;
    var geyserMonth = geyserday * 30/1000;

    //appliance[microwave]
    var microNo = document.getElementById("micro").value;
    var microHour = document.getElementById("microHour").value;
    var microPower = 2500;
    var microMaxPower = 5000;
    var totalmicroHour = microNo * microPower;
    var microday = totalmicroHour * microHour;
    var microMonth = microday * 30/1000;

    //appliance[comp]
    var compNo = document.getElementById("comp").value;
    var compHour = document.getElementById("compHour").value;
    var compPower = 1500;
    var compMaxPower = 6000;
    var totalcompHour = compNo * compPower;
    var compday = totalcompHour * compHour;
    var compMonth = compday * 30/1000;

    //appliance[bulb]
    var blbNo = document.getElementById("blb").value;
    var blbHour = document.getElementById("blbHour").value;
    var blbPower = 10;
    var blbMaxPower = 950;
    var totalblbHour = blbNo * blbPower;
    var blbday = totalblbHour * blbHour;
    var blbMonth = blbday * 30/1000;

    //appliance[fans]
    var fansNo = document.getElementById("fans").value;
    var fansHour = document.getElementById("fansHour").value;
    var fansPower = 35;
    var fansMaxPower = 5000;
    var totalfansHour = fansNo * fansPower;
    var fansday = totalfansHour * fansHour;
    var fansMonth = fansday * 30/1000;

    //appliance[Induction cooker]
    var icNo = document.getElementById("ic").value;
    var icHour = document.getElementById("icHour").value;
    var icPower = 1900;
    var icMaxPower = 6000;
    var totalicHour = icNo * icPower;
    var icday = totalicHour * icHour;
    var icMonth = icday * 30/1000;

    //appliance[tubeLight]
    var tubeNo = document.getElementById("tube").value;
    var tubeHour = document.getElementById("tubeHour").value;
    var tubePower = 15;
    var tubeMaxPower = 1000;
    var totaltubeHour = tubeNo * tubePower;
    var tubeday = totaltubeHour * tubeHour;
    var tubeMonth = tubeday * 30/1000;


    var elRate = document.getElementById("elRate").value;
    var totalUsage = 0;

    document.getElementById("acday").innerHTML = acday/1000;
    document.getElementById("acMonth").innerHTML = (acday/1000)*30;
    document.getElementById("acmnSpnt").innerHTML = (acday/1000)*30*elRate;

    totalUsage += (acday/1000)*30;

    if (acday > acMaxPower) {
        suggestions.push("You should Decrease the Usage of A/c or you should buy an Ac with more efficient power usage ")
    };

    document.getElementById("tvday").innerHTML = tvday/1000;
    document.getElementById("tvMonth").innerHTML = (tvday/1000)*30;
    document.getElementById("tvmnSpnt").innerHTML = (tvday/1000)*30*elRate;

    totalUsage += (tvday/1000)*30;

    if (tvday > tvMaxPower) {
        suggestions.push("You should Decrease the Usage of TV or you should buy a Tv with more efficient power usage ")
    };

    document.getElementById("fridgeday").innerHTML = fridgeday/1000;
    document.getElementById("fridgeMonth").innerHTML = (fridgeday/1000)*30;
    document.getElementById("fridgemnSpnt").innerHTML = (fridgeday/1000)*30*elRate;

    totalUsage += (fridgeday/1000)*30;

    if (fridgeday > fridgeMaxPower) {
        suggestions.push("You should Decrease the Usage of fridge or you should buy a fridge with more efficient power usage ")
    };

    document.getElementById("wmday").innerHTML = wmday/1000;
    document.getElementById("wmMonth").innerHTML = (wmday/1000)*30;
    document.getElementById("wmmnSpnt").innerHTML = (wmday/1000)*30*elRate;

    totalUsage += (wmday/1000)*30;

    if (wmday > wmMaxPower) {
        suggestions.push("You should Decrease the Usage of Washing Machine or you should buy a washing Machine with more efficient power usage ")
    };

    document.getElementById("geyserday").innerHTML = geyserday/1000;
    document.getElementById("geyserMonth").innerHTML = (geyserday/1000)*30;
    document.getElementById("geysermnSpnt").innerHTML = (geyserday/1000)*30*elRate;

    totalUsage += (geyserday/1000)*30;


    if (geyserday > geyserMaxPower) {
        suggestions.push("You should Decrease the Usage of Geyser or you should buy a geyser with more efficient power usage ")
    };

    document.getElementById("microday").innerHTML = microday/1000;
    document.getElementById("microMonth").innerHTML = (microday/1000)*30;
    document.getElementById("micromnSpnt").innerHTML = (microday/1000)*30*elRate;

    totalUsage += (microday/1000)*30;

    if (microday > microMaxPower) {
        suggestions.push("You should Decrease the Usage of Microwave or you should buy a Microwave with more efficient power usage ")
    };

    document.getElementById("compday").innerHTML = compday/1000;
    document.getElementById("compMonth").innerHTML = (compday/1000)*30;
    document.getElementById("compmnSpnt").innerHTML = (compday/1000)*30*elRate;

    totalUsage += (compday/1000)*30;

    if (compday > compMaxPower) {
        suggestions.push("You should Decrease the Usage of computer or you should buy a computer with more efficient power usage ")
    };
    
    document.getElementById("blbday").innerHTML = blbday/1000;
    document.getElementById("blbMonth").innerHTML = (blbday/1000)*30;
    document.getElementById("blbmnSpnt").innerHTML = (blbday/1000)*30*elRate;

    totalUsage += (blbday/1000)*30;

    if (blbday > blbMaxPower) {
        suggestions.push("You should Turn off the bulbs when not in use or use the bulbs which are more power efficient ")
    };

    document.getElementById("fanday").innerHTML = fansday/1000;
    document.getElementById("fanMonth").innerHTML = (fansday/1000)*30;
    document.getElementById("fanmnSpnt").innerHTML = (fansday/1000)*30*elRate;

    totalUsage += (fansday/1000)*30;


    if (fansday > fansMaxPower) {
        suggestions.push("You should Turn off the fans when not in use or use the fans which are more power efficient ")
    };

    document.getElementById("icday").innerHTML = icday/1000;
    document.getElementById("icMonth").innerHTML = (icday/1000)*30;
    document.getElementById("icmnSpnt").innerHTML = (icday/1000)*30*elRate;

    totalUsage += (icday/1000)*30;


    if (icday > icMaxPower) {
        suggestions.push("You should Decrease the Usage of Induction cooker or you should buy an Induction cookerwith more efficient power usage")
    };

    document.getElementById("tubeday").innerHTML = tubeday/1000;
    document.getElementById("tubeMonth").innerHTML = (tubeday/1000)*30;
    document.getElementById("tubemnSpnt").innerHTML = (tubeday/1000)*30*elRate;

    totalUsage += (tubeday/1000)*30;


    if (tubeday > tubeMaxPower) {
        suggestions.push("Turn off the tubelights when not in use or use the Tubes which are more power efficient ")
    };

    



    if (suggestions.length == 0) {
        document.getElementById("sgst").innerHTML = "You dont need any suggestions, you are using electricity wisely! ⚡"
    } else {
        document.getElementById("sgst").innerHTML = suggestions.join("<br>") + "</p> Rest is well 😊</p>";
    }

    //Now begins the code for calculating total expenses and usage.... 
    document.getElementById("ttlpwr").innerHTML = "Total electricity usage (in kilowatt) : " + totalUsage;
    document.getElementById("emCost").innerHTML = "Estimated bill amount : " + totalUsage * elRate;
    
    if (elRate == 0) {
        alert("Please enter the Price of electricity")
    }
    
        // var appliances = ["1","2","3"]
        var appliances2 = ["A/c","tv","fridge","Washing-Machine","Geyser","Microwave","Computer","Bulb","fans","Induction-Cooker","Tubelight"];
        var values = [acMonth,tvMonth,fridgeMonth,wmMonth,geyserMonth,microMonth,compMonth,blbMonth,fansMonth,icMonth,tubeMonth];
        var color = ["#f0f01a","#0000ff","#25D086","#ff0000","#ffffff","#00ffff","#8080ff","#408080","#ff0080","#804040","#008040"]
        new Chart("chart", {
            type: "pie",
            data: {
              labels: appliances2,
              datasets: [{
                backgroundColor: color,
                data: values
              }]
            },
            options: {
              title: {
                display: true,
                text: "Graphical representation of your Electricity usage per appliance 📊"
              }
            }
          });
         document.getElementById("scr").style.display = "block";

    }

