const stock = {
    Laptop: 5,
    Headphones: 10,
    Keyboard: 7
};

const prices = {
    Laptop: 50000,
    Headphones: 2000,
    Keyboard: 1500
};

const form =
document.getElementById("orderForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const customerName =
    document.getElementById("customerName").value;

    const product =
    document.getElementById("product").value;

    const quantity =
    parseInt(document.getElementById("quantity").value);

    const payment =
    document.getElementById("payment").value;

    const result =
    document.getElementById("result");

    const loader =
    document.getElementById("loader");

    const tracking =
    document.getElementById("trackingSection");

    const toast =
    document.getElementById("toast");

    result.innerHTML = "";

    tracking.style.display = "none";

    if(
        customerName === "" ||
        product === "" ||
        !quantity ||
        payment === ""
    ){

        result.innerHTML =
        `<p class="error">
            Please fill all fields.
        </p>`;

        return;
    }

    loader.style.display = "block";

    setTimeout(()=>{

        loader.style.display = "none";

        if(quantity > stock[product]){

            result.innerHTML =
            `<p class="error">
                Out of Stock!
                Only ${stock[product]} items available.
            </p>`;

            return;
        }

        const total =
        quantity * prices[product];

        const orderId =
        "ORD" + Math.floor(Math.random()*100000);

        const trackingId =
        "TRK" + Math.floor(Math.random()*100000);

        stock[product] -= quantity;

        result.innerHTML = `

            <p class="success">
                Order Successfully Confirmed!
            </p>

            <p>
                <b>Order ID:</b>
                ${orderId}
            </p>

            <p>
                <b>Tracking ID:</b>
                ${trackingId}
            </p>

            <p>
                <b>Total Amount:</b>
                ₹${total}
            </p>

            <p>
                <b>Estimated Delivery:</b>
                3-5 Business Days
            </p>

            <p>
                <b>Payment:</b>
                ${payment}
            </p>
        `;

        tracking.style.display = "block";

        const steps =
        document.querySelectorAll(".step");

        steps.forEach(step=>{
            step.classList.remove("active");
        });

        setTimeout(()=>{
            steps[0].classList.add("active");
        },500);

        setTimeout(()=>{
            steps[1].classList.add("active");
        },1200);

        setTimeout(()=>{
            steps[2].classList.add("active");
        },2000);

        setTimeout(()=>{
            steps[3].classList.add("active");
        },3000);

        toast.classList.add("show");

        setTimeout(()=>{
            toast.classList.remove("show");
        },3000);

    },2000);

});