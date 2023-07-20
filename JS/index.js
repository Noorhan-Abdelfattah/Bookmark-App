//.............Global
var documentHTML = document

var siteName = documentHTML.getElementById('siteName')
var alertName = documentHTML.getElementById('alertName')
var siteUrl = documentHTML.getElementById('siteUrl')
var alertUrl = documentHTML.getElementById('alertUrl')
var btnAdd = documentHTML.getElementById('btnAdd')
 var booksContainer = []



if(getLocal()!== null ) {
     booksContainer = getLocal()
displayData();
}





//...............events
btnAdd.onclick = function () {
    addBook ()
};



//..............function
function addBook ()
{
    if(nameValidation()=== true & urlValidation()=== true)

var book = {
name:siteName.value,
url:siteUrl.value
}
booksContainer.push(book)

displayData();
setLocal();
resetform()

}

function displayData() {
    var tableData = ''

    for(var i =0 ; i<booksContainer.length;i++ ) {
          tableData += `  <tr>
           
    <td>${booksContainer[i].name}</td>
    <td><a href="${booksContainer[i].url}" target="_blank" class="btn btn-primary">Visit</a></td>
    <td><button target="_blank" class="btn btn-danger " onclick="deletForm (${i})">Delete</button></td>
</tr>
    `
    }

   documentHTML.getElementById('tableBody').innerHTML = tableData
}

function deletForm (index){
    booksContainer.splice(index,1)
    setLocal();
    displayData();
    
}


function resetform(){
    siteName.value=''
    siteUrl.value=''
}

 function setLocal(){
    localStorage.setItem("booksContainer",JSON.stringify(booksContainer))
 }
 
function getLocal( ){
 return JSON.parse( localStorage.getItem("booksContainer", )) ;
}



//................validation
function nameValidation()
{
    if(siteName.value === ''){
        alertName.classList.remove('d-none')
        return false;
    }else{
        alertName.classList.add('d-none')
        return true;
    }
}


function urlValidation()
{
    if(siteUrl.value === ''){
        alertUrl.classList.remove('d-none')
        return false;
    }else{
        alertUrl.classList.add('d-none')
        return true;
    }
}



