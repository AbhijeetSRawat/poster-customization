document.addEventListener('DOMContentLoaded', async () => {
  try {
    const token = localStorage.getItem("token");

    const user = await fetch('http://localhost:11000/getUserDetails', {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: token,
        "Content-Type": "application/json"
      }
    });

    if (!user.ok) {
      alert("Product Fetching Error");
      return;
    }

    const userData = await user.json();
    console.log(userData);

    // Append to .userDetails container
    const container = document.querySelector('.userData');
    if (!container) {
      console.warn("No element found with class .userData");
      return;
    }

    container.innerHTML = `
      <div class="profile-container">
        <h2>User Profile</h2>
        <div class="profile-card">
          <div class="profile-item">
            <span class="label">First Name:</span>
            <span>${userData.data.firstName || "N/A"}</span>
          </div>
          <div class="profile-item">
            <span class="label">Last Name:</span>
            <span>${userData.data.lastName || "N/A"}</span>
          </div>
          <div class="profile-item">
            <span class="label">Email ID:</span>
            <span>${userData.data.email || "N/A"}</span>
          </div>
          <div class="profile-item">
            <span class="label">Phone No:</span>
            <span>${userData.data.number || "N/A"}</span>
          </div>
        </div>
      </div>
    `;
  } catch (error) {
    console.error("Error while fetching User Data:", error);
    alert("Error while fetching User Data");
  }
});
