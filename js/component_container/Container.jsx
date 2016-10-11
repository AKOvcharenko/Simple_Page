import React, {Component} from 'react';
import Modal from './../component_modal/Modal.jsx'

class Container extends Component {

    constructor() {
        super();
        this.state = {
            data: []
        };
        this.insertData = this.insertData.bind(this);
        this.changeHandler = this.changeHandler.bind(this);

    }

    fetchData(url){
        return new Promise(function(resolve, reject) {
            let req = new XMLHttpRequest();
            req.open("GET", url);
            req.onload = function() {
                if (req.status === 200) {
                    resolve(req.response);
                } else {
                    reject(new Error(req.statusText));
                }
            };

            req.onerror = function() {
                reject(new Error("Network error"));
            };

            req.send();
        });
    }

    safeJSONParse(str) {
        var result;
        try {
            result = JSON.parse(str);
        } catch (e) {
            return {};
        }
        return result;
    }

    insertData(response){
        response = this.safeJSONParse(response);
        this.setState({
            data : response
        });
    }

    changeHandler(event){
        var value = event.target.value;
        var selected = this.getSelected(this.state.data, value);
        this.setState({
            selected: selected
        });
    }

    componentWillMount(){
        const insertData = this.insertData;
        this.fetchData('http://jsonplaceholder.typicode.com/posts').then(insertData);
    }

    getSelected(arr, value){
        return arr.slice().filter(el=>{return el.id === parseInt(value)})[0];
    }

    eachElem(elem, index){
        return <option key={index} value={elem.id}>{elem.id}</option>
    }

    render(){
        var data = this.state.data;
        var selected = this.state.selected;
        return data.length ?
            (<div className="wrapper">
                <div className="content">
                    <Modal selected={selected}/>
                    {selected ?
                        <article>
                            <h1>You have selected {selected.id}</h1>
                            <h2 className="text-center">{selected.title}</h2>
                            <p className="lead">{selected.body}</p>
                        </article>
                        :
                        <h1>Please select the comment</h1>}
                </div>
                <div className="context">
                    <div className="select">
                        <span>Select comment id</span>
                        <select onChange={this.changeHandler} className="form-control">
                            <option value="">--</option>
                            {data.map(this.eachElem)}
                        </select>
                    </div>
                </div>
            </div>)
        : (<div>loader</div>)
    }
}

export default Container;