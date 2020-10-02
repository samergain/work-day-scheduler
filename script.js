//set the current DateTime in header
var currentDT = moment().format('MMMM Do YYYY, h:mm:ss a');
$("#currentDay").text(currentDT);

//setting classes for textAreas based on the current time
//grab all textAreas in an array, get the value for each, prepare jQuery selector string,
//compare each val with currentHour and set class accordingly
var currentTime = moment().format();
var currentHour = currentTime.split("T")[1].split(":")[0];
var hourBoxs = $("textarea");
for (var i=0; i<hourBoxs.length; i++) {
    var txtVal = hourBoxs[i].getAttribute("value");
    var areaWithVal = `textarea[value ='` + txtVal + `']`;
    if (parseInt(txtVal) < parseInt(currentHour)){
        $(areaWithVal).addClass("past");
    } else if (parseInt(txtVal) > parseInt(currentHour)){
        $(areaWithVal).addClass("future");
    } else {
        $(areaWithVal).addClass("present");
    }
}

//key and val to save data to localStorage
var locStorageKey = "";
var locStorageVal = "";
//eventHandler for all btns to save entries 
$(".btn").on("click",function(){  
    var valueBtn = $(this).val();
    var areaSelector = `textarea[value='` + valueBtn + `']`;
    locStorageVal = $(areaSelector).val();
    locStorageKey = valueBtn;
    localStorage.setItem(locStorageKey,locStorageVal);
});


//loop on localStorage to get the available data on page
for (var i=0; i<localStorage.length; i++) {
    var keyStorage = localStorage.key(i);
    var valueStorage = localStorage.getItem(keyStorage);
    //assign localStorage to txtAreas 
    var areaSelector = `textarea[value='` + keyStorage + `']`;
    $(areaSelector).val(valueStorage);   
}



