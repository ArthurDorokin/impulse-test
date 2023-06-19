import React, { type FC } from 'react'
import { Button } from '../buttons'
import { ReactComponent as HandIcon } from '../../../assets/img/hand.svg'

interface IProps {
  background: boolean
  title: string
  name: string
  label: string
  route: string
}

export const ToGameView: FC<IProps> = ({ background, title, name, label, route }) => {
  return (
        <div className={`bg ${background ? 'active' : 'none'}`}>
            <div className={'wrapper'}>
                <div className={'blockLeft'}>
                   <HandIcon />
                </div>
                <div className={'blockRight'}>
                    {!(label === '') && <span>{label}</span>}
                    <h1>{title}</h1>
                    <Button name={name} path={route} />
                </div>
            </div>
        </div>
  )
}
