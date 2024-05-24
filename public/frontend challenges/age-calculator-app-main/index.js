const date=new Date()
let d=date.getDate();
let m=date.getMonth()+1;
let y=date.getFullYear();
let err=0

const btn=document.querySelector("input[type=button]");
const MyForm=document.querySelector("form");

btn.addEventListener("click",function(){
    if(MyForm.inputbox1.value>31 || MyForm.inputbox2.value>12){
        err=1;
    }
    if(err===0){
        testResult(MyForm);
    }else{
        document.querySelectorAll("input[type=number]")[0].style.borderColor="red";
        document.querySelectorAll("input[type=number]")[1].style.borderColor="red";
        document.querySelectorAll("input[type=number]")[2].style.borderColor="red";
    }
        
    
})



function testResult(form){
        
        var year= form.inputbox3.value;
        var yearNow=y-year;
    
        var month= form.inputbox2.value;
        var monthNow=Math.abs((m-month)+12);
        var day= form.inputbox1.value;
        var dayNow=Math.abs((d-day));
    
        if(m<month){
            yearNow--;
        }
        if(monthNow>12){
            monthNow-=12
        }
        if(monthNow==12){
            monthNow=0;
        }


        
        document.querySelector("#p1").innerHTML=`<span>${yearNow}</span> Years`;
        document.querySelector("#p2").innerHTML=`<span>${monthNow}</span> Months`;
        document.querySelector("#p3").innerHTML=`<span>${dayNow}</span> days`;

}