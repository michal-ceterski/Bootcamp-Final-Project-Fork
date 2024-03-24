import React from "react";
import roomdata from './RoomData.js'

const RoomDescription = () => {
    return (
        <>
            {roomdata.map((room) => {
                return (
                    <React.Fragment key={room.id}>
                        <img src={room.url}/>
                        <h1 className="abcde">{room.pokoj}</h1>
                        <h2>{room.opis_pokoju}</h2>
                        <h2>{room.cena}</h2>
                    </React.Fragment>
                )
            })
            }
        </>
    );
}

export default RoomDescription;