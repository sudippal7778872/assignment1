import React from 'react'

const Table = ({ Country, Flag, Currency, Population }) => {
    return (
        <div>
                <tbody>
                <tr>
                    <td>{Country}</td>
                    <td>{Flag}</td>
                    <td>{Currency}</td>
                    <td>{Population}</td>
                </tr>
                </tbody>


        </div>
    )
}

export default Table