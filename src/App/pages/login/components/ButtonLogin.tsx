interface IButtonLoginProps{
    type?: "button" | "submit" | "reset" ;
    onClick: () => void;
    children: React.ReactNode;
}


const ButtonLogin: React.FC<IButtonLoginProps> = ({type, onClick, children}) => {
  return (
    <button type={type} onClick={onClick}>{children}</button>
  )
}

export default ButtonLogin