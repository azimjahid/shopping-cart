// Remove Item Function
function removingItem(remover, removingValue) {
    document.getElementById(remover).addEventListener("click", function () {
        var caseItem = document.getElementById(removingValue);
        caseItem.style.display = "none";
    });
}

// Calculating the total
function calculateTotal() {
    const phoneInput = getInputValue("phone");
    const caseInput = getInputValue("case");

    const totalPrice = phoneInput * 1219 + caseInput * 59;
    document.getElementById("total-price").innerText = totalPrice;

    const tax = Math.round(totalPrice * 0.1);
    document.getElementById("tax-amount").innerText = tax;

    const grandTotal = totalPrice + tax;
    document.getElementById("grand-total").innerText = grandTotal;
}

function getInputValue(product) {
    const productInput = document.getElementById(product + "-quantity");
    const productInputNumber = parseInt(productInput.value);
    return productInputNumber;
}

// Handle Product Changing
function handleProductChange(product, isIncrease) {
    const productInputNumber = getInputValue(product);

    let productInputNew = productInputNumber;
    if (isIncrease == true) {
        productInputNew = productInputNumber + 1;
    }
    if (isIncrease == false && productInputNew > 0) {
        productInputNew = productInputNumber - 1;
    }
    document.getElementById(product + "-quantity").value = productInputNew;

    // const caseTotalPrice = caseInputNew * 59;
    let productTotal = 0;
    if (product == "phone") {
        productTotal = productInputNew * 1219;
    }
    if (product == "case") {
        productTotal = productInputNew * 59;
    }
    document.getElementById(product + "-price").innerText = productTotal;
    calculateTotal();
}

// iPhone Case Remove Item
removingItem("case-remove", "case-item");

// iPhone 11 Black Remove Item
removingItem("phone-remove", "phone-item");