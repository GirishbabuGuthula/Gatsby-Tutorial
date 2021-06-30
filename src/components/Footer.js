import React from 'react'

const Footer = () => {
    return (
        <div className='page-footer'>
            <p>
                &copy; {new Date().getFullYear()} <span>SimplyRecipes</span>. Built with {' '} <a href="https://gatsbyjs.com">Gatsby</a>
            </p>
        </div>
    )
}

export default Footer
