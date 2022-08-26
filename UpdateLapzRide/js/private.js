function myFunction() {
    var text;
    var Pickup = document.getElementById("myInput").value;
    var Dropoff = document.getElementById("myInput2").value;
      
      if(Pickup=="Veritas" && Dropoff=="Gwarimpa" || Pickup=="Gwarimpa" && Dropoff=="Veritas")
      {
          text="Currently Not Available";
      }
      else if(Pickup=="Veritas" && Dropoff=="Dutse" || Pickup=="Dutse" && Dropoff=="Veritas")
        {
            text ="Currently Not Available";
        }
      else if(Pickup=="Veritas" && Dropoff=="Katampe" || Pickup=="Katampe" && Dropoff=="Veritas" )
      {
          text ="Currently Not Available";
      }
      else if ( Pickup=="Veritas" && Dropoff=="Apo" || Pickup=="Apo" && Dropoff=="Veritas")
      {
          text ="N4,500";
      }
      else if(Pickup=="Veritas" && Dropoff=="Asokoro" || Pickup=="Asokoro" && Dropoff=="Veritas")
      {
          text ="N4,500";
      }
      else if(Pickup=="Veritas" && Dropoff=="Wuse" || Pickup=="Wuse" && Dropoff=="Veritas")
      {
          text ="N4,000";
      }
      else if (Pickup=="Veritas" && Dropoff=="Banex" || Pickup=="Banex" && Dropoff=="Veritas")
      {
          text ="Currently Not Available";
      }
      else if (Pickup=="Veritas" && Dropoff=="Kubwa" || Pickup=="Kubwa" && Dropoff=="Veritas")
      {
          text ="N3,500";
      }
      else if (Pickup=="Veritas" && Dropoff=="Dawaki" || Pickup=="Dawaki" && Dropoff=="Veritas")
      {
          text ="Currently Not Available";
      }
      else if (Pickup=="Veritas" && Dropoff=="Lifecamp" || Pickup=="Lifecamp" && Dropoff=="Veritas")
      {
          text ="4,000";
      }
      else if (Pickup=="Veritas" && Dropoff=="Garki" || Pickup=="Garki" && Dropoff=="Veritas")
      {
          text ="N4,000";
      }
      else if (Pickup=="Veritas" && Dropoff=="Guzape" || Pickup=="Guzape" && Dropoff=="Veritas")
      {
          text ="N4,000";
      }
      else if (Pickup=="Veritas" && Dropoff=="Galadima" || Pickup=="Galadima" && Dropoff=="Veritas")
      {
          text ="N4,500";
      }
      else if (Pickup=="Veritas" && Dropoff=="Lokogoma" || Pickup=="Lokogoma" && Dropoff=="Veritas")
      {
          text ="N4,500";
      }
      else if (Pickup=="Veritas" && Dropoff=="Maitama" || Pickup=="Maitama" && Dropoff=="Veritas")
      {
          text ="N4,500";
      }
      else if (Pickup=="Veritas" && Dropoff=="Idu" || Pickup=="Idu" && Dropoff=="Veritas")
      {
          text ="N4,000";
      }
      else if (Pickup=="Veritas" && Dropoff=="Area" || Pickup=="Area" && Dropoff=="Veritas")
      {
          text ="N4,000";
      }
      else if (Pickup=="Veritas" && Dropoff=="Wuse2" || Pickup=="Wuse2" && Dropoff=="Veritas")
      {
          text ="N4,000";
      }
      else if (Pickup=="Veritas" && Dropoff=="Lugbe" || Pickup=="Lugbe" && Dropoff=="Veritas")
      {
          text ="N4,500";
      }
      else if (Pickup=="Veritas" && Dropoff=="Airport" || Pickup=="Airport" && Dropoff=="Veritas")
      {
          text ="N6,000";
      }
      else if (Pickup=="Veritas" && Dropoff=="Jahi" || Pickup=="Jahi" && Dropoff=="Veritas")
      {
          text ="Currently Not Available";
      }
      else if (Pickup=="Veritas" && Dropoff=="Wuye" || Pickup=="Wuye" && Dropoff=="Veritas")
      {
          text ="N4,000";
      }
      else if (Pickup=="Veritas" && Dropoff=="Jabi" || Pickup=="Jabi" && Dropoff=="Veritas")
      {
          text ="N4,000";
      }
       else if (Pickup=="Veritas" && Dropoff=="Jabi" || Pickup=="Jabi" && Dropoff=="Veritas")
      {
          text ="N4,000";
      }
      else if (Pickup=="Veritas" && Dropoff=="AYA" || Pickup=="AYA" && Dropoff=="Veritas")
      {
          text ="N4,500";
      }
    document.getElementById("demo").innerHTML = text;
    return false;
  }