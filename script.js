var hrclear, minclear, secclear;
var seccounts = 0;
var mincounts = 0;
var hrcounts = 0;
var a = document.getElementsByClassName("hours")[0];
var b = document.getElementsByClassName("min")[0];
var c = document.getElementsByClassName("sec")[0];
a.innerHTML = 0;
b.innerHTML = 0;
c.innerHTML = 0;
function startbtn(){
    function hrcount(){
        hrcounts = hrcounts+1;
        if(hrcounts==24){
            hrcounts=0;
        }
        a.innerHTML = hrcounts;
    }

    function mincount(){
        
        mincounts = mincounts+1;
        if(mincounts == 60){
            mincounts=0;
        }
        b.innerHTML = mincounts;
    }

    function seccount(){
        
        seccounts = seccounts+1;
        if(seccounts==60){
            seccounts=0;
        }
        c.innerHTML = seccounts;
    }
    hrclear = setInterval(hrcount,3600000);
    minclear = setInterval(mincount,60000);
    secclear = setInterval(seccount,1000);
}
function resetbtn(){
    var a = document.getElementsByClassName("hours")[0];
    var b = document.getElementsByClassName("min")[0];
    var c = document.getElementsByClassName("sec")[0];
    seccounts = 0;
    mincounts = 0;
    hrcounts = 0;
    a.innerHTML = 0;
    b.innerHTML = 0;
    c.innerHTML = 0;
    clearInterval(hrclear);
    clearInterval(minclear);
    clearInterval(secclear);
}
function stopbtn() {
    clearInterval(hrclear);
    clearInterval(minclear);
    clearInterval(secclear);
}
