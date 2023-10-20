interface PhraseProps {
    phrase: string;
}

export default function Phrase(props: PhraseProps) {
    return (
        <h3 className='text-white text-5xl italic'>
            "{props.phrase}"
        </h3>
    )
}