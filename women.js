    var cart=JSON.parse(localStorage.getItem("cart")) || [];
    function checkcart(){
        if(cart.length==0){
            document.querySelector("#Cartlink").href="cart.html"
        }
        else{
            document.querySelector("#Cartlink").href="cart2.html"
        }
    }
    var quan=0;
    cart.map(function(e,i){
        quan+=Number(e.quantity);
    })
    document.querySelector("#Sup").textContent=quan;
    var store=JSON.parse(localStorage.getItem("store")) || [];
    if(store.length==0)
    {
        document.querySelector("#loginname").textContent="Login";
    }
    else{
        document.querySelector("#loginname").textContent=store[store.length-1].name;
    }
var data=[
    {
        Brand:"Bewakoof",
        Desc: "Women's Red & White Classic Mickey Striped Oversized T-shirt",
        img:"https://images.bewakoof.com/t1080/women-classic-mickey-f-b-printed-t-shirt-563353-1672312058-1.jpg",
        price:779,
        cprice:1699,
        tprice:539,
        rating:4,
        size:"XS",
        identity:"R1"
    },
    {
        Brand:"Bewakoof",
        Desc: "Women's Black Pop Minnie Graphic Printed Oversized T-shirt",
        img:"https://images.bewakoof.com/t1080/women-pop-minnie-printed-t-shirt-563362-1672134630-1.jpg",
        price:599,
        cprice:1299,
        tprice:509,
        rating:4,
        size:"XS",
        identity:"R2"
    },
    {
        Brand:"Bewakoof",
        Desc: "Men's Blue Typography Oversized Fit T-shirt",
        img:"https://images.bewakoof.com/t640/women-s-black-abstract-printed-relaxed-fit-velvet-jacket-559402-1670586990-1.jpg",
        price:1439,
        cprice:1799,
        tprice:339,
        rating:3,
        size:"XS",
        identity:"R3"
    },
    
    {
        Brand:"Bewakoof",
        Desc: "Women's Black Get Going Snoopy Graphic Printed Boyfriend T-shirt",
        img:"https://images.bewakoof.com/t1080/get-going-snoopy-boyfriend-t-shirt-516609-1657202693-1.jpg",
        price:399,
        cprice:999,
        tprice:599,
        rating:4,
        size:"XS",
        identity:"R4"
    },
    {
        Brand:"Aks",
        Desc:"Women's Weekend Mood Tom Slim Fit T-shirt",
        img:"https://images.bewakoof.com/t1080/weekend-mood-tom-tjl-half-sleeve-t-shirt-354953-1655748478-1.jpg",
        price:299,
        cprice:1099,
        tprice:599,
        rating:5,
        size:"S",
        identity:"R5",
    },
    {
        Brand:"Aks",
        Desc:"Women's Blue The View Graphic Printed Boyfriend T-shirt",
        img:"https://images.bewakoof.com/t1080/women-s-blue-the-view-graphic-printed-boyfriend-t-shirt-565899-1672411151-1.jpg",
        price:349,
        cprice:999,
        tprice:399,
        rating:4,
        size:"S",
        identity:"R6"
    },
    
    {
        Brand:"Aks",
        Desc:"Black Basic Shorts",
        img:"https://images.bewakoof.com/t1080/black-basic-shorts-330809-1655748409-1.jpg",
        price:449,
        cprice:999,
        tprice:599,
        rating:3,
        size:"S",
        identity:"R7"
    },
    {
        Brand:"Aks",
        Desc:"Women's Black & Sage Reversible Super Loose Puffer Jacket",
        img:"https://images.bewakoof.com/t1080/women-s-black-puffer-reversible-jacket-499009-1670255534-1.jpg",
        price:1999,
        cprice:4499,
        tprice:999,
        rating:4,
        size:"S",
        identity:"R8"
    },
    {
        Brand:"Kotty",
        Desc:"Women's Blue Bomber Jacket",
        img:"https://images.bewakoof.com/t1080/women-s-deep-teal-solid-bomber-jacket-498991-1664287377-1.jpg",
        price:1349,
        cprice:3499,
        tprice:799,
        rating:5,
        size:"M",
        identity:"R9"
    },
    {
        Brand:"Kotty",
        Desc:"Women's Deep Teal Relaxed Fit Puffer Jacket",
        img:"https://images.bewakoof.com/t1080/women-s-deep-teal-solid-puffer-jackets-499027-1670307277-1.jpg",
        price:1499,
        cprice:3499,
        tprice:799,
        rating:5,
        size:"M",
        identity:"R10"
    },
    {
        Brand:"Kotty",
        Desc:"Women's Black Biker Jacket",
        img:"https://images.bewakoof.com/t1080/women-s-black-biker-jacket-559198-1670584068-1.jpg",
        price:899,
        cprice:1799,
        tprice:499,
        rating:4,
        size:"M",
        identity:"R11"

    },
    {
        Brand:"Kotty",
        Desc:"Women's Orchid Petal Cut Out Dress",
        img:"https://images.bewakoof.com/t1080/orchid-petal-rib-cut-out-solid-dress-464327-1655731714-1.jpg",
        price:359,
        cprice:1499,
        tprice:349,
        rating:5,
        size:"M",
        identity:"R12"
    },
    {
        Brand:"Rigo",
        Desc:"Women's Blue All Over Pineapple Printed Oversized Dress",
        img:"https://images.bewakoof.com/t1080/pineapple-oversized-dress-516725-1669035593-1.jpg",
        price:899,
        cprice:1899,
        tprice:219,
        rating:4,
        size:"M",
        identity:"R13"
    },
    {
        Brand:"Rigo",
        Desc:"Women's Black All Over Printed Oversized Dress",
        img:"https://images.bewakoof.com/t1080/women-s-black-all-over-printed-oversized-dress-467420-1656153117-1.jpg",
        price:599,
        cprice:1899,
        tprice:219,
        rating:3,
        size:"M",
        identity:"R14"
    },
    {
        Brand:"Rigo",
        Desc:"Women's Blue Printed 3/4th Sleeve Ethnic Dress",
        img:"https://images.bewakoof.com/t1080/women-s-3-4th-printed-ethnic-dress-403814-1663920864-1.jpg",
        price:649,
        cprice:2499,
        tprice:579,
        rating:4,
        size:"M",
        identity:"R15"
    },
    {
        Brand:"Rigo",
        Desc:"Ceylon Yellow Elbow Sleeve Pocket Dress",
        img:"https://images.bewakoof.com/t1080/ceylon-yellow-elbow-sleeve-pocket-dress-417960-1656140124-1.jpg",
        price:429,
        cprice:1899,
        tprice:479,
        rating:3,
        size:"M",
        identity:"R16"
    },
    {
        Brand:"Rigo",
        Desc:"Women's Green AOP Oversized T-shirt Dress",
        img:"https://images.bewakoof.com/t1080/women-s-aop-boyfriend-fit-t-shirt-dress-507970-1670307480-1.jpg",
        price:799,
        cprice:1699,
        tprice:679,
        rating:4,
        size:"M",
        identity:"R17"
    },
    {
        Brand:"Freakins",
        Desc:"Women's Very Peri Slim Fit Slip Dress",
        img:"https://images.bewakoof.com/t1080/women-s-very-peri-slip-dress-521199-1659110753-1.jpg",
        price:503,
        cprice:1599,
        tprice:509,
        rating:4,
        size:"L",
        identity:"R18"
    },
    {
        Brand:"Freakins",
        Desc:"Women's Maroon Floral Printed Dress",
        img:"https://images.bewakoof.com/t1080/women-s-maroon-floral-printed-dress-547453-1665145347-1.JPG",
        price:765,
        cprice:1699,
        tprice:309,
        rating:3,
        size:"L",
        identity:"R19"
    },
    {
        Brand:"Door",
        Desc:"Women's Blue Typography Oversized T-shirt",
        img:"https://images.bewakoof.com/t1080/women-s-blue-typography-oversized-t-shirt-539714-1662108263-1.JPG",
        price:765,
        cprice:1699,
        tprice:309,
        rating:3,
        size:"L",
        identity:"R20"
    },
    {
        Brand:"Door ",
        Desc:"Women's Black You Typography Oversized T-shirt",
        img:"https://images.bewakoof.com/t1080/women-s-black-you-typography-oversized-t-shirt-539647-1662107781-1.JPG",
        price:599,
        cprice:1499,
        tprice:569,
        rating:4,
        size:"XL",
        identity:"R21"
    },
    {
        Brand:"Door ",
        Desc:"Women's Black Color Block Oversized T-shirt",
        img:"https://images.bewakoof.com/t1080/women-s-black-color-block-oversized-t-shirt-539655-1662107959-1.jpg",
        price:499,
        cprice:1199,
        tprice:469,
        rating:3,
        size:"XL",
        identity:"R22"
    },
    {
        Brand:"Door ",
        Desc:"Women's White Typography Oversized T-shirt",
        img:"https://images.bewakoof.com/t1080/women-s-white-typography-oversized-t-shirt-539649-1662107670-1.JPG",
        price:599,
        cprice:1499,
        tprice:369,
        rating:4,
        size:"XL",
        identity:"R23"
    },
    ];
    display(data);
document.querySelector("#size").addEventListener("change",filterBySize);
document.querySelector("#rating").addEventListener("change",filterByRating);
document.querySelector("#Fbbrand").addEventListener("change",filterByBrand);
//  document.querySelector("#design").addEventListener("change",filterByDesign);
document.querySelector("#sbp").addEventListener("change",sortByPrice);

function display(data){
    document.querySelector("#image").innerText="";
    data.map(function(e,i){
        var div=document.createElement("div");
        div.setAttribute('class',"child")
        var img=document.createElement("img");
        img.setAttribute("src",e.img);
        img.addEventListener("click",function(){
            addToCart(e,i);
        });

        var p1=document.createElement("p");
        p1.innerText=e.Brand;
        p1.setAttribute("class","Brand");

        var p2=document.createElement("div");
        p2.innerText=e.Desc;
        p2.setAttribute("class","Desc");

        var p3=document.createElement("p");

        var span1=document.createElement("span");
        span1.innerText="₹"+e.price;
        span1.setAttribute("class","actual_price")
        
        var span2=document.createElement("span");
        span2.innerText="₹"+e.cprice;
        span2.setAttribute("class","cprice")
        p3.append(span1," ",span2);

        var p4=document.createElement("p");
        var span3=document.createElement("span");
        span3.innerText="₹"+e.tprice;
        p4.append(span3," ","For TriBe Members");
        p4.setAttribute("class","Tribe");
        span3.setAttribute("class","tprice")

        div.append(img,p1,p2,p3,p4);
        document.querySelector("#image").append(div);
        document.querySelector("#totalitems").textContent="("+(i+1)+")";
    })

}

function filterBySize(){
    event.preventDefault();
    var result=data.filter(function(e,i){
    if(document.querySelector("#size").value=="")
    {
        return true;
    }
    else
    {
        return document.querySelector("#size").value==e.size;
    }
})
display(result);
}

function filterByRating(){
    event.preventDefault();
    var result=data.filter(function(e,i){
        if(document.querySelector("#rating").value=="")
        {
            return true;
        }
        else
        {
            return document.querySelector("#rating").value==e.rating;
        }
    })
    display(result);
}

function filterByBrand(){
    event.preventDefault();
    var result=data.filter(function(e,i){
        if(document.querySelector("#Fbbrand").value=="")
        {
            return true;
        }
        else
        {
            return document.querySelector("#Fbbrand").value==e.Brand;
        }
    })
    display(result);
}



function sortByPrice(){
    event.preventDefault();
    if(document.querySelector("#sbp").value==""||document.querySelector("#sbp").value=="htl")
    {
        data.sort(function(a,b)
        {
            if(a.price>b.price) return -1;
            if(a.price<b.price) return 1;
            return 0
        })
        display(data);
    }
    else
    {
        data.sort(function(a,b)
        {
            if(a.price>b.price) return 1;
            if(a.price<b.price) return -1;
            return 0
        })
        display(data);
    }
}

var cart=JSON.parse(localStorage.getItem("cart")) || [];
function addToCart(e,i){
    var result=cart.filter(function(elem,index){
        if(e.identity==elem.identity){
            alert("Item Already in Cart");
            return true;
        }
    })
    if(result.length==0){
        e.quantity=1;
        e.fcprice=e.quantity*e.cprice;
        e.ftprice=e.quantity*e.tprice;
        e.fprice=e.quantity*e.price;
        cart.push(e);
        localStorage.setItem("cart",JSON.stringify(cart));
    }
}