import React from 'react';
import {Button} from "./Button";
import classes from "./Counter.module.css"

type propsType = {
    number: number
    callBackHandlerReset: () => void
    callBackHandlerIncrement: () => void
    disabledInc: boolean
    disabledReset: boolean
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
                        disabled={props.disabledInc}

                />
                <Button name='reset'
                        callBack={props.callBackHandlerReset}
                        disabled={props.disabledReset}
                />
            </div>
        </div>
    )

}