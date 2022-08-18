import React from "react";
import { Select } from 'antd';
import FilterInput from "../../Atoms/FilterInput/index";
import Location from "../../Atoms/Location";
const img = require('../../../assets/location.png')

interface Props {
    data: any[];
    onSelect: (value: string) => void;
}

const LocationFilter = (props: Props) => {

    const locations = props.data.map(item => {
        return {
            value: item.name + ", " + item.country,     // No subcountry for now
        }
    });

    return (

        <FilterInput
            content={
                <Location
                    onSelect={props.onSelect}
                    data={locations}
                />
            }
            logo={
                <img
                    src={img}
                    width={23}
                    height={30}
                />
            }
        />
    )
}

export default LocationFilter;