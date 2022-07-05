function Calculate() {

    const amount = document.querySelector("#amount").value;


    const rate = document.querySelector("#rate").value;


    const week = document.querySelector("#week").value;


    const interest = (amount * ((rate * 0.01) / 30)) / week;

    const total = ((amount / week) + (interest * 7)).toFixed(2);

    document.querySelector("#total")
        .innerHTML = "Total : ($)" + total;
}