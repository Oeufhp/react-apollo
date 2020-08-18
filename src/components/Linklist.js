import React, { PureComponent } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Link from './Link'

const FEED_QUERY = gql`
  {
    feed {
      links {
        id
        createdAt
        url
        description
        postedBy {
          id
          name
        }
        votes {
          id
          user {
            id
          }
        }
      }
    }
  }
`

export default class Linklist extends PureComponent {

	_updateCacheAfterVote = (store, createdVote, linkId) => {
		const data = store.readQuery({ query: FEED_QUERY })
		
		const votedLink = data.feed.links.find(link => link.id === linkId)
		votedLink.votes = createdVote.link.votes

		store.writeQuery({ query: FEED_QUERY, data })
	}

  render() {
    return (
      <Query query={FEED_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>loading...</div>
          if (error) return <div>Error!</div>
          const linklist = data.feed.links
          return (
            <div>
              {linklist.map((link, index) => (
                <Link key={link.id} link={link} index={index} />
              ))}
            </div>
          )
        }}
      </Query>
    )
  }
}
