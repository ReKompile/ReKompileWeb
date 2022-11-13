import React from "react"

function TeamList({children}) {

    const [numCols, setNumCols] = React.useState(3)

    React.useEffect(() => {
		function checkMobileMenu() {
			if (window.innerWidth < 1024) {
                setNumCols(1)
			}
            else {
                setNumCols(3)
            }
		}
		window.addEventListener('resize', checkMobileMenu)

		return () => window.removeEventListener('resize', checkMobileMenu)
	}, [numCols])


    const colFlexChildren = []
    for (let i = 0; i < numCols; i++) {
        colFlexChildren.push([])
    }
    
    React.Children.forEach(children, (child, i) => {
        colFlexChildren[i % numCols].push(child)
    })

    return (
        <>
            <div className="flex justify-center mb-10 mx-1 md:mx-10 lg:mx-20">
                {colFlexChildren.map((col, i) => (
                    <div className="inline-flex flex-col justify-center align-center basis-full" key={i}>
                        {col}
                    </div>
                ))}
            </div>
        </>
    )
}

export default TeamList
