import React from "react"

function BoolAlternator(props) {
	return (
		<div className={props.className}>
            {
                React.Children.map(props.children, (child, index) => {
                    return React.cloneElement(child, { odd: index % 2 === 0 })
                })
            }
        </div>
	)
}

export default BoolAlternator
