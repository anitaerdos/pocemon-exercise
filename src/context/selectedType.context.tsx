import { createContext, Dispatch, SetStateAction, useState } from "react";

export interface ISelectedTypeState {
    selectedType: string,
    setSelectedType: Dispatch<SetStateAction<string>>
}

export const initialSelectedTypeState: ISelectedTypeState = {
    selectedType: "",
    setSelectedType: ()=> ""
};

export interface ISelectedTypeProps {
    children?: JSX.Element;
}

export const SelectedTypeContext = createContext<ISelectedTypeState>(initialSelectedTypeState);

export const SelectedTypeProvider = (props: ISelectedTypeProps) => {
  const [selectedType, setSelectedType] = useState<string>("")

  return (
    <SelectedTypeContext.Provider value={{selectedType, setSelectedType}}>
      {props.children}
    </SelectedTypeContext.Provider>
  );
};

export const SelectedTypeConsumer = SelectedTypeContext.Consumer;
