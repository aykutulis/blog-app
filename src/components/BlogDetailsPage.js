import React from 'react'
import { connect } from 'react-redux'
import BlogDetailsItem from './BlogDetailsItem'

const BlogDetailsPage = ({ blog }) => {
    return (

        <BlogDetailsItem {...blog} />
    )
}

const mapStateToProps = (state, props) => {
    return {
        blog: state.blogs.find(blog => {
            return blog.id === props.match.params.id
        })
    }
}

export default connect(mapStateToProps)(BlogDetailsPage);
