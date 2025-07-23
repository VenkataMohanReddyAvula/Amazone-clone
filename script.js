document.addEventListener("DOMContentLoaded", () => {

  // ========== LOGIN PAGE LOGIC ==========
  const loginBtn = document.querySelector(".btn1");
  const emailInput = document.querySelector("input[type='text']");
  const createAccountBtn = document.querySelector(".fotter button");

  if (loginBtn && emailInput) {
    loginBtn.addEventListener("click", () => {
      const input = emailInput.value.trim();
      if (!input) {
        alert("Please enter your email or mobile number.");
      } else {
        alert(`Login successful for: ${input}`);
        // Optionally redirect: window.location.href = "amazon.html";
      }
    });
  }

  if (createAccountBtn) {
    createAccountBtn.addEventListener("click", () => {
      alert("Redirecting to Create Amazon Account...");
    });
  }

  // ========== HOMEPAGE LOGIC ==========

  // Search functionality
  const searchBtn = document.querySelector(".search-bar button");
  const searchInput = document.querySelector(".search-bar input");

  if (searchBtn && searchInput) {
    searchBtn.addEventListener("click", () => {
      const query = searchInput.value.trim();
      if (query === "") {
        alert("Please enter a product to search.");
      } else {
        alert(`Searching for: "${query}"...`);
      }
    });
  }

  // Product box interaction
  const allBoxes = document.querySelectorAll(".box, .box10");

  allBoxes.forEach(box => {
    const buttons = box.querySelectorAll("button");
    const title = box.querySelector("h3")?.textContent || "Product";

    if (buttons.length >= 2) {
      const addToCartBtn = buttons[0];
      const buyNowBtn = buttons[1];

      addToCartBtn.addEventListener("click", () => {
        alert(`"${title}" added to cart.`);
      });

      buyNowBtn.addEventListener("click", () => {
        alert(`Redirecting to payment for "${title}"...`);
      });
    }
  });

  // Navbar clicks
  const navbarLinks = document.querySelectorAll(".navbar2 a");
  navbarLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      if (link.getAttribute("href") === "") {
        e.preventDefault();
        alert(`You clicked: ${link.textContent}`);
      }
    });
  });

  // Footer links
  const footerLinks = document.querySelectorAll("footer a");
  footerLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      alert(`Footer link: ${link.textContent}`);
    });
  });

  // Back to Top
  const backToTop = document.querySelector(".panel1");
  if (backToTop) {
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Cart Icon
  const cartIcon = document.querySelector(".cart");
  if (cartIcon) {
    cartIcon.addEventListener("click", () => {
      alert("Opening your cart...");
    });
  }

  // Sign-In Button in Header
  const signInHeader = document.querySelector(".user-info a");
  if (signInHeader) {
    signInHeader.addEventListener("click", () => {
      alert("Redirecting to login page...");
    });
  }

  // Navbar Hover Icons (Optional UI feedback)
  const hoverables = document.querySelectorAll(".user-info, .nav-return, .nav-hello, .cart");
  hoverables.forEach(el => {
    el.addEventListener("mouseover", () => el.style.opacity = "0.8");
    el.addEventListener("mouseout", () => el.style.opacity = "1");
  });

});
