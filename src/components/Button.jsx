export default function Button(props) {
    const { text } = props;
    return (
        <button className="px-8 py-4 mx-auto rounded-md border-2 border-blue-400 bg-slate-950 blueShadow duration-200">
            {text}
        </button>
    );
}
