import React from 'react'
import { useForm } from "react-hook-form"
import { SubmitType } from './../../App'

type PropsType = {
    id: number | null
    onSubmit: (data: SubmitType | Record<string, any> ) => void
}
export const Form: React.FC<PropsType> = ({ onSubmit, id }) => {
    /* ===UseForm=== */
    const { register, handleSubmit } = useForm()

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" name="name" ref={register} placeholder="Your name" />
            <input type="text" name="comment" ref={register} placeholder="Your comment" />
            <button>Оставить комментарий</button>
        </form>
    )
}