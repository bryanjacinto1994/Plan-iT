// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-planner").on("click", function(event) {
      var id = $(this).data("id");
      var newPlanner = $(this).data("newplanner");
  
      var newPlannerState = {
        completed: newPlanner
      };
  
      // Send the PUT request.
      $.ajax("/api/planners/" + id, {
        type: "PUT",
        data: newPlannerState
      }).then(
        function() {
          console.log("Changed Planner To", newPlanner);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newPlanner = {
        plan_name: $("#planner-name").val().trim(),
        completed: $("[name=completed]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/planners", {
        type: "POST",
        data: newPlanner
      }).then(
        function() {
          console.log("Created New Planner");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".delete-planner").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/planners/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("Deleted Planner", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });