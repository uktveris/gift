import { useEffect, useState } from "react";
import "./textBox.css";

export default function TextBox() {
    const [show, setShow] = useState(false);
    
    useEffect(() => {
        const timer = setTimeout(() => setShow(true), 1500);
        return () => clearTimeout(timer);
    }, [])
    
    return (
        <div className={`slide-up-box ${show ? "visible" : ""}`}>
            <p>Ar noretum eiti su manimi i pasimatyma <b>2025-06-20 (penktadieni) 18:00</b> (Jei taip, atvaziuosiu taves pasiimti nuo namu)? Gali pasirinkti bet kuria opcija is apacioje esanciu pasirinkimu👏</p>
        </div>
    )
}