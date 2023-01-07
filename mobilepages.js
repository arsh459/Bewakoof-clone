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
            image.setAttribute("src", elem.img_url);
            image.setAttribute("alt", elem.id);

            title = document.createElement("p");
            title.textContent = elem.title;
            title.setAttribute("id","brandTitle")

            var desc = document.createElement("p");
            desc.textContent = elem.desc;
            desc.setAttribute("id","description")

            var priceBox = document.createElement("div");
            priceBox.setAttribute("id","priceBox");

            var price = document.createElement("p");
            price.textContent = "₹" + elem.price;

            var mrp = document.createElement("p");
            mrp.textContent = "₹" + elem.strikedOffPrice;

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
        
        document.querySelector("h1").textContent = document.querySelector("title").textContent + "(" + list.length  +")";
        // console.log(data);
    }

    var cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    function addToCart(item) {
        cartItems.push(item);
        localStorage.setItem("cart",JSON.stringify(cartItems));
    }

    
    function search() {
        var searchForItem = document.getElementById("searchForItem").value;
        var relatedItem = [];
        data.filter(function(elem) {
            if((elem.title).toLowerCase() == searchForItem.toLowerCase()) {
                relatedItem.push(elem);
            }
        })
        display(relatedItem);
        document.getElementById("searchForItem").value = "";
    }