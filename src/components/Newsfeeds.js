import React, { Fragment } from 'react'
import { Card } from 'react-bootstrap'

const Newsfeeds = ({data}) =>  {
    return (
      <Fragment>
        { data.map(newsFeed => (
            <div key = { newsFeed.id } className="bg-dark shadow-lg p-3 mb-5 rounded">
              <Card bg="light" text="black">
                <Card.Header className="font-weight-bold">{ newsFeed.title }
                  <span className="font-italic float-right">{ newsFeed.time_ago }</span>
                </Card.Header>

                <Card.Body>
                  <Card.Title>Username: { newsFeed.user }</Card.Title>
                  <Card.Text>Points: { newsFeed.points }, Comments Count: { newsFeed.comments_count } </Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))
        }
      </Fragment>
    )
}

export default Newsfeeds
