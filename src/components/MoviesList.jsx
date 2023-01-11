import React from 'react'
import { Row } from 'react-bootstrap'
import CardMovie from './CardMovie'
import Pagination from './Pagination'

function MoviesList({ searched,getPage,pageCount }) {
  return (
    <Row className="mt-3">
      {searched.length >= 1 ? (searched.map((mov) => {
        return (<CardMovie key={mov.id} mov={mov} />)
      })) : <h2 className="text-center p-5">لا يوجد افلام...</h2>}

      <Pagination 
        getPage = { getPage }
        pageCount = { pageCount }
      />

    </Row>
  )
}

export default MoviesList
