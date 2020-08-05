import React from "react";
import classes from './ActiveQuiz.module.scss'
import AnswersList from "./AnswersList/AnswersList";

const ActiveQuiz = props => (
    <div className={classes.ActiveQuiz}>
        <p className={classes.Qustion}>
            <span>
                <strong>{props.answerNumber}.</strong>&nbsp;
                { props.question }
            </span>
            <small>{props.answerNumber} из {props.quizeLength}</small>
        </p>

        <AnswersList
            answers = {props.answers}
            onAnswerclick = {props.onAnswerclick}
            state = {props.state}
        />
    </div>
)

export default ActiveQuiz