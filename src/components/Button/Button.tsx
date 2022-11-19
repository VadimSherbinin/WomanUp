import { FC, MouseEvent } from "react";
import './button.scss';

export interface IButton {
    text?: string;
    mode?: string;
    className?: string;
    onClick?: (e?: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void;
}

export const Button: FC<IButton> = ({
    text,
    mode,
    className,
    onClick = () => {},
}) => {

    const styles = mode
        ? `${className} button ${mode}`
        : `${className} button`;

    return (
        <button 
            className={styles}
            onClick={(e) =>onClick(e)}
            >
            <p>{text}</p>
        </button>
    );
};