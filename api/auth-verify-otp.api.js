document.addEventListener('DOMContentLoaded', () => {
    const submitOtpBtn = document.querySelector('#submitOtpBtn');
    
    submitOtpBtn.addEventListener('click', async (event) => {
        event.preventDefault();

        const otp1 = document.querySelector('#otp1').value.trim();
        const otp2 = document.querySelector('#otp2').value.trim();
        const otp3 = document.querySelector('#otp3').value.trim();
        const otp4 = document.querySelector('#otp4').value.trim();

        // Check if all OTP fields are filled
        if (!otp1 || !otp2 || !otp3 || !otp4) {
            alert("Please enter the full OTP.");
            return;
        }

        const otp = otp1 + otp2 + otp3 + otp4;
  const email =localStorage.getItem('email');
       try {





  const verifyOtpApi = await fetch('http://localhost:11000/api/auth/verifyotp', {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, otp })
  });

  const result = await verifyOtpApi.json();

  if (verifyOtpApi.ok && result.success) {
    const userId = result.userId;

    // Navigate to reset password page with userId in URL
    window.location.href = `./auth-reset-password.html?userId=${userId}`;
  } else {
    alert(result.message || "Invalid OTP. Please try again.");
  }
} catch (error) {
  console.error("OTP verification failed:", error);
  alert("Error: Please try again later.");
}

    });

    document.querySelectorAll('.otp-inputs input').forEach((input, index, inputs) => {
        input.addEventListener('input', (e) => {
            if (e.target.value.length === 1 && index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
        });
    });
});
