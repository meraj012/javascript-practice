// Set a cookie (expires in 1 day)
document.cookie =
  "username=Meraj; expires=" + new Date(Date.now() + 86400000).toUTCString();

// Read all cookies
console.log("Cookies:", document.cookie);

// Delete cookie (set expiry to past date)
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
