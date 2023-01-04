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
        Desc:"Men's Black Sweatshirt",
        img:"./Images/S/img5.webp",
        price:699,
        cprice:1799,
        tprice:649,
        rating:5,
        size:"M"
    },
    {
        Brand:"Bewakoof",
        Desc:"Men's Black Sweatshirt",
        img:"./Images/S/img5.webp",
        price:699,
        cprice:1799,
        tprice:649,
        rating:5,
        size:"M"
    },


    ];

document.querySelector("#size").addEventListener("change",filterBySize);
document.querySelector("#rating").addEventListener("change",filterByRating);
document.querySelector("#sbp").addEventListener("change",sortByPrice);
display(data);
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


function sortByPrice(){
    event.preventDefault();
    if(document.querySelector("#sbp").value==""||document.querySelector("#sbp").value=="htl"){
    data.sort(function(a,b)
    {
        if(a.price>b.price) return 1;
        if(a.price<b.price) return -1;
        return 0
    })
    display(data);
}
else
{
    data.sort(function(a,b)
    {
        if(a.price>b.price) return -1;
        if(a.price<b.price) return 1;
        return 0
    })
    display(data);
}
}

function addToCart(e,i){
    alert("added to cart")
}

