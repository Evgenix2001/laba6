import React from 'react'
import Post from '../Components/Post'
import NewsDate from '../data/data.json'

export default function News() {
    return (
        <div>
            <h1> News </h1>
            {NewsDate.news.map((post, index)=>{
                 return <Post id = {index} />
            })}
        </div>
    )
}
