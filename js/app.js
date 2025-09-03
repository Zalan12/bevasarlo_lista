let name = document.getElementById('tName')
let price = document.getElementById('tPrice')
let count = document.getElementById('tDB')
let addBTN = document.getElementById('addButton')

let list = document.getElementById('itemList')
let sum = document.getElementById('summaryLBL')
let sumCount =0

let Items = [];
let koraTerm=[];
addBTN.addEventListener('click', () =>{
    if (name.value == '' || price.value == 0 || count.value == 0) {
        alert("Nem adtál meg semmit")
        return
    }
    
    Items.push({
        Tname: name.value,
        Tprice: price.value,
        Tcount: count.value,
        Tsum: price.value*count.value
    })

    list.innerHTML = ''
    sumCount = 0

    refreshTable()
    
    sum.innerHTML = sumCount;
    save();
    korTerm()
    
})


function refreshTable() {
    for (let i = 0; i < Items.length; i++) {
        let tr = document.createElement('tr')
        let td1 = document.createElement('td')
        let td2 = document.createElement('td')
        let td3 = document.createElement('td')
        let td4 = document.createElement('td')
        let td5 = document.createElement('td')
        let td6=document.createElement('td');
        let btn=document.createElement('button')
    
        td1.innerHTML = i+1+'.'
        td2.innerHTML = Items[i].Tname
        td3.innerHTML = Items[i].Tprice
        td4.innerHTML = Items[i].Tcount
        td5.innerHTML = Items[i].Tsum
        btn.innerHTML='X';

        td3.classList.add('text-end')
        td4.classList.add('text-end')
        td5.classList.add('text-end')
        td6.classList.add('text-center')
        btn.classList.add('btn','btn-danger','btn-sm')

        btn.addEventListener('click',()=>{deleteItem(i)});

    
    
        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tr.appendChild(td4)
        tr.appendChild(td5)
        tr.appendChild(td6)
        tr.appendChild(btn)
    
        list.appendChild(tr)

        sumCount += Items[i].Tsum

    }

}

function save() {
    localStorage.setItem('bevLista', JSON.stringify(Items))
}

function deleteItem(idx)
{
    
    if(confirm('Bizti?'))
        {
            alert('Törlés!'+idx)
            Items.splice(idx,1);
            clearForm()
            refreshTable()
            save();
        }

}

function clearForm() {
    name.value = ''
    price.value = 0
    count.value = 0

    list.innerHTML = ''
}

function load()
{
    if(localStorage.getItem('bevLista')){
        Items=JSON.parse(localStorage.getItem('bevLista'));

    }
}

function korTerm()
{
    for (let i = 0; i < Items.length; i++) {
        
        koraTerm.push(Items[i].Tname);
        console.log(koraTerm);
        
    }
}
load();
refreshTable()

//lehessen savelni (load meghivni)