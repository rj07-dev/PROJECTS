const toggleButtons = document.querySelectorAll(".toggle-btn");
const priceElements = document.querySelectorAll(".price");
const taxElements = document.querySelectorAll(".tax");
const priceMessage = document.getElementById("priceMessage");

const taxRate = 0.13;

function updatePrices(plan) {
    priceElements.forEach(function(priceElement, index) {
        const basePrice = parseFloat(priceElement.dataset[plan]);
        const afterTax = (basePrice + (basePrice * taxRate)).toFixed(2);

        if (plan === "weekly") {
            priceElement.textContent = "$" + basePrice + " / week";
        } else if (plan === "monthly") {
            priceElement.textContent = "$" + basePrice + " / month";
        } else {
            priceElement.textContent = "$" + basePrice + " / year";
        }

        taxElements[index].textContent =
            "Before tax: $" + basePrice.toFixed(2) + " | After tax: $" + afterTax;
    });
}

toggleButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        toggleButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");
        const selectedPlan = button.dataset.plan;
        updatePrices(selectedPlan);
        priceMessage.textContent = selectedPlan.charAt(0).toUpperCase() + selectedPlan.slice(1) + " pricing selected.";
    });
});

const subscribeButtons = document.querySelectorAll(".subscribe-btn");
const unsubscribeButtons = document.querySelectorAll(".unsubscribe-btn");
const paymentButtons = document.querySelectorAll(".payment-btn");

subscribeButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        priceMessage.textContent = "Subscription selected successfully.";
    });
});

unsubscribeButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        priceMessage.textContent = "Subscription removed.";
    });
});

paymentButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        priceMessage.textContent = "Proceeding to payment.";
    });
});

updatePrices("weekly");