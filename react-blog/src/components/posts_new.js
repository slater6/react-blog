import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';
import { createPost } from '../actions/index';

class PostsNew extends Component {
    static contextTypes = {
        router: PropTypes.object
    }

    onSubmit(props){
        this.props.createPost(props)
        .then(() => {
            this.context.router.push('/');
        });
    }

    render() {
        const { fields : {title, categories, content }, handleSubmit } = this.props;
        return (
            <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
                <h3>Create a New Post</h3>
                <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
                    <label htmlFor="">Title</label>
                    <input type="text" className="form-control" {...title} />
                    <span className="text-help">{title.touched ? title.error : ''}</span>
                </div>
                <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
                    <label htmlFor="">Categories</label>
                    <input type="text" className="form-control" {...categories} />
                    <span className="text-help">{categories.touched ? categories.error : ''}</span>
                </div>
                <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
                    <label htmlFor="">Categories</label>
                    <textarea className="form-control" cols="30" rows="10" {...content}></textarea>
                    <span className="text-help">{content.touched ? content.error : ''}</span>
                </div>
                <Link to="/" className="btn btn-danger">Cancel</Link>
                <button type="submit" className="btn btn-primary pull-sm-right">Create Post</button>
            </form>
        );
    }
}

function validate(values){
    const errors ={};

    if(!values.title){
        errors.title = 'Enter a username';
    }

    if(!values.categories){
        errors.categories = 'Enter a category';
    }

    if(!values.content){
        errors.content = 'Enter content';
    }

    return errors;
}

export default reduxForm({
    form: 'PostNewForm',
    fields: ['title', 'categories', 'content'],
    validate
},null, { createPost })(PostsNew);