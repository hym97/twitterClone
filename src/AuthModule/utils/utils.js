function getChildVal(val, name) {
    console.log(val)
    this.setState({[name]: val})
}

export {getChildVal}