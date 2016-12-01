import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import QuestionList from './quiz/QuestionList.jsx';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            questions: [
                {
                    id:1,
                    text: 'What is your name?',
                    choices: [
                        {
                            id: 'a',
                            text: 'Michael'
                        },
                        {
                            id: 'b',
                            text: 'Tom'
                        },
                        {
                            id: 'c',
                            text: 'Susan'
                        }
                    ],
                    correct: 'b'
                },
                {
                    id:2,
                    text: 'What is your mothers name?',
                    choices: [
                        {
                            id: 'a',
                            text: 'Bilie'
                        },
                        {
                            id: 'b',
                            text: 'Jane'
                        },
                        {
                            id: 'c',
                            text: 'Susan'
                        }
                    ],
                    correct: 'c'
                },
                {
                    id:3,
                    text: 'What is your fathers name?',
                    choices: [
                        {
                            id: 'a',
                            text: 'Michael'
                        },
                        {
                            id: 'b',
                            text: 'Tom'
                        },
                        {
                            id: 'c',
                            text: 'John'
                        }
                    ],
                    correct: 'a'
                },
                {
                    id:4,
                    text: 'What is your dog name?',
                    choices: [
                        {
                            id: 'a',
                            text: 'Fido'
                        },
                        {
                            id: 'b',
                            text: 'Willie'
                        },
                        {
                            id: 'c',
                            text: 'Bully'
                        }
                    ],
                    correct: 'a'
                }
            ],
            score: 0,
            current: 1
        }
    }
    render(){
        return(
            <div>
                <QuestionList {...this.state} />
            </div>
        )
    }
}

export default App