let nameField=document.getElementById("namefield");
let countField=document.getElementById("countfield");
let priceField=document.getElementById("pricefield");
let AddButton=document.getElementById("addBtn");
let sumLabel=document.getElementById("sumLbl");
let itemsList=document.getElementById("itemsList");
let items=[];
AddButton.addEventListener('click',() => {if(nameField.value=='' || priceField.value==0  || countField.value==0)
    {window.alert("nem adtal meg minden adatot");
        return;
        
    }
    items.push({name:nameField.value,
                price:priceField.value,
                count:countField.value,
                sum:priceField.value*countField.value
    });
    RefreshTable();
    clearForm();

});

function RefreshTable()
{
    itemsList.innerHTML='';
    let tr=document.createElement("tr");
let td1=document.createElement("td");
let td2=document.createElement("td");
let td3=document.createElement("td");
let td4=document.createElement("td");
let td5=document.createElement("td");

td1.innerHTML=i+1+'.';
td2.innerHTML=items[i].name;
td3.innerHTML=items[i].price;
td4.innerHTML=items[i].count;
td5.innerHTML=items[i].sum+" Ft";

td3.classList.add('text-end')
td4.classList.add('text-end')
td5.classList.add('text-end')
tr.appendChild(td1);
tr.appendChild(td2);
tr.appendChild(td3);
tr.appendChild(td4);
tr.appendChild(td5);
itemsList.appendChild(tr);
}

function clearForm(){
    nameField="";
    countField=0;
    priceField=0;
}

function save(){}
function load(){localStorage.setItem('bevLista',items.toString())}
load();
clearForm();