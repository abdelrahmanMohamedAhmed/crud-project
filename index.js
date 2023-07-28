let productNameInput = document.getElementById("productNameInput");
let productPriceInput = document.getElementById("productPriceInput");
let productCategoryInput = document.getElementById("productCategoryInput");
let productDescriptionInput = document.getElementById("productDescriptionInput");
let products=[];
 
if(localStorage.getItem('items') != null)
{
    products=JSON.parse(localStorage.getItem('items'));
    sendItem();
}

function addItems()
{
    if(validateName() == true){
        var items={
        name:productNameInput.value ,
        price:productPriceInput.value ,
        category: productCategoryInput.value ,
        description: productDescriptionInput.value
    }
    products.push(items);
    localStorage.setItem('items', JSON.stringify(products));
    sendItem();
    clearValue();
    }
    else{
        alert("validate product name try again please")
    }
    
}
function sendItem ()
{
    var cartona=``;
    for(var i=0 ; i<products.length ; i++)
    {
        cartona+= `<tr>
        <td>${i}</td> 
        <td>${products[i].name}</td> 
        <td>${products[i].price}</td>
        <td>${products[i].category}</td>
        <td>${products[i].description}</td>
        <td><button onclick="deletItems(${i})" class="btn btn-outline-danger ">delete</button></td>
           </tr>`;
    }
    document.getElementById("tableBody").innerHTML=cartona;
}
function clearValue()
{
    productNameInput.value="";
    productPriceInput.value="";
    productCategoryInput.value=""
    productDescriptionInput.value=""
}
function deletItems(deletetItem)
{
    products.splice(deletetItem,1);
    localStorage.setItem('items', JSON.stringify(products));
    sendItem();
}

//string methods 
function searchProduct(term){
    box=``;
    
    for(var i =0 ; i<products.length ; i++)
    {
        if((products[i].name.toLowerCase().includes(term.toLowerCase()) == true)){
        box+=`<tr>
        <td>${i}</td> 
        <td>${products[i].name}</td> 
        <td>${products[i].price}</td>
        <td>${products[i].category}</td>
        <td>${products[i].description}</td>
        <td><button onclick="deletItems(${i})" class="btn btn-outline-danger ">delete</button></td>
           </tr>`; 
    }
    
    }
    document.getElementById("tableBody").innerHTML=box;
}
 
function validateName() 
{
    var rgular=/^[a-z][a-z]{3,20}$/;
    if(rgular.test(productNameInput.value) == true)
    {
        return true;
    }
    else
    {
        return false;
    }

}
