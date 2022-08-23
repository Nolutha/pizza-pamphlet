function fromWhere(registration) {
    if (registration.startsWith("CY")) {
      return "Bellville";
    } else if (registration.startsWith("CJ")){
      return "Paarl";
    }else if (registration.startsWith("CA")) {
      return "Cape Town"; 
    } else{ 
      return "Some other place!";  
   }
   }