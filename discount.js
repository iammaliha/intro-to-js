const totalAmount = 1000;



 if(totalAmount > 4999){
     console.log("you got 20% off");
/}
 else if (totalAmount > 3999){
     console.log("you got 10% off");
 }
 else if (totalAmount > 2999){
     console.log("you got 5% off");
 }
 else{
     console.log("Happy Shopping. No Discount");
 }
// --------------------0----------------------------

if(totalAmount > 5000){
    const discount = 30;
    const discountamount = totalAmount/100*discount;
    const payment = totalAmount - discountamount;

    console.log(payment);
}
else if(totalAmount > 2000){
    const discount = 20;
    const discountamount = totalAmount/100*discount;
    const payment = totalAmount - discountamount;

    console.log(payment);

}
 else{
    console.log("Allah HAfiz");
 }