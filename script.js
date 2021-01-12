//set the current DateTime in header
var currentDT = moment().format('MMMM Do YYYY, h:mm a');
$("#currentDay").text(currentDT);
styleTxtArea();
getLocStorage();


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


function styleTxtArea(){
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
}
//loop on localStorage to get the available data on page
function getLocStorage(){
    for (var i=0; i<localStorage.length; i++) {
        var keyStorage = localStorage.key(i);
        var valueStorage = localStorage.getItem(keyStorage);
        //assign localStorage to txtAreas 
        var areaSelector = `textarea[value='` + keyStorage + `']`;
        $(areaSelector).val(valueStorage);   
    }
}

//clear all entered data
$("#clear").on("click", resetData);
function resetData() {
        localStorage.clear();
        location.reload();
}

