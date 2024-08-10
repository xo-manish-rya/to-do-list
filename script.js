let form = document.querySelector(".form");

form.addEventListener('submit', add)

function add(e){
    e.preventDefault();
    // const data = this.elements.add.value; -----> we can also use this way.
    const data = form['add'].value
    const list = document.querySelector("ol");
    const item = document.createElement('li');
    const text = document.createElement('p');

    text.textContent = data;
    // this.elements.add.value = "";
    form['add'].value = "";
    item.append(text);
    list.append(item);

    const rbtn = document.createElement('div')
    rbtn.classList.add("remove")
    item.append(rbtn);

    rbtn.addEventListener("click", (e)=>{
        list.removeChild(item);
    })

    item.addEventListener('click', (e)=>{
        item.classList.toggle('done');
    })
}



