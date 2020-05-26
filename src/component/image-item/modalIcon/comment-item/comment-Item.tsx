import React from 'react'
import './comment-item.sass'

type PropsType= {
    date: number,
    text: string | null,
    id: number 
}
export const CommentItem:React.FC<PropsType> = ({date, text, id}) => {

    const getDate = new Date(date)
    const day = getDate.getDate().toString()
    const month = getDate.getMonth().toString()
    const year = getDate.getFullYear().toString()

    return (
        <div className="comment-item">
            <div className="comment-date">{`${day}.${month}.${year}`}</div>
            <div className="comment-content">{text}</div>
        </div>
    )
}