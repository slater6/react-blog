import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts, deletePost } from '../actions/index';
import { Link } from 'react-router';

class PostsIndex extends Component {
    componentWillMount() {
        this.props.fetchPosts();
    }

    onDeleteClick(id){
        this.props.deletePost(id).then(
            () =>  this.props.fetchPosts()
        );

    }

    renderPosts(){
        return this.props.posts.map((post) => {
            return (
                <li className="list-group-item" key={post.id}>
                    <button className="btn btn-danger" onClick={this.onDeleteClick.bind(this,post.id)}>Delete</button>
                    <span className="pull-sm-right">{post.categories}</span>
                    <Link to={ `/posts/${post.id}`} className="btn btn-link">
                        <strong>{post.title}</strong>
                    </Link>
                </li>
            )
        })
    }

    render() {
        return (
            <div>
                <div className="text-sm-right">
                    <Link to="/posts/new" className="btn btn-primary">Add a Post</Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-group">
                    { this.renderPosts() }
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state){
    return { posts : state.posts.all };
}

export default connect(mapStateToProps, { fetchPosts, deletePost })(PostsIndex);