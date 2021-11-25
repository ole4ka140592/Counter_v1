import React from 'react';
import {Button} from "./Button";
import classes from "./Counter.module.css"

type propsType = {
    number: number
    callBackHandlerReset: () => void
    callBackHandlerIncrement: () => void
    startValue: number
    maxValue: number
    // disabledInc: boolean
    // disabledReset: boolean
}

export const Counter = (props: propsType) => {
    return (
        <div className={classes.count}>
            <div className={classes.number}>
                <span className={props.number === 5 ? classes.numberRed : ""}>{props.number} </span>
            </div>
            <div className={classes.buttons}>
                <Button name='inc'
                        callBack={props.callBackHandlerIncrement}
                        // disabled={props.disabledInc}
                    disabled={props.number === props.maxValue}

                />
                <Button name='reset'
                        callBack={props.callBackHandlerReset}
                        // disabled={props.disabledReset}
                        disabled={props.number === props.startValue}
                />
            </div>
        </div>
    )

}