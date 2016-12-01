import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Profile from './github/Profile.jsx';
import Search from './github/Search.jsx';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: 'cybergit66',
            userData: [],
            userRepos: [],
            perPage: 5
        }
    }
    
    // Get user data from github
    getUserData(){
        $.ajax({
            url: 'https://api.github.com/users/' + this.state.username + '?client_id=' + this.props.clientId + '&client_secret=' + this.props.clientSecret,
            dataType: 'json', 
            cache: false,
            success: function(data){
                this.setState({userData: data})
                
            }.bind(this),
            error: function(xhr, status, err){
                this.setState({username: null});
                alert(err);
            }.bind(this)
        });
    }
    
    // Get user repos from github
    getUserRepos(){
        $.ajax({
            url: 'https://api.github.com/users/' + this.state.username + '/repos?/per_page=' + this.state.perPage + '&client_id=' + this.props.clientId + '&client_secret=' + this.props.clientSecret + '&sort=created',
            dataType: 'json', 
            cache: false,
            success: function(data){
                this.setState({userRepos: data})
            }.bind(this),
            error: function(xhr, status, err){
                this.setState({username: null});
                alert(err);
            }.bind(this)
        });
    }
    
    handleFormSubmit(username){
        this.setState({username: username}, function(){
            this.getUserData();
            this.getUserRepos();
        })
    }
    
    componentDidMount(){
        this.getUserData();
        this.getUserRepos();
    }
    
    render(){
        return(
            <div>
                <Search onFormSubmit = {this.handleFormSubmit.bind(this)}/><br />
                <Profile {...this.state} />
            </div>
        )
    }
}

App.propTypes = {
    clientId: React.PropTypes.string,
    clientSecret: React.PropTypes.string
};

App.defaultProps = {
    clientId: 'e4b44c309cdedc2befc4',
    clientSecret: 'b8d49c75cfb6a0c1b73d607a22e848caa63515c3'
}

export default App