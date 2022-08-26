function myFunction() {
    var text;
    var Pickup = document.getElementById("myInput").value;
    var Dropoff = document.getElementById("myInput2").value;
      
      if(Pickup=="Central" && Dropoff=="Lugbe" || Pickup=="Lugbe" && Dropoff=="Central")
      {
          text="N500";
      }
      else if(Pickup=="Central" && Dropoff=="Galadima" || Pickup=="Galadima" && Dropoff=="Central")
        {
            text ="N500";
        }
      else if(Pickup=="Central" && Dropoff=="Apo" || Pickup=="Apo" && Dropoff=="Central Area" )
      {
          text ="Coming Soon!!";
      }
      else if ( Pickup=="Central" && Dropoff=="Lokogoma" || Pickup=="Lokogoma" && Dropoff=="Central")
      {
          text ="N500";
      }
      else if(Pickup=="Maitama" && Dropoff=="Lugbe" || Pickup=="Lugbe" && Dropoff=="Maitama")
      {
          text ="N500";
      }
      else if(Pickup=="Maitama" && Dropoff=="Galadima" || Pickup=="Galadima" && Dropoff=="Maitama")
      {
          text ="N500";
      }
      else if (Pickup=="Maitama" && Dropoff=="Apo" || Pickup=="Apo" && Dropoff=="Maitama")
      {
          text ="Coming Soon!!";
      }
      else if (Pickup=="Maitama" && Dropoff=="Lokogoma" || Pickup=="Lokogoma" && Dropoff=="Maitama")
      {
          text ="N500";
      }
      else if (Pickup=="Garki" && Dropoff=="Lugbe" || Pickup=="Lugbe" && Dropoff=="Garki")
      {
          text ="N500";
      }
      else if (Pickup=="Garki" && Dropoff=="Galadima" || Pickup=="Galadima" && Dropoff=="Garki")
      {
          text ="N500";
      }
      else if (Pickup=="Garki" && Dropoff=="Apo" || Pickup=="Apo" && Dropoff=="Garki")
      {
          text ="Coming Soon!!";
      }
      else if (Pickup=="Garki" && Dropoff=="Lokogoma" || Pickup=="Lokogoma" && Dropoff=="Garki")
      {
          text ="Coming Soon!!";
      }
      else if(Pickup=="Asokoro" && Dropoff=="Galadima" || Pickup=="Galadima" && Dropoff=="Asokoro")
      {
          text ="N500";
      }
    else if(Pickup=="Asokoro" && Dropoff=="Apo" || Pickup=="Apo" && Dropoff=="Asokoro" )
    {
        text ="Coming Soon!!";
    }
    else if ( Pickup=="Asokoro" && Dropoff=="Lokogoma" || Pickup=="Lokogoma" && Dropoff=="Asokoro")
    {
        text ="N500";
    }
    else if ( Pickup=="Asokoro" && Dropoff=="Lugbe" || Pickup=="Lugbe" && Dropoff=="Asokoro")
    {
        text ="N500";
    }
    //   else if (Pickup=="Garki" && Dropoff=="Guzape" || Pickup=="Guzape" && Dropoff=="Garki")
    //   {
    //       text ="N4,000";
    //   }
    //   else if (Pickup=="Veritas" && Dropoff=="Galadima" || Pickup=="Galadima" && Dropoff=="Garki")
    //   {
    //       text ="N4,500";
    //   }
    //   else if (Pickup=="Veritas" && Dropoff=="Lokogoma" || Pickup=="Lokogoma" && Dropoff=="Veritas")
    //   {
    //       text ="N4,500";
    //   }
    //   else if (Pickup=="Veritas" && Dropoff=="Maitama" || Pickup=="Maitama" && Dropoff=="Veritas")
    //   {
    //       text ="N4,500";
    //   }
    //   else if (Pickup=="Veritas" && Dropoff=="Idu" || Pickup=="Idu" && Dropoff=="Veritas")
    //   {
    //       text ="N4,000";
    //   }
    //   else if (Pickup=="Veritas" && Dropoff=="Area" || Pickup=="Area" && Dropoff=="Veritas")
    //   {
    //       text ="N4,000";
    //   }
    //   else if (Pickup=="Veritas" && Dropoff=="Wuse2" || Pickup=="Wuse2" && Dropoff=="Veritas")
    //   {
    //       text ="N4,000";
    //   }
    //   else if (Pickup=="Veritas" && Dropoff=="Lugbe" || Pickup=="Lugbe" && Dropoff=="Veritas")
    //   {
    //       text ="N4,500";
    //   }
    //   else if (Pickup=="Veritas" && Dropoff=="Airport" || Pickup=="Airport" && Dropoff=="Veritas")
    //   {
    //       text ="N6,000";
    //   }
    //   else if (Pickup=="Veritas" && Dropoff=="Jahi" || Pickup=="Jahi" && Dropoff=="Veritas")
    //   {
    //       text ="Currently Not Available";
    //   }
    //   else if (Pickup=="Veritas" && Dropoff=="Wuye" || Pickup=="Wuye" && Dropoff=="Veritas")
    //   {
    //       text ="N4,000";
    //   }
    //   else if (Pickup=="Veritas" && Dropoff=="Jabi" || Pickup=="Jabi" && Dropoff=="Veritas")
    //   {
    //       text ="N4,000";
    //   }
    //    else if (Pickup=="Veritas" && Dropoff=="Jabi" || Pickup=="Jabi" && Dropoff=="Veritas")
    //   {
    //       text ="N4,000";
    //   }
    //   else if (Pickup=="Veritas" && Dropoff=="AYA" || Pickup=="AYA" && Dropoff=="Veritas")
    //   {
    //       text ="N4,500";
    //   }
    document.getElementById("demo").innerHTML = text;
    return false;
  }