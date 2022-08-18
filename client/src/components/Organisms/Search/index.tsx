import React from "react";
import SortCategories from "../../Molecules/SortCategories";
import SearchBox from "../../Molecules/SearchBox";
import LocationFilter from "../../Molecules/LocationFilter";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0.2%;

    max-width: 100%;

    @media (max-width: 900px) {
        flex-direction: column;
    }
`
const Search = () => {

    // CATEGORY DATA
    const [category, SetCategory] = React.useState<string>("");

    const Select = (e: any) => {
        SetCategory(e.key);
    }

    // LOCATION DATA
    const [data, setData] = React.useState<any[]>([]);
    React.useEffect(() => {
        axios.get('https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json')
            .then(res => {
                setData(res.data);
            })
    }, [])
    const [location, setLocation] = React.useState<string>("");
    const onSelect = (value: string) => {
        setLocation(value);
    }

    /*  const onSearch = (value: string) => {
 
         if (category !== '' && location !== '') {
             window.location.href = "/listings?category=" + category + "&location=" + location + "&search=" + value;
         }
         console.log('Fill in the search!')
     } */

    const onSearch = (value: string) => {
        if (location !== '') {
            window.location.href = `/listings?location=${location}&search=${value}`;
        }
    };

    return (
        <Container>
            {/* <SortCategories
                onClick={Select}
                category={category}
            /> */}
            <LocationFilter
                data={data}
                onSelect={onSelect}
            />
            <SearchBox
                onSearch={onSearch}
            />
        </Container>
    )
}
export default Search;