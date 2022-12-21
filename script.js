//your code here
//your code here

let nameinput = document.getElementById("item-name-input");
let priceinput = document.getElementById("item-price-input");
let addbtn = document.getElementById("add");
let total = document.getElementById("total");
let table = document.getElementsByTagName("table")[0];

addbtn.onclick = () => {
    let nameval = nameinput.value;
    let priceval = priceinput.value;

    if (nameval != '' && priceval != '') {
        
        //add it to table
        let nrow = document.createElement("tr");
        nrow.innerHTML = `<td>${nameval}</td>  <td>${priceval}</td>`;
        table.append(nrow);

        
        // grand total
        let tval = total.innerText;
        let newtotal = Number(tval) + Number(priceval);
        total.innerText = newtotal;
    }
        
    //clearing the input fields
        nameinput.value='';
        priceinput.value='';
    }



