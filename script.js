
    // JavaScript function to show an alert when a button is clicked
    function showAlert() {
      alert("Button clicked!");
    }
 
  
    function openMap(address) {
      var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      var encodedAddress = encodeURIComponent(address);
      
      // If on a mobile device (iOS or Android), try opening in respective map apps
      if (isMobile) {
          // For iOS devices (Apple Maps)
          if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
              window.location.href = "https://maps.apple.com/?q=" + encodedAddress;
          }
          // For Android devices (Google Maps)
          else {
              window.location.href = "https://www.google.com/maps?q=" + encodedAddress;
          }
      }
      // If on desktop, default to Google Maps
      else {
          window.open("https://www.google.com/maps?q=" + encodedAddress, '_blank');
      }
  }
    
    