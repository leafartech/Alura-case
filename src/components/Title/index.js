export default function Title({ children, as }) {
    const Tag = as

    return (
        <>
            <Tag>{children}</Tag>
            <style jsx>{`
                ${Tag} {
                    color: red;
                }
                h2 {
                    color: blue
                }
                p {
                    color: green
                }
            `}
            </style>
        </>
    )
}