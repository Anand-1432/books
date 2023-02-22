import React from 'react'
import './details.scss'

const Details = ({ data, fun }) => {

    console.log(data);

    return (
        <>
            <div className='details' onClick={fun}>
                <div className='deatailsSection' onClick={(e) => e.stopPropagation()}>


                    <div className='bookImg'>
                        <img src={data.image} alt="" />
                    </div>


                    <table>
                        <tbody>
                            <tr>
                                <td>Book Name</td>
                                <td>:</td>
                                <td> {data.name} </td>
                            </tr>
                            <tr>
                                <td>Book Publisher</td>
                                <td>:</td>
                                <td> {data.publisher} </td>
                            </tr>
                            <tr>
                                <td>Version/Edition</td>
                                <td>:</td>
                                <td> {data.version} </td>
                            </tr>
                            <tr>
                                <td>ISBN No.</td>
                                <td>:</td>
                                <td> {data.isbn} </td>
                            </tr>
                            <tr>
                                <td>Number of Pages</td>
                                <td>:</td>
                                <td> {data.pages} </td>
                            </tr>
                            <tr>
                                <td>Price</td>
                                <td>:</td>
                                <td> {data.price} </td>
                            </tr>
                        </tbody>
                    </table>


                </div>
            </div>
        </>
    )
}

export default Details