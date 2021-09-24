import express from "express";
import { calculateBmi } from "./bmiCalculator";
const app = express();

type result = {
    weight: number;
    height: number;
    bmi: string;
};

app.get("/hello", (_req, res) => {
    res.send("Hello Full Stack!");
});

app.get("/bmi", (req, res) => {
    const weight = Number(req.query.weight);
    const height = Number(req.query.height);
    let bmi: string;
    if (!isNaN(Number(height)) && !isNaN(Number(weight))) {
        bmi = calculateBmi(height, weight);
        const response: result = {
            weight,
            height,
            bmi,
        };
        res.json(response);
    } else {
        res.status(400).json({ error: "malformatted parameters" });
    }
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
