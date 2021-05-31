{ // Bulwark

  // Baseline JSON-serializable object template, v0.1.1
  // 20210531
  
  // Usage:
  // var foo = new Bulwark();
  // var json = JSON.stringify(foo);
  
  var Bulwark = function()
  {
    var bulwark = Object.create(null);
    
    bulwark["meta"] = Object.create(null);
    bulwark["meta"]["format"]  = "bulwark";
    bulwark["meta"]["version"] = "0.1.1";
    bulwark["meta"]["result"]  = 1; // 1 for success, 0 for failure
    bulwark["meta"]["message"] = "This is why result is 0, optional if result is 1.";
    bulwark["meta"]["about"]   = "Other optional fields can be added here.";
    bulwark["data"] = [];
    
    // NOTE: The specification for bulwark requires each object within the data array to have a "type" member with a string value to be used as a domain-unique identifier for the payload type, and an "object" member with either an object or an array value, containing the payload. For example:
    
    /*
    var info =
      {
        "type"     : "foo",
        "object"   : {} // or []
      };
    
    bulwark["data"].push(info);
    */
    
    return bulwark;
  }
}
