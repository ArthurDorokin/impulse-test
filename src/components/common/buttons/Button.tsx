import React, { type FC, useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'

interface IProps {
  name: string
  path: string
}

export const Button: FC<IProps> = ({ name, path }) => {
  const location = useLocation()

  const dispatch = useDispatch()
  const handleClick = useCallback(() => {
    dispatch({ type: 'TOGGLE_CURRENT', payload: { step: 1, isCurrent: true } })

    if (location.pathname === '/game-over' || location.pathname === '/') {
      dispatch({ type: 'RESET' })
    }
  }, [])

  return <Link className="btn" to={path} onClick={handleClick}>{name}</Link>
}
