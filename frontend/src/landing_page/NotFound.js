import React from 'react'

function NotFound() {
    return (
        <div className='container p-2 '>
            <div className='row text-center' >
                <h1 className='mt-4' style={{ fontSize: "24px" }}> 404 Not Found</h1>
                <p className="text-muted" style={{ fontSize: "16px" }}>Sorry the page that you are looking for does not exist.</p>

            </div>
        </div>
    );
}

export default NotFound;