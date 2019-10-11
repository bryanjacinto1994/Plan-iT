$(function(){
    $('.change-planner').on('click', function(event){
        var id = $(this).data('id');
        var newPlanner = $(this).data('newplanner');

        var newPlannerState = {
            completed: newPlanner
        };

        $.ajax('/api/planners' + id, {
            type: 'PUT',
            data: newPlannerState
        }).then(
            function(){
                console.log('Changed Planner To', newPlanner);

                location.reload();
            }
        );
    });

    $('.create-form').on('submit', function(event){
        event.preventDefault();

        var newPlanner = {
            plan_name: $('#planner-name').val().trim(),
            completed: $('[name=completed]:checked').val().trim();
        };

        $.ajax('/api/planners', {
            type: 'POST',
            data: newPlanner
        }).then(
            function(){
                console.log('Created New Planner');

                location.reload();
            }
        );
    });

    $('.delete-planner').on('click', function(event){
        var id = $(this).data('id');

        $.ajax('/api/planners/' + id, {
            type: 'DELETE'
        }).then(
            function(){
                console.log('Deleted Planner', id);

                location.reload();
            }
        );
    });
});