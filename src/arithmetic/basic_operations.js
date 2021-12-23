export class basicOperations {
    static sum(...parameters) {
        return parameters.reduce((previous, current) => {
            return previous + current;
        });
    }

    static substract(...parameters) {
        return parameters.reduce((previous, current) => {
            return previous - current;
        });
    }

    static product(...parameters) {
        return parameters.reduce((previous, current) => {
            return previous * current;
        });
    }

    static division(param1, param2) {
        try {
            return param1 / param2
        }

        catch(e) {
            console.log("You cannot divide more than two numbers.")
        }
    }

    static module(param1, param2) {
        try {
            return param1 % param2
        }

        catch(e) {
            console.log("Uses only two numbers.")
        }
    }
}

