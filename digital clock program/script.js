// digital clock 

function digitalClock(){
      const date = new Date();
      let hours = date.getHours();
      const meredium = hours  >= 12? "PM":"AM";
      hours= hours %12 || 12;
      hours = hours.toString().padStart(2,0)
      const minutes = date.getMinutes().toString().padStart(2,0);
      const seconds = date.getSeconds().toString().padStart(2,0);
      const day = date.getDate().toString().padStart(2, 0);
      const month = date.getMonth().toString().padStart(2, 0);
      const year =  date.getFullYear().toString().padStart(2, 0);
      const timeString = `${hours}:${minutes}:${seconds} ${meredium}`;
      document.getElementById("clock").textContent = timeString;
      const dateString= `${day}/${month}/${year}`;
      document.getElementById("date").textContent = dateString
}

digitalClock();
setInterval(digitalClock, 1000)

