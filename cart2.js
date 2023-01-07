var cart=JSON.parse(localStorage.getItem("cart")) || [];
display(cart);

function display(cart){
    document.querySelector("#items").innerText="";
    cart.map(function(e,i){
        var div1=document.createElement("div");
        div1.setAttribute("id","cartitems");

        var div2=document.createElement("div");
        div2.setAttribute("id","incartitems");

        var div3=document.createElement("div");
        div3.setAttribute("class","leftmargin");
        div3.innerText=e.Desc;

        var div4=document.createElement("div");
        div4.setAttribute("id","leftmarginprice");

        var div5=document.createElement("div");
        div5.setAttribute("class","leftmargin");
        div5.textContent="₹"+e.fprice;

        var div6=document.createElement("div");
        div6.setAttribute("class","leftmargin");
        div6.textContent="₹"+e.fcprice;

        div4.append(div5,div6);

        var div7=document.createElement("div");
        div7.setAttribute("class","leftmargin");
        div7.textContent="You Saved ₹" +(e.fcprice-e.fprice);
        div7.style.color="green";

        var div8=document.createElement("div");
        div8.setAttribute("id","quan");

        var div9=document.createElement("div");
        div9.setAttribute("class","value");

        var div10=document.createElement("div");
        div10.textContent="Size:";

        var s1=document.createElement("select");

        var op1=document.createElement("option");
        op1.value="";
        op1.textContent="size";

        var op2=document.createElement("option");
        op2.value="";
        op2.textContent="S";

        var op3=document.createElement("option");
        op3.value="";
        op3.textContent="M";

        var op4=document.createElement("option");
        op4.value="";
        op4.textContent="L";

        var op5=document.createElement("option");
        op5.value="";
        op5.textContent="XL";

        var op6=document.createElement("option");
        op6.value="";
        op6.textContent="XXL";

        s1.append(op1,op2,op3,op4,op5,op6);

        div9.append(div10,s1);

        var div11=document.createElement("div");
        div11.setAttribute("class","value");

        var div12=document.createElement("div");
        div12.textContent="Qty:";

        var s2=document.createElement("select"); 

        var o11=document.createElement("option");
        o11.value=e.quantity;
        o11.textContent=e.quantity;

        var o1=document.createElement("option");
        o1.value="1";
        o1.textContent="1";

        var o2=document.createElement("option");
        o2.value="2";
        o2.textContent="2";

        var o3=document.createElement("option");
        o3.value="3";
        o3.textContent="3";

        var o4=document.createElement("option");
        o4.value="4";
        o4.textContent="4";

        var o5=document.createElement("option");
        o5.value="5";
        o5.textContent="5";

        var o6=document.createElement("option");
        o6.value="6";
        o6.textContent="6";

        var o7=document.createElement("option");
        o7.value="7";
        o7.textContent="7";

        var o8=document.createElement("option");
        o8.value="8";
        o8.textContent="8";

        var o9=document.createElement("option");
        o9.value="9";
        o9.textContent="9";

        var o10=document.createElement("option");
        o10.value="10";
        o10.textContent="10";

        s2.addEventListener("change",function(){
            var k=s2.value;
            inc_qua(e,i,k);
        })

        s2.append(o11,o1,o2,o3,o4,o5,o6,o7,o8,o9,o10);

        div11.append(div12,s2);

        div8.append(div9,div11);

        var div13=document.createElement("div");
        div13.textContent="Hurry! Only 15 left!";
        div13.setAttribute("id","hurry");

        div2.append(div3,div4,div7,div8,div13);

        var div14=document.createElement("div");
        div14.setAttribute("id","img");

        var img=document.createElement("img");
        img.setAttribute("src",e.img);
        img.setAttribute("class","img1");

        div14.append(img);

        div1.append(div2,div14);

        var div15=document.createElement("div");
        div15.setAttribute("id","remove");

        var div16=document.createElement("div");
        div16.textContent="Remove";
        div16.addEventListener("click",function(){
            rem_qua(e,i);
        })

        var div17=document.createElement("div");
        div17.textContent="Move To Wishlist";
        div15.append(div16,div17);

        document.querySelector("#items").append(div1,div15);
  })
  bill(cart);
  if(cart.length==0){
    window.location.href = "cart.html";
  }
}

function inc_qua(e,i,k){
    event.preventDefault();
    cart[i].quantity=k;
    cart[i].fcprice=e.quantity*e.cprice;
    cart[i].ftprice=e.quantity*e.tprice;
    cart[i].fprice=e.quantity*e.price;
    localStorage.setItem("cart",JSON.stringify(cart));
    display(cart);
}

function rem_qua(e,i){
    cart=cart.filter(function(elem,index){
        if(e!=elem){
            return true;
        }
    })
    display(cart);
    localStorage.setItem("cart",JSON.stringify(cart));
}
function bill(cart)
{
        var quantity=0;
        var MRP=0;
        var bDiscount=0;
        var shipping=0;
        var stotal=0;
        var cdiscount=0;
        var ttotal=0;
        cart.map(function(e,i){
            quantity+=Number(e.quantity);
            MRP+=e.fcprice;
            bDiscount+=(e.fcprice-e.fprice);
            ttotal+=(-e.ftprice+e.fprice);
        })
        bDiscount=-1*bDiscount;
        if(MRP>4000){
            shipping=0;
        }
        else{
            shipping=200;
        }
        if(document.querySelector("#iCoupon").value=="NEW200")
        {
            cdiscount=-200;
        }
        if(document.querySelector("#iCoupon").value=="NEW20")
        {
            cdiscount=-20;
        }
        var stotal=shipping+MRP+bDiscount+cdiscount;

        document.querySelector('#Price_Summary>div:first-child>div:last-child').textContent="₹"+MRP;
        document.querySelector("#Price_Summary>div:nth-child(2)>div:last-child").textContent="₹"+shipping;
        document.querySelector("#Price_Summary>div:nth-child(3)>div:last-child").textContent="₹"+(bDiscount);
        document.querySelector("#Price_Summary>div:nth-child(4)>div:last-child").textContent="₹"+cdiscount;
        document.querySelector("#Price_Summary>div:nth-child(5)>div:last-child").textContent="₹"+stotal;
        document.querySelector("#youhave").textContent="You Have Save ₹"+-1*(bDiscount+cdiscount);
        document.querySelector("#total>div>h3:last-child").textContent="₹"+stotal;
        document.querySelector("#save>p").textContent="Save Extra ₹"+ttotal+" with tribe Membership";
        document.querySelector("#heading>div:last-child>p").textContent="You get ₹"+shipping+" delivery charges on this order";
        document.querySelector("#My_Bag").textContent="My Bag contains "+quantity+" items";
}
function submit(){
    bill(cart);
}





