define(
    [
      "jquery", "require"
    ],
    function($) {
      "use strict";
      /// <summary>aero UI framework core module</summary>
      /// <returns>An object to be used as framework utility module in any aero application</returns>
      // TODO: Define knockout, jQuery, amplify in required configuration
  
      /// <var>Empty aero object to be populated and returned</var>
      var aero = {};
  
      /// <var>Module signature to show in console log</var>
      var moduleSignature = "***aero***";
  
      /// <field name="events">loader Events</field>
      aero.events = {
        maintenancePage: "PrimaryContent/Maintenance", // Event to show maintenance page
        container: {
          // Container events
          prs: "containerEventPrs",
          ezr: "containerEventEzr",
        },
      };
  
      /// <field name="const">aero Constants</field>
      aero.const = {
        version: "3.0",
        requestType: {
          get: "GET",
          post: "POST",
        },
        storageType: {
          // Should start from 1
          loader: 1,
        },
        criticalErrorMessageText:
          "An unexpected application error occured. Please use your mouse <b>right click</b> and select <b>Refresh</b> to try again.",
        SEARCH_LIMIT: 999,
      };
    
      return aero;
    }
  );
  