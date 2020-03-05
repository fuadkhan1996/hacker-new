import React from 'react'
import { Card, Row } from 'react-bootstrap'
import Pluralize from 'react-pluralize'

const DisplayRecords = ({ data }) => {
  return (
    <Row className="justify-content-center">
      <div className="col-md-6 bg-light">
        <div className=" p-3 mb-5">
          <ol>
            { data.map(newsFeed => (
              <li key={ newsFeed.id }>
                <Card text="black" className=" border-0 bg-light">
                  <p className="font-weight-bold  p-1">
                    <a className="text-dark" href={newsFeed.url ? newsFeed.url : '#'}>{ newsFeed.title }</a>

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
      </div>
    </Row>
  )
}

export default DisplayRecords
