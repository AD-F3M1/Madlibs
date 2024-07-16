$(document).ready(function() {

    $("#formOne").submit(function(e) {

        e.preventDefault();

        const inputtedPersonOne = $("#person1").val();
        const inputtedPersonTwo = $("#person2").val();
        const inputtedAnimal = $("#animal").val();
        const inputtedExclamation = $("#exclamation").val();
        const inputtedPastVerb = $("#verb").val();
        const inputtedNoun = $("#noun").val();

        $(".person1").text(inputtedPersonOne);
        $(".person2").text(inputtedPersonTwo);
        $(".animal").text(inputtedAnimal);
        $(".exclamation").text(inputtedExclamation);
        $(".verb").text(inputtedPastVerb);
        $(".noun").text(inputtedNoun);

        $("#story").show();

        $("#person1").val("");
        $("#person2").val("");
        $("#animal").val("");
        $("#exclamation").val("");
        $("#verb").val("");
        $("#noun").val("");
    })
    
})