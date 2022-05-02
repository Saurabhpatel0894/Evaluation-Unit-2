// write js code here corresponding to index.html
// You should add submit event on the form

document.querySelector("#masaiForm").addEventListener("submit",mplData)

var mplArray=JSON.parse(localStorage.getItem("schedule")) || []

function mplData()
{
    event.preventDefault();

    var matchData={

        matchNumber: masaiForm.matchNum.value,

        teamAdata: masaiForm.teamA.value,
        teamBdata: masaiForm.teamB.value,
        matchDate: masaiForm.date.value,

        matchVenue: masaiForm.venue.value
    }

    mplArray.push(matchData)

    console.log(mplArray)


    localStorage.setItem("schedule",JSON.stringify(mplArray))
}


//localStorage.setItem("schedule", stringify)