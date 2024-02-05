let CurrentTime = () => {
    let time = new Date();
    return <p>This is current time {time.toLocaleDateString()}-{""} {time.toTimeString()}</p>
};
export default CurrentTime;