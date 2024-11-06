export default function ProgressBar({ percentage, height }) {
    return (
        <div className="rounded-full w-full flex bg-gray-200" style={{ height: height }}>
            <span className="rounded-full h-full bg-[#208A7C]" style={{ width: percentage + "%", }}></span>
        </div>
    );
}