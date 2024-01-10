const tbody = document.getElementById("tableBody");
let counter = 0;
const rows = [];

const tableRow = `
<tr>
    <td>${counter + 1}</td>
    <td><input type="text" name="item-name" placeholder="Item name"></td>
    <td><input type="number" name="item Qty" placeholder="Qty"></td>
    <td><input type="text" name="Rate" placeholder="Rate"></td>
    <td>Total value </td>
    <td><button id=${counter} onclick="delRow(this.id)">-</button></td>
    <td><button onclick="createRow(${counter})">+</button></td>
</tr>`




window.addEventListener("load", e => {

    rows.push({
        serial: counter,
        itemName: "",
        itemQty: "",
        itemRate: ""
    })
    insertRowswithValues();
});



function createRow(arg) {
    if (document.getElementById(`itemNameInput-${arg}`).value.length < 1 || document.getElementById(`itemQtyInput-${arg}`).value.length < 1 || document.getElementById(`itemRateInput-${arg}`).value.length < 1) {
        alert("Please include some values in the row then create new ..")
        return;
    }
    else {
        counter++;
        rows[arg].itemName = document.getElementById(`itemNameInput-${arg}`).value;
        rows[arg].itemQty = document.getElementById(`itemQtyInput-${arg}`).value;
        rows[arg].itemRate = document.getElementById(`itemRateInput-${arg}`).value;

        rows.push({ serial: counter, itemName: "", itemQty: "", itemRate: "" });
        tbody.innerHTML = ""
        insertRowswithValues();
    }
}


function insertRowswithValues() {

    let tcounter = 0;
    let tamount = 0;
    rows.map(row => {
        tcounter = counter + 1;
        tamount = tamount + Number.parseInt(row.itemQty * row.itemRate);
        return tbody.innerHTML += `
        <td>${row.serial + 1}</td>
        <td><input type="text" name="item-name" placeholder="Item name" id="itemNameInput-${row.serial}" value="${row.itemName}" ></td>
        <td><input type="number" name="item Qty" placeholder="Qty" id="itemQtyInput-${row.serial}" value="${row.itemQty}" ></td>
        <td><input type="text" name="Rate" placeholder="Rate" id="itemRateInput-${row.serial}" value="${row.itemRate}"></td>
        <td>${Number.parseInt(row.itemQty * row.itemRate)}</td>
        <td><button id=${row.serial} onclick="delRow(this.id)">-</button></td>
        <td><button onclick="createRow(${row.serial})">+</button></td>
    </tr>
        
        `
    })
    document.getElementById("titems").innerHTML = tcounter;
    document.getElementById("tamounts").innerHTML = tamount;

}


function delRow(arg) {
    if (arg == 0) {
        alert("Unable to delete this row because this is first row ")
        return
    }
    else {
        const id = document.getElementById(arg).parentElement.parentElement;
        rows.splice(arg, 1);
        tbody.innerHTML = "";
        insertRowswithValues();
    }
}



function finalBill() {
    if (rows[0].serial.length < 0 && rows[0].itemName.length < 0 || rows[0].itemQty.length < 0 || rows[0].itemRate.length < 0) {
        alert("Unable to finilize your bil because there is no have any data")
    }
    else {
        rows[counter].itemName = document.getElementById(`itemNameInput-${counter}`).value;
        rows[counter].itemQty = document.getElementById(`itemQtyInput-${counter}`).value;
        rows[counter].itemRate = document.getElementById(`itemRateInput-${counter}`).value;
        console.log(rows)
    }
}
