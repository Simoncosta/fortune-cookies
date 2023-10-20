export default function Container({ children }: React.PropsWithChildren) {
    return (
        <div className='
            h-screen 
            bg-red-400
            flex 
            flex-col 
            items-center 
            justify-center 
            space-y-12
        '
        >
            {children}
        </div>
    );
}