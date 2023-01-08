var address=JSON.parse(localStorage.getItem("address")) || [];
    display(address);

function display(address)
{
    document.querySelector("#Saved_Address").innerHTML="<h1>Choose From Existing ones</h1>";
    address.map(function(e,i){
        var div1=document.createElement("div");
        var div2=document.createElement("div");
        var div3=document.createElement("div");
        div3.textContent=e.Name;

        div2.append(div3);

        var div4=document.createElement("div");
        div4.textContent=e.Flat+","+e.Area+","+e.Landmark+e.City+","+e.State+","+e.Country+","+e.Zipcode;

        var div5=document.createElement("div");
        div5.textContent=e.Mobile;

        var div6=document.createElement("div");
        var btn1=document.createElement("button");
        btn1.textContent="Confirm";
        btn1.addEventListener("click",redirect())

        var btn2=document.createElement("button");
        btn2.textContent="Remove";
        btn2.addEventListener("click",function(){
            remove(e,i);
        });

        div6.append(btn1,btn2);
        div1.append(div2,div4,div5,div6);
        document.querySelector("#Saved_Address").append(div1);
    })

}
function redirect(){
    window.location.href="payment2.js";
}
function remove(e,i){
    var address=address.filter(function(elem,ind){
        if(e!=elem){
            return true;
        }
    })
    localStorage.setItem("address",JSON.stringify(address));
    display(address);
}