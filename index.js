
    function convertToKilometers() {
      const miles = document.getElementById('milesInput').value;
      const kilometers = miles * 1.60934;
      document.getElementById('result').innerHTML = `${miles} miles is equal to ${kilometers.toFixed(2)} kilometers.`;
    }

    function convertToMiles() {
      const kilometers = document.getElementById('kmInput').value;
      const miles = kilometers / 1.60934;
      document.getElementById('result').innerHTML = `${kilometers} kilometers is equal to ${miles.toFixed(2)} miles.`;
    }