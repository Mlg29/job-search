import React from "react"
import JobItem from "./JobItem"


const Result = ({results}) => {

    console.log("res", results.data)
    return (
        <div className="search-results">
            
            {
                results.data && results.data.map((job, index) => (
                    <JobItem key={job.id} {...job} index={index} />
                ))
            }
        </div>
    )
}

export default Result