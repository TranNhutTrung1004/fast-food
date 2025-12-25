import style from "./Title.module.css";

const Title = ({ text, isMaxContent, isUnder, styleUnder }) => {
    return (
        isMaxContent ? (
            isUnder ? (
                <h2 className={`${style.title} text-[2rem] w-max text-2xl font-bold mb-5 ${style[styleUnder]}`}>{text}</h2>
            ) : (
                <h2 className={`${style.title}  text-2xl font-bold mb-5`}>
                    {text}
                </h2>
            )
        ) : (
            isUnder ? (
                <div className="w-full">
                    <h2 className={`${style.title} text-[1.25rem] w-full text-2xl font-bold mb-5 ${style[styleUnder]}`}>
                        {text}
                    </h2>
                </div>
            ) : (
                <h2 className={`${style.title} text-2xl font-bold mb-5`}>
                    {text}
                </h2>
            )
        )
    )
}

export default Title;