import React from 'react'
import { SubmitType } from '../App'

export type CommentType = {
    id: number,
    text: string | null,
    date: number 
}
export type imagesList = {
    id: number,
    url: string,
    comments?: Array<CommentType>  | null 
}

export const getImages = {
    getImage: (): Promise<Array<imagesList>> => {
        return fetch('https://boiling-refuge-66454.herokuapp.com/images').then(response => response.json())
    },
    getInfoOfImage: (id: number): Promise<imagesList> => {
        return fetch(`https://boiling-refuge-66454.herokuapp.com/images/${id}`).then(response => response.json())
    },
    addCommentForImage: async (id: number, data: SubmitType | Record<string, any>) => {
        const response = await fetch(`https://boiling-refuge-66454.herokuapp.com/images/${id}/comments`, {
            method: 'POST',
            credentials: 'same-origin',
            cache: 'no-cache',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        console.log(response)
    }
}