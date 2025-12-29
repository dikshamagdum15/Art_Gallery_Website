let cardNumInput =
  document.querySelector('#cardNum')

let submitbtn = document.getElementById("submitbtn1");
submitbtn.addEventListener("click", (e) => {
  e.preventDefault();
  // window.open('https://buy.stripe.com/test_7sIcPY2Wwerj5PyaEE', 'Payment Window', "width=700,height=700");

  var options = {
    "key": "rzp_test_LSdl7FG9M8EAUd",
    "amount": "50000",
    "currency": "INR",
    "name": "Test Company",
    "description": "Test Transaction",
    // "image": "https://yourdomain.com/logo.png", // Optional
    "handler": function (response) {
      alert("Payment Successful!\nPayment ID: " + response.razorpay_payment_id);
      document.getElementById('animation').style.display = 'none';
    },
    "prefill": {
      "name": "Test User",
      "email": "test@example.com",
      "contact": "9999999999"
    },
    "theme": {
      "color": "#3399cc"
    }
  };

  var rzp1 = new Razorpay(options);
  rzp1.open();

  rzp1.on('payment.failed', function (response) {
    alert("Payment Failed!");
    // document.getElementById('animation').style.display = 'none';
  });
})

cardNumInput.addEventListener('keyup', () => {
  let cNumber = cardNumInput.value
  cNumber = cNumber.replace(/\s/g, "")

  if (Number(cNumber)) {
    cNumber = cNumber.match(/.{1,4}/g)
    cNumber = cNumber.join(" ")
    cardNumInput.value = cNumber
  }
})
