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
        Brand:"Breakbounce",
        Desc: "Men's White Typography Oversized Fit T-shirt",
        img:"./Images/XS/img3.webp",
        price:779,
        cprice:1299,
        tprice:739,
        rating:4,
        size:"XS"
    },
    {
        Brand:"Breakbounce",
        Desc: "Men's Grey Oversized Fit T-shirt",
        img:"./Images/XS/img1.webp",
        price:649,
        cprice:899,
        tprice:609,
        rating:3,
        size:"XS"
    },
    {
        Brand:"Breakbounce",
        Desc: "Men's Blue Typography Oversized Fit T-shirt",
        img:"./Images/XS/img2.webp",
        price:779,
        cprice:1299,
        tprice:739,
        rating:2,
        size:"XS"
    },
    {
        Brand:"Breakbounce",
        Desc: "Men's Blue Typography Oversized Fit T-shirt",
        img:"./Images/XS/img4.webp",
        price:779,
        cprice:1299,
        tprice:739,
        rating:5,
        size:"XS"
    },
    {
        Brand:"Breakbounce",
        Desc: "Men's Grey Typography Oversized Fit T-shirt",
        img:"./Images/XS/img5.webp",
        price:779,
        cprice:1299,
        tprice:739,
        rating:1,
        size:"XS"
    },
    {
        Brand:"Bewakoof",
        Desc:"Men's Black Customizable Oversized T-shirt",
        img:"./Images/S/img1.webp",
        price:649,
        cprice:949,
        tprice:599,
        rating:5,
        size:"S"
    },
    {
        Brand:"Bewakoof",
        Desc:"Hell No Monday Half Sleeve T-Shirt Navy Blue",
        img:"./Images/S/img2.webp",
        price:449,
        cprice:1099,
        tprice:399,
        rating:4,
        size:"S"
    },
    {
        Brand:"Bewakoof",
        Desc:"Hell No Monday Half Sleeve T-Shirt Navy Blue",
        img:"./Images/S/img3.webp",
        price:649,
        cprice:1299,
        tprice:599,
        rating:3,
        size:"S"
    },
    {
        Brand:"Bewakoof",
        Desc:"Men's Black Fly Me To The Moon Graphic Printed Oversized T-shirt",
        img:"./Images/S/img4.webp",
        price:649,
        cprice:1299,
        tprice:599,
        rating:2,
        size:"S"
    },
    {
        Brand:"Bewakoof",
        Desc:"Men's Black Sweatshirt",
        img:"./Images/S/img5.webp",
        price:699,
        cprice:1799,
        tprice:649,
        rating:1,
        size:"S"
    },
    {
        Brand:"Bewakoof",
        Desc:"Men's Blue Itachi Of The Sharingan Graphic Printed Oversized T-shirt",
        img:"./Images/M/img1.webp",
        price:649,
        cprice:1299,
        tprice:599,
        rating:5,
        size:"M"
    },
    {
        Brand:"Bewakoof",
        Desc:"Men's Yellow Flat Knit Sweater",
        img:"./Images/M/img2.webp",
        price:799,
        cprice:2399,
        tprice:739,
        rating:4,
        size:"M"
    },
    {
        Brand:"Bewakoof",
        Desc:"Men's Black Sweatshirt",
        img:"./Images/M/img3.webp",
        price:699,
        cprice:1799,
        tprice:649,
        rating:3,
        size:"M"
    },
    {
        Brand:"Bewakoof",
        Desc:"Men's Green Stay Weird Typography Oversized T-shirt",
        img:"./Images/M/img4.webp",
        price:599,
        cprice:1299,
        tprice:549,
        rating:2,
        size:"M"
    },
    {
        Brand:"Bewakoof",
        Desc:"Men's Green Stay Weird Typography Oversized T-shirt",
        img:"./Images/M/img5.webp",
        price:349,
        cprice:999,
        tprice:319,
        rating:1,
        size:"M"
    },
    {
        Brand:"Bewakoof",
        Desc:"Men's Bold Red Moon Rider Graphic Printed Oversized T-shirt",
        img:"./Images/L/img1.webp",
        price:449,
        cprice:1149,
        tprice:419,
        rating:1,
        size:"L"
    },
    {
        Brand:"Bewakoof",
        Desc:"Men's White Proud Color Block T-shirt",
        img:"./Images/L/img2.webp",
        price:539,
        cprice:899,
        tprice:499,
        rating:2,
        size:"L"
    }, 
    {
        Brand:"Bewakoof",
        Desc:"Men's Black The View Graphic Printed Oversized T-shirt",
        img:"./Images/L/img3.webp",
        price:529,
        cprice:1099,
        tprice:499,
        rating:3,
        size:"L"
    },
    {
        Brand:"Bewakoof",
        Desc:"Men's Lilac Camo Super Loose Fit T-shirt",
        img:"./Images/L/img4.webp",
        price:779,
        cprice:2099,
        tprice:709,
        rating:4,
        size:"L"
    },
    {
        Brand:"Bewakoof",
        Desc:"Men's Black Valhalla 2.0 T-shirt",
        img:"./Images/L/img5.webp",
        price:879,
        cprice:2199,
        tprice:709,
        rating:5,
        size:"L"
    },
    {
        Brand:"Riag",
        Desc:"Men's Black Valhalla 2.0 T-shirt",
        img:"./Images/XL/img1.webp",
        price:499,
        cprice:1499,
        tprice:469,
        rating:1,
        size:"XL"
    },
    {
        Brand:"Bewakoof",
        Desc:"Men's White Never Mind Typography Sweatshirt",
        img:"./Images/XL/img2.webp",
        price:949,
        cprice:2299,
        tprice:869,
        rating:2,
        size:"XL"
    },
    {
        Brand:"Bewakoof",
        Desc:"Men's Blue So Graphic Printed Sweatshirt",
        img:"./Images/XL/img3.webp",
        price:1049,
        cprice:2399,
        tprice:869,
        rating:3,
        size:"XL"
    },
    {
        Brand:"Bewakoof",
        Desc:"Men's Blue So Graphic Printed Sweatshirt",
        img:"./Images/XL/img4.webp",
        price:249,
        cprice:2099,
        tprice:209,
        rating:4,
        size:"XL"
    },
    {
        Brand:"OFFICIAL NASA MERCHANDISE",
        Desc:"Men's Plum Red NASA Typography Sweatshirt",
        img:"./Images/XL/img5.webp",
        price:349,
        cprice:1199,
        tprice:309,
        rating:5,
        size:"XL"
    }
    ];
    for(var i=0;i<data.length;i++){
        data[i].identity=i+1;
    }
    display(data);
document.querySelector("#size").addEventListener("change",filterBySize);
document.querySelector("#rating").addEventListener("change",filterByRating);
document.querySelector("#Fbbrand").addEventListener("change",filterByBrand);
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

