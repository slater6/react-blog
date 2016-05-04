import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';

class PostsNew extends Component {

    render() {
        const { fields : {title, categories, content }, handleSubmit } = this.props;
        return (
            <form onSubmit={ handleSubmit }>
                <h3>Create a New Post</h3>
                <div className="form-group">
                    <label htmlFor="">Title</label>
                    <input type="text" className="form-control" {...title} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Categories</label>
                    <input type="text" className="form-control" {...categories} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Categories</label>
                    <textarea className="form-control" cols="30" rows="10" {...content}></textarea>
                </div>
                <Link to="/" className="btn btn-danger">Cancel</Link>
                <button type="submit" className="btn btn-primary pull-sm-right">Create Post</button>

            </form>

        );
    }
}

export default reduxForm({
    form: 'PostNewForm',
    fields: ['title', 'categories', 'content']
})(PostsNew);