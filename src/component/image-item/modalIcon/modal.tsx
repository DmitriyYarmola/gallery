import React from 'react'
import './modall.sass'
import { Form } from '../../form/form'
import { SubmitType } from './../../../App'
import { CommentType } from './../../../api/api'
import { CommentItem } from './comment-item/comment-Item'

type PropsType = {
    comments: Array<CommentType> | null  
    url: string | undefined
    id: number 
    setIsOpen: (initialState: boolean) => void
    onSubmit: (data: SubmitType | Record<string, any>) => void
}

export const Modal: React.FC<PropsType> = ({ url, comments, setIsOpen, onSubmit, id }) => {

    const commentsList = comments?.map(comment => {
        return (
            <CommentItem text={comment.text} date={comment.date} id={comment.id} key={comment.id}/>
        )
    })
    return (
        <div className='modal'>
            <div className="modal-window">
                <div className="modal-window_col colOne">
                    <div className="modal_img">
                        <img src={url} alt="" />
                    </div>
                    <div className="modal-comments">
                        {commentsList}
                    </div>
                </div>
                <div className="modal-window_col colTwo">
                    
                    <div className="modal-form">
                        <Form onSubmit={onSubmit} id={id} />
                    </div>
                </div>
                <div className="close-modal" onClick={() => setIsOpen(false)}>&#10007;</div>
            </div>
        </div>
    )
}