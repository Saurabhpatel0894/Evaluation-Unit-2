// write js code here corresponding to favourites.html

var favArray=JSON.parse(localStorage.getItem("favourites")) || [];

favArray.forEach(function(ele,index)
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
    td6.innerText="Delete"
    td6.addEventListener("click",function()
    {
        deleteFav(ele,index)
    })

    tr.append(td1,td2,td3,td4,td5,td6)

    document.querySelector("tbody").append(tr)


})

function deleteFav(el,index)
{
    favArray.splice(index,1)

    alert("Deleted")

    localStorage.setItem("favourites",JSON.stringify(favArray))

    window.location.reload();

}
