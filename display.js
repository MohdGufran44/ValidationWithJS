/*function init(){
    //storing values from sessionStorage
    var First_Name =sessionStorage.getItem("firstName");
    console.log(First_Name);
    var Last_Name =sessionStorage.getItem("lastName");
    var Date_of_Birth =sessionStorage.getItem("dob");
    var Email =sessionStorage.getItem("email");


    //adding sessionstorage data into table by using td's id
    document.getElementById('1').innerText = First_Name;
    //document.getElementById('t2').innerText = Last_Name;
    //document.getElementById('t3').innerText = Date_of_Birth;
    //document.getElementById('t4').innerText = Email;


}*/
var queryString = window.location.search;
queryString = queryString.substring(1);
queries = queryString.split("&");
var x=1;
for ( i = 0;i<queries.length-3; i++ ) {
    temp = queries[i].split('=');
    var str=temp[1];
    if(str.includes("%40")){
        //str.replace("%40", "@");
        var x=str.split("%40");
        console.log(x);
    }
    document.getElementById(x++).innerText = str;
}

