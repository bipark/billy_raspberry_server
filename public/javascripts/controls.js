/**
 * Created by rtlink on 2016. 2. 7..
 */

$(document).ready(function(){
    $('.switch').bootstrapSwitch();

    $('.switch').on('switchChange.bootstrapSwitch', function(event, state) {
        var status = state ? 1 : 0;
        var port = this.name;

        $.post('http://192.168.0.13:3000/io', {'port':port, 'status':status})
            .done(function(data){
                console.log(data);
            });
    });
});

