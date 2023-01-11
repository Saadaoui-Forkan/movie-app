import React from 'react'
import { Row } from 'react-bootstrap'
import CardMovie from './CardMovie'

function MoviesList({ searched }) {
  return (
    <Row className="mt-3">
      {searched.length >= 1 ? (searched.map((mov) => {
        return (<CardMovie key={mov.id} mov={mov} />)
      })) : <h2 className="text-center p-5">لا يوجد افلام...</h2>}

    </Row>
  )
}

export default MoviesList
