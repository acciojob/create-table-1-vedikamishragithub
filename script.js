function insert_Row() {
    let table = document.getElementById("sampleTable");
    let newRow = table.insertRow(0); // This will insert a new row at the top of the table

    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);

    cell1.innerHTML = "New Cell1";
    cell2.innerHTML = "New Cell2";
}