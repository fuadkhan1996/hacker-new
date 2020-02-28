import React from 'react'
import { Card, Container } from 'react-bootstrap'
import Pluralize from 'react-pluralize'

const DisplayRecords = ({ data }) => {
  return (
    <Container className="bg-light">
    <div className=" p-3 mb-5">
      <ol>
        { data.map(newsFeed => (
          <li key={ newsFeed.id }>
            <Card text="black" className=" bg-light border-0">
              <p className="font-weight-bold  p-1">{ newsFeed.title }
                <small className="text-muted">
                  { newsFeed.domain && `(${ newsFeed.domain })` }
                </small>
                <br/>

                <small className="text-muted">
                  { newsFeed.points && <Pluralize singular={'point'} count = { newsFeed.points }/> }
                  { newsFeed.user &&  ` by ${ newsFeed.user } ` }
                  { newsFeed.time_ago }
                </small>
              </p>
            </Card>
          </li>
        ))}
      </ol>
      </div>
    </Container>
  )
}

export default DisplayRecords
