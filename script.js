function insert_Row() {
    //Write your code here
	

    var t1 = document.createElement("TD");
    var text1 = document.createTextNode("New Cell1");
    t1.appendChild(text1);
    var t2=document.createElement("TD");
    var text2 = document.createTextNode("New Cell2");
    t2.appendChild(text2);
   
    let  tr1=document.createElement("tr");
    tr1.appendChild(t1);
    tr1.appendChild(t2);
    let Table=document.getElementById("sampleTable")
    Table.insertBefore(tr1, Table.children[0]);

  
  
}