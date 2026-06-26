

const btnfour=document.querySelector('.more');
const hiddencontent=document.querySelector('.hidden');
function revealcontent(){
    if(hiddencontent.classList.contains('more'))
{
    hiddencontent.classList.remove('more');         
                                                
}                                                         
else{hiddencontent.classList.add('more');}
};
btnfour.addEventListener("click",revealcontent);


const btnfive=document.querySelector('.more2');
const hiddencontent2=document.querySelector('.hidden2');
function revealcontent2(){
    if(hiddencontent2.classList.contains('more2'))
{
    hiddencontent2.classList.remove('more2');         
                                                
}                                                         
else{hiddencontent2.classList.add('more2');}
};
btnfive.addEventListener("click",revealcontent2);



const btnsix=document.querySelector('.more3');
const hiddencontent3 =document.querySelector('.hidden3');
function revealcontent3(){
    if(hiddencontent3.classList.contains('more3'))
{
    hiddencontent3.classList.remove('more3');         
                                                
}                                                         
else{hiddencontent3.classList.add('more3');}
};
btnsix.addEventListener("click",revealcontent3);


const btnseven =document.querySelector('.more4');
const hiddencontent4=document.querySelector('.hidden4');
function revealcontent4(){
    if(hiddencontent4.classList.contains('more4'))
{
    hiddencontent4.classList.remove('more4');         
                                                
}                                                         
else{hiddencontent4.classList.add('more4');}
};
btnseven.addEventListener("click",revealcontent4);

