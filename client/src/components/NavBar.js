import React, { Component } from 'react'

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
        const allLanguages = languages.map((languages, index) =>  {
            return (
                <div>
                    <p key={index}>{languages.name}</p>
                    {
                        languages.topics.map((topic) => {
                        return (<div>{topic.topicName}</div>)
                    })
                    }
                </div>
            )
        })
 
        return(
            <div>
                <h1>ThisTheNavBar</h1>
                {allLanguages}
            </div>
        )
    }
}