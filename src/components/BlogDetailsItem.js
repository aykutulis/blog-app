import React from 'react'

const BlogDetailsItem = ({ id, title, description }) => {
    return (
        <div>
            <p>Blog id: {id}</p>
            <p>Blog title: {title}</p>
            <p>Blog description: {description}</p>
        </div>
    )
}

export default BlogDetailsItem
