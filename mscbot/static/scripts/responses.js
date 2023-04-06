function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    }    else if (input == "Name of the owner") {
            return "Rahul Vishwakarma";
    }    else if (input == "Admission timing") {
            return "10:00Am To 6:00Pm";
        }    else if (input == "Which std are avaliable") {
            return "School section:- nursery,junior,Senior and Classes:-1st Std To 10th std";
        }    else if (input == "Fees structure") {
            return "Contact On this numbers:-9158051064";
        }    else if (input == "Fees") {
            return "Contact On this numbers:-9158051064";
        }    else if (input == "Name of the classes") {
            return "Real Academy";   
}    else if (input == "goodbye") {
            return "Talk to you later!";
        }    else if (input == "Whatsapp Number") {
            return "Contact On this numbers:-9158051064";
        }    else if (input == "Whatsapp no.") {
            return "Contact On this numbers:-9158051064";
    } else {
        return "Try asking something else!";
    }
}