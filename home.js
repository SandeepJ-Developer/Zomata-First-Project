function changeMode(){
    let body = document.body;
    body.classList.toggle('mydark');

    let dropdown1 = document.getElementById('dd1');
    dropdown1.classList.toggle('mydark');

    let dropdown2 = document.getElementById('dd2');
    dropdown2.classList.toggle('mydark');

    let toggleMode = document.getElementById('toggle');
    toggleMode.classList.toggle('mydark');
}