import { container } from "~src/styles/index.css";

export interface GreetingProps {
    variant: keyof typeof container
    message: string;
}