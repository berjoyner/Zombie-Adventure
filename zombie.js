confirm("Ready To Fight For Your Life?");

var name = "no input yet";
name = prompt("What's your name, Stranger?");

alert("Hello! I am Amber. The outbreak in Charleston has spread! We need to leave NOW! Remember to use CAPSLOCK when making decisions or I won't hear you!");

var userWhere = "no input yet";
userWhere = prompt("Where Should We Go? AIRPORT? HOSPITAL? NAVAL BASE?");

var score = 0;

if (userWhere.toUpperCase() == "AIRPORT") {

    confirm("We arrived safely at the Airport! But we need a plan!");
    var userAiport1 = "no input yet";
    userAirport1 = prompt("The entrance is full of zombies! Should we: FIGHT or FIND DIFFERENT WAY?")

    if (userAirport1.toUpperCase() == "FIGHT") {
        score = score + 5;
        alert("You successfully fight off the zombies!");

    } else {
        score = score + 2;
        alert("You found a back way in through the baggage claim!");
    }

    confirm("You are exhausted after running through the terminal- but we can't rest yet!")
    var userAirport2 = "no input yet";
    userAirport2 = prompt("What next? Should we attempt to PILOT PLANE or SEARCH FOR SURVIVORS")

    if (userAirport2.toUpperCase() == "PILOT PLANE") {
        score = score - 5;
        alert("You manage to pilot a plane, but we crash when you are bit by an infected captain-YOU DIED: (0 Points) TRY AGAIN!");

    } else {
        score = score + 5
        alert("You find multiple survivors and we setup camp until help arrives-CONGRATULATIONS YOU SURVIVE: (" + score + " Points to Gryffindor!) HAVE A BEER!");
    }
} else if (userWhere.toUpperCase() == "HOSPITAL") {

    confirm("We arrived safely at the Hospital! But we need a plan!");
    var userHospital1 = "no input yet";
    userHospital1 = prompt("We run through the lobby but a nurse zombie blocks our path! Should we STAB NURSE with a syringe or RUN TO MORGUE?")

    if (userHospital1.toUpperCase() == "STAB NURSE") {
        score = score + 5
        alert("You successfully stab the nurse in the throat and we run past");

    } else {
        score = score + 2
        alert("You take solace in the morgue but we move quickly once you hear the moans...");
    }

    confirm("We find a dark hallway that leads up to the roof, but we can't see anything!")
    var userHospital2 = "no input yet";
    userHospital2 = prompt("What should we do? Continue in the DARK or find a FLASHLIGHT?")

    if (userHospital2.toUpperCase() == "DARK") {
        score = score + 5
        alert("You sneak past a horde of zombies in the dark and we make it to the roof where we are rescued by a helicopter-CONGRATULATIONS YOU SURVIVE: (" + score + " Points to Gryffindor!) HAVE A BEER!");

    } else {
        score = score - 5
        alert("You find a flashlight in an abandoned room but shine it right in the face of a zombie who chomps your face off-YOU DIED: (0 Points) TRY AGAIN!");
    }
} else if (userWhere == "NAVAL BASE") {

    confirm("We arrived safely at the Naval Base! But we need a plan!");
    var userNavy1 = "no input yet";
    userNavy1 = prompt("A zombie guard dog is charging right at us! Should we KILL the dog or CLIMB the barbed fence?")

    if (userNavy1.toUpperCase() == "KILL") {
        score = score + 5
        alert("You successfully kick the zombie dog with your steel-toed boot and climb the fence");

    } else {
        score = score + 2
        alert("You successfully scale the fence but cut your leg pretty bad on the barbed wire fence");
    }

    confirm("We make our way towards an old docked ship and run quickly past a group of feeding zombies")
    var userNavy2 = "no input yet";
    userNavy2 = prompt("Our movement alerts the zombies and they begin to move toward us! What do we do now? ATTACK the zombies with boat paddle or JUMP ship and swim to safety?")

    if (userNavy2.toUpperCase() == "ATTACK") {
        score = score + 5
        alert("After the attack, you hobble to safety to the control room meeting other suriviors including the Captain who sets sail saving all aboard-CONGRATULATIONS YOU SURVIVE: (" + score + " Points to Gryffindor!) HAVE A BEER!");

    } else {
        score = score - 5
        alert("You jump into the water and begin swimming to the nearest island when suddenly a zombie latches onto your leg and drags you down into the current -YOU DIED: (0 Points) TRY AGAIN!");
    }

}