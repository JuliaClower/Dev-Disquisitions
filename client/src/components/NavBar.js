import React, { Component } from 'react'
import { Link } from 'react-router-dom'


const languages = [
    {
        name: "CSS",
        topics: [
            {
                topicName: "FlexBox"
            },
            {
                topicName: "Grid"
            },
            {
                topicName: "Float"
            },
            {
                topicName: "Forms"
            }
        ]
    },
    {
        name: "JavaScript",
        topics: [
            {
                topicName: "For Loops",
            },
        ]
    }
]

export default class NavBar extends Component {
    render() {
        const allLanguages = languages.map((languages, index) => {
            return (
                <div>
                    <p key={index}>{languages.name}</p>
                    {
                        languages.topics.map((topic) => {
                            return (<Link style={{ textDecoration: 'none', color: 'white' }} to={`/${topic._id}`}><div>{topic.topicName}</div></Link>)
                        })
                    }
                </div>
            )
        })

        return (
            <div className="nav-bar">
                <h1>ThisTheNavBar</h1>
                {allLanguages}
            </div>
        )
    }
}