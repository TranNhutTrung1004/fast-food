
const CommentList = ({ children }) => {
    return (
        <section className="w-full flex flex-col justify-between items-center gap-4">
            {children}
        </section>
    )
}

export default CommentList;