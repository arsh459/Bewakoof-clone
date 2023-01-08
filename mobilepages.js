// Data Showing In Web Page By Creating Html Elements

display(data);
function display(list) {
    document.querySelector("#Containers").textContent = "";
        list.map(function(elem) {
            var div = document.createElement("div");
            div.setAttribute("id","childDiv");
            div.addEventListener("click",function() {
                addToCart(elem);
            });
    
            var image = document.createElement("img");
            image.setAttribute("src", elem.img);
            image.setAttribute("alt", elem.id);

            title = document.createElement("p");
            title.textContent = elem.Brand;
            title.setAttribute("id","brandTitle")

            var desc = document.createElement("p");
            desc.textContent = elem.Desc;
            desc.setAttribute("id","description")

            var priceBox = document.createElement("div");
            priceBox.setAttribute("id","priceBox");

            var price = document.createElement("p");
            price.textContent = "₹" + elem.price;

            var mrp = document.createElement("p");
            mrp.textContent = "₹" + elem.cprice;

            var box = document.createElement("div");
            box.setAttribute("id","box_of_rating_and_price");

            var tprice = document.createElement("p");
            tprice.textContent = "₹" + elem.tprice + " For TriBe Members"
            
            var rating = document.createElement("div");
            rating.textContent =  "* " + elem.rating;


            var div2nd = document.createElement("div");
            div2nd.setAttribute("id","div2nd");
            

            priceBox.append(price,mrp);
            box.append(priceBox,rating)
            div2nd.append(title,desc,box,tprice);
            div.append(image,div2nd);


            document.querySelector("#Containers").append(div);
        }) 
        
        if(list.length === 0) {
            document.querySelector("h1").textContent = "Sorry ! Currently Unavailable";
        }else  {
            document.querySelector("h1").textContent = document.querySelector("title").textContent + "(" + list.length  +")";
        }
        // console.log(data);
    }



    // Add To Cart Function 


    var cart=JSON.parse(localStorage.getItem("cart")) || [];
    function addToCart(e,i){
    var result=cart.filter(function(elem,index){
        if(e.identity==elem.identity){
            return true;
        }
        else{
            return false;
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

// Search Function
    
    function search() {
        var searchForItem = document.getElementById("searchForItem").value;
        var relatedItem = [];
        data.filter(function(elem) {
            if((elem.Brand).toLowerCase() == searchForItem.toLowerCase()) {
                relatedItem.push(elem);
            }
        })

        display(relatedItem);
        document.getElementById("searchForItem").value = "";
    }