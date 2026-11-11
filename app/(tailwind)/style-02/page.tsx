// flex 스타일 구성하기
// w-: width
// h-: height
// border: border solid 1px
// justify-: justify-content
// items-: align-items
// bg: background-color
export default function page() {
    return (
        <>
            <div 
                className="
                    w-125 h-125 border-3 border-green-500 flex justify-center items-center gap-1
                "
            >
                <div className="w-[101px] h-25 bg-amber-300"></div>
                <div className="w-25.25 h-25 bg-amber-300"></div>
                <div className="w-25.25 h-25 bg-amber-300"></div>
            </div>
        </>
    );
}