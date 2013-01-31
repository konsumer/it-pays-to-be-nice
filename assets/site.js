var newReason, newUser, newAmount, sendIt;

$(function(){
    var default_reasons = [
        'being nice',
        'being awesome',
        'being smart'
    ];

    var reasons = $.totalStorage('reasons') || default_reasons;
    var people = $.totalStorage('people') || [];
    var amounts = $.totalStorage('amounts') || [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,20,25];

    var updateChecks = function(){
        $('#reasons, #who, #amount').html("");
        reasons.forEach(function(reason){ $('#reasons').append('<option>' + reason + '</option>'); });
        people.forEach(function(person){ $('#who').append('<option>' + person + '</option>'); });
        amounts.forEach(function(amount){ $('#amount').append('<option>' + amount + '</option>'); });
    };
    updateChecks();

    newReason = function(){
        var v = prompt("New reason to give someone money?", '');
        if (v !== ''){
            reasons.push(v);
            $.totalStorage('reasons', reasons);
            $('#reasons').append('<option>' + v + '</option>').val(v);
        }
        return false;
    };

    newUser = function(){
        var v = prompt("New twitter user to give money to?", '');
        if (v !== ''){
            people.push(v);
            $.totalStorage('people', people);
            $('#who').append('<option>' + v + '</option>').val(v);
        }
        return false;
    };

    newAmount = function(){
        var v = prompt("New amount to give?", '');
        if (v !== ''){
            amounts.push(v);
            $.totalStorage('amounts', amounts);
            $('#amount').append('<option>' + v + '</option>').val(v);
        }
        return false;
    };

    sendIt = function(){
        document.location = 'https://twitter.com/intent/tweet?text=' + encodeURI("Pay @" + $('#who').val() + " $" + $('#amount').val() + " for " + $('#reasons').val());
        return false;
    };


});


