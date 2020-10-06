import React from 'react'

const NewsList = (props) => {
    const output = props.newsValue.map((item) =>{
        return (
            <div key={item.id}>
                <h2>{item.title}</h2>
                <div>{item.feed}</div>
            </div>
        )
    })
    return (
        <div>{output}</div>
    )
}

export default NewsList