import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions/index';
import { Link } from 'react-router';

class PostsShow extends Component{
    componentWillMount() {
        this.props.fetchPost(this.props.params.id);
    }

    render(){
        if(!this.props.post){
            return <div>Loading...</div>;
        }
        return (
            <article>
                <Link to="/" className="btn btn-warning">Back</Link>
                <h1>{this.props.post.title}</h1>
                <h6> Categories : {this.props.post.categories}</h6>
                <p>
                    {this.props.post.content}
                </p>
            </article>
        )
    }
}

function mapStateToProps(state){
    return { post : state.posts.post };
}

export default connect(mapStateToProps, { fetchPost })(PostsShow);