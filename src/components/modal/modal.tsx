import { useState } from "react";
import { ACTIONS, MODAL } from "../../constants";
import { Button } from "../button";
import type { ModalTypes } from "./types";
import './modal.css'

const Modal = (props: ModalTypes) => {
  const { handleClose, addItem } = props;
  const [inputValue, setInputValue] = useState<string>("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmed = inputValue.trim();
    const isAggregable = !!trimmed
    if(isAggregable){
      addItem(trimmed)
      handleClose();
    }
  };

  return (
    <dialog className="logitravel__modal-backdrop" role="dialog" aria-modal="true">
      <div className="logitravel__modal">
        <h2 className="logitravel__title">{ACTIONS.add_items}</h2>
        <form className="logitravel__modal-form" onSubmit={onSubmit} >
          <input 
            type="text" 
            className="logitravel__modal-input" 
            placeholder={MODAL.placeholder} 
            value={inputValue} 
            onChange={(e) => setInputValue(e.target.value)} 
          />
          <div className="logitravel__buttons logitravel__modal-buttons">
            <Button type="submit" className="btn solid" children={ACTIONS.add} />
            <Button className="btn outline" children={ACTIONS.cancel} onClick={handleClose} />
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default Modal;
