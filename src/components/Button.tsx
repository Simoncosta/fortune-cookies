interface ButtonProps {
    name: string;
    action: () => void;
}

function Button(props: ButtonProps) {
    return (
        <button
            onClick={props.action}
            className='
                bg-[#2C2C2C] 
                text-white 
                text-3xl 
                font-extralight 
                py-2 
                px-5 
                rounded-full
                transition-all
                hover:scale-110
                duration-300
            '
        >
            {props.name}
        </button>
    );
}

export default Button;