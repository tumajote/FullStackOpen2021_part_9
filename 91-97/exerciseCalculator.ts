interface targetAndExerciseSet {
    target: number;
    exerciseSet: Array<number>;
}

const parseArguments2 = (args: Array<string>): targetAndExerciseSet => {
    if (args.length < 4) throw new Error("Not enough arguments");
    const target = Number(args.slice(2, 3)[0]);
    const exerciseSet = args.slice(3).map((x) => parseFloat(x));
    if (!isNaN(target) && !exerciseSet.some(isNaN)) {
        return {
            target,
            exerciseSet,
        };
    } else {
        throw new Error("Provided values were not numbers!");
    }
};
interface exerciseResult {
    periodLength: number;
    trainingDays: number;
    success: boolean;
    rating: number;
    ratingDescription: string;
    target: number;
    average: number;
}

const calculateExercises = (
    target: number,
    exerciseSet: Array<number>
): exerciseResult => {
    console.log(target);
    const periodLength = exerciseSet.length;
    const trainingDays = exerciseSet.filter((e) => e > 0).length;
    const average = exerciseSet.reduce((a, b) => a + b) / periodLength;
    const success = target <= average;
    let rating;
    let ratingDescription;
    if (average < target) {
        rating = 1;
        ratingDescription = "You did not reach the target";
    } else if (average > target + 1) {
        rating = 3;
        ratingDescription = "You did considerably better than the target";
    } else {
        rating = 2;
        ratingDescription = "You reached the target";
    }

    return {
        periodLength,
        trainingDays,
        success,
        rating,
        ratingDescription,
        target,
        average,
    };
};

try {
    const { target, exerciseSet } = parseArguments2(process.argv);
    console.log(calculateExercises(target, exerciseSet));
} catch (e: unknown) {
    console.log("Error, something bad happened: ", e.message);
}
