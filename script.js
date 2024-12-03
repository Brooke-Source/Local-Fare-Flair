
    // JavaScript function to show an alert when a button is clicked
    function showAlert() {
      alert("Button clicked!");
    }
 
  
    function openMap(address) {
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        // For mobile devices, use the geo: URI
        window.location.href = 'geo:0,0?q=' + encodeURIComponent(address);
      } else {
        // For desktop, open Google Maps in a new tab
        window.open('https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(address), '_blank');
      }
    }
    