//first let's declare some variables

let quantity = 1 //set quantity to default of 1
let totalQuantity = document.querySelector('.total-quantity')          //get the .total_quantity class and add it to the variable

let buttonSubtract = document.getElementById('quantity-down')          //get the button element - buttonSubtract

buttonSubtract.addEventListener('click', function(){                   //set up the listener
    if (quantity > 0) {                                                //make sure the quantity can't go below 0
      quantity = quantity - 1                                          //subtract 1 from quantity with each click
      totalQuantity.textContent = "Quantity :" +  quantity             //update the quantity total on the web page
      console.log(quantity)                                            //debug code
    }
})

let buttonAdd =  document.getElementById('quantity-up')                //get the button element - buttonAdd

buttonAdd.addEventListener('click', function(){                        //set up the listener
        quantity = quantity + 1                                        //add 1 with each click
        totalQuantity.textContent = "Quantity :" +  quantity           //update the quantity total on the web page
        console.log(quantity)                                          //debug code
    })
