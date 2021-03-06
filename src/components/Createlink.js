import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const POST_MUTATION = gql`
mutation PostMutation($description: String!, $url: String!) {
    post(description: $description, url: $url) {
      id
      createdAt
      url
      description
    }
  }
`

export default class Createlink extends Component {
	state = {
		description: '',
		url: ''
	}

	onDescriptionChange = e => {
		this.setState({
			description: e.target.value
		})
	}

	onUrlChange = e => {
		this.setState({
			url: e.target.value
		})
	}

	render() {
		const { description, url } = this.state
		return (
			<div>
				<div className="flex flex-column mt3">
				<input
            className="mb2"
            value={description}
            onChange={this.onDescriptionChange}
            type="text"
            placeholder="A description for the link"
          />
          <input
            className="mb2"
            value={url}
            onChange={this.onUrlChange}
            type="text"
            placeholder="The URL for the link"
          />
				</div>
				<Mutation mutation={POST_MUTATION} variables={{ description, url }} onCompleted={() => this.props.history.push('/')} >
					{postMutation => (
						<button onClick={postMutation}>Submit</button>
					)}
				</Mutation>
			</div>
		)
	}
}
