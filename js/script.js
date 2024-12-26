const addButton = document.getElementById("addbutton");
const inputTask = document.getElementById("inputtask");
const listUndone = document.getElementById("itemListUndone");
const listDone = document.getElementById('itemListDone');
const prioritas = document.getElementsByName('prioritas');
var isiPrioritas = null;

prioritas.forEach(radio => {
    radio.addEventListener('change',function(){
        isiPrioritas = radio.value;
    });
});
function tambahTask(){
    const isiTask = inputTask.value.trim();
    console.log(isiPrioritas);
    if(isiTask == ""){
        alert('Task tidak boleh kosong!');
    }else{
        const listItem = document.createElement("li");
        
        const text = document.createElement("span");
        text.textContent = isiTask;

        const cekbok = document.createElement("input");
        cekbok.type = "checkbox";
        cekbok.addEventListener('change',function(){
            if(cekbok.checked){
                text.className = "done";
                pindahSelesai(listItem);
            }
            else{
                text.className = "undone";
                listUndone.appendChild(listItem);
            }
        });

        const textPrioritas = document.createElement("span");
        textPrioritas.textContent = isiPrioritas;
        textPrioritas.className = isiPrioritas;
        

        const baris = document.createElement("br");

        const tanggal = document.createElement("span");
        const date = new Date();
        tanggal.textContent = date.toLocaleDateString() +" "+ date.toLocaleTimeString();
        tanggal.className = "date";

        listItem.appendChild(text);
        listItem.appendChild(cekbok);
        listItem.appendChild(textPrioritas);
        listItem.appendChild(baris);
        listItem.appendChild(tanggal);

        listUndone.appendChild(listItem);

        inputTask.value = "";
        inputTask.focus();
    }

}

function pindahSelesai(listItem){
    listDone.appendChild(listItem);
}

function hapusDoneList(){
    if(listDone.childElementCount == 0){
        alert('Tidak ada list selesai!');
    }
    while(listDone.firstChild){
        listDone.removeChild(listDone.firstChild);
    }
}

function hapusSemuaList(){
    if(listUndone.childElementCount == 0 && listDone.childElementCount == 0){
        alert('Tidak ada list yang dihapus!');
    }
    while(listUndone.firstChild){
        listUndone.removeChild(listUndone.firstChild);
    }
    while(listDone.firstChild){
        listDone.removeChild(listDone.firstChild);
    }
}