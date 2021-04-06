let testBtn = document.getElementById("testBtn");
let testPage = document.getElementsByClassName("testPage")[0];
console.log(testBtn);
console.log(testPage);
testBtn.addEventListener("click", () =>{
    if(testPage.style.display == 'none'){
        testPage.style.display = 'flex';
    }else{
        testPage.style.display = 'none';
    }
});