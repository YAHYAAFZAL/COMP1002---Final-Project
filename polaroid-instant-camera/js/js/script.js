// Global navigation and footer functionality
document.getElementById("global-header").innerHTML = `
    <nav>
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="product.html">Product</a></li>
            <li><a href="contact.html">Contact</a></li>
        </ul>
    </nav>
`;

document.getElementById("global-footer").innerHTML = `
    <p>&copy; 2024 Retro Products Inc. All rights reserved.</p>
`;

document.getElementById("buy-now-btn").addEventListener("click", () => {
    const message = document.getElementById("cart-message");
    message.style.display = "block"; // Show message
    setTimeout(() => {
        message.style.display = "none"; // Hide after 3 seconds
    }, 3000);
});
