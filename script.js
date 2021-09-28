function getList()
{
    var select = document.getElementById("list");
    var newCountry = document.createElement("option");
    newCountry.text=document.getElementById("txtbox").value;
    select.add(newCountry);
}