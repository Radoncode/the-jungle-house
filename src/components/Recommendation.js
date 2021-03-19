const Recommendation = () => {
    const currentMonth = new Date().getMonth();
    const isSpring = currentMonth >= 2 && currentMonth <= 5

    return (isSpring ? (<div>It's spring, repot! 🌱 </div>) : null)
}

export default Recommendation;