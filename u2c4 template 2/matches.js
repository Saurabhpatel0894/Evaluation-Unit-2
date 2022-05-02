// write js code here corresponding to matches.html

var mplArray=JSON.parse(localStorage.getItem("schedule")) || []

mplArray.forEach(function(ele)
{
    
    var tr=document.createElement("tr")

    var td1=document.createElement("td")
    td1.innerText=ele.matchNumber;

    var td2=document.createElement("td")
    td2.innerText=ele.teamAdata

    var td3=document.createElement("td")
    td3.innerText=ele.teamBdata

    var td4=document.createElement("td")
    td4.innerText=ele.matchDate

    var td5=document.createElement("td")
    td5.innerText=ele.matchVenue

    var td6=document.createElement("td")
    td6.innerText="Add as Favourites"
    td6.style.color="green"
    td6.addEventListener("click",function()
    {
        addFavourite(ele);
    })

    tr.append(td1,td2,td3,td4,td5,td6)

    document.querySelector("tbody").append(tr)


})

var favArray=JSON.parse(localStorage.getItem("favourites")) || [];

function addFavourite(ele)
{
    favArray.push(ele);

    alert("Added To Favourites")

    localStorage.setItem("favourites",JSON.stringify(favArray))
}

document.querySelector("#filterVenue").addEventListener("change",filterbyVenu)

function filterbyVenu()
{

    alert("inprocess")
    var filterVenu= document.querySelector("#filterVenue").value

    console.log(filterVenu);

    var filterList= mplArray.filter(function (ele){

        return ele.matchVenue==filterVenu;
    })

    console.log(filterList)

    document.querySelector("tbody").innerHTML="";
    filterList.forEach(function(ele)
    {
    var tr=document.createElement("tr")

    var td1=document.createElement("td")
    td1.innerText=ele.matchNumber;

    var td2=document.createElement("td")
    td2.innerText=ele.teamAdata

    var td3=document.createElement("td")
    td3.innerText=ele.teamBdata

    var td4=document.createElement("td")
    td4.innerText=ele.matchDate

    var td5=document.createElement("td")
    td5.innerText=ele.matchVenue

    var td6=document.createElement("td")
    td6.innerText="Add as Favourites"
    td6.style.color="green"
    td6.addEventListener("click",function()
    {
        addFavourite(ele);
    })

    tr.append(td1,td2,td3,td4,td5,td6)

    document.querySelector("tbody").append(tr)


})



}
